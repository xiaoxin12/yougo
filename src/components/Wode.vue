<template>
<div class="all Wode">
	<div id="header">
		我的优购
	</div>
	<div id="con">
		<div class="con1" v-show="!testL">
			<p class="c_p1">
				<span class="login1" @click="login1" :class="{ active: isActive }">账号登录</span><span class="login2" @click="login2" :class="{ active: !isActive }">手机登录</span>
			</p>
			<input type="text" v-model="name" v-bind:placeholder="o_t"/>
			<input type="password" v-model="pw" placeholder="请输入密码"/>
			<button @click="login">{{loading}}</button>
			<p class="news">新人见面礼  新会员登录即送千元大礼包<br /><span class="s1">未注册的用户在登录时将直接注册，注册成功即代表您已同意</span>
				<span class="s2">《用户协议》</span></p>
			
			<p class="otherL">---------选择其他方式登录---------</p>
			<div class="l_o">
				<img src="static/car/QQ.png"/>
				<img src="static/car/pay.png"/>
				<img src="static/car/sina.png"/>
			</div>
			<div class="ff">
				<span>正品保障</span>
				<span>十天退货</span>
				<span>十天补差价</span>
			</div>
		</div>
		<div class="con2" v-show="testL">
			<div class="c2h">
				<p class="c2p1">{{name}}</p>
				<p class="c2p2">普通会员</p>
				<p class="c2p3">账户管理></p>
				<p class="c2p4" @click="zhuxiao()">注销</p>
			</div>
			<!-- <div class="c2c1">
				我的订单<span class="r">全部订单</span>
			</div> -->
			<router-link to="/myorder" class="routebox">
				<div class="c2c1">
						我的订单<span class="r">全部订单</span>
				</div>
			</router-link>
			<div class="c2c2">
				<p class="c2p1">待付款</p>
				<p class="c2p2">查看物流</p>
				<p class="c2p3">待评价</p>
			</div>
			<div class="c2c1">
				我的钱包
			</div>
			<div class="c2c3">
				<p class="c2p1"><span>0</span>礼品卡</p>
				<p class="c2p2"><span>0</span>优惠券</p>
				<p class="c2p3"><span>100</span>积分</p>
				<p class="c2p4">分享购</p>
			</div>
			<div class="c2c4">
				我的鞋管家
			</div>
			<div class="c2c5">
				<p class="c2p1">用户中心</p>
				<p class="c2p2">积分商城</p>
				<p class="c2p3">每日签到</p>
				<p class="c2p4">联系客服</p>
			</div>
			<div class="c2c6">
				<p class="c2p1">我的签到</p>
				<p class="c2p2">帮助中心</p>
				<p class="c2p4">意见反馈</p>
			</div>
		</div>
		<!--<div v-show="lists">
			<hr />
		    <input type="text" ref="todoText" />
		    <button @click="addTodoByParam">addTodo</button>
		    <ul>
		    	<li v-for="item in $store.state.list">{{item}}</li>
		    </ul>
	    </div>-->
	</div>
	<navbar></navbar>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Toast } from 'mint-ui';
