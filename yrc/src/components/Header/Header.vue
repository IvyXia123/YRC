<template>
  <div class="header">
    <header>
      <div class="middle">
        <div class="content">
          <img src="./../../assets/images/mobile-logo.png"/>
        </div>
      </div>
      <div class="left">
        <img src="./../../assets/images/navbar-toggle-bg.png"/>
      </div>
      <div class="right">
        <img src="./../../assets/images/user-icon.png"/>
        <img src="./../../assets/images/shop-cart.png"/>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  @import './../../less/init.less';
  .header{
    .w(100%);
    .h(100%);
    header{
      .w(100%);
      .h(91/@rem);
      padding:20/@rem;
      box-sizing:border-box;
      background:#000;
      .middle,.left,.right {
        float:left;
        height:200px;
      }
      .middle{
        .w(100%);
        .h(100%);
        .content{
          .h(100%);
          /*margin:0 30% 0 20%;*/
          img{
            display:block;
            .w(140/@rem);
            .h(52/@rem);
            vertical-align:middle;
            margin:0 auto;
          }
        }
      }
      .left{
        .w(20%);
        .h(100%);
        margin-left:-100%;
        img{
          display:block;
          .w(48/@rem);
          .h(40/@rem);
          padding-top: 2px;
        }
      }
      .right{
        .w(20%);
        .h(100%);
        margin-left:-20%;
        text-align:right;
        img{
          display:inline-block;
          .w(40/@rem);
          .h(40/@rem);
          padding-top: 2px;
        }
      }
    }
  }
</style>
