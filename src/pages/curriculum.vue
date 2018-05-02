<template>
  <div id="curriculum">
    <mt-swipe :show-indicators="false" :auto ="0">
        <mt-swipe-item>
            <div class="top">
                <h3 v-text="date"></h3>
                <div class="content">
                    <img src="/static/images/bg4.jpg" alt="">
                </div>
            </div>
            <div class="buttom">
                <ul class="date">
                    <li><span>SUN</span><span>{{day[7]}}</span></li>
                    <li><span>MON</span><span>{{day[1]}}</span></li>
                    <li><span>TUE</span><span>{{day[2]}}</span></li>
                    <li><span>WED</span><span>{{day[3]}}</span></li>
                    <li><span>THU</span><span>{{day[4]}}</span></li>
                    <li><span>FRI</span><span>{{day[5]}}</span></li>
                    <li><span>SAT</span><span>{{day[6]}}</span></li>
                </ul>
                <ul class="list">
                    <li>
                        <img src="/static/images/bg4.jpg" alt="">
                        <div class="text">
                            <span>计算机</span>
                            <span>AM-8:00-10:00</span>
                        </div>
                    </li>
                    <li>
                        <img src="/static/images/bg4.jpg" alt="">
                        <div class="text">
                            <span>计算机</span>
                            <span>AM-8:00-10:00</span>
                        </div>
                    </li>
                    <li></li>
                </ul>
            </div>
        </mt-swipe-item>
        <mt-swipe-item>本周</mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script >
import { Swipe, SwipeItem } from 'mint-ui'
export default {
  data () {
    return {
      date: '', // 日期
      day: [], // 号数
      arr1: [1, 3, 5, 7, 9, 11], // 大月
      arr2: [4, 6, 8, 10, 12] // 小月
    }
  },
  components: {
    Swipe,
    SwipeItem
  },
  mounted () {
    let date = new Date()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let week = date.getDay()
    let str = date.getFullYear() + '-' + ( month < 10 ? '0'+ month:month) + '-' + ( day < 10? '0'+ day:day)
    let array = new Array()
    let i = week
    let j = week 
    let day2 = day
    while(i >0) {
      if(day <= 0) {
        if(this.arr1.indexOf(month)) {
          day = 30
        } else if (this.arr2.indexOf(month)) {
          day = 31
        }
      }
      array[i] = day
      i--
      day--
    } 
    while(j <= 7) {
      if(this.arr1.indexOf(month)) {
        if( day2 === 31) {
          day2 = 1
        }
      } else {
          if(day2 === 30) {
              day2 =1
          }
      }

      array[j] = day2
      j++
      day2++
    }
    console.log(array)
    this.date = str
    this.day = array
  }
}
</script>
<style lang="scss" scoped>
@import '../css/mixin.scss';
#curriculum{
    @include wh(100%,100%);
    .top{
      @include wh(100%,50%);
      background: url(/static/images/bg4.jpg);
      background-size: 100%, 100%;
      padding-top: 70px;
      .content{
        @include wh(100px,100px);
        overflow: hidden;
        border-radius: 50%;
        margin-left: 36%;
        margin-top: 40px;
        img{
            @include wh(100%,100%);
        }
      }
    }
    .buttom{
      @include wh(100%,50%);
      padding: 0 13px;
      .date{
        display: flex;
        li{
            width: 14.2%;
            font-size: 7.5px;
            display: flex;
            flex-direction: column

        }
        span{
            padding: 14px 0;
            display: block;
        }
      }
    .list{
        @extend .date;
        flex-direction: column;
        li{
            display: flex;
            flex-direction: row;
            @include wh(100%,63px);
            align-items: center;
            border-top: 1px solid #eeeeef;
            img{
                @include wh(36px,36px);
                border-radius:50%;
            }
            .text{
                flex: 1;
                margin-left: 15px;
            }
            span{
                padding: 5px 0;
                text-align: left;
            }
        }
    }
    }
}
</style>
