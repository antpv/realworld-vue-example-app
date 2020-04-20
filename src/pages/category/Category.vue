<template>
  <Container>
    <BaseDivider>
      <h1>{{ categoryTitle }}</h1>
    </BaseDivider>

    <div class="caterory-grid">
      <div class="caterory-grid__left">
        <ArticleList articleType="list" :articles="articles" :fetching="fetching" />
      </div>

      <div class="caterory-grid__right">
        <div class="caterory-grid__sticky">
          <Bookmarks class="caterory-grid__sticky_item" />

          <SubscribeCategory
            class="caterory-grid__sticky_item"
            :categoryTitle="categoryTitle"
            :slug="categorySlug"
          />
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import { GET_TOP_HEADLINES } from '@/store/actionTypes'
import { mapActions, mapState } from 'vuex'
import { Container } from '@/components/layout'
import { ArticleList } from '@/components/common'
import { Bookmarks } from '@/components/common'
import { SubscribeCategory } from '@/components/common'
import { BaseDivider } from '@/components/base'
import routerWatcher from './routerWatcher'
import categories from '@/constants/categories'

export default {
  name: 'Category',

  metaInfo() {
    return {
      title: this.$t('app.title')
    }
  },

  beforeRouteEnter: routerWatcher(categories),

  beforeRouteUpdate: routerWatcher(categories),

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
      const category = this.categories.find(obj => obj.slug === categorySlug)

      return category.title
    }
  },

  data() {
    return {
      fetching: false,
      categories
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
    Bookmarks,
    SubscribeCategory,
    BaseDivider
  }
}
</script>

<style lang="scss">
.caterory-grid {
  display: grid;
  grid-template-columns: calc(70% - 12px) calc(30% - 12px);
  grid-column-gap: 24px;

  &__left {
  }

  &__right {
  }

  &__sticky {
    position: sticky;
    top: 24px;

    &_item {
      margin-bottom: 24px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
