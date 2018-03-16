<template>
	<!DOCTYPE html>
	<html lang="zh">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<title>我的</title>
	</head>
	<body>
		<!--header-->
		<header>
			<!--我的-->
			<div id="hideinfo" class="hideinfo" style="opacity: 1;">
				<i></i>
				<div class="text">我的</div>
				<div class="icons row justify-end">
					<i class="myicon icon-kf-gray"></i>
					<i class="myicon icon-config"></i>
				</div>
			</div>
		</header>
		<!--中间主体部分-->
		<section>			
			<!--top-->
			<div class="top">
				<a href="" class="userhead"><img src="http://static-r.msparis.com/m-site/images/user/tx@3x.png"/></a>
				<a href="" class="gologin">
					点击登录<br>
					<i>登录后可享受更多特权</i>
				</a>
				<img src="http://static-r.msparis.com/m-site/images/user/beauty_card@3x.png"class="bgimg"/>
			</div>
			<div class="cloth_card">
				<a href="" class="cc">
					<i class="myCloth"></i>
					我的衣橱
				</a>
				<div class="oneKey">一键换衣</div>
				<div class="bg_div"></div>
				<a href="" class="cb">
					<i class="myCard"></i>
					购买无限换卡
				</a>
			</div>
			<!--info_div-->
			<div class="info_div">
				<a href="">
					<i></i>
					优惠券
				</a>
				<a href="">
					<i></i>
					心愿单
				</a>
				<a href="">
					<i></i>
					邀请有奖
				</a>
				<a href="">
					<i></i>
					女神信息
				</a>
			</div>
			<!--border-line-->
			<div class="border_line"></div>
		</section>
	</body>
	</html>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html{
	font-size: 37px;
	font-size: 26.67vw;
	width: 100%;
	height: 100%;
}
body{
	display: flex;
	flex-direction: column;
}
/*header*/
header{
    background: #333;
    height: 1.066667rem;
    opacity: 1;
}
header .hideinfo{
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 1.066667rem;
}
.hideinfo i{
	width: .533333rem;
	height: .533333rem;
	margin-top: .1rem;
	margin-left: .4rem;
}
header .hideinfo .text{
    width: 6.933333rem;
    height: .533333rem;
    line-height: .533333rem;
    text-align: center;
    color: #fff;
    font-size: .466667rem;
    margin-left: .533333rem;	
}
header .hideinfo .justify-end{
	justify-content: space-between;
	align-items: center;
	display: flex;
}
header .hideinfo .myicon{
	width: .8rem;
    height: .8rem;
    margin-left: .133333rem;
    background-size: .533333rem .533333rem;
    background-position: 50%;	
    box-sizing: border-box;
}
.icon-kf-gray{
    background: url(http://static-r.msparis.com/m-site/images/user/icon-kf.png) no-repeat 50%;
    background-size: contain;
}
.icon-config{
    background: url(http://static-r.msparis.com/m-site/images/user/icon-cofi@3x.png) no-repeat 50%;
    background-size: contain; 
}
/*top*/
.top{
    background: #333;
    position: relative;
    overflow: hidden;
    height: 3.466666rem;
}
.top .userhead{
	float: left;
	width: 1.6rem;
	height: 1.6rem;
	border-radius: 100%;
	margin-left: .626667rem;
	display: flex;
}
.top .userhead img{
	width: 100%;
	height: 100%;
}
.top .gologin{
	float: left;
	width: 6.266667rem;
	font-size: .4rem;
	height: 1.373333rem;
	line-height: .666667rem;
	color: #fff;
	margin-left: .33333rem;
	margin-top: .11111rem;
}
.top .gologin i{
	font-style: normal;
	color: #848484;
	font-size: .32rem;
}
.top .bgimg{
	width: 3.64rem;
	position: absolute;
	right: -.266667rem;
	bottom: -1.333333rem;
}
/*cloth_card*/
.cloth_card{
	height: 1.96rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #eee;
	position: relative;
}
.cloth_card a{
    width: 4.986667rem;
    height: 1.066667rem;
    text-align: center;
    font-size: .4rem;
    color: #333;
    position: relative;
}
.cloth_card a .myCloth{
	display: block;
	margin: 0 auto;
	width: .533333rem;
    height: .533333rem;
    margin-bottom: .133333rem;
    background: url(http://static-r.msparis.com/m-site/images/user/icon-yj@3x.png) no-repeat 50%;
    background-size: contain;
}
.cloth_card .oneKey{
	position: absolute;
	left: 2.8rem;
	top: 0.216216rem;
	height: .5rem;
	text-align: center;
	line-height: .5rem;
	min-width: .666667rem;
	font-size: .1rem;
	color: #fff;
	background: #f5359b;
	border-radius: .346667rem;
	padding: 0 .133333rem;
	white-space: nowrap;
}
.cloth_card .myCard{
	display: block;
	margin: 0 auto;
	width: .533333rem;
    height: .533333rem;
    margin-bottom: .133333rem;
	background: url(http://static-r.msparis.com/m-site/images/user/icon-card@3x.png) no-repeat 50%;
	background-size: contain;	
}
.cloth_card .cb{
	color: #F5359B;
}
.cloth_card .bg_div{
    height: 1.066667rem;
    width: .026667rem;
    background: #e3e3e3;	
}
/*info_div*/
.info_div{
	/*width: 9.099997rem;*/
	margin: 0 auto;
	padding-top: .466667rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
	box-sizing: border-box;
}
.info_div a{
	width: 25%;
	text-align: center;
	padding-bottom: .466667rem;
	font-size: .346667rem;
	color: #333;
}
.info_div i{
	width: .533333rem;
	height: .533333rem;
	display: block;
	margin: 0 auto;
}
.info_div a:first-child i:first-child{
    background: url(http://static-r.msparis.com/m-site/images/user/list/wallet.png) no-repeat 50%;
    background-size: contain;
    margin-bottom: .133333rem;
}
.info_div a:nth-child(2) i{
    background: url(http://static-r.msparis.com/m-site/images/user/list/wish@3x.png) no-repeat 50%;
	background-size: contain;
	margin-bottom: .133333rem;
}
.info_div a:nth-child(3) i{
	background: url(http://static-r.msparis.com/m-site/images/user/list/invitation@3x.png) no-repeat 50%;
	background-size: contain;	
	margin-bottom: .133333rem;
}
.info_div a:nth-child(4) i{
	background: url(http://static-r.msparis.com/m-site/images/user/list/info.png) no-repeat 50%;
	background-size: contain;
	margin-bottom: .133333rem;	
}
/*border_line*/
.border_line{
    /*width: 10rem;*/
    height: .266667rem;
    background: #eee;	
}
/*footer{
	display: flex;
	height: 1rem;
	width: 100%;
	background: paleturquoise;
}*/
</style>
