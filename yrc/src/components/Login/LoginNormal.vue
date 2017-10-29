<template>
  <div class="loginNormal">
    <ul>
      <li>
        <input type="text" placeholder="用户名"/>
      </li>
      <li>
        <input type="text" placeholder="手机号"/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'loginNormal',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  @import './../../less/init.less';
  .loginNormal{
    ul{
      padding:50/@rem 60/@rem;
      box-sizing:border-box;
      li{
        .h(60/@rem);
        line-height:(60/@rem);
        border-bottom:1px solid #c0c0c0;
        margin:20/@rem 0;
      }
    }
  }
</style>
