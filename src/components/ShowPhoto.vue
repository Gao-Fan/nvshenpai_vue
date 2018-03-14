<template>
  <div>
    <Header></Header>
    <ImgWall :img_wall='img_wall'></ImgWall>
    <FindAttention></FindAttention>
    <Footer></Footer>
   </div>
</template>

<script>
  import axios from 'axios'

  import Header from './home/Header'
  import Footer from './Footer'
  import ImgWall from './showphoto/ImgWall'
  import FindAttention from './showphoto/FindAttention'

export default {
  name: 'ShowPhoto',
  components:{
    Header,
  	ImgWall,
  	FindAttention,
    Footer
  },
  data(){
  	return{
  		img_wall:''
  	}
  },
  mounted(){
  	axios.get("/find?platform=wap&access_token=&page=1&page_size=10&type=1&id=")
 		 .then( (res)=>{
 		 	//console.log(res)
 		 	this.img_wall = res.data.data.top
 		 	//console.log(this.img_wall)
 		 	// this.find_attention = res.data.data.rows
 		 	// console.log(this.find_attention)
 		 })
  }

}
</script>

<style scoped>

</style>
