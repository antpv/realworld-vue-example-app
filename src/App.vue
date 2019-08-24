<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$t('app.title')
    }
  }
}
</script>

<style lang="scss"></style>
