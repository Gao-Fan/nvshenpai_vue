<template>
  <div>
    <Header></Header>
    <SpecialList :special_list='special_list'></SpecialList>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios'

// import Header from './home/Header'
import SpecialList from './special/SpecialList'
import Header from './home/Header'
import Footer from './Footer'


export default {
  name: 'Special',
  data(){
    return{
    	special_list:''
    }
  },
  components:{
    Header,
  	SpecialList,
    Footer
  },
  mounted(){
  	axios.get("/home/topics?platform=wap&channel=BDPZ_100051&access_token=&page=1")
 	     .then( (res)=>{
 	     	// console.log(res.data)
 	     	this.special_list = res.data.data.rows
 	     	//console.log(this.special_list)
 	     })
 }

}
</script>

<style scoped>

</style>
