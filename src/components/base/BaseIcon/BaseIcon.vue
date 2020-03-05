<template>
  <span class="icon">
    <component :style="computedStyle" :is="iconName" />
  </span>
</template>

<script>
export default {
  name: 'BaseIcon',

  components: {
    // IconName: () => import('@/assets/icons/IconName.svg')
  },

  props: {
    type: {
      type: String,
      required: true
    },

    fill: {
      type: String,
      required: false
    }
  },

  computed: {
    computedStyle() {
      const { fill } = this
      const styles = {}

      if (fill) {
        styles.fill = fill
      }

      return styles
    },

    iconName() {
      return `${this.type[0].toUpperCase()}${this.type.slice(1)}`
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  $icon-height: 16px;
  $icon-width: 16px;

  height: $icon-height;
  height: $icon-width;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  & > svg {
    max-width: $icon-width;
    max-height: $icon-height;
    fill: $text-color-main;
  }
}
</style>
