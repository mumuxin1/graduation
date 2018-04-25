<template>
  <div id="login">
    <form action="">
      <div class="text">
        <label for="">用户名</label>
        <input type="text">
      </div>
      <div class="text">
        <label for="">密码</label>
        <input type="password">
      </div>
      <button>登录</button>
      <span>没有账号？
        <a>去注册</a>
      </span>
    </form>

  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      username: "",
      password: "密码"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this componenht only -->
<style lang = "scss" scoped>
@import "../css/mixin.scss";
#login {
  @include wh(100%,667px);
  background: url(/static/images/bg4.jpg) no-repeat;
  background-size: 100%, 100%;
  form {
    @include wh(90%,auto);
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -45%;
    .text {
      height: 50px;
      padding: 20px 0 10px 0;
      border-bottom: 1px solid #838189;
    }
    input {
      background: transparent;
      outline: 0;
    }
    button {
      height: 45px;
      width: 100%;
      margin-top: 40px;
      background: #f73668;
      border-radius: 20%;
    }
  }
}
</style>
