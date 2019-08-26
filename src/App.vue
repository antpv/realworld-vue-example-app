<template>
  <Container>
    <Header>
      <Logo slot="logo" />

      <RWButton slot="navigation">
        Show in Github
      </RWButton>
    </Header>

    <Categories />

    <RWDivider>
      <h3>Must popular</h3>
    </RWDivider>

    <div style="margin-top: 18px; width: 342px">
      <Article />
    </div>
    <div style="margin-top: 24px; width: 342px">
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
    RWDivider: () => import('@/components/ui/RWDivider'),
    Article: () => import('@/components/common/Article'),
    Categories: () => import('@/components/common/Categories'),
    Container: () => import('@/components/layout/Container'),
    Header: () => import('@/components/layout/Header'),
    Logo: () => import('@/components/layout/Logo')
  }
}
</script>

<style lang="scss"></style>
