<template>
  <div class="article" :class="articleClasses">
    <div class="article__image-wrapper">
      <div v-if="hasImage" class="article__image" :style="imageStyle"></div>
    </div>
    <div class="article__content-wrapper">
      <div class="article__title">
        {{ title }}
      </div>
      <div class="article__description">
        {{ description }}
      </div>
      <div class="article__meta">
        <div class="article__source">
          {{ sourceName }}
        </div>
        <span class="middotDivider"></span>
        <div class="article__time">
          {{ correctPublishedAt }}
        </div>
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
    },

    type: {
      type: String,
      default: 'default'
    }
  },

  computed: {
    hasImage() {
      return !!this.urlToImage
    },

    imageStyle() {
      return `background-image: url(${this.urlToImage})`
    },

    articleClasses() {
      return `article_${this.type}`
    },

    correctPublishedAt() {
      return this.publishedAt
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  $root: &;
  display: flex;
  justify-content: space-between;

  &_default {
    flex-direction: column;

    #{$root}__image-wrapper {
      margin-bottom: 12px;
    }

    #{$root}__content-wrapper {
    }

    #{$root}__image {
      padding-bottom: 56.25%;
    }
  }

  &_list {
    flex-direction: row-reverse;

    #{$root}__image-wrapper {
      width: 25%;
    }

    #{$root}__content-wrapper {
      width: calc(80% - 12px);
      margin-right: 12px;
    }

    #{$root}__image {
      height: 100%;
    }
  }

  &__image-wrapper {
  }

  &__content-wrapper {
  }

  &__image {
    width: 100%;
    position: relative;
    background: $gray;
    font-size: 0;
    line-height: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
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

    &:hover {
      text-decoration: underline;
    }
  }

  &__time {
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
