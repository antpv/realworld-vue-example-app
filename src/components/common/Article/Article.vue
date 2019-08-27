<template>
  <div>
    <!-- DEFAULT -->
    <div v-if="isDefaultType" class="article-default">
      <a :href="urlToOriginal" class="article-default__link-holder" :title="title">
        <div v-if="hasImage" class="article-default__image" :style="imageStyle"></div>
        <div class="article-default__title">
          {{ title }}
        </div>
        <div class="article-default__description">
          {{ description }}
        </div>
      </a>

      <div class="article-default__meta">
        <div class="article-default__source">
          {{ sourceName }}
        </div>
        <span class="middotDivider"></span>
        <div class="article-default__date">
          {{ correctPublishedAt }}
        </div>
      </div>
    </div>

    <!-- LIST -->
    <div v-if="isListType" class="article-list">
      <div class="article-list__content">
        <div class="article-list__title">
          {{ title }}
        </div>
        <div class="article-list__description">
          {{ description }}
        </div>

        <div class="article-list__meta">
          <div class="article-list__source">
            {{ sourceName }}
          </div>
          <span class="middotDivider"></span>
          <div class="article-list__date">
            {{ correctPublishedAt }}
          </div>
        </div>
      </div>
      <div class="article-list__image-wrapper">
        <div v-if="hasImage" class="article-list__image" :style="imageStyle"></div>
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

    correctPublishedAt() {
      return this.publishedAt
    },

    isDefaultType() {
      return this.type === 'default'
    },

    isListType() {
      return this.type === 'list'
    }
  }
}
</script>

<style lang="scss" scoped>
.article-default {
  display: block;

  &__link-holder {
    cursor: pointer;
    margin: 0;
    padding: 0;
    color: initial;
    text-decoration: none;
  }

  &__image {
    width: 100%;
    padding-bottom: 56.25%;
    position: relative;
    background: $gray;
    font-size: 0;
    line-height: 0;
    margin-bottom: 12px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    // &--coube {
    //   padding-bottom: 56.25%;
    // }

    // &--third {
    //   padding-bottom: 33.33%;
    // }
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

  &__date {
    cursor: default;
    display: inline-block;
  }
}

.article-list {
  display: grid;
  grid-template-columns: auto calc(33.33% - 6px);
  grid-column-gap: 12px;

  &__content {
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

  &__date {
    cursor: default;
    display: inline-block;
  }

  &__image-wrapper {
  }

  &__image {
    width: 100%;
    padding-bottom: 50%;
    position: relative;
    background: $gray;
    font-size: 0;
    line-height: 0;
    margin-bottom: 12px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    // &--coube {
    //   padding-bottom: 56.25%;
    // }

    // &--third {
    //   padding-bottom: 33.33%;
    // }
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
