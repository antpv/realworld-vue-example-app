<template>
  <Container>
    <TheHeader>
      <Logo slot="logo" />
      <BaseButton @click="test" slot="navigation">
        GET_TOP_HEADLINES
      </BaseButton>
    </TheHeader>

    <Categories :categories="categories" />

    <BaseDivider>
      <BaseTitle title="Top headlines" />
    </BaseDivider>

    <ArticleList :articles="articles" />
  </Container>
</template>

<script>
import { GET_TOP_HEADLINES } from '@/store/actionTypes'
import { mapActions, mapState } from 'vuex'
import Container from '@/components/layout/Container'
import TheHeader from '@/components/layout/TheHeader'
import Logo from '@/components/layout/Logo'
import categories from '@/components/common/Categories/categories.js'
import Categories from '@/components/common/Categories'
import ArticleList from '@/components/common/ArticleList'
import BaseDivider from '@/components/base/BaseDivider'
import BaseButton from '@/components/base/BaseButton'
import BaseTitle from '@/components/base/BaseTitle'

export default {
  metaInfo() {
    return {
      title: this.$t('app.title')
    }
  },

  computed: {
    ...mapState('topHeadlines', {
      articles: state => state.articles
    })
  },

  data() {
    return {
      categories
    }
  },

  components: {
    Container,
    TheHeader,
    Logo,
    Categories,
    ArticleList,
    BaseDivider,
    BaseButton,
    BaseTitle
  },

  methods: {
    ...mapActions('topHeadlines', [GET_TOP_HEADLINES]),

    test() {
      this[GET_TOP_HEADLINES]()
    }
  }
}
</script>

<style lang="scss"></style>
