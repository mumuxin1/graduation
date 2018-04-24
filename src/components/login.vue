<template>
  <div id="login">
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username" style="background:transparent"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" style="background:transparent"></mt-field>
    <span>没有账号？<a>去注册</a></span>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      username: '',
      password: '密码'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang = "scss" scoped>
@import '../css/mixin.scss';
#login{
  width: 375px;
  height: 667px;
  background: url(/static/images/bg4.jpg) no-repeat;
  background-size: 100%,100%;
  input{
    background: transparent;
  }
}
</style>
