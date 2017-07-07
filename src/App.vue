<template>
  <div id="app">
		<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
ul{
	list-style: none;
}
html,body{
	font-size: 14px;
	background: #eee;
	height: 100%;
	width: 100%;
}
a{
	text-decoration: none;
}
.l{
	float: left;
}
.r{
	float: right;
}
#app{
	height: 100%;
	display: flex;
	flex-direction: column;
}
.all{
	display:flex;
	flex: 1;
	flex-direction:column;
	font-size: 14px;
}
#con{
	flex: 1;
	overflow-x: hidden;
}
.footer{
	height: 1.5rem;
	line-height: 1.5rem;
	background: #2395FF;
	display: flex;
	font-size: 16px;
	justify-content: space-around;
}
.footer a{
	color: black;
}
.footer .router-link-active{
	color: yellow;
}
</style>
