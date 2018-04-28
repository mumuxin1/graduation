<template>
	<div id="head">
    <div class="head-left">
      <div class="back" v-if="goBack" @click="$router.go(-1)">
        <img src="/statc/images/global/back.png">
      </div>
      <slot name="leftCustom"></slot>
    </div>
    <div class="head-msg">{{headTitle}}</div>
		<div class="head-right">
      <slot name="eqMore"></slot>
      <slot name="deviceMore"></slot>
      <slot name="storage"></slot>
      <slot name="oneMore"></slot>
      <slot name="transmission"></slot>
      <slot name="rename"></slot>
    </div>
    <div class="bom-pixel"></div>
	</div>
</template>

<script>
// import {mapState, mapMutations } from 'vuex'
// import { backTotal } from '../../service/method'
export default {
  data () {
    return {

    }
  },

  props: ['headTitle', 'goBack', 'showMore', 'text'],

  methods: {

  }
}
</script>

<style lang="less" scoped>
  @import '../css/mixin';

  #head{
    .wh-l(100%, 50px);
    position: fixed;
    top: 0;
    // z-index: 100;
    background: white;
    text-align: center;
    .head-left{
      .wh-l(30%, 50px);
      float: left;
      .back{
        position: relative;
        .wh(60%, 100%);
        img{
          height: 20px;
          position: absolute;
          top: 50%;
          left: 20px;
          margin-top: -10px;
        }
      }
    }
    .head-msg{
      .wh-l(40%, 50px);
      float: left;
      font-size: 16px;
      color: #000;
      .text-over;
    }
    .head-right{
      .wh-l(30%, 50px);
      float: left;
    }
  }
</style>
