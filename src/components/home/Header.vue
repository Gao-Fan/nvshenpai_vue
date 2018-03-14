<template>
	<div id="box">
		<header>
			<span>
				<i class="iconfont icon-fuwuerji"></i>
			</span>
			<p>女神派</p>
			<span>
				<i class="iconfont icon-magnifier"></i>
			</span>
		</header>

		<section>
			<router-link active-class="active" to="/home">精选</router-link>	
		
			<router-link active-class="active" to="/trademark">品牌</router-link>	
		
			<router-link active-class="active" to="/showphoto">晒图</router-link>	
		
			<router-link active-class="active" to="/special">专题</router-link>	
				
		</section>
	</div>
</template>	
<script>
  import '../../assets/img/font_ozpnp6tmq8v9529/iconfont.css'
  import $ from 'jquery'

  export default {
  	name: 'Header',
  	methods:{
  		
  	},
  	data(){
  		return{
  			flag1:true,
  			flag2:true,
  			flag3:true,
  			flag4:true
  		}
  	}
  }
</script>	
<style scoped>
	#box{
		width: 10rem;
		height: 2rem;
		position: sticky;
		top: 0;
		z-index: 100;
		}
	#box>header{
		width: 100%;
		height: 1.066667rem;
		background: #fff;
		box-sizing: border-box;
		padding: .266667rem .333333rem;
		display: flex;
		justify-content: space-between;
		line-height: .533333rem;
		border-bottom: 1px solid #eee;
	}
	header>sapn{
		flex: 1;
		height: 100%;
	}
	header>p{
		max-width: 5.333333rem;
		text-align: center;
		font-size: .426667rem;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.iconfont{
		display: inline-block;
		font-size: .6rem;
	}
	section{
		height: .933333rem;
		line-height: .933333rem;
		width: 10rem;
		color: #d9d9d9;	
		display: flex;
		justify-content: space-between	;
		background: #fff;
	}
	section>a{
		display: block;
		flex: 1;
		text-align: center;
		color: #333;
		font-size: .393333rem;
	}
	.active{
		border-bottom: 1.5px solid #f5359b;
		color: #f5359b;
	}
</style>

