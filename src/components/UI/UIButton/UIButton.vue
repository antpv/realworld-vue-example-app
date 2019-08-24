<template>
  <button
    v-on="$listeners"
    class="button"
    :class="{
      button_display_expanded: expanded,
      button_size_xs: xs,
      button_size_xl: xl,
      button_size_xxl: xxl,
      button_transparent: transparent
    }"
    :disabled="disabled"
  >
    <span class="button__content">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'UIButton',

  props: {
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
  border: 1px solid $primary;
  border-radius: 4px;
  background-color: $white;
  margin: 10px;
  padding: 6px 12px;

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
    display: block;
  }

  &_transparent {
    background-color: transparent;
  }
}
</style>
