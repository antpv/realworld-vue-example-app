<template>
  <div class="article-list">
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
      default: 'list'
    }
  },

  components: {
    Article
  }
}
</script>

<style lang="scss" scoped>
.article-list {
  &__item {
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
