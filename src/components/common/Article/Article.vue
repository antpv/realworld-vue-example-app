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
        <Source :name="sourceName" :id="sourceId" />
        <BaseDivider type="middot" />
        <div class="article__time">
          {{ publishedAt }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseDivider from '@/components/base/BaseDivider'
import Source from '@/components/common/Source'

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

    sourceId: {
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
    articleClasses() {
      const { type } = this

      return `article_${type}`
    },

    hasImage() {
      return !!this.urlToImage
    },

    imageStyle() {
      return `background-image: url(${this.urlToImage})`
    }
  },

  components: {
    BaseDivider,
    Source
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

  &__time {
    cursor: default;
    display: inline-block;
  }
}
</style>
