<template>
  <div class="main">
    <header-com></header-com>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import HeaderCom from './Header/Header';
  import footer from './footer/footer';
export default {
  name: 'main',
  data () {
    return {

    }
  },
  components:{
    HeaderCom,
    'v-footer': footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
