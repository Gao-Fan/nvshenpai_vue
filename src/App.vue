<template>
  <keep-alive>
    <router-view/>
  </keep-alive>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
ul,li{
	list-style: none;
}
a {
  text-decoration: none;
}
body{
	height: 100%;
}
html{
	font-size: 37px;
	/*font-size: 26.67vw;*/
	width: 100%;
	height: 100%;
}
</style>
