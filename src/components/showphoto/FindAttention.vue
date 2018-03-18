<template>
  	<div class='box'>
  		<nav>
  			<div>
  				<router-link active-class='on' to='/'>发现</router-link>
  				<router-link active-class='on' to='#'>关注</router-link>
  			</div>
  		</nav>

		<mt-loadmore class='sc' :bottom-method="loadBottom" ref="loadmore">
	  		<ul class='list' v-if='find_attention'>
	  			<li v-for='item in find_attention'>
	  				<div class='top'>
	  					<img :src="item.user.head_portrait" alt="">
	  					<div>
	  						<p class='p1'>{{item.user.nickname}}</p>
	  						<p class='p2'>{{item.like_num}}&nbsp;&nbsp;{{item.comment_num}}</p>
	  					</div>
	  				</div>
	  				<div class='txt'>
	  					{{item.content}}
	  				</div>
	  				<div class='photo'>
	  					<span v-for='photo_imgs in item.images'>
	  						<img v-lazy="photo_imgs.src" alt="">
	  					</span>
	  				</div>
	  				<div class='bottom'>
	  					<img src="../../assets/img/盾牌.svg" alt="">
	  					<div>
	  						<img src="../../assets/img/坐标.svg" alt="">
	  						{{item.city}}&nbsp;
	  						{{item.address}}&nbsp;
	  						{{timestampToTime(item.created_at)}}
	  					</div>
	  				</div>
	  			</li>
	  		</ul>
	  	</mt-loadmore>

    	FindAttention
    </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
export default {
  name: 'FindAttention',
  data(){
  	return{
  		find_attention:'',
  		page:1
  	}
  },
  mounted(){
  	axios.get("/find?platform=wap&access_token=&page="+this.page+"&page_size=10&type=1&id=")
 		 .then( (res)=>{
 		 	//console.log(res)
 		 	this.img_wall = res.data.data.top
 		 	//console.log(this.img_wall)
 		 	this.find_attention = res.data.data.rows
 		 	//console.log(this.find_attention)
 		 })
  },
  updated(){
  	//console.log('这是数据'+this.find_attention)
  	// console.log('这是多少页的数据'+this.page)
  },
  methods:{
  	loadBottom(){
  		this.page += 1; 
  		axios.get("/find?platform=wap&access_token=&page="+this.page+"&page_size=10&type=1&id=")
 		 .then( (res)=>{
 		 	var list = res.data.data.rows
 		 	for( var i = 0 ; i < list.length ; i++)
 		 	this.find_attention.push(list[i])
 		 	console.log( $(".sc").eq(0).css('height') )
 		 })
 		 // this.$refs.loadmore.onBottomLoaded();
 		 // 没有了加载效果
  	},
  	timestampToTime(timestamp){
  		var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = date.getDate() + ' ';
        var h = date.getHours() + ':';
        var m = date.getMinutes() + ':';
        var s = date.getSeconds();
        return M+D+h+m;
  	}
  }
}
</script>

<style scoped>
	.sc{
		overflow-y: auto;
		height: auto;
		width: 10rem;
		box-sizing: border-box;
	}
	.sc:after{display:block;clear:both;content:"";visibility:hidden;height:0} 
	.box{
		margin-bottom: .7rem;
	}

	nav{
		width: 10rem;
		height:1.066667rem;
		background: #fff;
		border-bottom: 2px solid #ddd;
	}
	nav div{
		margin: 0 auto;
		width: 2.666667rem;
		color: #000;
	}
	nav div a{
		display: inline-block;
		width: 1.284rem;
		line-height: 1.066667rem;
		text-align: center;
		font-size: .373333rem;
		box-sizing: border-box;
	}
	.on{
		border-bottom: 1.5px solid #f5359b;
		color: #f5359b;
	}

	.list{
		width: 10rem;
		margin-top: .266667rem;
		box-sizing: border-box;
		margin: 0;
		background:#ddd;
	}
	.list li{
		width: 9.466667rem;
		padding: .4rem 0;
		margin: 0 auto .266667rem;
		background: #fff;
		position: relative;
		border-radius: .2rem;
		box-sizing: border-box;
	}
	.top{
		width: 100%;
		box-sizing: border-box;
		margin: 0;
		padding: 0 .4rem .4rem;
		overflow: hidden;
	}
	.top img{
		width: 1.3333333rem;
		height: 1.3333333rem;
		border-radius: 100%;
		float: left;
		box-sizing: border-box;
		border: 0;
	}
	.top div{
		float: right;
		width: 6.666667rem;
		position: relative;
		box-sizing: border-box;
		margin: 0;
	}
	.top div .p1{
		width: 6.666667rem;
		font-size: .346667rem;
		height: .533333rem;
		line-height: .533333rem;
		text-overflow: ellpisis;
		overflow: hidden;
		white-space: nowrap;
		box-sizing: border-box;
		margin: 0;
	}
	.top div .p2{
		width: 6.666667rem;
		height: .5333333rem;
		margin-top: .1333333rem;
		box-sizing: border-box;
		margin: 0;
	}
	.top div .p2 span{
		height: .5333333rem;
		line-height: .5333333rem;
		margin-right: .4rem;
		float: left;
		font-size: .293333rem;
		color: #999;
	}
	.txt{
		width: 100%;
		padding: 0 .4rem;
		margin-bottom: .4rem;
		font-size: .32rem;
		line-height: .5333333rem;
		box-sizing: border-box;
	}
	.photo{
		width: 100%;
		margin: 0 .2rem;
		font-size: 0;
		box-sizing: border-box;
	}
	.photo span{
		width: 2.733333rem;
		height: 2.733333rem;
		position: relative;
		margin-bottom: .1333333rem;
		margin-right: .1333333rem;
		display: inline-block;
		box-sizing: border-box;		
	}
	.photo span img{
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.bottom{
		width: 100%;
		padding: 0 .4rem;
		margin-top: .4rem;
		align-items: center;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		margin: 0;
	}
	.bottom img{
		width: .4rem;
		height: .4rem;
		position: relative;
		top: .066667rem;
		margin-top: .1333333rem;
		display: inline-block;
	}
	.bottom div{
			font-size: .293333rem;
			color: #999;
			max-width: 6rem;
			height: .533333rem;
			line-height: .533333rem;
			position: lelative;
			display: inline-block;
	}
</style>
