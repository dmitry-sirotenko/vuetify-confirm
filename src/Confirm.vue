<template>
  <v-dialog eager @input="change" value="true" :max-width="width" :persistent="persistent" @keydown.esc="choose(false)">
    <v-card>
      <v-card-title v-if="titleExists" class="flex-column px-6 pt-6">
        <div v-if="icon" class="d-flex align-center justify-center" style="position: relative">
          <v-avatar
              style="opacity: 0.2"
              :color="color"
              :size="32"
          ></v-avatar>
          <v-icon style="position: absolute" :color="color" :size="24">{{ icon }}</v-icon>
        </div>
        <h5 v-if="title" class="text-h5 mt-3" v-text="title"></h5>
      </v-card-title>
      <v-card-text class="px-6 pb-4" :class="textClasses" v-html="message"></v-card-text>
      <v-card-actions class="px-6 pb-7">
        <v-spacer/>
        <v-btn
            v-if="buttonFalseText"
            :color="buttonFalseColor"
            :text="buttonFalseFlat"
            @click="choose(false)"
        >
          {{ buttonFalseText }}
        </v-btn>
        <v-btn
            v-if="buttonTrueText"
            :color="buttonTrueColor"
            :text="buttonTrueFlat"
            @click="choose(true)"
        >
          {{ buttonTrueText }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { VCard, VCardActions, VCardText, VCardTitle, VAvatar, VDialog, VIcon, VSpacer, VBtn } from 'vuetify/lib'

export default {
  components: {
    VCard,
    VCardTitle,
    VAvatar,
    VCardActions,
    VCardText,
    VDialog,
    VIcon,
    VSpacer,
    VBtn
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
      default () {
        return this.$vuetify.icons.values.warning
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
  data () {
    return {
      value: false
    }
  },
  computed: {
    titleExists() {
      return !!(this.icon || this.title);
    },
    textClasses() {
      return {
        'pt-6': !this.titleExists,
      };
    }
  },
  mounted () {
    document.addEventListener('keyup', this.onEnterPressed)
  },
  destroyed () {
    document.removeEventListener('keyup', this.onEnterPressed)
  },
  methods: {
    onEnterPressed(e) {
      if (e.keyCode === 13) {
        e.stopPropagation()
        this.choose(true)
      }
    },
    choose(value) {
      this.$emit('result', value)
      this.value = value
      this.$destroy()
    },
    change(res) {
      this.$destroy()
    }
  }
}
</script>
