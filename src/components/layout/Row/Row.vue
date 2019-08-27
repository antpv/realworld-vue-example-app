<template>
  <div class="row" :style="rowStyle">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Row',

  props: {
    columnGap: {
      type: [String, Number],
      default: 0,
      required: false
    }
  },

  computed: {
    rowStyle() {
      return `grid-column-gap: ${this.columnGap}px`
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto;
  grid-auto-flow: column;
}
</style>
