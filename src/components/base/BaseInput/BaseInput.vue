<template>
  <div class="input-wrapper">
    <input
      class="input-wrapper__input"
      :class="{
        'input-wrapper__input_size_xs': xs,
        'input-wrapper__input_size_xl': xl,
        'input-wrapper__input_size_xxl': xxl,
        'input-wrapper__input_display_expanded': expanded
      }"
      type="text"
      :value="value"
      :placeholder="placeholder ? placeholder : ''"
      v-on="$listeners"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',

  props: {
    value: {
      default: ''
    },

    placeholder: {
      type: String
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

    expanded: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.input-wrapper {
  &__input {
    font-size: 13px;
    display: inline-block;
    font-family: $font-family-button;
    outline: 0;
    background-color: $white;
    border: 0;
    border-bottom: 1px solid;
    border-bottom-color: $gray;
    border-top: 1px solid;
    border-top-color: transparent;
    padding: 6px 0;

    &_size_xs {
      padding: 3px 0;
    }

    &_size_xl {
      padding: 12px 0;
    }

    &_size_xxl {
      padding: 18px 0;
    }

    &_display_expanded {
      width: 100%;
    }
  }
}
</style>
