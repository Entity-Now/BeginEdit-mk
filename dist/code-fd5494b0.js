import { ref, inject, openBlock, createBlock, withCtx, createElementVNode, createElementBlock, Fragment, renderList, toDisplayString } from "vue";
import "./ItemList-04c5f065.js";
import { L as Languages, _ as _sfc_main$1 } from "./main-0d28ca6c.js";
const _hoisted_1 = { class: "BeginEdit_ItemList" };
const _hoisted_2 = ["onClick"];
const _sfc_main = {
  __name: "code",
  setup(__props) {
    const IsShow = ref(false);
    const Mk = inject("BeginEditTool");
    const SustainLanguages = ref([...Languages.list]);
    const codeShow = () => {
      IsShow.value = !IsShow.value;
    };
    const insert = (item) => {
      IsShow.value = !IsShow.value;
      let SelectionIndex = Mk.Element.selectionEnd;
      let previous = Mk.getValue.substring(SelectionIndex - 1, SelectionIndex);
      if (previous == "\n" || previous == "\r") {
        SustainLanguages.value.forEach((i) => {
          if (i != item) {
            Mk.IsRepeat(`\`\`\`${i}
`, "\n```", true);
          }
        });
        Mk.aroundInsert(`\`\`\`${item}
`, "\n```");
      } else {
        SustainLanguages.value.forEach((i) => {
          if (i != item) {
            Mk.IsRepeat(`
\`\`\`${i}
`, "\n```", true);
          }
        });
        Mk.aroundInsert(`
\`\`\`${item}
`, "\n```");
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        icon: "icon-daimawenjian",
        name: "代码块",
        isShowModal: IsShow.value,
        "onUpdate:isShowModal": _cache[0] || (_cache[0] = ($event) => IsShow.value = $event),
        onTitleClick: codeShow
      }, {
        content: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(SustainLanguages.value, (item) => {
              return openBlock(), createElementBlock("div", {
                class: "item",
                onClick: ($event) => insert(item)
              }, toDisplayString(item), 9, _hoisted_2);
            }), 256))
          ])
        ]),
        _: 1
      }, 8, ["isShowModal"]);
    };
  }
};
export {
  _sfc_main as default
};
