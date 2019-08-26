<template>
  <span class="divider_horizontal" :class="{ 'divider_content-off': !hasDefaultSlot }">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'RWDivider',

  computed: {
    hasDefaultSlot() {
      return !!this.$slots.default
    }
  }
}
</script>

<style lang="scss" scoped>
.divider {
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
