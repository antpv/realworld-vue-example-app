<template>
  <div class="logo">
    <router-link class="logo__link" v-if="isLink" to="/">
      <div class="logo__text" @mousedown.prevent>
        {{ logoText }}
      </div>
    </router-link>

    <div v-else class="logo__text" @mousedown.prevent>
      {{ logoText }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Logo',

  props: {
    isLink: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      logoText: 'rw'
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  $root: &;
  background-color: #111;
  border-radius: 0;
  width: 48px;
  height: 48px;
  display: inline-block;
  font-size: 0;
  line-height: 0;

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

  &__link {
    text-decoration: none;

    #{$root}__text {
      cursor: pointer;
    }
  }
}
</style>
