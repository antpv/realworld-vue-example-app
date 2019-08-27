<template>
  <div class="logo">
    <div class="logo__text" @mousedown.prevent>
      {{ logoText }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Logo',

  data() {
    return {
      logoText: 'rw'
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  background-color: #111;
  border-radius: 0;
  width: 48px;
  height: 48px;
  display: inline-block;

  &__text {
    cursor: default;
    width: 48px;
    height: 48px;
    text-align: center;
    text-transform: uppercase;
    color: $white;
    font-family: $font-family-titles;
    font-size: 24px;
    line-height: 48px;
  }
}
</style>
