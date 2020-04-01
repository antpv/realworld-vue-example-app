<template>
  <span
    class="icon"
    :class="{
      'icon--offset-right': offsetRight,
      'icon--offset-left': offsetLeft
    }"
  >
    <component :style="computedStyle" :is="iconName" />
  </span>
</template>

<script>
export default {
  name: 'BaseIcon',

  components: {
    Bookmark: () => import('@/assets/icons/bookmark.svg')
  },

  props: {
    type: {
      type: String,
      required: true
    },

    fill: {
      type: String,
      required: false
    },

    offsetRight: {
      type: Boolean,
      default: false
    },

    offsetLeft: {
      type: Boolean,
      default: false
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
      return this.type
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

  &--offset-right {
    margin-right: 3px;
  }

  &--offset-left {
    margin-left: 3px;
  }

  & > svg {
    max-width: $icon-width;
    max-height: $icon-height;
    width: 100%;
    height: 100%;
    fill: $text-color-main;
  }
}
</style>
