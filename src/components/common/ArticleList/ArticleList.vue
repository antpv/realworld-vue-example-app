<template>
  <div :class="articleClasses">
    <template v-if="fetching">
      <div v-for="n in 3" :key="n" class="article-list__item">
        <Skeleton :type="articleType" />
      </div>
    </template>

    <template v-else>
      <div
        v-for="article in articles"
        :key="`${article.url}-${article.publishedAt}`"
        class="article-list__item"
      >
        <Article
          :urlToOriginal="article.url"
          :title="article.title"
          :description="article.description"
          :sourceName="article.source.name"
          :sourceId="article.source.url"
          :publishedAt="article.publishedAt"
          :image="article.image"
          :type="articleType"
        />
      </div>
    </template>
  </div>
</template>

<script>
import Article from '../Article/Article.vue'
import Skeleton from '../Skeleton/Skeleton.vue'

export default {
  name: 'ArticleList',

  props: {
    articles: {
      type: Array,
      default: () => []
    },

    articleType: {
      default: 'default'
    },

    fetching: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    articleClasses() {
      const { articleType } = this
      const classes = `article-list article-list_${articleType}`

      return classes
    }
  },

  components: {
    Article,
    Skeleton
  }
}
</script>

<style lang="scss" scoped>
.article-list {
  $root: &;

  &_default {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 36px;
    grid-column-gap: 24px;

    @media screen and (max-width: $mobile-width) {
      grid-template-columns: repeat(1, 1fr);
    }

    #{$root}__item {
    }
  }

  &_list {
    #{$root}__item {
      margin-bottom: 36px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
