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

  created() {
    // Set initial sizes
    this.handleResize()

    window.addEventListener('resize', this.handleResize)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },

  data() {
    return {
      categories,
      device: {
        isDesktop: true,
        isMobile: false,
        isTablet: false
      }
    }
  },

  // TODO: Move provider logic in different component
  provide() {
    return {
      device: this.device
    }
  },

  methods: {
    handleResize() {
      this.setCurrentPageWidth()
      this.setDeviceWidth()
    },

    setCurrentPageWidth() {
      this.pageWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth ||
        Infinity
    },

    setDeviceWidth() {
      const { pageWidth } = this

      this.device.isMobile = pageWidth <= 640
      this.device.isTablet = pageWidth > 640 && pageWidth <= 1080
      this.device.isDesktop = pageWidth > 1080
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
