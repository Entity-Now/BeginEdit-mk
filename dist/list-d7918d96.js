import { ref, inject, openBlock, createBlock, withCtx, createElementVNode } from "vue";
import "./ItemList-04c5f065.js";
import { _ as _sfc_main$1 } from "./main-b816192a.js";
const _sfc_main = {
  __name: "list",
  setup(__props) {
    const IsShow = ref(false);
    const Mk = inject("BeginEditTool");
    const Insert = (item) => {
      IsShow.value = !IsShow.value;
      if (Mk.IsRepeat(item, "", true) == false) {
        Mk.insert(`${item}`);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, null, {
        title: withCtx(() => [
          createElementVNode("i", {
            class: "MarkDownIcon icon-liebiao",
            onClick: _cache[0] || (_cache[0] = ($event) => Insert("- ")),
            title: "无序列表"
          }),
          createElementVNode("i", {
            class: "MarkDownIcon icon-youxuliebiao",
            onClick: _cache[1] || (_cache[1] = ($event) => Insert("1. ")),
            title: "无序列表"
          })
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
