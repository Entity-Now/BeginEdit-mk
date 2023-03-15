import { ref, inject, openBlock, createBlock, withCtx, createElementVNode, withDirectives, normalizeClass, vModelText, pushScopeId, popScopeId } from "vue";
import { _ as _sfc_main$1 } from "./main-0d28ca6c.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const input = "";
const button = "";
const link_vue_vue_type_style_index_0_scoped_c3e951b2_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-c3e951b2"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "linkInput" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", null, "链接地址", -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", null, "链接的描述内容（可为空）", -1));
const _sfc_main = {
  __name: "link",
  setup(__props) {
    const Link = ref("");
    const Describe = ref("");
    const isShow = ref(false);
    const InputNull = ref(false);
    const Mk = inject("BeginEditTool");
    const linkBar = () => {
      isShow.value = !isShow.value;
    };
    const addLink = () => {
      if (Link.value.length <= 0) {
        InputNull.value = true;
        setTimeout(() => {
          InputNull.value = false;
        }, 300);
        return;
      }
      if (Describe.value == "" || Describe.value === void 0) {
        Describe.value = Link.value;
      }
      let str = `[${Describe.value}](${Link.value})`;
      Mk.centreInsert(str, true);
      isShow.value = !isShow.value;
      Link.value = "";
      Describe.value = "";
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        icon: "icon-lianjie",
        name: "链接",
        "is-show-modal": isShow.value,
        "onUpdate:isShowModal": _cache[2] || (_cache[2] = ($event) => isShow.value = $event),
        onTitleClick: linkBar
      }, {
        content: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            _hoisted_2,
            withDirectives(createElementVNode("input", {
              class: normalizeClass(InputNull.value ? "error" : ""),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => Link.value = $event),
              placeholder: "请输入链接",
              type: "text"
            }, null, 2), [
              [vModelText, Link.value]
            ]),
            _hoisted_3,
            withDirectives(createElementVNode("input", {
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => Describe.value = $event),
              type: "text",
              placeholder: "请输入内容"
            }, null, 512), [
              [vModelText, Describe.value]
            ]),
            createElementVNode("button", {
              type: "button",
              onClick: addLink
            }, "添加")
          ])
        ]),
        _: 1
      }, 8, ["is-show-modal"]);
    };
  }
};
const link = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c3e951b2"]]);
export {
  link as default
};
