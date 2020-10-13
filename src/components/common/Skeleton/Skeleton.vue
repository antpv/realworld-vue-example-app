<template>
  <div :class="`skeleton skeleton_${type}`">
    <div class="skeleton__image"></div>
    <div class="skeleton__content-wrapper">
      <div class="skeleton__title"></div>
      <div class="skeleton__description">
        <div class="skeleton__description-line" v-for="n in 4" :key="n"></div>
      </div>
      <div class="skeleton__meta"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skeleton',

  props: {
    type: {
      type: String,
      default: 'default',
      validator: type => ['default', 'list'].includes(type)
    }
  }
}
</script>

<style lang="scss" scoped>
.skeleton {
  $root: &;
  $line-heignt-title: 18px;
  $line-heignt-text: 12px;

  display: flex;

  &_default {
    flex-direction: column;

    #{$root}__image {
      margin-bottom: 12px;
      padding-bottom: 56.25%;
      width: 100%;
    }
  }

  &_list {
    flex-direction: row-reverse;

    #{$root}__image {
      width: 25%;
    }

    #{$root}__content-wrapper {
      width: calc(80% - 18px);
      margin-right: 18px;
    }
  }

  &__image {
    background-color: $gray;
    border-radius: 3px;
  }

  &__title {
    background-color: $gray;
    width: 70%;
    height: $line-heignt-title;
    margin-bottom: 12px;
    border-radius: 3px;
  }

  &__description {
    margin-bottom: 12px;
    border-radius: 3px;

    &-line {
      background-color: $gray;
      height: $line-heignt-text;
      margin-bottom: 6px;
      border-radius: 3px;

      &:nth-child(1n) {
        width: 90%;
      }

      &:nth-child(2n) {
        width: 95%;
      }

      &:nth-child(3n) {
        width: 85%;
      }

      &:nth-child(4n) {
        width: 90%;
      }
    }
  }

  &__meta {
    background-color: $gray;
    height: $line-heignt-text;
    width: 35%;
  }
}
</style>
