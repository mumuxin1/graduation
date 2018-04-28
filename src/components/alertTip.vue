<template>
  <div id="alert">
    <transition name="currentMask">
      <div class="mask" @click="complete" v-show="isAlertShow"></div>
    </transition>
    <transition name="currentAlert">
      <div class="alert_container" v-show="isAlertShow" :style="{height: setHeight + 'px',marginTop: -setHeight/2 + 'px', width: setWidth + 'px', marginLeft: -setWidth/2 + 'px'}">
        <div class="alert_option" :style="{height: setHeight + 'px'}">
          <div class="alert_top" v-if="tipType!='tips'">
            <slot name="delete"></slot>
            <slot name="phoneFormat"></slot>
          </div>
          <div class="alert_bottom">
            <div class="title">{{Title}}</div>
            <div class="describe">
              <span>{{Describe}}</span>
            </div>
            <div class="custom_btn" v-if="tipType=='custom'">
              <slot name="operation"></slot>
            </div>
            <div class="custom_btn" v-if="tipType=='tips'">
              <slot name="operation"></slot>
            </div>
            <ul class="alert_btn" v-if="tipType=='alert'">
              <li>
                <button id="complete" @click="complete">好的</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {}
  },

  props: ['tipType', 'setHeight', 'Title', 'Describe', 'setWidth'],

  computed: {
    ...mapState(['isAlertShow', 'AlertShowType'])
  },

  methods: {
    ...mapMutations(['ALERT_SWITCH']),

    complete () {
      this.ALERT_SWITCH(this.AlertShowType)
    }
  }
}
</script>
<style lang='less' scoped>
@import "../css/mixin";
#alert {
  .mask {
    .fs;
    z-index: 998;
    background: rgba(0, 0, 0, 0.5);
  }
  .alert_container {
    .wh(265px, 290px);
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -132.5px;
    margin-top: -145px;
    z-index: 999;
    .alert_option {
      background: #fff;
      border-radius: 5px;
      text-align: center;
      overflow: hidden;
      .alert_top {
        .wh(100%, 110px);
        padding-top: 20px;
        img {
          width: 100px;
        }
      }
      .alert_bottom {
        .wh(100%, ~"calc(100% - 125px)");
        padding-top: 10px;
        .title {
          .wh(100%, 23px);
          font-size: 15px;
          color: #444;
        }
        .describe {
          .wh(auto, auto);
          font-size: 12px;
          color: #777;
          line-height: 15px;
          margin: 8px 0 24px 0;
          span {
            display: inline-block;
            text-align: left;
            padding: 0 25px;
          }
        }
        .custom_btn {
          .wh(100%, 50px);
        }
        .alert_btn {
          overflow: hidden;
          .wh(100%, 62px);
          padding-top: 10px;
          li {
            .wh(100%, 100%);
            #complete {
              .wh-l(75%, 32px);
              background: @themeColor;
              border-radius: 5px;
              color: #fff;
              font-size: 13px;
              &:active {
                background: #34953e;
              }
            }
          }
        }
      }
    }
  }
}
</style>