//http://mint-ui.github.io/docs/#/zh-cn2     ui使用文档地址
//https://github.com/alfhen/vue-cookie    Cookie用法网址
import Navbar  from './Nav.vue'
export default {
  name: 'wode',
  components: {
       Navbar 
  },
  data () {
    return {
      o_t: '请输入用户名',
      name: '',
      pw: '',
      lists: false,
      isActive: true,
      loading: '登录',
      testL: false
    }
  },
  mounted: function () {
  	console.log($.cookie('username'));
  	if($.cookie('username')==='null' || $.cookie('username')===undefined){
  		this.testL = false;
  	}else{
  		this.testL = true;
  		this.name = $.cookie('username');
  	}
  },
  methods: {
  	login1: function(){
  		this.o_t = '请输入用户名';
  		this.isActive = true;
  	},
  	login2: function(){
  		this.o_t = '请输入11位手机号';
  		this.isActive = false;
  	},
  	login: function() {
  	  var that = this;
  	  that.loading = "正在登录，请稍候";
      this.$http.post('/api/users/login', {
        name: this.name,
        pw: this.pw
      }).then(function(data){
//    		console.log(data.body.msg)
			that.loading = "登录";
			Toast({
			  message: data.body.msg,
			  position: 'bottom',
			  duration: 5000
			});
      		if(data.body.states){
//    			this.lists = true;
				$.cookie('username', that.name , { path: '/', expires: 1 });
      			this.testL = true;
      		}
        }, response => {
          // error callback
          console.log("error");
        });
    },
    zhuxiao: function() {
    	$.cookie('username', null);
    	this.name = '';
    	this.testL = false;
    },
    ...mapActions([
	    'addTodo'
	  ]),
	  addTodoByParam : function(){
	  	this.addTodo({
	  		text: this.$refs.todoText.value
	  	});
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#header{
	height: 1rem;
	line-height: 1rem;
	background: #f5f5f5;
	position: relative;
	text-align: center;
	overflow: hidden;
	font-size: 18px;
	border-bottom: 1px solid #ccc;
}
#con{
	background: #fff;
	.c_p1{
		height: 1rem;
		line-height: 1rem;
		text-align: center;
		width: 8rem;
		margin: 0.5rem 0 0.3rem 1rem;
		span{
			display: inline-block;
			width: 4rem;
			border-bottom: 2px solid #eee;
		}
		.active{
			border-bottom: 2px solid #0096FF;
			color: #0096FF;
		}
	}
	input,button{
		height: 1rem;
		line-height: 1rem;
		width: 8rem;
		margin-left: 1rem;
		outline: none;
		border: 0;
		border-bottom: 1px solid #ccc;
		padding-left: .5rem;
	}
	button{
		outline: auto;
		border: 1px solid #ccc;
		margin-top: 1rem;
		background: #666;
		color: #fff;
		font-size: 16px;
	}
	.news{
		color: #FF506D;
		text-align: center;
		font-size: 12px;
		margin: 0.3rem 0;
		padding: 0 1rem;
		line-height: 0.6rem;
		.s1{
			color: #666666;
		}
		.s2{
			color: skyblue;
		}
	}
	.otherL{
		margin-top: 2rem;
		text-align: center;
		color: #999;
	}
	.l_o{
		padding: 0.5rem 1.8rem 2rem;
		display: flex;
		justify-content: space-between;
		img{
			width: 1.2rem;
			height: 1.2rem;
		}
	}
	.ff{
		font-size: 12px;
		display: flex;
		padding: 0 1.8rem;
		justify-content: space-between;
		color: #999999;
		span{
			display: inline-block;
			padding-left: 0.4rem;
			background: url(../assets/car/ensure.png) no-repeat left center;
			background-size: 0.4rem 0.4rem;
		}
	}
	.con2{
		background: #F5F5F5;
		.c2h{
			padding-left: 3rem;
			padding-top: 0.5rem;
			height: 3rem;
			background: url(../assets/wode/user.png) no-repeat 0.5rem 0.3rem #EB2F0A;
			background-size: 2rem;
			color: #fff;
			position: relative;
			.c2p1{
				font-size: 16px;
			}
			.c2p2{
				margin-top: 0.5rem;
				width: 2.5rem;
				height: 0.8rem;
				line-height: 0.8rem;
				background: #990000;
				border-radius: 8px;
				text-align: center;
			}
			.c2p3{
				position: absolute;
				right: 0.3rem;
				bottom: 0.3rem;
			}
			.c2p4{
				position: absolute;
				right: 0.5rem;
				top: 0.6rem;
			}
		}
		.c2c1{
			height: 1.2rem;
			line-height: 1.2rem;
			border-bottom: 1px solid #ccc;
			padding-left: 0.4rem;
			font-size: 16px;
			background: #fff;
			span{
				font-size: 12px;
				color: #666;
				padding-right: 0.3rem;
			}
		}
		.c2c2{
			height: 2.5rem;
			padding: 0 1rem;
			display: flex;
			justify-content: space-between;
			background: #fff;
			margin-bottom: 0.3rem;
			.c2p1,.c2p2,.c2p3{
				height: 100%;
				width: 2rem;
				background: url(../assets/wode/pic_005.png) no-repeat center 0.4rem;
				background-size: 50%;
				text-align: center;
				padding-top: 1.6rem;
			}
			.c2p2{
				background: url(../assets/wode/pic_006.png) no-repeat center 0.4rem;
				background-size: 50%;
			}
			.c2p3{
				background: url(../assets/wode/pic_007.png) no-repeat center 0.4rem;
				background-size: 50%;
			}
		}.c2c3{
			height: 2.5rem;
			display: flex;
			justify-content: space-around;
			background: #fff;
			margin-bottom: 0.3rem;
			.c2p1,.c2p2,.c2p3,.c2p4{
				height: 100%;
				width: 2rem;
				text-align: center;
				padding-top: 1.6rem;
				position: relative;
				span{
					position: absolute;
					top: 0.5rem;
					left: 0;
					display: inline-block;
					width: 100%;
				}
			}
			.c2p4{
				background: url(../assets/wode/pic_008.png) no-repeat center 0.4rem;
				background-size: 50%;
			}
		}
		.c2c4{
			height: 1.2rem;
			line-height: 1.2rem;
			border-bottom: 1px solid #ccc;
			padding-left: 0.4rem;
			font-size: 16px;
			background: url(../assets/wode/gray-open.png) no-repeat 9.5rem center #fff;
			background-size: 0.3rem ;
		}
		.c2c5{
			height: 2.5rem;
			display: flex;
			justify-content: space-between;
			background: #fff;
			margin-bottom: 0.3rem;
			.c2p1,.c2p2,.c2p3,.c2p4{
				height: 100%;
				width: 2rem;
				background: url(../assets/wode/pic_009.png) no-repeat center 0.4rem;
				background-size: 50%;
				text-align: center;
				padding-top: 1.6rem;
			}
			.c2p2{
				background: url(../assets/wode/pic_010.png) no-repeat center 0.4rem;
				background-size: 50%;
			}
			.c2p3{
				background: url(../assets/wode/pic_011.png) no-repeat center 0.4rem;
				background-size: 50%;
			}
			.c2p4{
				background: url(../assets/wode/pic_012.png) no-repeat center 0.4rem;
				background-size: 50%;
			}
		}
		.c2c6{
			height: 2.5rem;
			display: flex;
			justify-content: space-between;
			background: #fff;
			padding-right: 2.6rem;
			margin-bottom: 0.3rem;
			.c2p1,.c2p2,.c2p3,.c2p4{
				height: 100%;
				width: 2rem;
				background: url(../assets/wode/pic_013.png) no-repeat center 0.4rem;
				background-size: 50%;
				text-align: center;
				padding-top: 1.6rem;
			}
			.c2p2{
				background: url(../assets/wode/pic_014.png) no-repeat center 0.4rem;
				background-size: 50%;
			}
			.c2p3{
				background: url(../assets/wode/pic_015.png) no-repeat center 0.4rem;
				background-size: 50%;
			}
		}
	}
}
</style>
