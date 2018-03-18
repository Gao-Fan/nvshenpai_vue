<template>
	<div>
		<ProHeader :brand='brand'></ProHeader>
		<Photo :photos='photos'></Photo>
		<Part :part_message='part_message'></Part>
		<ProBottom :part_message='part_message' ></ProBottom>
		<!-- 购物按钮 -->
		<h1></h1>
	</div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'

import ProHeader from './product/proheader.vue'
import Photo from './product/Photo.vue'
import Part from './product/Part.vue'
import ProBottom from './product/ProBottom.vue'

var bus = new Vue();

export default {
  name: 'Product',
  components:{
  	ProHeader,
  	Photo,
  	Part,
  	ProBottom
  },
  data(){
    return{
    	fid:'',
    	brand:'',
    	photos:'',
    	part_message:'',
      shoptype:''
    }
  },
  methods:{
    //bus.$on("comsg",function(msg){})
    //   this.shoptype = msg
    //   console.log(msg)
    // })
  },
  updated(){
    bus.$on("comsg",function(msg){
      this.shoptype = msg
      console.log(msg)
    })
  },
  mounted(){  	
  	this.fid = this.$route.params.fid
  	//console.log(this.fid)
    bus.$on("comsg",function(msg){
      this.shoptype = msg
      console.log(msg)
    })
  	axios.get("/product?platform=wap&channel=BDPZ_100051&access_token=&city=&id="+this.fid+"&only_specifications=&use_limit_days=&date=")
  		 .then( (res)=>{
  		 	//console.log(res)
  		 	this.brand = res.data.data.brand
  		 	//console.log(res.data.data.image)
  		 	this.photos = res.data.data.image
  		 	//console.log(res.data.data)
  		 	this.part_message = res.data.data
  		 	//console.log(this.part_message)
  		 })
  }
}
</script>
<style scoped>
</style>