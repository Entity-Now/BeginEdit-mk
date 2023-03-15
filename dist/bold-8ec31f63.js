import { inject, openBlock, createBlock, withCtx, createTextVNode } from "vue";
import { _ as _sfc_main$1 } from "./main-b816192a.js";
const bold_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "bold",
  setup(__props) {
    const Mk = inject("BeginEditTool");
    const Bold = () => {
      Mk.aroundInsert("**", "**");
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        icon: "icon-jiacu",
        name: "粗体",
        onTitleClick: Bold
      }, {
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
