<template>
  <div class="hello">
    <div class='show' v-if='banner_list'>
    	<router-link to='#'>
    		<img :src="banner_list.image_daily_sel" alt="">
    	</router-link>
    	<router-link to='#'>
    		<img :src="banner_list.image_dress" alt="">
    	</router-link>
    </div>
   </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'BannerList',
  props:['banner_list'],
  data(){
    return{}
  }

}
</script>

<style scoped>
	.show{
		display: flex;
		width: 9.28rem;
		justify-content: space-between;
		margin: .1rem auto;
	}
	.show a{
		display: inline-block;
		width: 50%;
	}
	.show a img{
		width: 100%;
	}
/**/
</style>
