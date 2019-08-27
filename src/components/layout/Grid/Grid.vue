<template>
  <div class="grid" :style="gridStyle">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Grid',

  props: {
    rowGap: {
      type: [String, Number],
      default: 0,
      required: false
    }
  },

  computed: {
    gridStyle() {
      return `grid-row-gap: ${this.rowGap}px`
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
}
</style>
