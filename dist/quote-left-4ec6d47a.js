import { inject, openBlock, createBlock } from "vue";
import { _ as _sfc_main$1 } from "./main-b816192a.js";
const _sfc_main = {
  __name: "quote-left",
  setup(__props) {
    const Mk = inject("BeginEditTool");
    const quote = () => {
      if (Mk.getSelectionIndex().isSelection) {
        Mk.aroundInsert("`", "`");
        return;
      }
      let SelectionIndex = Mk.Element.selectionEnd;
      let previous = Mk.getValue.substring(SelectionIndex - 1, SelectionIndex);
      if (previous == "\n" || previous == "\r") {
        Mk.centreInsert("> ", true);
      } else {
        Mk.centreInsert("\n> ", true);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        icon: "icon-quote",
        name: "引用",
        onTitleClick: quote
      });
    };
  }
};
export {
  _sfc_main as default
};
