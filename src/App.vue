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
import { Container } from '@/components/layout'
import { TheHeader } from '@/components/layout'
import { Logo } from '@/components/layout'
import { Categories } from '@/components/common'
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

<style lang="sass">
#app { margin: 24px; }
</style>
