import { openBlock, createBlock, withCtx, createTextVNode } from "vue";
import { _ as _sfc_main$1 } from "./main-b816192a.js";
const video_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "video",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        icon: "icon-shipin",
        name: "视频"
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
