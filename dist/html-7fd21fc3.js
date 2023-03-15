import { inject, openBlock, createBlock } from "vue";
import { _ as _sfc_main$1 } from "./main-b816192a.js";
const html_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "html",
  setup(__props) {
    inject("BeginEditTool");
    const ShowCode = inject("BeginEditRenderShow");
    const Show = () => {
      ShowCode.value = !ShowCode.value;
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        icon: "icon-html",
        name: "HTML源代码",
        onTitleClick: Show
      });
    };
  }
};
export {
  _sfc_main as default
};
