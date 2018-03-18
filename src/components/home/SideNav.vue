<template>
  <div id='box'>
    <!-- <img :src="item in sidenavlist" alt=""> -->
    <div v-for="list in sidenavlist">
    	<router-link to="#">
    		<img :src="list.image_src" alt="">
    	</router-link>    	   	
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'SideNav',
  props:['sidenavlist'],
  mounted(){
  	// console.log(this.sidenavlist)
  },
  updated(){
  	// console.log(this.sidenavlist)
  }
}
</script>

<style scoped>
	#box{
		display: flex;
		justify-content: space-between;
		width: 10rem;
		overflow: hidden;
		box-sizing: border-box;
		border-top: 1px solid #f2eae3;
		border-bottom: 1px solid #f2eae3;
	}
	#box a{
		display: inline-block;
		width: 4.986667rem;
		height: 3.08rem;
	}
	#box a:nth-child(0){
		float: left;
	}
	#box a:nth-child(1){
		float: right;
	}
	#box a>img{
		width: 100%;
		height: 100%;
		border-right: 1px solid #f2eae3;
		border-left: 1px solid #f2eae3;
	}
</style>