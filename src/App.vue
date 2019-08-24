<template>
  <Container>
    <Header>
      <Logo slot="logo" />

      <template slot="navigation">
        <UIButton>
          Show in Github
        </UIButton>
      </template>
    </Header>

    <Categories />
    <div style="margin-top: 18px; width: 342px">
      <Article />
    </div>
  </Container>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$t('app.title')
    }
  },

  components: {
    Container: () => import('@/components/layout/Container'),
    UIButton: () => import('@/components/UI/UIButton'),
    Article: () => import('@/components/common/Article'),
    Header: () => import('@/components/layout/Header'),
    Categories: () => import('@/components/layout/Categories'),
    Logo: () => import('@/components/layout/Logo')
  }
}
</script>

<style lang="scss"></style>
