import { ref, inject, openBlock, createBlock, withCtx, createElementVNode, createElementBlock, Fragment, renderList, toDisplayString, pushScopeId, popScopeId } from "vue";
import { _ as _sfc_main$1, e as emoji$1 } from "./main-0d28ca6c.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const emoji_vue_vue_type_style_index_0_scoped_dc9cd938_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-dc9cd938"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "container" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", { class: "title" }, "表情", -1));
const _hoisted_3 = { class: "emoji" };
const _hoisted_4 = ["onClick"];
const _sfc_main = {
  __name: "emoji",
  setup(__props) {
    const IsShow = ref(false);
    const EmojiList = ref([]);
    const Mk = inject("BeginEditTool");
    const Emoji = () => {
      IsShow.value = !IsShow.value;
      if (EmojiList.value.length <= 0)
        for (let item in emoji$1) {
          EmojiList.value.push(emoji$1[item]);
        }
    };
    const Selector = (item) => {
      IsShow.value = !IsShow.value;
      Mk.centreInsert(item, true);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        icon: "icon-emoji",
        name: "表情",
        "is-show-modal": IsShow.value,
        "onUpdate:isShowModal": _cache[0] || (_cache[0] = ($event) => IsShow.value = $event),
        onTitleClick: Emoji
      }, {
        content: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            _hoisted_2,
            createElementVNode("div", _hoisted_3, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(EmojiList.value, (item) => {
                return openBlock(), createElementBlock("div", {
                  class: "emojiItem",
                  onClick: ($event) => Selector(item)
                }, toDisplayString(item), 9, _hoisted_4);
              }), 256))
            ])
          ])
        ]),
        _: 1
      }, 8, ["is-show-modal"]);
    };
  }
};
const emoji = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dc9cd938"]]);
export {
  emoji as default
};
