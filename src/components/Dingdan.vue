<template>
<div class="all Dingdan">
	<div id="header">
		<span class="carH">购物车</span><router-link to="/wode">{{username}}</router-link>
	</div>
	<div id="con">
		<div class="con1" v-show="!haspro">
			<img src="static/car/car.png"/>
			<p>购物车是空的!</p>
			<router-link to="/detail">去详情页（测试）</router-link>
		</div>
		<div class="con2" v-show="haspro">
			<div v-for="(list,index) in carlist" class="carlist">
				<p class="p1">{{list.pro_name}}</p>
				<img :src="list.pro_pic" class="pro_pic"/>
				<p class="p2">颜色：{{list.color}}</p>
				<p class="p3">尺码：{{list.chima}}</p>
				<p class="p4">数量：<button @click="jian(index)">-</button><span>{{list.count}}</span><button @click="jia(index)">+</button></p>
				<p class="p5">{{list.price}}</p>
				<img src="static/car/del.png" class="del" @click="del(index)"/>
			</div>
		</div>
	</div>
	<div class="allcar" v-show="haspro">
		总价格：<span>{{allPrice}}</span><a class="r" href="#/myorder">去结算</a>
	</div>
	<navbar></navbar>
</div>
</template>

<script>
import Navbar  from './Nav.vue'
export default {
  name: 'dingdan',
  components: {
       Navbar 
  },
  data () {
    return {
    	haspro: true,
    	carlist:[],
    	username: '去登录',
    	allPrice: 0
    }
  },
  mounted: function(){
  	if(($.cookie('username')==='null' || $.cookie('username')===undefined) && localStorage.getItem('username') === null){
		this.username = '去登录';
		this.haspro = false;
	}else{
  		this.username =  localStorage.getItem('username')===null ? $.cookie('username') : localStorage.getItem('username');
  		this.haspro = true;
	}
  	this.getcarlist();
  	var that = this;
  	setTimeout(function(){
  		that.getAllPrice();  		
  	},2000)
  },
  methods: {
  	del(index){
  		var that = this;
//		console.log(this.username)
//		console.log($('.p1',$('.carlist')[index]).text());
  		this.$http.post('/api/car/del',{
  			username: this.username,
  			pro_name: $('.p1',$('.carlist')[index]).text()
  		}).then(function(data){
  			this.getcarlist();
  			var that = this;
  			setTimeout(function(){
  				that.getAllPrice();  				
  			},2000);
	   	}, response => {
	      console.log("error");
	    });
  	},
  	getcarlist: function(){
  		var that = this;
  		that.$http.post('/api/car/cartlist', {
	        username: that.username
	    }).then(function(data){
	    	if(data.body.list === undefined){
	    		that.haspro = false;
	    		return;
	    	}
//	     	console.log(data.body.list);
	     	that.carlist = data.body.list;
	    }, response => {
	      // error callback
	      console.log("error");
	    })
  	},
  	jian(index){
  		var num = $('.p4 span',$('.carlist')[index]).text();
  		num = parseInt(num);
  		num--;
  		if(num<1){
  			num = 1;
  		}
//		console.log(num);
  		$('.p4 span',$('.carlist')[index]).text(num);
  		this.getAllPrice();
  	},
  	jia(index){
  		var num = $('.p4 span',$('.carlist')[index]).text();
  		num = parseInt(num);
  		num++;
//		console.log(num);
		$('.p4 span',$('.carlist')[index]).text(num);
		this.getAllPrice();
  	},
  	getAllPrice: function () {
    	$('.carlist').length;
    	var allPri = 0;
    	var price = 0;
    	var count = 0;
    	for(var i=0; i<$('.carlist').length;i++){
    		count = parseInt($('.p4 span',$('.carlist')[i]).text());
    		price = parseInt($('.p5',$('.carlist')[i]).text().substring(1));
//  		console.log(parseInt($('.p5',$('.carlist')[i]).text()));
    		allPri += count*price;
//  		console.log(allPri);
    	}
      	this.allPrice = allPri;
    }
  },
  computed: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#header{
	height: 1rem;
	line-height: 1rem;
	background: #f5f5f5;
	text-align: center;
	overflow: hidden;
	font-size: 18px;
	position: relative;
	a{
		position: absolute;
		right: .4rem;
		font-size: 12px;
		color: #666;
	}
}
#con{
	background: #eee;
	text-align: center;
	.con1{
		height:100%;
		width:100%;
		img{
			width: 2.5rem;
			height: 2rem;
			margin-top: 2.5rem;
			margin-bottom: 1rem;
		}
	}
	.con2{
		width: 10rem;
		overflow-x: hidden;
		.carlist{
			width: 10rem;
			padding: 0.2rem 0.5rem;
			background: #fff;
			margin-bottom: 0.3rem;
			height: 3.8rem;
			position: relative;
			p{
				text-align: left;
				color: #666;
			}
			.p1{
				height: 0.8rem;
				line-height: 0.8rem;
				font-size: 14px;
				width: 8.5rem;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.pro_pic{
				height: 2.5rem;
				width: 2.5rem;
				position: absolute;
				left: 0.5rem;
				top: 1rem;
				border: 1px solid #ccc;
			}
			.p2{
				height: 0.8rem;
				line-height: 0.8rem;
				width: 5rem;
				position: absolute;
				top: 1rem;
				left: 3.5rem;
				font-size: 14px;
			}
			.p3{
				height: 0.8rem;
				line-height: 0.8rem;
				width: 5rem;
				position: absolute;
				top: 1.8rem;
				left: 3.5rem;
				font-size: 14px;
			}
			.p4{
				height: 0.8rem;
				line-height: 0.8rem;
				width: 5rem;
				position: absolute;
				top: 2.6rem;
				left: 3.5rem;
				font-size: 14px;
				button,span{
					display: inline-block;
					text-align: center;
					width: 0.5rem;
					height: 0.5rem;
					line-height: 0.5rem;
				}
			}
			.p5{
				height: 0.8rem;
				line-height: 0.8rem;
				width: 3rem;
				position: absolute;
				top: 1rem;
				right: 0.5rem;
				font-size: 14px;
				text-align: right;
				color: #000;
			}
			.del{
				width: 0.5rem;
				height: 0.6rem;
				position: absolute;
				right: 0.5rem;
				bottom: 0.5rem;
			}
		}
	}
}
.allcar{
	height: 1rem;
	line-height: 1rem;
	color: red;
	font-size: 18px;
	padding-left: 1rem;
	text-align: left;
	background: #fff;
	a{
		display: inline-block;
		height: 1rem;
		padding: 0 1rem;
		background: red;
		color: white;
	}
}

</style>
