<template>
  <span :class="dividerClasses">
    <span class="divider__content" v-if="isSupportSlot && hasDefaultSlot">
      <slot />
    </span>
  </span>
</template>

<script>
export default {
  name: 'BaseDivider',

  props: {
    type: {
      type: String,
      default: 'horizontal'
    }
  },

  computed: {
    dividerClasses() {
      const { type, hasDefaultSlot, isSupportSlot } = this
      const classes = [
        `divider`,
        `divider_${type}`,
        { 'divider_content-off': !hasDefaultSlot && isSupportSlot }
      ]

      return classes
    },

    isSupportSlot() {
      const { type } = this

      return ['horizontal'].includes(type)
    },

    hasDefaultSlot() {
      return !!this.$slots.default
    }
  }
}
</script>

<style lang="scss" scoped>
.divider {
  &__content {
    display: inline-block;
    padding-bottom: 6px;
  }

  &_horizontal {
    border-bottom: 1px solid $gray;
    display: block;
    margin: 24px 0;
  }

  &_middot {
    padding-right: 6px;
    padding-left: 6px;
    font-size: 13px;

    &:after {
      content: '\00B7';
    }
  }

  &_content-off {
    font-size: 0;
    line-height: 0;
  }
}
</style>
