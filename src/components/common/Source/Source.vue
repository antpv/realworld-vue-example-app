<template>
  <div class="source">
    <span class="source__name">
      {{ name }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Source',

  props: {
    name: {
      type: String,
      required: true
    },

    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.source {
  display: inline-block;

  &__name {
    cursor: pointer;
    display: inline-block;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
