<template>
  <div id='box'>
    <div id='show' v-if='special_list' v-for='item in special_list'>
    	<router-link to='#'>
    		<img class='index' :src="item.image_src" alt="">
    		<img class='zhizhen' src="../../assets/img/jt.png" alt="">
    	</router-link>

    	<div class="shopList">
  			<router-link to="#" v-for="itemin in item.products.rows">
	  			<div class="imgbox">
	  				<div class="shopImg">
	  					<img :src="itemin.cover_image" alt="">
	  				</div>
	  			</div>
				<div class="detial">
					<span class='span1'>{{itemin.brand}}</span>
					<!-- <span class='span2'>只剩{{item.sale_stock}}件</span> -->
					<br />
					<span class='span3'>星级{{itemin.dots}}</span>
					<span class='span4'>参考价¥{{itemin.market_price/100}}</span>
				</div>
  			</router-link>
  		</div>
    </div>
   </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SpecialList',
  props:['special_list']
}
</script>

<style scoped>
	#box{
		overflow-y: auto;
		overflow: hidden;
		z-index: 10;
		background: #fff;
		width: 10rem;
		overflow: hidden;

	}
	#show{
		width: 10rem;
		height: auto;
		overflow: hidden;
	}
	#show a{
		display: block;
		width: 10rem;
		height: auto;
		overflow: hidden;
		position: relative;
	}
	#show a .index{
		width: 100%;
	}
	#show .zhizhen{
		position: absolute;
		bottom: -1px;
		left: 50%;
		transform: translate(-50%,0);
		width: .5rem;
	}

	/*list*/


	#box .shopList{
		border-bottom: 2px solid rgb(245,245,245);
		width: 100%;
		margin-top: .533333rem;
		white-space: nowrap;
		overflow-y: hidden;
		overflow-x: auto;
	}
	#show .shopList a{
		display: inline-block;
		margin-right: .906667rem;
		position: relative;
		background: #fff;
		overflow: hidden;
		width: 3.6rem;
	}
	#show .shopList a:first-child{
		margin-left: .493333rem;
	}
	#show .shopList a .imgbox{
		width: 3.6rem;
		position: relative;
		box-sizing: border-box;
		margin: 0;
		font-size: .4rem;
	}
	#show .shopImg{
		width: 100%;
		position: relative;
		font-size: 0;
		line-height: 0;
	}
	#show .shopImg img{
		width: 100%;
		height: auto;
	}
 	#show .shopList .detial{
		box-sizing: border-box;
		font-size: .24rem;
		width: 100%;
		color: #000;
		line-height: .4rem;
		padding: .2rem .2rem .333333rem 0;
		position: relative;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.span1{
		font-size: .213333rem;
		color: #000;
		font-weight: 700;
		line-height: .466667rem;
	}
	.span2{
		border: 1px solid #f5359b;
		font-size: .213333rem;
		color: #f5359b;
		height: .333333rem;
		line-height: .333333rem;
		padding: 0 .133333rem;
		margin-right: .133333rem;
		margin-bottom: .133333rem;
		background: #fff;
		font-weight: 400;
		position: absolute;
		right: 0;
	}
	.span3{
		font-size: 0.213333rem;
		line-height: .466667rem;
		font-weight: 400;
		color: #f5359b;
	}
	.span4{
		font-size: .213333rem;
		float: right;
		color: #989898;
		line-height: .466667rem;
		font-weight: 400;
	}
	.span_zu{
		border: 1px solid #f5359b;
		font-size: .143333rem;
		color: #f5359b;
		height: .333333rem;
		line-height: .333333rem;
		padding: 0 .033333rem;
		margin-right: .133333rem;
		margin-bottom: .133333rem;
		background: #fff;
		font-weight: 400;
		position: absolute;
		left: 0;
	}
	#box .noborder{
		border-bottom: none;
	}
</style>
