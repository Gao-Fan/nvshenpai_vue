<template>
	<div>
		<ProHeader></ProHeader>

	</div>
</template>
<script>
import axios from 'axios'

import ProHeader from './product/proheader.vue'
export default {
  name: 'Product',
  components:{
	ProHeader
  },
  data(){
    return{
    	fid:''
    }
  },
  updated(){

  },
  // beforeMount(){
  // 	this.fid = this.$route.params.fid
  // },
  mounted(){  	
  	this.fid = this.$route.params.fid
  	console.log(this.fid)
  	axios.get("/product?platform=wap&channel=BDPZ_100051&access_token=&city=&id="+this.fid+"&only_specifications=&use_limit_days=&date=")
  		 .then( (res)=>{
  		 	console.log(res)
  		 })
  }
}
</script>
<style scoped>
	
</style>