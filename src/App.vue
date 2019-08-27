<template>
  <Container>
    <TheHeader>
      <Logo slot="logo" />
      <BaseButton slot="navigation">
        Show in Github
      </BaseButton>
    </TheHeader>

    <Categories :categories="categories" />

    <BaseDivider>
      <BaseTitle title="Other" />
    </BaseDivider>

    <Article
      urlToOriginal="urlToOriginal"
      title="title"
      description="description"
      sourceName="sourceName"
      publishedAt="publishedAt"
      urlToImage="https://images.unsplash.com/photo-1510832198440-a52376950479?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1348&q=80"
    />
  </Container>
</template>

<script>
import Container from '@/components/layout/Container'
import TheHeader from '@/components/layout/TheHeader'
import Logo from '@/components/layout/Logo'
import categories from '@/components/common/Categories/categories'
import Categories from '@/components/common/Categories'
import Article from '@/components/common/Article'
import BaseDivider from '@/components/base/BaseDivider'
import BaseButton from '@/components/base/BaseButton'
import BaseTitle from '@/components/base/BaseTitle'

export default {
  metaInfo() {
    return {
      title: this.$t('app.title')
    }
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
    Article,
    BaseDivider,
    BaseButton,
    BaseTitle
  }
}
</script>

<style lang="scss"></style>
