<template>
  <Container>
    <BaseDivider>
      <h1>
        General
      </h1>
    </BaseDivider>

    <ArticleList :articles="articles" />
  </Container>
</template>

<script>
import { GET_TOP_HEADLINES } from '@/store/actionTypes'
import { mapActions, mapState } from 'vuex'
import Container from '@/components/layout/Container'
import ArticleList from '@/components/common/ArticleList'
import BaseDivider from '@/components/base/BaseDivider'

export default {
  name: 'Home',

  metaInfo() {
    return {
      title: this.$t('app.title')
    }
  },

  created() {
    this[GET_TOP_HEADLINES]()
  },

  computed: {
    ...mapState('topHeadlines', {
      articles: state => state.articles
    })
  },

  methods: {
    ...mapActions('topHeadlines', [GET_TOP_HEADLINES])
  },

  components: {
    Container,
    ArticleList,
    BaseDivider
  }
}
</script>

<style lang="scss"></style>
