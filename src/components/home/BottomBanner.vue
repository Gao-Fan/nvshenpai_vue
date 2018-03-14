<template>
  <div id='box'>
	<section v-if='bottom_banner_list'>
		<router-link to="#"></router-link>	
		<img :src="bottom_banner_list.image" alt="">
	</section>
   </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'BottomBanner',
  props:['bottom_banner_list'],

  updated(){
  	//console.log(this.bottom_banner_list)
  }
}
</script>

<style scoped>
	section{
		width: 10rem;
		overflow: hidden;
		margin-bottom: 1.333333rem;
	}
	section a{
		display: block;
		width: 10rem;
		height: 100%;
		overflow: hidden;
	}
	img{
		width: 100%;
	}
</style>
