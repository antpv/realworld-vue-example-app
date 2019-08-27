<template>
  <div class="header">
    <div class="header__logo">
      <slot name="logo" />
    </div>
    <div class="header__navigation">
      <slot name="navigation" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style lang="scss" scoped>
.header {
  padding: 12px 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__logo {
  }

  &__navigation {
  }
}
</style>
