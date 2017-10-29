<template>
  <div class="registerNormal">
    <ul>
      <li>
        <span>
          <img src="./../../assets/images/user-icon.png"/>
        </span>
        <input type="text" placeholder="用户名"/>
      </li>
      <li>
        <span>
          <img src="./../../assets/images/icon-menu.png"/>
        </span>
        <input type="text" placeholder="手机号"/>
      </li>
      <li>
        <span>
          <img src="./../../assets/images/icon-menu.png"/>
        </span>
        <input type="text" placeholder="动态密码"/>
        <span class="getMobilePass">获取手机动态密码</span>
      </li>
      <li>
        <span>
          <img src="./../../assets/images/icon-menu.png"/>
        </span>
        <input type="text" placeholder="密码"/>
      </li>
      <li>
        <span>
          <img src="./../../assets/images/icon-menu.png"/>
        </span>
        <input type="text" placeholder="确认密码"/>
      </li>
    </ul>
    <div class="registerBox">
      <div class="register">立即注册</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'registerNormal',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  @import './../../less/init.less';
  .registerNormal{
    ul{
      padding:50/@rem 60/@rem;
      box-sizing:border-box;
      li{
        .h(60/@rem);
        line-height:(60/@rem);
        border-bottom:1px solid #c0c0c0;
        margin:20/@rem 0;
        border-bottom:1px solid #c0c0c0;
        span{
          flex:20/@rem;
        }
        input{
          flex:0 0 1;
        }
        .getMobilePass{
          display:inline-block;
          float:right;
          .w(250/@rem);
          .h(100%);
          line-height:60/@rem;
          text-align:right;
          color:#a48057;
        }
      }
    }
    .registerBox{
      .w(100%);
      .h(93/@rem);
      padding:0 60/@rem;
      box-sizing:border-box;
      .register{
        .w(100%);
        .h(100%);
        line-height:93/@rem;
        background:#d7c092;
        text-align:center;
        color:#fff;
      }
    }
  }
</style>
