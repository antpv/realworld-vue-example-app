<template>
  <div class="categories">
    <div class="categories__item-wrapper" v-for="category in categories" :key="category.route">
      <router-link :to="category.route" class="categories__item-link">
        {{ category.title }}
      </router-link>
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
    text-decoration: none;
    color: $text-color-light;
    transition: color 0.15s cubic-bezier(0, 0.89, 0.44, 1);

    &:hover {
      color: $text-color-lighten;
    }
  }
}
</style>
