<template>
<div id="nav" class="footer">
	<router-link to="/" exact>首页</router-link>
	<router-link to="/detail" exact>详情页</router-link>
	<router-link to="/lists" exact>列表页</router-link>
	<router-link to="/dingdan" exact>订单</router-link>
	<router-link to="/wode" exact>我的</router-link>
</div>
</template>

<script>
export default {
  name: 'nav',
  data : function () {
    return {
    	
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
