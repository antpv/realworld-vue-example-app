<template>
  <div class="categories">
    <div class="categories__item-wrapper">
      <div class="categories__item-link">
        entertainment
      </div>
    </div>
    <div class="categories__item-wrapper">
      <div class="categories__item-link">
        technology
      </div>
    </div>
    <div class="categories__item-wrapper">
      <div class="categories__item-link">
        sports
      </div>
    </div>
    <div class="categories__item-wrapper">
      <div class="categories__item-link">
        general
      </div>
    </div>
    <div class="categories__item-wrapper">
      <div class="categories__item-link">
        health
      </div>
    </div>
    <div class="categories__item-wrapper">
      <div class="categories__item-link">
        science
      </div>
    </div>
    <div class="categories__item-wrapper">
      <div class="categories__item-link">
        business
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Categories',
  props: {
    items: {
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
