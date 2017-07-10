<template>
<div class="all Wode">
	<div id="header">
		我的
	</div>
	<div id="con">
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
			<img src="../assets/car/QQ.png"/>
			<img src="../assets/car/pay.png"/>
			<img src="../assets/car/sina.png"/>
		</div>
		<div class="ff">
			<span>正品保障</span>
			<span>十天退货</span>
			<span>十天补差价</span>
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
      loading: '登录'
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
      			this.lists = true;
      		}
        }, response => {
          // error callback
          console.log("error");
        });
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
		font-size: 18px;
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
}
</style>
