<template>
	<div class='toptop'>
		<div class="box" v-if='brand'>
			<div class='left'>


				<router-link to='#' @click.native='backprev()'>
					<img src="../../assets/img/leftarrow.svg" alt="">
				</router-link>
			</div>
			<div class='middle'>
				{{brand}}
			</div>
			<div class='right'>
				<router-link to='#'>
					<img src="../../assets/img/手提包.svg" alt="">
				</router-link>
				<router-link to='#'>
					<img src="../../assets/img/耳机.svg" alt="">
				</router-link>
				
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name:'ProHeader',
	props:['brand'],
	updated(){
		//console.log(this.brand)

	},
	
	methods:{
		backprev:function(){
			//console.log('1')
			// window.history.go(-1)  不好用
			//window.history.back();  不好用
			//window.history.back();location.reload();
			window.location.href = "http://localhost:8080/#/home";
		}

	}
} 

</script>

<style scoped>
	.toptop{
		position: sticky;
		top: 0;
		z-index: 50;
	}
	div{
		box-sizing: border-box;
		margin: 0;
	}
	.box{
		border-bottom: 1px solid #eee;
		justify-content: space-between;
		display: flex;
		flex-direction: row;
		position: fiexd;
		z-index: 300;
		width: 10rem;
		height: 1.066667rem;
		background: #fff;
		padding: 0 .3333333rem;
		box-sizing: border-box;
		margin: 0;
		
	}
	.left{
		width: 2rem;
		font-size: .373333rem;
		padding: .266667rem 0;
		height: 1.066667rem;
		line-height: .533333rem;

	}
	.left img{
		margin-top:.026667rem;
		width: .466667rem;
		height: .466667rem;
	}
	.middle{
		text-align: center;
		max-width: 5.3333333rem;
		font-size: .426667rem;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		padding: .266667rem;
		height: 1.066667rem;
		line-height: .5333333rem;
	}
	.right{
		width: 2rem;
		font-size: .373333rem;
		padding: .266667rem 0;
		height: 1.066667rem;
		line-height: .533333rem;
	}
	.right a{
		display: inline-block;
		float: right;
		/*float:right;*/

	}
	.right a img{
		
		margin-top:.026667rem;
		margin-right:.126667rem;
		width: .666667rem;
		height: .666667rem;
	}
</style>