<template>
  <Container>
    <BaseDivider>
      <h1>{{ categoryTitle }}</h1>
    </BaseDivider>

    <ArticleList style="width: 70%;" articleType="list" :articles="articles" :fetching="fetching" />
  </Container>
</template>

<script>
import { GET_TOP_HEADLINES } from '@/store/actionTypes'
import { mapActions, mapState } from 'vuex'
import Container from '@/components/layout/Container'
import categories from '@/components/common/Categories/categories.js'
import ArticleList from '@/components/common/ArticleList'
import BaseDivider from '@/components/base/BaseDivider'
import routerProxy from './routerProxy'

export default {
  name: 'Category',

  metaInfo() {
    return {
      title: this.$t('app.title')
    }
  },

  beforeRouteEnter: routerProxy(categories),

  beforeRouteUpdate: routerProxy(categories),

  watch: {
    $route: {
      handler: 'fetchArticles',
      immediate: true
    }
  },

  computed: {
    ...mapState('topHeadlines', {
      articles: state => state.articles
    }),

    categorySlug() {
      return this.$route.params.category
    },

    categoryTitle() {
      const { categorySlug } = this
      const category = categories.find(obj => obj.slug === categorySlug)

      return category.title
    }
  },

  data() {
    return {
      fetching: false
    }
  },

  methods: {
    ...mapActions('topHeadlines', [GET_TOP_HEADLINES]),

    async fetchArticles() {
      const { categorySlug } = this

      this.fetching = true

      await this[GET_TOP_HEADLINES]({ category: categorySlug })

      this.fetching = false
    }
  },

  components: {
    Container,
    ArticleList,
    BaseDivider
  }
}
</script>

<style lang="scss"></style>
