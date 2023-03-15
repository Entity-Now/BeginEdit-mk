import { ref, inject, openBlock, createBlock, withCtx, createElementVNode, createElementBlock, Fragment, renderList, toDisplayString } from "vue";
import "./ItemList-04c5f065.js";
import { _ as _sfc_main$1 } from "./main-0d28ca6c.js";
const _hoisted_1 = { class: "BeginEdit_ItemList" };
const _hoisted_2 = ["onClick"];
const _sfc_main = {
  __name: "header",
  setup(__props) {
    const IsShow = ref(false);
    const Mk = inject("BeginEditTool");
    const HeaderList = ref([
      { title: "H1", value: "# " },
      { title: "H2", value: "## " },
      { title: "H3", value: "### " },
      { title: "H4", value: "#### " },
      { title: "H5", value: "##### " },
      { title: "H6", value: "###### " }
    ]);
    const Show = () => {
      IsShow.value = !IsShow.value;
    };
    const insert = (item) => {
      IsShow.value = !IsShow.value;
      Mk.insert(`${item}`);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        icon: "icon-zitidaxiao",
        name: "标题",
        isShowModal: IsShow.value,
        "onUpdate:isShowModal": _cache[0] || (_cache[0] = ($event) => IsShow.value = $event),
        onTitleClick: Show
      }, {
        content: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(HeaderList.value, (item) => {
              return openBlock(), createElementBlock("div", {
                class: "item",
                onClick: ($event) => insert(item.value)
              }, toDisplayString(item.title), 9, _hoisted_2);
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
