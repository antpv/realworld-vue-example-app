<template>
  <div class="bookmarks">
    <div class="bookmarks__header">
      <h3>
        Bookmarks
      </h3>
    </div>

    <div class="bookmarks__content">
      <!-- You have no bookmarks -->

      <Article
        :urlToOriginal="'sadsa'"
        :title="'Как проходят тренировки на чемпионате...'"
        :description="'Несмотря на минус 28 градусов, в Красноярске на главном предновогоднем...'"
        :sourceName="'Sport.ru'"
        :sourceId="'sadsa'"
        :publishedAt="'2 hours ago'"
      />
    </div>
  </div>
</template>

<script>
import Article from '@/components/common/Article'

export default {
  name: 'Bookmarks',

  components: {
    Article
  }
}
</script>

<style lang="scss" scoped>
.bookmarks {
  &__header {
    background-color: $yellow;
    padding: 12px;
  }

  &__content {
    background-color: $light-gray;
    padding: 12px;
  }
}
</style>
