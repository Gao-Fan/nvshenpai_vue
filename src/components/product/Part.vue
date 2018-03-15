<template>
	<div>
		<div class="part" v-if='part_message'>
	    	<div class='price row'>
	    		<div class="left">
	    			¥{{part_message.sale_price/100}}
	    			<span>¥{{part_message.market_price/100}}</span>
	    			<i>{{part_message.new_buy_discount}}折</i>
	    		</div>
	    		<div class="right">
	    			只剩{{part_message.dots}}件
	    		</div>
	    	</div>
	    	<div class='name row'>
				<div class="left">
					{{part_message.name}}
					<span>{{part_message.spu}}</span>
				</div>
	    	</div>
	    	<div class='tags row'>
				<span v-for='item in part_message.tags'>
					<span v-for='msg in item.options'>
						{{msg.name}}
					<i class='magl'>|</i>	
					</span>
				</span>
	    	</div>
	    	<div class='size row'>
				<span v-for='item in part_message.specifications'>
					<span v-for='msg in item.options'>
						{{item.name}}{{msg.name}}
					</span>
				</span>  		
	    	</div>
   		</div>
		<div class='img part'>
		    <img src="http://static-r.msparis.com/mall/mall_detail_5.png" alt="">
		</div>
		<div class='info part'>
			<div class="name">
				面料
			</div>
			<div class='txt'>
				{{part_message.fabric}}
			</div>
		</div>
		<div class='part comment'>
			<div class='title'>
				优质评价
			</div>
			<div class='no_comment'>
				----暂无优质评价----
			</div>
		</div>
		<div class='brand'>
			<div class='name'>
				品牌
			</div>
			<div class='right'>
				{{part_message.brand}}
				>
			</div>
		</div>
	</div>
  	
   		
</template>

<script>
import axios from 'axios'
export default {
  name: 'Part',
  props:['part_message'],
  updated(){
  	//console.log(this.part_message)
  }
}
</script>

<style scoped>
	.brand .right{
		float: right;
	}
	.brand .name{
		width: 1.866667rem;
		float: left;
		font-size: .433333rem;
		height: .533333rem;
	}
	.brand{
		width: 10rem;
		padding: .266667rem .533333rem;
		margin: 0 auto;
		position: relative;
		padding-bottom: 1.466667rem;
		overflow: hidden;
	}
	.comment .no_comment{
		width: 100%;
		text-align: center;
		line-height: .666667rem;
		font-size: .32rem;
		color: #878787;
	}
	.comment .title{
		width: 100%;
		font-size: .346667rem;
		height: .533333rem;
		line-height: .533333rem;
		margin-bottom: .1333333rem;
	}
	.info .txt{
		width: 6.933333rem;
		float: right;
		font-size: .32rem;
		color: #878787;
		line-height: .5333333rem;
	}
	.info .name{
		width: 1.866667rem;
		float: left;
		font-size: .433333rem;
		height: .533333rem;
	}
	.info{
		padding-bottom: 0;
		overflow: hidden;
	}
	.img img{
		width: 100%;
		margin-bottom: .266667rem;
	}
	.img{
		padding-right: .533333rem;
		padding-top: .266667rem;
		position: relative;
	}
	.size span:nth-child(odd){
		background: #333;
		color: #fff;
	}
	.size span:nth-child(even){
		background: #eee;
		color: #333;
	}
	.size span{
		border: 1px solid #333;
		display: inline-block;
		height: .933333rem;
		width: 1.733333rem;
		text-align: center;
		line-height: .933333rem;
		margin-right: .3333333rem;

	}
	.size{
		width: 100%;
		padding: .266667rem 0;
		overflow-y: hidden;
		overflow-x: auto;
		white-space: nowrap;
		font-size: .266667rem;
	}
	.magl{
		/*display: inline-block;*/
		font-style: normal;
		/*margin-left: .2rem;*/
	}
	.magl:last-child{
		/*display: none;*/
	}
	.tags span{
		color: #f5359b;
		font-size: .293333rem;
		margin-right: .1rem;
	}
	.tags{
		width: 100%;
		line-height: .533333rem;
	}
	.name .left span{
		font-size: .266667rem;
		color: #999;
		margin-left: .093333rem;
	}
	.name{
		width: 100%;
		position: relative;
		height: .8rem;
		align-items: center;
		justify-content: space-between;
	}
	.name .left{
		max-width: 80%;
		line-height: .8rem;
		height: .8rem;
		font-size: .4rem;
	}
	.price .right{
		font-size: .32rem;
		color: #fff;
		width: 1.733333rem;
		height: .533333rem;
		text-align: center;
		line-height: .533333rem;
		background: #333;
	}
	div{
		box-sizing: border-box;
		margin: 0;
	}
	.part{
		width: 10rem;
		padding: .266667rem .533333rem;
		margin: 0 auto;
		position: relative;
		border-bottom: .2rem solid #eee;
		height: auto;
	}
	.row{
		display: flex;
		flex-direction: row;
	}
	.price{
		width: 100%;
		font-size: .4rem;
		line-height: .8rem;
		height: .8rem;
		color: #f5359b;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.price .left span{
		display: inline-block;
		color: #878787;
		font-size: .28rem;
		margin-left: .266667rem;
		text-decoration: line-through;
	}
	.price .left i{
		display: inline-block;
		font-size: .32rem;
		color: #333;
		margin-left: .266667rem;
		font-style: normal;
	}
</style>
