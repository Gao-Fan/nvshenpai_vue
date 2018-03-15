<template>
  <div class='bottom'>
    <div class="left">
    	❤
    </div>
    <div class="middle">
    	加入衣袋
    </div>
    <div class="right">
    	立即购买
    </div>
   </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'ProBottom',
  props:['part_message']
}
</script>

<style scoped>
	.right{
		background: #f5359b;
		color: #fff;
		float: left;
		width: 3.466667rem;
		height: 1.333333rem;
		line-height: 1.333333rem;
		text-align: center;
		font-size: .36rem;
	}
	.middle{
		border-top: 1px solid #d3d3d3;
		border-left: 1px solid #d3d3d3;
		border-right: 1px solid #d3d3d3;
		float: left;
		color: #f5359b;
		width: 3.466667rem;
		height: 1.333333rem;
		line-height: 1.333333rem;
		text-align: center;
		font-size: .36rem;
		background: #fff;
	}
	.left{
		border-top: 1px solid #d3d3d3;
		width: 3.0666667rem;
		float: left;
		height: 1.3333333rem;
		display: flex;
		flex-direction:row;
		justify-content: center;
		align-items: center;
		font-size: 1rem;
		color: #ccc;
		background: #fff;
	}
	div{
		margin: 0;
		box-sizing: border-box;
	}
	.bottom{
		position: fiexd;
		bottom: 0;
		left: 0;
		height: 1.333333rem;
		width: 100%;
		z-index: 50;
		position: sticky;
		bottom: 0;
	}
</style>
