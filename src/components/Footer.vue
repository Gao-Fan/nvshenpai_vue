<template>
  <div id="box">
    <router-link to="/" active-class='active' exact>
    	<span>
    		<i class="iconfont icon-home"></i>
    	</span>
    	<p>首页</p>
    </router-link>
    <router-link to="Shop" active-class='active' exact>
    	<span>
    		<i class="iconfont icon-yifu"></i>
    	</span>
    	<p>租衣</p>
    </router-link>
    <router-link to="/Carefree" active-class='active'>
    	<span>
    		<i class="iconfont wuyougou icon-fuhao-shangdian"></i>
    	</span>
    	<p>新衣无忧购</p>
    </router-link>
    <router-link to="/shopcar" active-class='active'>
    	<span>
    		<i class="iconfont icon-shoutibao"></i>
    	</span>
    	<p>衣袋</p>
    </router-link>
     <router-link to="/Mine" active-class='active'>
    	<span>
    		<i class="iconfont icon-wode"></i>
    	</span>
    	<p>我的</p>
    </router-link>
   </div>
</template>

<script>

import '../assets/img/font_ozpnp6tmq8v9529/iconfont.css'
import $ from 'jquery'

import axios from 'axios'
export default {
  name: 'Footer',
  data(){
    return{}
  }

}
</script>

<style scoped>
	#box{
		position: fixed;
		bottom: 0;
		left: 0;
		background: #fff;
		width: 10rem;
		height: 1.333333rem;
		z-index: 100;
		display: flex;
		justify-content: space-around;
	}
	#box a{
		text-decoration: none;
		display: inline-block;
		height: 100%;
		width: 25%;
		box-sizing: border-box;
		color: #333;
		text-align: center;
		position: relative;
	}
	.iconfont{
		display: block;
		width: 2rem;
		margin-top: .20rem;
		font-size: .5rem;
	}
	#box a p{
		font-size: .3rem;
	}
	#box .active{
		color: #f5359b;
	}
	#box .wuyougou{
		font-size: .7rem;
		width: 1.2rem;
		height: 1.2rem;
		border-radius: 50%;
		background: #333;
		position: absolute;
		transform: translate(.3rem,-.5rem);
		margin: 0 auto;
		text-align: center;
		color: #fff;
		box-sizing: border-box;
		padding-top: .15rem;
		border: 2px solid #fff;
	}
	#box a:nth-child(3) p{
		position: absolute;
		bottom: .1rem;
		left: 0;
		right: 0;
	}

</style>
