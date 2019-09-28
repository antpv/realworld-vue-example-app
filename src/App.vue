<template>
  <div id="app">
    <Container>
      <TheHeader>
        <Logo slot="logo" isLink />
      </TheHeader>
      <Categories :categories="categories" />
    </Container>
    <router-view />
  </div>
</template>

<script>
import Container from '@/components/layout/Container'
import TheHeader from '@/components/layout/TheHeader'
import Logo from '@/components/layout/Logo'
import Categories from '@/components/common/Categories'
import categories from '@/constants/categories'

export default {
  name: 'App',

  data() {
    return {
      categories
    }
  },

  components: {
    Container,
    TheHeader,
    Logo,
    Categories
  }
}
</script>

<style lang="scss"></style>
