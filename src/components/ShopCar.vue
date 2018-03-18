<template>
  <div>
  	<div class="head row">
  		<div class="left"></div>
  		<div class="center">
  			<span class='on'>新品无忧购</span>
  			<span>包月衣袋</span>
  			<span>礼服日租</span>
  		</div>
  		<div class="right"></div>
  	</div>
  	<div class='main'>
  		<div class='item' v-if='docs' v-for='item in docs'>
	  		<div class='check'>
	  			<img status="off" :src='off' alt="" @click='checked($event)'>
	  		</div>
	  		<div class='img'>
	  			<img :src="item.images" alt="">
	  		</div>
	  		<div class='text'>
	  			<span>{{item.brand}}</span>
	  			<br>
	  			<span>{{item.name}}</span>
	  			<br>
	  			<span>{{item.specification_name}}</span>
	  			<br>
	  			<span>{{item.spu}}</span>
	  		</div>
	  		<div class='price'>
	  			<div class='rent'>
	  				¥{{item.sale_price/100}}
	  			</div>
	  			<img src="../assets/img/垃圾箱.svg" :fid='item.product_id' alt="1" @click='RemovShop($event,item.sale_price/100)'>
	  		</div>
  		</div>
  	</div>
  	<div class='hasbot'>
  		<div class='left'>
  			合计 : 
  			<span>
  				¥{{money}}
  			</span>
  		</div>
  		<div class='right off'>
  			去结算
  		</div>
  	</div>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios'
import Footer from './Footer.vue'
import $ from 'jquery'
export default {
  name: 'ShopCar',
  data(){
    return{
    	docs:'',
    	check:false,
    	off: require("../assets/img/zf-off.png"),
    	on: require("../assets/img/zf-on.png"),
    	money:0
    }
  },
  methods:{
  	countMoney(){
		this.money = 0;
		alert("countMoney计算金额中现在的初始化金额为"+this.money)
		alert("被选中的商品数"+$('img[status=on]').length)
		for( var i = 0 ; i < $('img[status=on]').length ; i++ ){
			var money = $('img[status=on]').eq(i).parent().parent().find(".rent").html()
			money = money.replace(/¥/,'')
			this.money += Number(money);
		}
  	},
  	checked(event){
  		if( $(event.target).attr('status') == 'off' ){
  			$(event.target).attr('src',this.on)
  			$(event.target).attr('status','on')
  			this.countMoney()
  		}else{
  			$(event.target).attr('src',this.off)
  			$(event.target).attr('status','off')
  			alert("取消选中")
  			this.countMoney()
  		}
  	},
  	RemovShop(event,price){
  		var product_id = event.target.getAttribute('fid')
  		var status = $(event.target).parent().parent().find('.check').find('img').attr('status')
  		if(confirm("确认删除吗")){
			axios.post('/shopcar/removeshop',{product_id:product_id})
  		     	.then( (res)=>{
  		     		console.log(this.docs)
  		     		if( res.data.status == -704){
  		     			this.docs = false;
  		     			this.countMoney()
  		     		}else{
  		     			alert("进行删除,现在的总金额"+this.money)
  		     			this.docs = res.data
  		     			// alert("这是删除里的被选中的商品数"+$('img[status=on]').length)
  	     				// this.countMoney()
  		     	}
  		     })
  		}
  	}
  },
  updated(){
  },
  mounted(){
  	axios.get('/shopcar/findshop')
  		 .then( (res)=>{
  		 	if(res.data.status==-32){
  		 		this.docs = ''
  		 		alert('购物车内没有商品');
  		 		return;
  		 	}
  		 	 this.docs = res.data
  		 })
  },
  components:{
	Footer
  }
}
</script>

<style scoped>

	.hasbot .right.off{
		border: 1px solid #d3d3d3;
		background: #d3d3d3;
	}
	.hasbot .right{
		float: right;
		width: 2.933333rem;
		height: 1.333333rem;
		color: #fff;
		text-align: center;
		line-height: 1.333333rem;
		font-size: .4rem;
	}
	.hasbot .left span{
		font-size: .426667rem;
		color: #f5359b;
		margin-right: .133333rem;
	}
	.hasbot .left{
		width: 7.066667rem;
		height: 1.333333rem;
		float: left;
		padding: 0 .266667rem;
		line-height: 1.333333rem;
		font-size: .346667rem;
		border-top: 1px solid #d3d3d3;
	}
	.hasbot{
		width: 100%;
		position: fixed;
		left: 0;
		height: 1.333333rem;
		background: #fff;
		z-index: 50;
		bottom: 1.333333rem;
	}
	.item .price .rent{
		float: left;
	}
	.item .price img{
		width: .5rem;
		height: .5rem;
		float: right;
	}
	.item .price{
		position: absolute;
		right: .466667rem;
		bottom: .4rem;
		width: 5.866667rem;
		height: .4rem;
		line-height: .4rem;
		font-size: .30667rem;
		color: #f5359b;
		padding: 0 .5rem;
	}
	.item .text span{
		font-size: .306667rem;
		color: #7a7a7a;
	}
	.item .text{
		float: right;
		width:5.6rem;
		line-height: .466667rem;
		font-size: .3333333rem;
		color: #333;
	}
	.item .img img{
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
	.item .img{
		width: 2.8rem;
		height: 3.106667rem;
		position: relative;
		float: left;
	}
	.item .check img{
		width: .433333rem;
		height: .433333rem;
	}
	.item .check{
		width: .8rem;
		height: 3.2rem;
		float: left;
		padding-top: 1.2rem;
	}
	.item{
		float: left;
		width: 10rem;
		height: 4rem;
		padding: .4rem;
		position: relative;
		border-bottom: 1px solid #eee;
	}
	.main{
		margin-top: 1.066667rem;
		overflow: hidden;
		float: left;
	}
	.head .center .on{
		color: #f5359b;
		border-bottom: .053333rem solid #f5359b;
	}
	.head .center span{
		display: inline-block;
		box-sizing: border-box;
		height: 100%;
		padding: 0 .133333rem;
	}
	.head .center{
		font-size: .36rem;
		width: 100%;
		color: #000;
		height: 1.12rem;
		line-height: 1.12rem;
		display: flex;
		justify-content: space-around;
		padding: 0;
	}
	.head .left,.head .right{
		width: 1.333333rem;
		font-size: .373333rem;
	}
	.head div{
		padding: .266667rem 0;
		height: 1.066667rem;
		line-height: .533333rem;
	}
	.head{
		position: fixed;
		z-index: 300;
		width: 10rem;
		height: 1.066667rem;
		background: #fff;
		padding: 0 .3333333rem;
		border-bottom: 1px solid #eee;
	}
	.row{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	div{
		box-sizing: border-box;
		margin: 0;
	}
	span{
		box-sizing: border-box;
		margin: 0;
	}
</style>
