<template>
  <div class="article">
    <a :href="urlToOriginal" class="article__link-holder">
      <div v-if="hasImage" class="article__image"></div>
      <div class="article__title">
        {{ title }}
      </div>
      <div class="article__description">
        {{ description }}
      </div>
    </a>

    <div class="article__meta">
      <div class="article__source">
        {{ sourceName }}
      </div>
      <span class="middotDivider"></span>
      <div class="article__date">
        {{ correctPublishedAt }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Article',

  props: {
    urlToOriginal: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    sourceName: {
      type: String,
      required: true
    },

    publishedAt: {
      type: String,
      required: true
    },

    urlToImage: {
      required: false
    }
  },

  computed: {
    hasImage() {
      return !!this.urlToImage
    },

    correctPublishedAt() {
      return this.publishedAt
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  display: block;

  &__link-holder {
    cursor: pointer;
    margin: 0;
    padding: 0;
    color: initial;
  }

  &__image {
    width: 100%;
    padding-bottom: 56.25%;
    position: relative;
    background: $gray;
    font-size: 0;
    line-height: 0;
    margin-bottom: 12px;
  }

  &__title {
    font-family: $font-family-titles;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 6px;
  }

  &__description {
    color: $text-color-light;
    margin-bottom: 6px;
  }

  &__meta {
    color: $text-color-lighten;
  }

  &__source {
    cursor: pointer;
    display: inline-block;
  }

  &__date {
    cursor: default;
    display: inline-block;
  }
}

.middotDivider {
  padding-right: 6px;
  padding-left: 6px;
  font-size: 13px;

  &:after {
    content: '\00B7';
  }
}
</style>
