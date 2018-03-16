<template>
	<!DOCTYPE html>
	<html lang="zh">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<title>CarefreeShop</title>
	</head>
	<body>
		<!--header-->
		<header>无忧购</header>
		<!--中间主题部分-->
		<article>
			<!--swiper-->
			<div class="swiper">
				<div class="swiper_container">
					<a data-v-5f6e304a="" href="http://m.msparis.com/act_mall" class="swiper_items">
					 <img src="http://static-r.msparis.com/uploads/banners/f/d/fd84038af6e1e8978d68605b3bd71987.jpg!w750" 					  onerror="this.src=`/images/loading/banner.png`">
					</a>					
				</div>
				<div class="swiper_btn"><span></span></div>
			</div>
			<!--buy_type-->
			<div class="buy_type">
				<a class="types">
					<img src="http://static-r.msparis.com/uploads/tags/7/1/7121ff72fe10b1d450ee7f34b84513ed.png">
					<span data-v-5f6e304a="">外套</span>
				</a>
			
				<a class="types">
					<img src="http://static-r.msparis.com/uploads/tags/c/9/c9784383e9db27188605e28df88df757.png">
					<span data-v-5f6e304a="">上衣</span>
				</a>
			
				<a class="types">
					<img src="http://static-r.msparis.com/uploads/tags/3/9/39a4751225879fc85a600dfa86f1ddec.png">
					<span data-v-5f6e304a="">半裙</span>
				</a>
			
				<a class="types">
					<img src="http://static-r.msparis.com/uploads/tags/d/b/dbe46544f9a0621d3d153973894da010.png">
					<span data-v-5f6e304a="">裤子</span>
				</a>
			
				<a class="types">
					<img src="http://static-r.msparis.com/uploads/tags/f/b/fb92ef8f1a209364d87953431ed6bfa6.png">
					<span data-v-5f6e304a="">连体裤</span>
				</a>
			
				<a class="types">
					<img src="http://static-r.msparis.com/uploads/tags/0/4/04df5c0eb266906c83584184ffd1c55d.png">
					<span data-v-5f6e304a="">连衣裙</span>
				</a>
			
				<a class="types">
					<img src="http://static-r.msparis.com/category_all.png">
					<span data-v-5f6e304a="">查看全部</span>
				</a>
			</div>
			<!--part——品牌推荐-->
			<div class="index_head">
				<em>——</em>&nbsp;&nbsp;品牌推荐&nbsp;&nbsp;<em>——</em><br>
				<span>BRANDS</span>			
			</div>
			<ul class="nav_uls">
				<li><img src="http://static-r.msparis.com/uploads/brands/8/4/84f80672920574236cc0b876b3b0ee8f.png" alt="" /></li>
				<li><img src="http://static-r.msparis.com/uploads/brands/e/f/ef5683e16d927e2fc099d843386fb287.png" alt="" /></li>
				<li><img src="http://static-r.msparis.com/uploads/brands/f/3/f30f75ee2e4a00f167f823846c82c3a3.png" alt="" /></li>
				<li><img src="http://static-r.msparis.com/uploads/brands/3/7/375635f486082eef480c68d81d49b142.png" alt="" /></li>
				<li><img src="http://static-r.msparis.com/uploads/brands/0/5/05eb5284dfc16d7058e574f1bb010494.png" alt="" /></li>
				<li><img src="http://static-r.msparis.com/uploads/brands/d/8/d8efe6cdde9f483d0e4cff8f1e043d02.png" alt="" /></li>
				<li><img src="http://static-r.msparis.com/uploads/brands/9/5/953895fd5c1b6633138d06e5d2390075.png" alt="" /></li>
				<li><img src="http://static-r.msparis.com/uploads/brands/6/8/68a8695a729c39f03ae224f91b9a8a2b.png" alt="" /></li>
				<li><img src="http://static-r.msparis.com/uploads/brands/7/b/7b17df84c8c06babe212cdb84ed58a66.png" alt="" /></li>
				<li><img src="http://static-r.msparis.com/uploads/brands/1/d/1dd9c3eb08428acd350cfc985b4be827.png" alt="" /></li>
				<li><img src="http://static-r.msparis.com/uploads/brands/e/b/eb90ffeb9b7b837fbae74aa9b03a33e1.png" alt="" /></li>
				<li><img src="http://static-r.msparis.com/uploads/brands/3/e/3e886aa83e73ae0d60914fa56ef89538.png" alt="" /></li>
			</ul>
			<!--part--热卖单品-->
			<div class="index_head">
				<em>——</em>&nbsp;&nbsp;热卖单品&nbsp;&nbsp;<em>——</em><br>
				<span>BEST SELLER</span>
			</div>
			<!--shoplist-->
		  	<div class="shoplist">
		  		<ul>
		  			<li v-for="pro in list">
		  				<img :src="pro.cover_image" alt="" />
		  				<div class="shoplist_uls_detail">	  					
		  					<span class="brand">{{pro.brand}}</span><br/>
		  					<span class="name">{{pro.name}}</span><br/>
		  					<span class="stock">只剩{{pro.sale_stock}}件</span>
		  					<span>{{pro.show_specifications}}</span><br/>
		  					<span class="red">￥{{pro.sale_price/100}}<i>￥{{pro.market_price/100}}</i><em>{{pro.new_buy_discount}}折</em></span>
		  				</div>
		  			</li>		  			
		  		</ul>
		  	</div>
		  	<!--查看全部热卖商品-->
		  	<div class="bot_more">查看全部热卖单品</div>
		</article>
		<!--footer-->
		<footer></footer>
	</body>
	</html>
