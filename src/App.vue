<template>
  <Container>
    <Header>
      <Logo slot="logo" />

      <RWButton slot="navigation">
        Show in Github
      </RWButton>
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
    RWButton: () => import('@/components/ui/RWButton'),
    Article: () => import('@/components/common/Article'),
    Categories: () => import('@/components/common/Categories'),
    Container: () => import('@/components/layout/Container'),
    Header: () => import('@/components/layout/Header'),
    Logo: () => import('@/components/layout/Logo')
  }
}
</script>

<style lang="scss"></style>
