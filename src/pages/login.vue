<template>
  <div id="login">
    <form action="">
      <div class="text">
        <label for="">用户名</label>
        <input type="text" v-model="username">
      </div>
      <div class="text">
        <label for="">密码 </label>
        <input type="password" v-model="password">
      </div>
      <button @click="login">登录</button>
      <span>没有账号？
        <a @click="goRegister">去注册</a>
      </span>
    </form>

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
  },
  methods: {
    goRegister () {
      this.$router.push({path: '/register'})
    },
    login () {
      this.$http.post('http://localhost:7878/login', {
        phoneRegister: this.username,
        passwordValue: this.password
      },
      {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      })
        .then((Response) => {
          console.log(typeof Response.data)
          if (Response.data === 1) {
            console.log(111)
            this.$router.push({path: '/curriculum'})
          } else {
            console.log(222)
          }
        })
    }
  }
}
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
      bottom: 20%;
      left: 50%;
      margin-left: -45%;

      .text {
        height: 50px;
        padding: 10px 0 10px 0;
        border-bottom: 1px solid #838189;
        display: flex;
        justify-content: space-between;
      }

      input {
        background: transparent;
        outline: 0;
        @include wh(78%,100%);
        font-size:20px;
        text-align: center;
        color: #29bd35
      }
      button {
        height: 45px;
        width: 100%;
        margin-top: 40px;
        background: #f73668;
        border-radius: 20%;
        border-radius: 30px;
        opacity: 0.7;
        color: #fff;
      }
      span{
        margin-top: 20px;
        display: block;
        height: 30px;
        line-height: 30px;
        color: #7e7e83;
        a{
          color: red;
          &:active{
            background-color: transparent;
          }
        }
      }
    }
  }
</style>
