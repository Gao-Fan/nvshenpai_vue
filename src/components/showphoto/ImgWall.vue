<template>
  <div class="hello">
    <div class='title'></div>
    <img :src="img_wall.image_url" alt="">
   </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'ImgWall',
  props:['img_wall']

}
</script>

<style scoped>
	.title{
		width: 10rem;
		padding: .266667rem 0 0;
		background: #eee;
	}
	.hello{
		width: 10rem;
		height: auto;
	}
	img{
		width: 100%;
	}
</style>
