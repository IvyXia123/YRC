<template>
  <div class="tabTittle">
    <ul>
      <li>普通注册</li>
      <li>快速注册</li>
    </ul>
    <login-normal></login-normal>
  </div>
</template>

<script>
  import LoginNormal from './../Login/LoginNormal';
export default {
  name: 'tabTittle',
  data () {
    return {

    }
  },
  components:{
    LoginNormal
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  @import './../../less/init.less';
  .tabTittle{
    .w(100%);
    .h(45/@rem);
    color:#000;
    font-size:24/@rem;
    line-height:45/@rem;
    margin-top:-67/@rem;
    ul{
      display:flex;
      li{
        flex:1;
        text-align:center;
        padding:5/@rem;
        box-sizing:border-box;
        &:first-child{
          border-right:1px solid #fff;
        }
      }
    }
  }
</style>
