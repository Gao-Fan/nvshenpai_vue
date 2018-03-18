<template>
  <swiper :options="swiperOption" ref="mySwiper" class="head">
    <!-- slides -->
    <swiper-slide v-for="banner in lunbolist" class="headbox">
      <img v-bind:src="banner.image_src"/>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>    <!--分页器-->
    <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->  <!--//导航按钮-->
    <!-- <div class="swiper-button-next" slot="button-next"></div> -->  <!--//导航按钮-->
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div>   -->  <!--//滚动条-->
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import axios from 'axios'
export default {
  name: 'Nav',
  props:["lunbolist"],
  methods:{

  },
  mounted(){
  	//console.log(this.lunbolist)
  },
  updated(){
    //console.log(this.lunbolist[0].image_src)
  },
  data() {
        return {          
            //banners:[{src:require(this.lunbolist)},{src:require("../../assets/img/home-head2.jpg")},{src:require("../../assets/img/home-head3.jpg")}],
            swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
            // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>
            //假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
            // notNextTick: true,
            // swiper configs 所有的配置同swiper官方api配置
            loop:false,     //循环
            autoplay:{
              disableOnInteraction: false
            },          /*自动切换等时间间隔*/
            loopAdditionalSlides : 3,
            // direction : 'horizontal', /*滑动方向，可设置水平(horizontal)或垂直(vertical)*/
            // grabCursor : true, /*设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。（根据浏览器形状有所不同）*/
            // setWrapperSize :true, /*Swiper从3.0开始使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。*/
            // autoHeight: true,  /*自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。*/
            pagination : {
              el:'.swiper-pagination'         
            },              //分页器
            // paginationClickable :true,此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
            // navigation:{
            //   prevEl:'.swiper-button-prev', //上一张
            // nextEl:'.swiper-button-next' //下一张
            // },
            // scrollbar:{
            //   el:'.swiper-scrollbar'         //滚动条
            // },
               
            // mousewheelControl : true, /*设置为true时，能使用鼠标滚轮控制slide滑动。*/
            // observeParents:true,      /*将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。*/
            // // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
            // debugger: true,
          }
        }
      }
}
</script>

<style scoped>
  .head{
    width: 10rem;
    height: 6.666667rem;
    display: block;
    position: relative;
  }
  .head img{
    width: 100%;
    height: 100%;
  }
</style>