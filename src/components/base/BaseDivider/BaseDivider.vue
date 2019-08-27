<template>
  <span class="divider_horizontal" :class="{ 'divider_content-off': !hasDefaultSlot }">
    <span class="divider__content" v-if="hasDefaultSlot">
      <slot />
    </span>
  </span>
</template>

<script>
export default {
  name: 'BaseDivider',

  computed: {
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

  &_content-off {
    font-size: 0;
    line-height: 0;
  }
}
</style>
