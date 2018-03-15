<template>
  	<swiper :options="swiperOption" ref="mySwiper" class="head">
    <swiper-slide v-for="banner in photos" class="headbox">
      <img v-bind:src="banner"/>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>    <!--分页器-->
  </swiper>
</template>

<script>
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Photo',
  props:['photos'],
  updated(){
  	//console.log(this.photos)
  },
  data() {
    return {          
        swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
        loop:false,     //循环
        autoplay:{
          disableOnInteraction: false
        },          /*自动切换等时间间隔*/
        loopAdditionalSlides : 3,
        pagination : {
          el:'.swiper-pagination'         
        }              //分页器
       
      }
    }
  }
}
</script>

<style scoped>
   .head{
    width: 8.933333rem;
    height: 13.373333rem;
    margin: 0 auto;
    position: relative;
  }
  .headbox{
  	position: relative;
    overflow: hidden;
  }
  .head img{
    width: 100%;
    object-fit: contain;
  }
</style>
