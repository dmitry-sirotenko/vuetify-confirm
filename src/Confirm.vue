<template>
  <v-dialog
      value="true"
      :max-width="width"
      :persistent="persistent"
      eager
      @input="change"
      @keydown.esc="choose(false)"
  >
    <v-card>
      <v-card-title class="flex-column">
        <v-avatar v-if="icon" class="mb-4" :color="avatarColor" :size="32">
          <v-icon :color="color" :size="24" v-text="icon" />
        </v-avatar>

        <span v-if="title" class="text-center" v-html="title" />
      </v-card-title>
      <v-card-text>
        <template v-if="message">
          <div v-html="message"></div>
        </template>

        <template v-if="$slots.content">
          <div class="mt-4">
            <slot name="content" />
          </div>
        </template>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
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
import {
  VCard,
  VCardActions,
  VCardText,
  VCardTitle,
  VAvatar,
  VDialog,
  VIcon,
  VSpacer,
  VBtn,
} from 'vuetify/lib';

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
    VBtn,
  },
  props: {
    buttonTrueText: {
      type: String,
      default: 'Confirm',
    },
    buttonFalseText: {
      type: String,
      default: 'Cancel',
    },
    buttonTrueColor: {
      type: String,
      default: 'primary',
    },
    buttonFalseColor: {
      type: String,
      default: 'primary',
    },
    buttonFalseFlat: {
      type: Boolean,
      default: true,
    },
    buttonTrueFlat: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: 'warning',
    },
    avatarColor: {
      type: String,
      default: 'orange lighten-5',
    },
    icon: {
      type: String,
      default() {
        return this.$vuetify.icons.values.warning;
      },
    },
    message: {
      type: String,
      required: true,
    },
    persistent: Boolean,
    title: {
      type: String,
    },
    width: {
      type: Number,
      default: 400,
    },
  },
  data() {
    return {
      value: false,
    };
  },
  mounted() {
    document.addEventListener('keyup', this.onEnterPressed);
  },
  destroyed() {
    document.removeEventListener('keyup', this.onEnterPressed);
  },
  methods: {
    onEnterPressed(e) {
      if (e.keyCode === 13) {
        e.stopPropagation();
        this.choose(true);
      }
    },
    choose(value) {
      this.$emit('result', value);
      this.value = value;
      this.$destroy();
    },
    change(res) {
      this.$destroy();
    },
  },
};
</script>
