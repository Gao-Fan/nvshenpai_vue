<template>
  <div>
    <div class="title">
    	<span>人气品牌</span>
    	FEATURED DESIGNERS
    </div>
    <div class='box'>
    	<ul>
    		<li v-for='item in daily_list'>
    			<div class='tally'>
    				<img :src="item.logo" alt="">
    			</div>
    		</li>
    	</ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'BailyList',
  props:['daily_list']
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

	.box ul{
		width: 9.653333rem;
		margin-left: .326667rem;
		box-sizing: border-box;
		overflow: hidden;
	}
	.box ul li{
		width: 2.133333rem;
		margin-right: .2rem;
		margin-bottom: .266667rem;
		font-size: .266667rem;
		line-height: .533333rem;
		text-align: center;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		float: left;
		border-radius: .2rem
	}
	.tally{
		position: relative;
		width: 2.133333rem;
		height: 2.133333rem;
		text-align: center;
		background-color: #f8f8f8;
	}
	.tally img{
		display: inline-block;
		object-fit: contain;
		width: 1.855557rem;
		height: 100%;
		box-sizing: border-box;
		margin: 0;
	}
</style>
