<template>
  <div id="register">
    <headTop head-title="注册" go-back="true"></headTop>
    <section class="register_container">
      <div class="login_phone">
        <!-- <div class="nav">请输入你的手机进行注册</div> -->
        <div class="phone">
          <div class="phone_icon">
            <img src="/static/images/login/phone.png">
          </div>
          <input type="text" placeholder="手机号" v-model="phoneRegister">
        </div>
        <div class="code">
          <div class="code_icon">
            <img src="/static/images/login/email.png">
          </div>
          <input type="number" id="code_input" placeholder="请输入验证码" v-model="codeRegister">
          <mt-button type="primary" id="code_btn" v-show="!codeShow" @click="getCode">获取验证码</mt-button>
          <mt-button type="primary" id="code_btn" v-show="codeShow" disabled>{{this.codeSecond}}s</mt-button>
        </div>
        <div class="password">
          <div class="password_icon">
            <img src="/static/images/login/mima.png">
          </div>
          <input type="text" v-if="passwordSwicth" v-model="passwordValue" placeholder="请输入您的密码">
          <input type="password" v-if="!passwordSwicth" v-model="passwordValue" placeholder="请输入您的密码">
          <span @click="passwordSwicth=!passwordSwicth">
            <img class="eye" v-if="passwordSwicth" src="/static/images/login/open.png">
            <img class="eye" v-if="!passwordSwicth" src="/static/images/login/close.png">
          </span>
        </div>
        <button class="greenButton" style="width:100%"  @click="register">立即注册</button>
      </div>
      <!-- !validate.active :class="{disabledGreenBtn:!validate.active}" :disabled="true" -->
    </section>

    <!-- 手机格式错误 -->
    <alertTip Title="手机格式错误" Describe='请输入正确的手机号' tipType="alert" v-show="AlertShowType == 'phone'">
      <img slot="phoneFormat" src="/static/images/login/Invalid-format.png" style="height:100%">
    </alertTip>

    <!-- 验证码格式错误 -->
    <alertTip Title="验证码错误" Describe='请输入正确的验证码' tipType="alert" v-show="AlertShowType == 'code'">
      <img slot="phoneFormat" src="/static/images/login/Verification-code.png" style="height:100%">
    </alertTip>

  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
// import { Button } from 'mint-ui'
import headTop from '@/components/head'
import alertTip from '@/components/alertTip'
// import { verificationCodeRequest, loginRequest } from '../../service/method'
export default {
  data () {
    return {
      passwordSwicth: false, // 查看密码开关
      passwordValue: '', // 密码
      phoneRegister: '', // 手机号码
      codeRegister: '', // 验证码
      codeSecond: 59, // 验证码秒数
      codeShow: false// 验证码显示
    }
  },

  components: {
    headTop,
    alertTip
  },

  computed: {
    ...mapState(['AlertShowType']),

    // 验证状态
    validate () {
      let vPhone = /^1[3|4|5|7|8][0-9]{9}$/g.test(this.phoneRegister)
      let vCode = /^\d{6}$/g.test(this.codeRegister)
      let vPassword = /^.{1,}$/g.test(this.passwordValue)
      return {
        active: vPhone && vCode && vPassword,
        phoneReg: vPhone,
        codeReg: vCode,
        passwordReg: vPassword
      }
    }
  },

  methods: {
    ...mapMutations(['ALERT_SWITCH']),
    // 获取验证码
    getCode () {
      console.log(this.validate)
    },
    // 注册
    register () {
      console.log(11111)
      // if(this.validate.codeReg) {
      //   // loginRequest( this.NAVIGATOR, this.phoneLogin, this.codeLogin )
      // } else {
      //   this.ALERT_SWITCH('code')
      // }
     let obj = {
      phoneRegister: this.phoneRegister,
      passwordValue: this.passwordValue
     }
     let xmlhttp = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP')
     xmlhttp.open('post', 'localhost:7878/register', true)
     xmlhttp.setRequestHeader("Content-type","*")
     xmlhttp.send(obj)
     xmlhttp.onreadystatechange=function(){
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
        console.log(xmlhttp.responseText)
      }
    }
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../css/mixin';
  #register{
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background: url(/static/images/bg4.jpg) no-repeat;
    background-size: 100%, 100%;
    input{
      background: transparent
    }
    .register_container{
      .fs-noTop;
      overflow-y: auto;
      .login_phone{
        .wh(100%, 100%);
        padding: 0 10% 0 10%;
        .nav{
          .wh-l(100%, 30px);
        }
        .phone{
          .wh(100%, 45px);
          position: relative;
          .phone_icon{
            .wh(15px, 20px);
            position: absolute;
            left: 0;
            bottom: 7px;
            z-index: 1;
            img{
              width: 100%;
              .f-center;
            }
          }
          input{
            .wh(100%, 30px);
            letter-spacing: 2px;
            padding-left: 30px;
            position: absolute;
            bottom: 0;
            right: 0;
            border-bottom: 1px solid #ccc;
          }
        }
        .code{
          .wh(100%, 45px);
          position: relative;
          margin: 3% 0;
          .code_icon{
            .wh(20px, 20px);
            position: absolute;
            left: 0;
            bottom: 7px;
            z-index: 1;
            img{
              width: 100%;
              .f-center;
            }
          }
          #code_input{
            .wh(100%, 30px);
            border-bottom: 1px solid #ccc;
            margin-right: 5%;
            letter-spacing: 2px;
            padding: 0 110px 0 30px;
            position: absolute;
            left: 0;
            bottom: 0;
          }
          #code_btn{
            .wh(100px, 35px);
            color: #FFF;
            font-size: 15px;
            background: @themeColor;
            position: absolute;
            top: 3px;
            right: 0;
          }
        }
        .password{
          .wh(100%, 45px);
          margin: 0 auto;
          position: relative;
          .password_icon{
            .wh(20px, 20px);
            position: absolute;
            left: 0;
            bottom: 7px;
            z-index: 1;
            img{
              width: 100%;
              .f-center;
            }
          }
          input{
            .wh(100%, 30px);
            letter-spacing: 2px;
            border-bottom: 1px solid #ccc;
            padding: 0 55px 0 32px;
            position: absolute;
            left: 0;
            bottom: 0;
          }
          span{
            .wh(50px, 50px);
            position: absolute;
            top: 0;
            right: 0;
            .eye{
              height: 20px;
              position: absolute;
              right: 0;
              top: 50%;
              margin-top: -10px;
            }
          }
        }
        .submit{
          .wh-l(100%, 50px);
          font-size: 16px;
          margin-top: 20%;
          a{
            .wh(100%, 100%);
            background: #3FAF48;
            color: #FFF;
            display: block;
            &:active{
              background: #34953E;
              color: #F2FFF5;
            }
          }
        }
        .greenButton{
          height: 40px;
          line-height: 40px;
          color: #F2FFF5;
          margin-top: 50px;
          border-radius: 30px;
          opacity: 0.7;
        }
      }
    }
  }
</style>
