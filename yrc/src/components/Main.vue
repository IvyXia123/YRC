<template>
  <div class="main">
    <header-com></header-com>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import HeaderCom from './Header/Header';
<<<<<<< HEAD
  import footer from './footer/footer';
=======
>>>>>>> 6ee22ccbf03d5e07a76aaef1f607e393033d5aec
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
