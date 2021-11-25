import { VBtn, VCard, VCardActions, VCardText, VDialog, VIcon, VSpacer, VToolbar, VToolbarTitle } from 'vuetify/lib';
import { createBlock, createCommentVNode, createElementBlock, createTextVNode, createVNode, openBlock, resolveComponent, toDisplayString, withCtx, withKeys } from 'vue';

var Confirm = {
  components: {
    VCard: VCard,
    VCardActions: VCardActions,
    VCardText: VCardText,
    VDialog: VDialog,
    VIcon: VIcon,
    VToolbar: VToolbar,
    VToolbarTitle: VToolbarTitle,
    VSpacer: VSpacer,
    VBtn: VBtn
  },
  props: {
    buttonTrueText: {
      type: String,
      default: 'Confirm'
    },
    buttonFalseText: {
      type: String,
      default: 'Cancel'
    },
    buttonTrueColor: {
      type: String,
      default: 'primary'
    },
    buttonFalseColor: {
      type: String,
      default: 'primary'
    },
    buttonFalseFlat: {
      type: Boolean,
      default: true
    },
    buttonTrueFlat: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: 'warning'
    },
    icon: {
      type: String,
      default: function default$1() {
        return this.$vuetify.icons.values.warning;
      }
    },
    message: {
      type: String,
      required: true
    },
    persistent: Boolean,
    title: {
      type: String
    },
    width: {
      type: Number,
      default: 400
    }
  },
  data: function data() {
    return {
      value: false
    };
  },
  mounted: function mounted() {
    document.addEventListener('keyup', this.onEnterPressed);
  },
  destroyed: function destroyed() {
    document.removeEventListener('keyup', this.onEnterPressed);
  },
  methods: {
    onEnterPressed: function onEnterPressed(e) {
      if (e.keyCode === 13) {
        e.stopPropagation();
        this.choose(true);
      }
    },
    choose: function choose(value) {
      this.$emit('result', value);
      this.value = value;
      this.$destroy();
    },
    change: function change(res) {
      this.$destroy();
    }
  }
};

var _hoisted_1 = {
  key: 0,
  class: "d-flex align-center justify-center",
  style: { "position": "relative" }
};
var _hoisted_2 = ["textContent"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_avatar = resolveComponent("v-avatar");
  var _component_v_icon = resolveComponent("v-icon");
  var _component_v_card_title = resolveComponent("v-card-title");
  var _component_v_card_text = resolveComponent("v-card-text");
  var _component_v_spacer = resolveComponent("v-spacer");
  var _component_v_btn = resolveComponent("v-btn");
  var _component_v_card_actions = resolveComponent("v-card-actions");
  var _component_v_card = resolveComponent("v-card");
  var _component_v_dialog = resolveComponent("v-dialog");

  return openBlock(), createBlock(_component_v_dialog, {
    eager: "",
    onInput: $options.change,
    value: "true",
    "max-width": $props.width,
    persistent: $props.persistent,
    onKeydown: _cache[2] || (_cache[2] = withKeys(function ($event) { return $options.choose(false); }, ["esc"]))
  }, {
    default: withCtx(function () { return [createVNode(_component_v_card, null, {
      default: withCtx(function () { return [createVNode(_component_v_card_title, { class: "flex-column px-6 pt-6 pb-4" }, {
        default: withCtx(function () { return [$props.icon ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(_component_v_avatar, {
          style: { "opacity": "0.2" },
          color: $props.color,
          size: 32
        }, null, 8 /* PROPS */, ["color"]), createVNode(_component_v_icon, {
          style: { "position": "absolute" },
          color: $props.color,
          size: 24
        }, {
          default: withCtx(function () { return [createTextVNode(toDisplayString($props.icon), 1 /* TEXT */)]; }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["color"])])) : createCommentVNode("v-if", true), $props.title ? (openBlock(), createElementBlock("h5", {
          key: 1,
          class: "text-h5 mt-3",
          textContent: toDisplayString($props.title)
        }, null, 8 /* PROPS */, _hoisted_2)) : createCommentVNode("v-if", true)]; }),
        _: 1 /* STABLE */
      }), createVNode(_component_v_card_text, {
        class: "px-6 pb-4",
        innerHTML: $props.message
      }, null, 8 /* PROPS */, ["innerHTML"]), createVNode(_component_v_card_actions, { class: "px-6 pb-7" }, {
        default: withCtx(function () { return [createVNode(_component_v_spacer), $props.buttonFalseText ? (openBlock(), createBlock(_component_v_btn, {
          key: 0,
          color: $props.buttonFalseColor,
          text: $props.buttonFalseFlat,
          onClick: _cache[0] || (_cache[0] = function ($event) { return $options.choose(false); })
        }, {
          default: withCtx(function () { return [createTextVNode(toDisplayString($props.buttonFalseText), 1 /* TEXT */)]; }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["color", "text"])) : createCommentVNode("v-if", true), $props.buttonTrueText ? (openBlock(), createBlock(_component_v_btn, {
          key: 1,
          color: $props.buttonTrueColor,
          text: $props.buttonTrueFlat,
          onClick: _cache[1] || (_cache[1] = function ($event) { return $options.choose(true); })
        }, {
          default: withCtx(function () { return [createTextVNode(toDisplayString($props.buttonTrueText), 1 /* TEXT */)]; }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["color", "text"])) : createCommentVNode("v-if", true)]; }),
        _: 1 /* STABLE */
      })]; }),
      _: 1 /* STABLE */
    })]; }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onInput", "max-width", "persistent"]);
}

Confirm.render = render;
Confirm.__file = "src/Confirm.vue";

function Install(Vue, options) {
  if ( options === void 0 ) options = {};

  var property = options.property || '$confirm';
  delete options.property;
  var vuetify = options.vuetify;
  delete options.vuetify;
  if (!vuetify) {
    console.warn('Module vuetify-confirm needs vuetify instance. Use Vue.use(VuetifyConfirm, { vuetify })');
  }
  var Ctor = Vue.extend(Object.assign({ vuetify: vuetify }, Confirm));
  function createDialogCmp(options) {
    var container = document.querySelector('[data-app=true]') || document.body;
    return new Promise(function (resolve) {
      var cmp = new Ctor(Object.assign({}, {
        propsData: Object.assign({}, Vue.prototype[property].options, options),
        destroyed: function () {
          container.removeChild(cmp.$el);
          resolve(cmp.value);
        }
      }));
      container.appendChild(cmp.$mount().$el);
    });
  }

  function show(message, options) {
    if ( options === void 0 ) options = {};

    options.message = message;
    return createDialogCmp(options);
  }

  Vue.prototype[property] = show;
  Vue.prototype[property].options = options || {};
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Install);
}

export default Install;
