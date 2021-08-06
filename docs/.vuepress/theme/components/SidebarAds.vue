<template>
  <div class="ads">
    <img
      class="img"
      src="https://modao.cc/uploads5/images/7046/70467333/v2_qxfdjl.jpg"
      alt="美图"
    />
    <div class="motto">
      <div class="text">
        Life is like a box of Chocolates that you will never know what you gonna
        get. 🍫
      </div>
      <div class="author">— 《Forrest Gump》</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.ads
  display flex
  align-items center
  height 100px
  margin 24px 24px 0
  .img
    flex-shrink 0
    max-width  130px
    height 100px
    margin-right 16px
  .motto
    display flex
    flex-direction column
    justify-content space-between
    height 90px
    .text
      font-size .75rem
      color #444
    .author
      font-size .75rem
      color #999
@media (max-width: 719px) {
  .ads .img {
    width: 100px;
    height: 77px;
  }
  .ads .motto {
    .text, .author {
      font-size .7rem
    }
  }
}
</style>
