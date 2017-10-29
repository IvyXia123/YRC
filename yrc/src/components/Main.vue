<template>
  <div class="main">
    <header-com></header-com>
    <!--<v-banner></v-banner>-->
    <v-footer></v-footer>
  </div>
</template>

<script>
  import HeaderCom from './Header/Header';  // 头部
  import footer from './footer/footer';     // 底部
//  import banner from './home/banner';       // 轮播图
export default {
  name: 'main',
  data () {
    return {

    }
  },
  components:{
    HeaderCom,
    'v-footer': footer
//    'v-banner': banner
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
