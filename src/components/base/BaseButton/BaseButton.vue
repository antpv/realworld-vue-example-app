<template>
  <button
    v-on="$listeners"
    class="button"
    :class="{
      button_display_expanded: expanded,
      button_size_xs: xs,
      button_size_xl: xl,
      button_size_xxl: xxl,
      button_transparent: transparent,
      button_clear: clear
    }"
    :style="buttonStyle"
    :disabled="disabled"
  >
    <span class="button__content">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    color: {
      type: String,
      required: false
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false
    },

    xs: {
      type: Boolean,
      required: false,
      default: false
    },

    xl: {
      type: Boolean,
      required: false,
      default: false
    },

    xxl: {
      type: Boolean,
      required: false,
      default: false
    },

    transparent: {
      type: Boolean,
      required: false,
      default: false
    },

    expanded: {
      type: Boolean,
      required: false,
      default: false
    },

    clear: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    hasColor() {
      return this.color !== undefined
    },

    buttonStyle() {
      return this.color
        ? {
            color: this.color,
            'border-color': this.color
          }
        : null
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  font-size: 13px;
  display: inline-block;
  font-family: $font-family-button;
  cursor: pointer;
  outline: 0;
  color: $primary;
  border: 1px solid;
  border-radius: 3px;
  border-color: $primary;
  background-color: $white;
  padding: 6px 12px;
  box-sizing: border-box;
  transition: color 0.15s cubic-bezier(0, 0.89, 0.44, 1),
    background-color 0.15s cubic-bezier(0, 0.89, 0.44, 1);

  &:hover {
    color: $primary-light;
    border-color: $primary-light;
  }

  &_size_xs {
    padding: 3px 6px;
  }

  &_size_xl {
    padding: 12px 24px;
  }

  &_size_xxl {
    padding: 18px 36px;
  }

  &_display_expanded {
    width: 100%;
  }

  &_transparent {
    background-color: transparent;
  }

  &_clear {
    border-color: transparent;

    &:hover {
      border-color: transparent;
    }
  }
}
</style>
