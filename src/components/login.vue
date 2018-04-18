<template>
  <div class="login">
    <div class="page-part">
      <a class="mint-cell mint-field">
        <!---->
        <div class="mint-cell-left"></div>
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <!---->
            <span class="mint-cell-text">用户名</span>
            <!---->
          </div>
          <div class="mint-cell-value"><input placeholder="请输入用户名" type="text" class="mint-field-core" maxlength="10">
            <div class="mint-field-clear" style="display: none;">
              <i class="mintui mintui-field-error"></i>
            </div>
            <span class="mint-field-state is-default">
              <i class="mintui mintui-field-default"></i>
            </span>
            <div class="mint-field-other"></div>
          </div>
          <!---->
        </div>
        <div class="mint-cell-right"></div>
      </a>
      <a class="mint-cell mint-field">
        <!---->
        <div class="mint-cell-left"></div>
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <!---->
            <span class="mint-cell-text">邮箱</span>
            <!---->
          </div>
          <div class="mint-cell-value"><input placeholder="请输入邮箱" type="email" class="mint-field-core">
            <div class="mint-field-clear" style="display: none;">
              <i class="mintui mintui-field-error"></i>
            </div>
            <span class="mint-field-state is-default">
              <i class="mintui mintui-field-default"></i>
            </span>
            <div class="mint-field-other"></div>
          </div>
          <!---->
        </div>
        <div class="mint-cell-right"></div>
      </a>
      <a class="mint-cell mint-field">
        <!---->
        <div class="mint-cell-left"></div>
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <!---->
            <span class="mint-cell-text">密码</span>
            <!---->
          </div>
          <div class="mint-cell-value"><input placeholder="请输入密码" type="password" class="mint-field-core">
            <div class="mint-field-clear" style="display: none;">
              <i class="mintui mintui-field-error"></i>
            </div>
            <span class="mint-field-state is-default">
              <i class="mintui mintui-field-default"></i>
            </span>
            <div class="mint-field-other"></div>
          </div>
          <!---->
        </div>
        <div class="mint-cell-right"></div>
      </a>
      <a class="mint-cell mint-field">
        <!---->
        <div class="mint-cell-left"></div>
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <!---->
            <span class="mint-cell-text">手机号</span>
            <!---->
          </div>
          <div class="mint-cell-value"><input placeholder="请输入手机号" type="tel" class="mint-field-core">
            <div class="mint-field-clear" style="display: none;">
              <i class="mintui mintui-field-error"></i>
            </div>
            <span class="mint-field-state is-default">
              <i class="mintui mintui-field-default"></i>
            </span>
            <div class="mint-field-other"></div>
          </div>
          <!---->
        </div>
        <div class="mint-cell-right"></div>
      </a>
      <a class="mint-cell mint-field">
        <!---->
        <div class="mint-cell-left"></div>
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <!---->
            <span class="mint-cell-text">网站</span>
            <!---->
          </div>
          <div class="mint-cell-value"><input placeholder="请输入网址" type="url" class="mint-field-core">
            <div class="mint-field-clear" style="display: none;">
              <i class="mintui mintui-field-error"></i>
            </div>
            <span class="mint-field-state is-default">
              <i class="mintui mintui-field-default"></i>
            </span>
            <div class="mint-field-other"></div>
          </div>
          <!---->
        </div>
        <div class="mint-cell-right"></div>
      </a>
      <a class="mint-cell mint-field">
        <!---->
        <div class="mint-cell-left"></div>
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <!---->
            <span class="mint-cell-text">数字</span>
            <!---->
          </div>
          <div class="mint-cell-value"><input placeholder="请输入数字" number="true" type="number" class="mint-field-core">
            <div class="mint-field-clear" style="display: none;">
              <i class="mintui mintui-field-error"></i>
            </div>
            <span class="mint-field-state is-default">
              <i class="mintui mintui-field-default"></i>
            </span>
            <div class="mint-field-other"></div>
          </div>
          <!---->
        </div>
        <div class="mint-cell-right"></div>
      </a>
      <a class="mint-cell mint-field">
        <!---->
        <div class="mint-cell-left"></div>
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <!---->
            <span class="mint-cell-text">生日</span>
            <!---->
          </div>
          <div class="mint-cell-value"><input placeholder="请输入生日" type="date" class="mint-field-core">
            <div class="mint-field-clear" style="display: none;">
              <i class="mintui mintui-field-error"></i>
            </div>
            <span class="mint-field-state is-default">
              <i class="mintui mintui-field-default"></i>
            </span>
            <div class="mint-field-other"></div>
          </div>
          <!---->
        </div>
        <div class="mint-cell-right"></div>
      </a>
      <a class="mint-cell mint-field is-textarea">
        <!---->
        <div class="mint-cell-left"></div>
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <!---->
            <span class="mint-cell-text">自我介绍</span>
            <!---->
          </div>
          <div class="mint-cell-value">
            <textarea placeholder="自我介绍" rows="4" class="mint-field-core"></textarea>
            <div class="mint-field-clear" style="display: none;">
              <i class="mintui mintui-field-error"></i>
            </div>
            <span class="mint-field-state is-default">
              <i class="mintui mintui-field-default"></i>
            </span>
            <div class="mint-field-other"></div>
          </div>
          <!---->
        </div>
        <div class="mint-cell-right"></div>
      </a>
    </div>
    <button>登录</button>
    <span>已有账户？去注册</span>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      username: "用户名",
      password: "密码"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang ="scss" scoped>
@import "../css/mixin.scss";

.login {
  @include wh(100%,100%);
}
</style>
