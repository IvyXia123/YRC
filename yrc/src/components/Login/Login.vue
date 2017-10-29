<template>
  <div class="login">
    <header-com></header-com>
    <banner-no-loop></banner-no-loop>
    <tab-tittle></tab-tittle>
  </div>
</template>

<script>
  import HeaderCom from './../Header/Header';
  import BannerNoLoop from './../Banner/BannerNoLoop';
  import TabTittle from './../Tabs/tabTittle';
export default {
  name: 'login',
  data () {
    return {

    }
  },
  components:{
    HeaderCom,
    BannerNoLoop,
    TabTittle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
