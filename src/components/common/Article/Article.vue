<template>
  <div class="article">
    <div class="article__image"></div>
    <div class="article__title">
      To increase your security, you must update your password
    </div>
    <div class="article__description">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque tenetur sunt iusto iste
        repellendus!
      </p>
    </div>
    <div class="article__meta-wrapper">
      <div class="article__meta-author">
        The New York Times
      </div>
      <span class="middotDivider"></span>
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
div.stretchy-wrapper > div {
}

.article {
  display: block;

  &__image {
    width: 100%;
    padding-bottom: 56.25%;
    position: relative;
    background: $gray;
    font-size: 0;
    line-height: 0;
    margin-bottom: 12px;
  }

  &__title {
    font-family: $font-family-titles;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 6px;
  }

  &__description {
    margin-bottom: 6px;
  }

  &__meta-wrapper {
    color: $text-color-lighten;
  }

  &__meta-author {
    cursor: pointer;
    display: inline-block;
  }

  &__meta-date {
    cursor: default;
    display: inline-block;
  }
}

.middotDivider {
  padding-right: 6px;
  padding-left: 6px;
  font-size: 13px;

  &:after {
    content: '\00B7';
  }
}
</style>
