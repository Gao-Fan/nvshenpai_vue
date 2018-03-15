<template>
	<!DOCTYPE html>
	<html lang="zh">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<title>Shop</title>
	</head>
	<body>
		<!--header-->
		  <div class="shop_header">
		   <div class="shop_header_l" ref="FF" @click="filt()"></div>
		   	<!--点击筛选出现筛选框-->		   	
		   	<div id="filt" style="display: none;">
		   		<div class="name">衣服类型</div>
		   		<div class="type">
		   			<span>其他</span>
		   			<span>外套</span>
		   			<span>全套搭配</span>
		   			<span>上衣</span>
		   			<span>半裙</span>
		   			<span>裤子</span>
		   			<span>职业套装</span>
		   			<span>连体裤</span>
		   			<span>连衣裙</span>
		   		</div>
		   		<div class="name">季节</div>
		   		<div class="type">
		   			<span>初秋/晚秋</span>
		   			<span>春秋</span>
		   			<span>夏</span>
		   			<span>冬</span>
		   			<span>四季</span>
		   		</div>
		   		<div class="name">颜色</div>
		   		<div class="type">
		   			<span>黑色</span>
		   			<span>蓝色</span>
		   			<span>咖啡色</span>
		   			<span>香槟色</span>
		   			<span>灰色</span>
		   			<span>绿色</span>
		   			<span>玫红</span>
		   			<span>金属色</span>
		   			<span>裸色</span>
		   			<span>藏青</span>
		   			<span>橙色</span>
		   			<span>粉色</span>
		   			<span>花色</span>
		   			<span>紫色</span>
		   			<span>红色</span>
		   			<span>米白</span>
		   			<span>黄色</span>
		   			<span>拼色</span>
		   			<span>卡其色</span>
		   			<span>驼色</span>	   			
		   		</div>
		   		<div class="btm">
		   			<div class="confirm">确认</div>
		   			<div class="cancel">清空</div>
		   		</div>
		   	</div>
		   <div class="shop_header_c">
		   		包月会员<i> </i>
		   </div>
		   <div class="shop_header_r">
		   		礼服日租
		   </div>
	  </div>
	  
	  <!--select中间主体-->
	  <article>
	  	<!--条件选择-->
	  	<div class="select_box">
			<div class="data">
				<div class="data_l">租期</div>
				<div class="data_r"><span>请选择租期</span><i></i></div>
			</div>
			<!---->
			<!---->
			<!---->
			<div class="data">
				<div class="data_l">尺码</div>
				<div class="data_r">
					<span>XXS/XS</span>
					<span>S</span>
					<span>M</span>
					<span>L</span>
					<span>XL</span>
					<span>XL+</span>
					<span>均码</span>
				</div>
			</div>
			<!---->
			<!---->
			<!---->
			<div class="data">
				<div class="data_l ">场合</div>
				<div class="data_r ">
					<span>时尚OL</span>
					<span>约会小聚</span>
					<span>休闲</span>
					<span>度假</span>
					<span>职场正装</span>
					<span>年会/婚礼</span>
					<span>派对/夜店</span>
				</div>
			</div>
			<!---->
			<!---->
			<!---->
			<div class="data">
				<div class="data_l ">排序</div>
				<div class="data_r ">
					<span>推荐</span>
					<span>热门</span>
					<span>新品</span>
				</div>
			</div>
			<!---->
			<!---->
			<!---->		
			<div class="data">
				<div class="data_l limit">额度</div>
				<div class="data_r limit">
					<span><em></em></span>
					<span><em></em><em></em></span>
					<span><em></em><em></em><em></em></span>
				</div>
			</div>
	  	</div>
	  	<!--shoplist-->
	  	<div class="shoplist">
	  		<ul>
	  			<li v-for="rows in list">
	  				<img :src="rows.cover_image"/>
	  				<div class="shoplist_uls_detail">	  					
	  					<span class="brand">{{rows.brand}}</span><br/>
	  					<span class="name">{{rows.name}}</span><br/>
	  					<span>{{rows.show_specifications}}</span><br/>
	  					<i class="dots myicon icon-cloth"></i>
	  					<i class="dots myicon icon-cloth"></i>
	  					<i class="dots myicon icon-cloth"></i>
	  					<span class="price">参考价￥{{rows.market_price/100}}</span>
	  				</div>
	  			</li>	
	  		</ul>
	  	</div>
	  </article>
	  <footer>
	  	
	  </footer>
	</body>
	</html>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Shop',
  data(){
  	return {
  		list:[]
  	}
  },
  mounted(){
  	axios.get("/product/filter?platform=wap&access_token=&mode=1&type=0&filter=sort:recomm&use_limit_days=&page=1")
  	.then((res)=>{
//		console.log(res);
//		console.log(res.data.data.rows);
		this.list = res.data.data.rows;
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html{
	font-size: 37px;
	font-size: 26.67vw;
	width: 100%;
	height: 100%;
}
body{
	display: flex;
	flex-direction: column;
}
/*shop_header*/
.shop_header{
	height: 1rem;
	padding: 0 .333333rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
    border-bottom: 1px solid #eee;
}
.shop_header_l{
	width: 1.756756rem;
	height:0.486486rem;
	background: url(../assets/sx-b@2x.png)no-repeat 50%;
	background-size: contain;
	position: relative;
}
.shop_header_c{
	font-size: .426667rem;
	text-align: center;
	position: relative;
}
.shop_header_c i{
	font-style: normal;
	display: block;
	width: 0.27027rem;
	height: 0.27027rem;
	background: url(../assets/icon-4@2x.png)no-repeat;
	background-size: contain;
	position: absolute;
	right: -0.432432rem;
	top: 40%;
}
.shop_header_r{
	font-size: .373333rem;
}
/*筛选框导航*/
#filt{
	width: 100%;
	height: 10.81081rem;
	position: absolute;
	left: 0;
	top: 1rem;
	background: white;
	overflow-y: scroll;
}
.btm{
	position: fixed;
	bottom: 3.243243rem;
	left: 0;
	width: 100%;
	height: 2.666667rem;
	display: flex;
	flex-direction: column;
	font-size: .346667rem;
	z-index: 200;
	background: white;
}
.btm .confirm{
    background: #000;
    color: #fff;
    margin-top: .666667rem;	
    width: 65%;
    margin: .333333rem auto 0;
    height: .733333rem;
    line-height: .733333rem;
    text-align: center;
    font-size: .373333rem;
}
.btm .cancel{
    color: black;
    margin-top: .666667rem;	
    width: 65%;
    margin: .333333rem auto 0;
    height: .733333rem;
    line-height: .733333rem;
    text-align: center;
    font-size: .373333rem;
}
.name{
    width: 94%;
    font-size: .346667rem;
    color: #4f4f4f;
    height: 1.066667rem;
    line-height: 1.066667rem;
    margin: 0 auto;
}
.type{
	display: flex;
	align-items: center;
	margin-bottom: .266667rem;
	height: 2.432432rem;
	width: 100%;
	flex-wrap: wrap;
}
.type span{
	display: block;
	width: 20%;
    margin-right: 2%;
    margin-left: 2%;
    height: .6rem;
    line-height: .6rem;
    text-align: center;
    border-radius: .306667rem;
    margin-bottom: .2rem;
    font-size: .346667rem;
    border: 1px solid #000;
}

/*中间主体部分*/
article{
	overflow-y:scroll ;
	flex: 1;
}
article .select_box{
	width: 100%;
}

article .select_box .data{
	display: flex;
	justify-content: space-around;
	align-items: center;
    line-height: 1.133333rem;
    white-space: nowrap;
    font-size: .346667rem;
    color: #4f4f4f;
    width: 100%;
    border-bottom: 1px solid #eee;
}
article .select_box .data .data_l{
    line-height: 1.133333rem;
    white-space: nowrap;
    font-size: .346667rem;
    padding-left: .4rem;
    color: #4f4f4f;
    width: 1.6rem;
}
article .select_box .data .data_r{
	display: inline-block;
	font-size: .346667rem;
	color: #999;
	padding: 0 .2rem;
	height: 1.133333rem;
	line-height: 1.133333rem;	
    width: 8.266667rem;
    height: 1.133333rem;
    overflow-y: hidden;
    overflow-x: auto;
    white-space: nowrap;
}
article .select_box .data .data_r i{
	display: block;
	width: .4rem;
    height: .4rem;
    float: right;
    margin-top: .36rem;
    margin-right: .266667rem;	
    background: url(../assets/right@2x.png)no-repeat;
    background-size: contain;
}

article .select_box .data span{
	display: inline-block;
	font-size: .346667rem;
	color: #999;
	padding: 0 .2rem;
	height: .533333rem;
	line-height: .533333rem;
	border-radius: .266667rem;
	/*position: relative;*/
}
article .select_box .data .limit span{
	display: inline-block;
    font-size: .346667rem;
    color: #999;
    padding: 0 .2rem;
    height: .533333rem;
    line-height: .533333rem;
    border-radius: .266667rem;
    position: relative;
    margin-right: .2rem;	
    box-sizing: border-box;
}
article .select_box .data .limit span em{
	display: inline-block;
    width: .4rem;
    height: .4rem;
    margin: 0 .053333rem;
    top: .093333rem;
    position: relative;
	background: url(../assets/diamondoff@3x.png) no-repeat;
    background-size: 100% auto;
}
/*shoplist*/
.shoplist{
	/*width: 9.666667rem;*/
    margin: .4rem auto 0;
}
.shoplist ul{
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 100%;
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
.shoplist_uls_detail i{
	background: url(../assets/diamond@3x.png)no-repeat;
	display: inline-block;
    width: .333333rem;
    height: .333333rem;
    margin: .106667rem .066667rem .066667rem 0;
    top: -.026667rem;
    background-size: contain;
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
.shoplist_uls_detail .price{
	float:right;
	font-size: .24rem;
}
footer{
	display: flex;
	height: 1rem;
	width: 100%;
	background: paleturquoise;
}
</style>
