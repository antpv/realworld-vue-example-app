<template>
  <div class="article">
    <div class="article__image">
      <img
        src="https://images.unsplash.com/photo-1559592892-19db4235d786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        alt=""
      />
    </div>
    <div class="article__title">
      To increase your security, you must update your password
    </div>
    <div class="article__meta-wrapper">
      <div class="article__meta-author">
        The New York Times
      </div>
      <div class="article__meta-date">
        2 hours ago
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Article'
}
</script>

<style lang="scss" scoped>
.article {
  display: block;

  &__image {
    font-size: 0;
    line-height: 0;
    margin-bottom: 12px;

    & img {
      max-width: 100%;
    }
  }

  &__title {
    font-family: $font-family-titles;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 6px;
  }

  &__meta-wrapper {
    font-size: 13px;
    color: $text-color-secondary;
  }

  &__meta-author {
    cursor: pointer;
    display: inline-block;
  }

  &__meta-date {
    cursor: default;
    display: inline-block;
    margin-left: 12px;
  }
}
</style>
