<template>
  <div id="box">
  	<header>
  		<em>——</em>
  		&nbsp;&nbsp;
  			礼服日租
  		&nbsp;&nbsp;
  		<em>——</em>
  		<br />
  		<span>ON-DEMAND</span>
  	</header>
    <aside>
  		<div class="left">
  			BLACK TIE
  			<br />
  			<span>礼服晚宴</span>
  		</div>
  		<router-link to="#">
  			MORE&nbsp;&nbsp;
  			<i> > </i>
  		</router-link>
  	</aside>

	<div class="shopList" v-if="dress_list">
  		<router-link :to="{name:'Product',params:{fid:item.id}}" v-for="item in dress_list[0].products">
  			<div class="imgbox">
  				<div class="shopImg">
  					<img v-lazy="item.cover_image" alt="">
  				</div>
  			</div>
			<div class="detial">
				<span class='span1'>{{item.brand}}</span>
				<br />
				
				<span class='span3'>¥{{item.rental_price/100}}/{{item.dots}}天</span>
				<span class='span4'>参考价¥{{item.market_price/100}}</span>
			</div>
  		</router-link>
  	</div>
	

	<aside>
  		<div class="left">
  			PARTY
  			<br />
  			<span>礼服派对</span>
  		</div>
  		<router-link to="#">
  			MORE&nbsp;&nbsp;
  			<i> > </i>
  		</router-link>
  	</aside>

	<div class="shopList noborder" v-if="dress_list">
  		<router-link :to="{name:'Product',params:{fid:item.id}}" v-for="item in dress_list[1].products">
  			<div class="imgbox">
  				<div class="shopImg">
  					<img v-lazy="item.cover_image" alt="">
  				</div>
  			</div>
			<div class="detial">
				<span class='span1'>{{item.brand}}</span>
				<br />
				<span class='span3'>¥{{item.rental_price/100}}/{{item.dots}}天</span>
				<span class='span4'>参考价¥{{item.market_price/100}}</span>
			</div>
  		</router-link>
  	</div>
	
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'OnDemand',
  props:['dress_list']

}
</script>

<style scoped>
	header{
		width: 10rem;
		text-align: center;
		color: #232323;
		line-height: .426667rem;
		font-size: .426667rem;
		font-weight: 700;
		margin: .64rem auto;
	}
	header span{
		font-size: .266667rem;
		color: #999;
		font-weight: 400;
	}
	aside{
		width: 100%;
		height: .666667rem;
		margin: .533333rem 0;
		position: relative;
	}
	aside .left{
		border-left: 1px solid #333;
		padding-left: .266667rem;
		margin-left: .506667rem;
		height: .666667rem;
		line-height: .333333rem;
		font-size: .28rem;
		color: #333;
		white-space: nowrap;
		float: left;
	}
	aside .left span{
		color: #999;
		font-size: .253333rem;
		white-space: nowrap;
	}
	aside a{
		line-height: .466667rem;
		font-size: .293333rem;
		color: #000;
		padding-right: .493333rem;
		text-align: right;
		position: absolute;
		right: 0;
		top: 0;

		display: inlink-block;
		float: right;
	}

		.shopList{
		border-bottom: 2px solid rgb(245,245,245);
		width: 100%;
		overflow-x: auto;
		white-space: nowrap;
		overflow-y: hidden;
	}
	.shopList a{
		display: inline-block;
		margin-right: .906667rem;
		position: relative;
		background: #fff;
		overflow: hidden;
		width: 3.6rem;
	}
	.shopList a:first-child{
		margin-left: .493333rem;
	}
	.shopList a .imgbox{
		width: 3.6rem;
		position: relative;
		box-sizing: border-box;
		margin: 0;
		font-size: .4rem;
	}
	.shopImg{
		width: 100%;
		position: relative;
		font-size: 0;
		line-height: 0;
	}
	.shopImg img{
		width: 100%;
		height: auto;
	}
 	.shopList .detial{
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
