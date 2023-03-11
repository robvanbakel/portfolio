<template>
  <div class="feature">
    <div class="feature-image-wrapper">
      <video v-if="imgType === 'mp4'" :src="`/images/${img}`" autoplay loop muted playsinline></video>
      <img v-else :src="`/images/${img}`" :alt="this.$slots['title']()[0].children" />
    </div>
    <div>
      <h3>
        <slot name="title"></slot>
      </h3>
      <slot name="body"></slot>
    </div>
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
  computed: {
    imgType() {
      return this.img.split('.').pop();
    },
  },
};
</script>

<style></style>
