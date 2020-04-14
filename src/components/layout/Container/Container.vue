<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style lang="scss" scoped>
.container {
  max-width: $landscape-width;
  width: 100%;
  margin: 0 auto;
}
</style>
