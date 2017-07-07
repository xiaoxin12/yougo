<template>
<div class="all Wode">
	<div id="header">
		我的
	</div>
	<div id="con">
		<input type="text" v-model="name" placeholder="请输入用户名"/>
		<input type="password" v-model="pw" placeholder="请输入密码"/>
		<button @click="login">登录</button>
		<div v-show="lists">
			<hr />
		    <input type="text" ref="todoText" />
		    <button @click="addTodoByParam">addTodo</button>
		    <ul>
		    	<li v-for="item in $store.state.list">{{item}}</li>
		    </ul>
	    </div>
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
      name: '',
      pw: '',
      lists: false
    }
  },
  methods: {
  	login: function() {
  	  Toast({
		  message: '提示',
		  position: 'bottom',
		  duration: 5000
		});
      this.$http.post('/api/login.php', {
        name: this.name,
        pw: this.pw
      }).then(function(data){
//    		console.log(data.body.msg)
      		alert(data.body.msg)
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
<style scoped>
#header{
	height: 1.5rem;
	line-height: 1.5rem;
	background: #0096FF;
	position: relative;
	text-align: center;
	overflow: hidden;
}

</style>
