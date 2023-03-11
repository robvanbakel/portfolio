<template>
  <div class="feature">
    <h3>
      <slot name="title"></slot>
    </h3>
    <div class="feature-image-wrapper desktop">
      <img :src="`/images/${img}`" :alt="this.$slots['title']()[0].children" />
    </div>
    <p>
      <slot name="body"></slot>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
