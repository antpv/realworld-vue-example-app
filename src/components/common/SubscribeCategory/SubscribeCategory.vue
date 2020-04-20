<template>
  <div class="subscribe-category">
    <div class="subscribe-category__title">
      <h4>
        What You Need to Know
      </h4>
    </div>
    <div class="subscribe-category__description">
      The latest on what’s moving markets, in your inbox every morning
    </div>
    <div class="subscribe-category__actions">
      <div class="subscribe-category__actions_left">
        <BaseInput placeholder="Enter your email" expanded />
      </div>
      <div class="subscribe-category__actions_right">
        <BaseButton>
          Subscribe
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import { BaseButton } from '@/components/base'
import { BaseInput } from '@/components/base'

export default {
  name: 'SubscribeCategory',

  props: {
    categoryTitle: {
      type: String,
      required: true
    },

    slug: {
      type: String,
      required: true
    }
  },

  components: {
    BaseButton,
    BaseInput
  }
}
</script>

<style lang="scss" scoped>
.subscribe-category {
  padding: 12px;
  margin: 0;

  &__title {
    margin-bottom: 12px;
  }

  &__description {
    margin-bottom: 12px;
  }

  &__actions {
    display: grid;
    grid-template-columns: auto minmax(min-content, min-content);
    grid-column-gap: 12px;

    &_left {
    }

    &_right {
    }
  }
}
</style>
