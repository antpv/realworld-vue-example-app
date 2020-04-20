<template>
  <div class="bookmarks">
    <div class="bookmarks__header">
      <h3>
        Bookmarks
      </h3>
    </div>

    <div class="bookmarks__content">
      <template v-if="!hasBookmarks">
        You have no bookmarks
      </template>

      <template v-else>
        <div
          class="bookmarks__content_item"
          v-for="bookmark in slicedBookmarks"
          :key="`${bookmark.urlToOriginal}-${bookmark.publishedAt}`"
        >
          <Article
            :urlToOriginal="bookmark.urlToOriginal"
            :title="bookmark.title"
            :description="bookmark.description"
            :sourceName="bookmark.sourceName"
            :sourceId="bookmark.sourceId"
            :publishedAt="bookmark.publishedAt"
            hideBookmarkButton
          />
        </div>

        <div v-if="hasBookmarksOffset" class="bookmarks__content_navigation">
          <BaseButton transparent clear expanded>
            Все закладки – {{ bookmarks.length }}
          </BaseButton>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Article } from '@/components/common'
import { BaseButton } from '@/components/base'

export default {
  name: 'Bookmarks',

  data() {
    return {
      bookmarksCount: 2
    }
  },

  computed: {
    ...mapState('bookmarks', {
      bookmarks: state => state.bookmarks
    }),

    slicedBookmarks() {
      return this.bookmarks.slice(0, this.bookmarksCount)
    },

    hasBookmarksOffset() {
      return this.bookmarks.length > this.bookmarksCount
    },

    hasBookmarks() {
      return this.bookmarks.length > 0
    }
  },

  components: {
    Article,
    BaseButton
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

    &_item {
      margin-bottom: 24px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &_navigation {
      margin-top: 24px;
    }
  }
}
</style>
