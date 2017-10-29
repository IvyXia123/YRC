<template>
  <div class="bannerNoLoop">
    <img src="../../assets/images/texpress-banner.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'bannerNoLoop',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  @import './../../less/init.less';
  .bannerNoLoop{
    width:100%;
    height:100%;
    img{
      display:block;
      .w(100%);
      .h(320/@rem);
    }
  }
</style>
