<template>
  <div class="ads">
    <img class="img" src="http://qnm.hunliji.com/FgRAZnKyQyaFJPKq9Spp3Ohq4pGQ?imageView2/1/w/390/h/300" alt="美图">
    <div class="motto">
      <div class="text">Life is like a box of Chocolates that you will never know what you gonna get. 🍫</div>
      <div class="author">— 《Forrest Gump》</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.ads
  display flex
  align-items center
  height 100px
  margin 24px 24px 0
  .img
    max-width  130px
    height 100px
    margin-right 16px
  .motto
    display flex
    flex-direction column
    justify-content: space-between;
    height: 90px;
    .text
      font-size 12px
      color #444
    .author
      font-size 11px
      color #999
</style>