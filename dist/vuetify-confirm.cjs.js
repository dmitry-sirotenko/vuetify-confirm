'use strict';

var lib = require('vuetify/lib');

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
  components: {
    VCard: lib.VCard,
    VCardTitle: lib.VCardTitle,
    VAvatar: lib.VAvatar,
    VCardActions: lib.VCardActions,
    VCardText: lib.VCardText,
    VDialog: lib.VDialog,
    VIcon: lib.VIcon,
    VSpacer: lib.VSpacer,
    VBtn: lib.VBtn
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
    avatarColor: {
      type: String,
      default: 'orange lighten-5'
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

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("v-dialog", {
    attrs: {
      value: "true",
      "max-width": _vm.width,
      persistent: _vm.persistent,
      eager: ""
    },
    on: {
      input: _vm.change,
      keydown: function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
          return null;
        }
        return _vm.choose(false);
      }
    }
  }, [_c("v-card", [_c("v-card-title", { staticClass: "flex-column" }, [_vm.icon ? _c("v-avatar", {
    staticClass: "mb-4",
    attrs: { color: _vm.avatarColor, size: 32 }
  }, [_c("v-icon", {
    attrs: { color: _vm.color, size: 24 },
    domProps: { textContent: _vm._s(_vm.icon) }
  })], 1) : _vm._e(), _vm._v(" "), _vm.title ? _c("span", {
    staticClass: "text-center",
    domProps: { innerHTML: _vm._s(_vm.title) }
  }) : _vm._e()], 1), _vm._v(" "), _c("v-card-text", [_vm.message ? [_c("div", { domProps: { innerHTML: _vm._s(_vm.message) } })] : _vm._e(), _vm._v(" "), _vm.$slots.content ? [_c("div", { staticClass: "mt-4" }, [_vm._t("content")], 2)] : _vm._e()], 2), _vm._v(" "), _c("v-card-actions", [_c("v-spacer"), _vm._v(" "), _vm.buttonFalseText ? _c("v-btn", {
    attrs: {
      color: _vm.buttonFalseColor,
      text: _vm.buttonFalseFlat
    },
    on: {
      click: function ($event) {
        return _vm.choose(false);
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.buttonFalseText) + "\n      ")]) : _vm._e(), _vm._v(" "), _vm.buttonTrueText ? _c("v-btn", {
    attrs: {
      color: _vm.buttonTrueColor,
      text: _vm.buttonTrueFlat
    },
    on: {
      click: function ($event) {
        return _vm.choose(true);
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.buttonTrueText) + "\n      ")]) : _vm._e()], 1)], 1)], 1);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = undefined;
/* scoped */
var __vue_scope_id__ = undefined;
/* module identifier */
var __vue_module_identifier__ = undefined;
/* functional template */
var __vue_is_functional_template__ = false;
/* component normalizer */
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({ render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

function Install(Vue, options) {
  if ( options === void 0 ) options = {};

  var property = options.property || '$confirm';
  delete options.property;
  var vuetify = options.vuetify;
  delete options.vuetify;
  if (!vuetify) {
    console.warn('Module vuetify-confirm needs vuetify instance. Use Vue.use(VuetifyConfirm, { vuetify })');
  }
  var Ctor = Vue.extend(Object.assign({ vuetify: vuetify }, __vue_component__));
  function createDialogCmp(options, slots) {
    var container = document.querySelector('[data-app=true]') || document.body;
    return new Promise(function (resolve) {
      var cmp = new Ctor(Object.assign({}, {
        propsData: Object.assign({}, Vue.prototype[property].options, options),
        destroyed: function () {
          container.removeChild(cmp.$el);
          resolve(cmp.value);
        }
      }));

      Object.assign(cmp.$slots, slots);

      container.appendChild(cmp.$mount().$el);
    });
  }

  function show(message, options, slots) {
    if ( options === void 0 ) options = {};
    if ( slots === void 0 ) slots = {};

    options.message = message;
    return createDialogCmp(options, slots);
  }

  Vue.prototype[property] = show;
  Vue.prototype[property].options = options || {};
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Install);
}

module.exports = Install;
