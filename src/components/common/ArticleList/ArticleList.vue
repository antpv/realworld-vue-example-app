<template>
  <div :class="articleClasses">
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
        :sourceId="article.source.id"
        :publishedAt="article.publishedAt"
        :urlToImage="article.urlToImage"
        :type="articleType"
      />
    </div>
  </div>
</template>

<script>
import Article from '@/components/common/Article'

export default {
  name: 'ArticleList',

  props: {
    articles: {
      type: Array,
      default: () => []
    },

    articleType: {
      default: 'default'
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
    Article
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
