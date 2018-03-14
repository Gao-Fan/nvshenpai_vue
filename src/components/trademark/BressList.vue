<template>
  	<div>
   		<div class="title">
    		<span>所有品牌</span>
    		ALL DESIGNERS
    	</div>
    	<h3>没有数据</h3>
    	<div class="ch">
    		<div>
    			<router-link to='#'></router-link>
    			<div class='bool'>订阅</div>
    		</div>
    	</div>

	</div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'BressList',
  props:['dress_list']

}
</script>

<style scoped>
	.title{
		width: 9.466667rem;
		margin: .466667rem .266667rem;
		color: #878787;
		font-size: .16rem;
		line-height: .32rem;
		box-sizing: border-box;
	}
	.title span{
		color: #000;
		font-size: .32rem;
	}

	.ch{
		width: 8rem;
		margin: 0 auto .666667rem;
	}
	.ch>div{
		position: relative;
		padding-left: .933333rem;
		margin-top: .666667rem;
	}
	h3{
		padding: 5rem 0;
	}
</style>
