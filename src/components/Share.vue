<template>
<div class="all Share">
	<div id="header">
		分享购
	</div>
	<div id="con">
		<div class="top">
			<img src="static/share/pic_001.jpg" class="beijing"/>
			<img class="userImg" src="static/share/pic_002.png"/>
			<p class="tipsL">您好，请<router-link to="/wode">登录</router-link></p>
			<p class="tipsL1">红包分享给好友使用就能获得<span>2%</span>红利</p>
		</div>
		<div class="quan">
			<div class="l">
				<p class="p1">￥<span>30</span></p>
				<p class="p2">-无门槛-</p>
				<p class="p3">男女鞋专享券</p>
			</div>
			<div class="r">
				<p class="p1">￥<span>10</span></p>
				<p class="p2">-满198可用-</p>
				<p class="p3">运动专享券</p>
			</div>
		</div>
		<div class="toutiao">丨    用户138******73 今日赚取红利￥8.89</div>
		<p class="jiaoni">小编:教你玩赚分享购</p>
		<div class="fxg">
			<div class="one">
				<img src="static/share/pic_005.jpg"/><img src="static/share/pic_007.jpg" class="img2"/>
			</div>
			<div class="two"><img src="static/share/pic_006.jpg"/></div>
			<div class="three"><img src="static/share/pic_008.jpg"/></div>
		</div>
		<p class="jiaoni">内容值得分享</p>
		<img src="static/share/pic_010.jpg" class="datu"/>
		<div class="f_1">
			<p class="p1">我当是感情深了，原来是一口闷了</p>
			<p class="p2">住在那个小区，有人养大公鸡，嗓音嘹亮...</p>
		</div>
		<div class="f_2">
			<p class="p1">这一句话说出了无数人的心声！</p>
			<p class="p2">住在那个小区，有人养大公鸡，嗓音嘹亮...</p>
		</div>
		<div class="f_3">
			<p class="p1">这样对老婆答非所问，请问我能蒙混过关吗？</p>
			<p class="p2">住在那个小区，有人养大公鸡，嗓音嘹亮...</p>
		</div>
	</div>
	<navbar></navbar>
</div>
</template>

<script>
import Navbar  from './Nav.vue'
export default {
  name: 'share',
  components: {
       Navbar 
  },
  data () {
    return {
    	
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#header{
	height: 1rem;
	line-height: 1rem;
	background: #fff;
	position: relative;
	text-align: center;
	overflow: hidden;
	font-size: 18px;
}
#con{
	background: #000;
	position: relative;
	overflow-x: hidden;
	.beijing{
		width: 100%;
		position: absolute;
		top: 0;
	}
	.userImg{
		position: absolute;
		left: 0.5rem;
		top: 0.5rem;
		height: 1.5rem;
		width: 1.5rem;
	}
	.tipsL{
		color: #fff;
		font-size: 16px;
		position: relative;
		z-index: 1;
		margin: 1rem 0 0 2.5rem;
		a{
			color: yellow;
		}
	}
	.tipsL1{
		color: #D3B67A;
		margin-top: 4.5rem;
		text-align: center;
		position: relative;
		z-index: 1;
		span{
			color: red;
		}
	}
	.quan{
		height: 3.5rem;
		border-top: 1px solid #D3B67A;
		margin-top: 1.6rem;
		.l,.r{
			border: 1px solid #D3B67A;
			height: 3.5rem;
			width: 4.5rem;
			margin: 0 .25rem;
			text-align: center;
			background: #222;
			.p1{
				color: #D3B67A;
				font-size: 24px;
				span{
					font-size: 50px;
				}
			}
			.p2{
				color: #D3B67A;
			}
			.p3{
				color: white;
				width: 3rem;
				margin: .4rem .75rem;
				background: #990000;
			}
		}
	}
	.toutiao{
		margin-top: 0.5rem;
		height: 0.8rem;
		line-height: 0.8rem;
		font-size: 12px;
		padding-left: 2.5rem;
		color: white;
		background: url(../assets/share/pic_003.png) no-repeat .2rem center #333;
		background-size: 2.2rem 0.6rem;
	}
	.jiaoni{
		height: 1.2rem;
		line-height: 1.2rem;
		color: white;
		font-size: 18px;
		padding-left: .2rem;
	}
	.fxg{
		height: 5rem;
		position: relative;
		.one,.two,.three{
			position: absolute;
			background: #333;
			width: 4.6rem;
		}
		.one{
			height: 5rem;
			left: 0.2rem;
			overflow: hidden;
			img{
				width: 4.6rem;
				overflow: hidden;
				height: 2.5rem;
			}
			.img2{
				margin-top: -5px;
			}
		}
		.two,.three{
			height: 2.4rem;
			left: 5.2rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.three{
			top: 2.6rem;
		}
	}
	.datu{
		width: 100%;
	}
	.f_1,.f_2,.f_3{
		height: 1.5rem;
		border-bottom: 1px dotted #fff;
		padding-left: 2rem;
		box-sizing: content-box;
		background: url(../assets/share/user1.png) no-repeat 0.5rem 0.15rem;
		overflow: hidden;
		.p1{
			color: #D3B67A;
			font-size: 14px;
			margin-top: 0.2rem;
			width: 8rem;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		.p2{
			color: #999;
			font-size: 12px;
			margin-top: 0.2rem;
		}
	}
	.f_2{
		background: url(../assets/share/user2.png) no-repeat 0.5rem 0.15rem;
	}
	.f_3{
		background: url(../assets/share/user3.png) no-repeat 0.5rem 0.15rem;
	}
}
</style>
