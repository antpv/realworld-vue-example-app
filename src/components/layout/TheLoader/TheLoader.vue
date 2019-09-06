<template>
  <div v-show="isShow" class="loader">
    <div class="loader__content">
      <Logo />
    </div>
  </div>
</template>

<script>
import Logo from '@/components/layout/Logo'

export default {
  name: 'TheLoader',

  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },

  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: $white;
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
  }
}
</style>
