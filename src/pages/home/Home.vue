<template>
  <Container>
    <BaseDivider>
      <h1>
        General
      </h1>
    </BaseDivider>

    <ArticleList :articles="articles" />

    <TheLoader :isShow="fething" />
  </Container>
</template>

<script>
import { GET_TOP_HEADLINES } from '@/store/actionTypes'
import { mapActions, mapState } from 'vuex'
import Container from '@/components/layout/Container'
import TheLoader from '@/components/layout/TheLoader'
import ArticleList from '@/components/common/ArticleList'
import BaseDivider from '@/components/base/BaseDivider'

export default {
  name: 'Home',

  metaInfo() {
    return {
      title: this.$t('app.title')
    }
  },

  async created() {
    this.fething = true

    await this[GET_TOP_HEADLINES]()

    this.fething = false
  },

  computed: {
    ...mapState('topHeadlines', {
      articles: state => state.articles
    })
  },

  data() {
    return {
      fething: false
    }
  },

  methods: {
    ...mapActions('topHeadlines', [GET_TOP_HEADLINES])
  },

  components: {
    Container,
    TheLoader,
    ArticleList,
    BaseDivider
  }
}
</script>

<style lang="scss"></style>
