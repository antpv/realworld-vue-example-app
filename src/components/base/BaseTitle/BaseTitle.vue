<template>
  <span class="title">
    <span class="title__text">
      {{ title }}
    </span>
  </span>
</template>

<script>
export default {
  name: 'BaseTitle',

  props: {
    title: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  &__text {
    font-weight: 500;
    font-size: 18px;
    cursor: default;
  }
}
</style>
