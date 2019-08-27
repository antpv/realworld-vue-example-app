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
      <h3>
        Other
      </h3>
    </BaseDivider>

    <Grid rowGap="36">
      <Row columnGap="24">
        <Column v-for="num in [1, 2, 3]" :key="num">
          <Article
            urlToOriginal="urlToOriginal"
            title="title"
            description="description"
            sourceName="sourceName"
            publishedAt="publishedAt"
            urlToImage="urlToImage"
          />
        </Column>
      </Row>
    </Grid>
  </Container>
</template>

<script>
import Container from '@/components/layout/Container'
import Grid from '@/components/layout/Grid'
import Row from '@/components/layout/Row'
import Column from '@/components/layout/Column'
import TheHeader from '@/components/layout/TheHeader'
import Logo from '@/components/layout/Logo'
import categories from '@/components/common/Categories/categories'
import Categories from '@/components/common/Categories'
import Article from '@/components/common/Article'
import BaseDivider from '@/components/base/BaseDivider'
import BaseButton from '@/components/base/BaseButton'

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
    Grid,
    Row,
    Column,
    TheHeader,
    Logo,
    Categories,
    Article,
    BaseDivider,
    BaseButton
  }
}
</script>

<style lang="scss"></style>
