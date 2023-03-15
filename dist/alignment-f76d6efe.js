import { inject, openBlock, createBlock, withCtx, createElementVNode, createTextVNode } from "vue";
import { _ as _sfc_main$1 } from "./main-b816192a.js";
const _sfc_main = {
  __name: "alignment",
  setup(__props) {
    const AlignList = ["::: BeginEdit-left", "::: BeginEdit-center", "::: BeginEdit-right"];
    const Mk = inject("BeginEditTool");
    const Insert = (type) => {
      let typeStr = AlignList[type];
      let SelectionIndex = Mk.Element.selectionEnd;
      let previous = Mk.getValue.substring(SelectionIndex - 1, SelectionIndex);
      if (previous == "\n" || previous == "\r") {
        AlignList.forEach((i) => {
          if (i != typeStr) {
            Mk.IsRepeat(`${i}
`, "\n:::", true);
          }
        });
        Mk.aroundInsert(`${typeStr}
`, "\n:::");
      } else {
        AlignList.forEach((i) => {
          if (i != typeStr) {
            Mk.IsRepeat(`
${i}
`, "\n:::", true);
          }
        });
        Mk.aroundInsert(`
${typeStr}
`, `
:::`);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, null, {
        title: withCtx(() => [
          createElementVNode("i", {
            class: "MarkDownIcon icon-zuoyouduiqi",
            onClick: _cache[0] || (_cache[0] = ($event) => Insert(0)),
            title: "靠左"
          }),
          createElementVNode("i", {
            class: "MarkDownIcon icon-zuoyouduiqi",
            onClick: _cache[1] || (_cache[1] = ($event) => Insert(1)),
            title: "居中"
          }),
          createElementVNode("i", {
            class: "MarkDownIcon icon-zuoyouduiqi",
            onClick: _cache[2] || (_cache[2] = ($event) => Insert(2)),
            title: "靠右"
          })
        ]),
        content: withCtx(() => [
          createTextVNode(" 鼠标悬浮后才会显示的内容 ")
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
