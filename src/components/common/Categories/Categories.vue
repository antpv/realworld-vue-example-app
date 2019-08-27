<template>
  <div class="categories">
    <div class="categories__item-wrapper" v-for="category in categories" :key="category.route">
      <div class="categories__item-link">
        {{ category.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Categories',
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.categories {
  padding: 12px 0;
  margin: 0;

  &__item-wrapper {
    padding: 0;
    margin-right: 24px;
    display: inline-block;

    &:last-child {
      margin-right: 0;
    }
  }

  &__item-link {
    cursor: pointer;
    text-transform: uppercase;
  }
}
</style>
