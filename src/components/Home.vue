<template>
  <div>
    <Header></Header>
  	<LunBo :lunbolist="LunBoList"></LunBo>
    <SideNav :sidenavlist="SideNavList"></SideNav>
    <NewArrivals :new_arrivals='new_arrivals'></NewArrivals>
    <OnDemand :dress_list='dress_list'></OnDemand>
    <BottomBanner :bottom_banner_list='bottom_banner_list'></BottomBanner>
    <Footer></Footer>
   </div>
</template>

<script>
import axios from 'axios'    //使用ajax调取数据

import Header from './home/Header'
import Footer from './Footer'
import LunBo from './home/LunBo'
import SideNav from './home/SideNav'
import NewArrivals from './home/NewArrivals'
import OnDemand from './home/OnDemand'
import BottomBanner from './home/BottomBanner'

export default {
  name: 'Home',
  data(){
  	return{
      LunBoList:'',        //轮播图图片
  		SideNavList:'',      //轮播图下边的两个图片
      new_arrivals:'',      //每日新品数据
      dress_list:'',        //礼服日租数据
      bottom_banner_list:'' //底部广告
  	}
  },
  components:{
  	Header,          //头部
  	LunBo,           //轮播图图片
    SideNav,         //轮播图下边的两个图片
    NewArrivals,     //每日新品
    OnDemand,        //礼服日租
    BottomBanner,     //底部广告
    Footer
  },
  mounted(){
  	axios.get('/home/lteration?platform=wap&access_token=')
  		 .then( (res)=>{
  		 	//console.log(res);
  		 	this.LunBoList=res.data.data.banner;
        //console.log(this.LunBoList);
        this.SideNavList=res.data.data.banner_rookie;
        // console.log(this.SideNavList);
        this.new_arrivals=res.data.data.new_arrivals;
        // console.log(this.new_arrivals);
        this.dress_list=res.data.data.dress;
        //console.log(this.dress_list)
        this.bottom_banner_list = res.data.data.bottom;
  		})
  }
}
</script>
<style scoped>

</style>
