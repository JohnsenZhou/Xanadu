<template>
  <div class="container">
    <img class="image" :style="{ 'max-width': imgWidth }" :src="src" />
    <div class="desc" v-if="desc">{{ desc }}</div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      default: ""
    },
    imgWidth: {
      type: String,
      default: "50%"
    }
  }
};
</script>

<style lang="stylus" scoped>
.container
  width 100%
  margin-top 16px
  text-align center
  .image {
  }
  .desc {
    display inline-block
    width 80%
    margin-top 14px
    font-size 14px
    color #999
  }
</style>
