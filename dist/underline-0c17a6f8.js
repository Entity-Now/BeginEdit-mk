import { inject, openBlock, createBlock } from "vue";
import { _ as _sfc_main$1 } from "./main-b816192a.js";
const _sfc_main = {
  __name: "underline",
  setup(__props) {
    const Mk = inject("BeginEditTool");
    const underline = () => {
      Mk.aroundInsert("~~", "~~");
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        icon: "icon-zitixiahuaxian",
        name: "下划线",
        onTitleClick: underline
      });
    };
  }
};
export {
  _sfc_main as default
};
