<template>
  <div>
    <Header></Header>
    <BannerList :banner_list="banner_list"></BannerList>
    <BailyList :daily_list='daily_list'></BailyList>
    <BressList :dress_list='daily_list'></BressList>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios'

import Header from './home/Header'
import Footer from './Footer'
import BannerList from './trademark/BannerList'
import BailyList from './trademark/BailyList'
import BressList from './trademark/BressList'

export default {
  name: 'TradeMark',
  components:{
  Header,
	BannerList,
	BailyList,
	BressList,
  Footer
  },
  data(){
  	return{
  		banner_list:'',
  		daily_list:'',
  		dress_list:'',
  	}
  },
  mounted(){
  	axios.get("/brand/home?platform=wap&channel=BDPZ_100051&access_token=")
  		 .then( (res)=>{
  		 	//console.log(res)
  		 	this.banner_list = res.data.data.banner;
  		 	//console.log(this.banner_list)
  		 	this.daily_list = res.data.data.brand_commend.daily;
  		 	//console.log(this.daily_list)
  		 	this.dress_list = res.data.data.brand_commend.dress;
  		 	//console.log(this.dress_list)
  		 })
  }
}
</script>
<style scoped>

</style>