</template>

<script>
import axios from 'axios';
export default{
	name:'Carefree',
	data(){
		return {
			list:[]
		}
	},
	mounted(){
		axios.get("/mall?platform=wap&access_token=")
		.then((res)=>{
//			console.log(res);
//			console.log(res.data.data.popular_product)
			this.list = res.data.data.popular_product;
		})
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html{
	font-size: 37px;
	/*font-size: 26.67vw;*/
	width: 100%;
	height: 100%;
}
body{
	display: flex;
	flex-direction: column;
}
/*header*/
header{
	font-size: .426667rem;
	text-align: center;
	text-overflow: ellipsis;
	overflow: hidden;
	height: 1.066667rem;
	line-height: 1.066667rem;
	border-bottom: 1px solid #eee;
}
/*中间主体部分*/
article{
	flex: 1;
	overflow-y: scroll;
	background: #eee;
	overflow-x: hidden;
}
/*swiper*/
.swiper{
	height: 4rem;
	position: relative;
	width: 100%;
}
.swiper .swiper_container img{
	height: 4rem;
	width: 100%;
	display: block;
}
.swiper .swiper_btn{
	height: 0.432432rem;
	width: 100%;
	position: absolute;
	bottom: 0.27027rem;
	text-align: center;
}
.swiper .swiper_btn span{
	display: inline-block;
	width: 0.216216rem;
	height: 0.216216rem;
	border-radius: 50%;
	background: white;
	position: absolute;
	bottom: 0;
}
/*buy_type*/
.buy_type{
	margin: 0 auto .2666667rem;
	padding: .48rem 0 0 .666667rem;
	display: flex;
	flex-wrap: wrap;
	background: #fff;
}
.buy_type .types{
	width: 1.333333rem;
	margin: 0 1rem 0 0;
	color: black;
	font-size: .32rem;
	line-height: .533333rem;
	display: inline-block;
	display: flex;
	/*flex-direction: column;*/
}
.buy_type .types img{
	width: 1.306667rem;
	margin: 0 auto .266667rem;	
}
.buy_type .types span{
	display: block;
}
.buy_type .types{
	font-size: .32rem;
	color: #000;
	text-align: center;
	margin-bottom: .266667rem;
	display: block;	
}
/*part_品牌推荐*/
.index_head{
	width: 100%;
	text-align: center;
	line-height: .436667rem;
	color: #232323;
	font-size: .426667rem;
	font-weight: 700;
	padding: .533333rem 0;
	background: #fff;
}
.index_head em{
	font-weight: 100;
}
.index_head span{
	font-size: .266667rem;
    color: #999;
    font-weight: 400;
}
.nav_uls{
	display: flex;
	/*justify-content: space-around;*/
	text-align: center;
	flex-wrap: wrap;
	background: white;
	overflow: hidden;
	width: 10rem;
	padding: 0 0 0 .426667rem;
    margin: 0 auto .2666667rem;
}
.nav_uls li{
    position: relative;
    width: 2.133333rem;
    height: 2.133333rem;
    text-align: center;
    background-color: #f8f8f8;
    margin-right: .2rem;
    margin-bottom: .266667rem;
}
.nav_uls img{
    object-fit: contain;
    width: 1.866667rem;
    height: 100%;
}
/*shoplist*/
.shoplist{
  	background: #FFF;
  	padding: 0 .2rem;
}
.shoplist ul{
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	/*margin: .4rem auto 0;*/
}
.shoplist ul li{
    background: #fff;
    display: inline-block;	
    font-size: .4rem;
    margin-top: .266667rem;
    width: 48%;
}
.shoplist ul li>img{
	width: 100%;
	height: auto;
}
.shoplist_uls_detail{
	color: #000;
	line-height: .4rem;
	margin: .2rem .2rem .333333rem;
	position: relative;
}
.shoplist_uls_detail span{
	font-size: .24rem;
	color: #989898;
	line-height: .466667rem;
	font-weight: 400;	
}
.shoplist_uls_detail .stock{
	border: 1px solid #f5359b;
	color: #F5359B;
	height: .333333rem;
	line-height: .333333rem;
	padding: 0 .333333rem;
	font-size: .226667rem;
	margin-right: .133333rem;
	margin-bottom: .133333rem;
}

.shoplist_uls_detail .brand{
    color: #000;
    font-size: .306667rem;
    font-weight: 700;	
}
.shoplist_uls_detail .name{
	font-size: .24rem;
	color: #989898;
	line-height: .466667rem;
	font-weight: 400;	
}
.shoplist_uls_detail .red{
    color: #f5359b;
}
.shoplist_uls_detail .red em,.shoplist_uls_detail .red i{
	font-style: normal;
}
.shoplist_uls_detail .red i{
	font-size: .226667rem;
	text-decoration: line-through;
	color: #989898!important;
	margin-left: .133333rem;
}
.shoplist_uls_detail .red em{
	font-size: .226667rem;
	color: #333333;
	margin-left: .2rem;
}
.shoplist_uls_detail .price{
	float:right;
	font-size: .24rem;
}
/*查看全部热卖单品*/
.bot_more{
	width: 100%;
	text-align: center;
	color: #7a7a7a;
	font-size: .346667rem;
	padding: .8rem 0;
	background: #fff;
}
/*footer*/
footer{
    width: 100%;
    height: 1.333333rem;
    background: #fff;
}
</style>
