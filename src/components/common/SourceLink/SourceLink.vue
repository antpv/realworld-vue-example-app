<template>
  <div class="source-link">
    <span class="source-link__name">
      {{ name }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'SourceLink',

  props: {
    name: {
      type: String,
      required: true
    },

    id: {
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.source-link {
  display: inline;

  &__name {
    cursor: pointer;
    display: inline;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
