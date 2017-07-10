<template>
	
	<div id="header">
		<div class="listPage" v-show="$store.state.lists_container">
			<div class="arrow">
				<a href="/"><img src="static/lists/nvxie/new-back.png"></img></a>
			</div>
			<div class="search">
				<form action="" >
					<input type="text" placeholder="请输入关键字" @click="showCon()"/>
				</form>
				<a href=""> <img src="static/lists/nvxie/ygseach.png" alt="" /></a>
			</div>
			<div class="menu"> 
				<img src="static/lists/nvxie/ico-menu.png" alt="" />
			</div>
		</div>
		<div class="searchPage"  v-show="!$store.state.lists_container">
			<div class="arrow">
			    <img @click="showCon()" src="static/lists/search/ico-close.png"></img>
			</div>
			<div class="search">
				<form action="" >
					<input type="text" placeholder="请输入关键字"  v-model="search"  @keyup="get()" />
				</form>
				<p > <img src="static/lists/nvxie/ygseach.png" alt=""   @click="searchInfo()" /></p>
			</div>
			<ul class="searcRes">
				   <a href="#"><li v-for="item in t1"  class="searchLi">{{item}}</li></a>
			</ul>		
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
	  name: 'header',
	  data : function () {
	    return {
	    	search:"",
	    	t1:''
	    }
	  },
	  methods:{
		get:function(){
		        this.$http.jsonp('https://sug.so.360.cn/suggest?word=' + this.search + '&encodein=utf-8&encodeout=utf-8')
		        .then(function(res){
		       this.t1 = JSON.parse(res.bodyText).s
		       console.log(this.t1)
		      },function(error){
		      	console.log(error)
		      });
		     },
    	...mapActions([
	    'listCon',
	    'searchData'
	  ]),
	  showCon : function(){
	  	this.listCon({
	  		lists_container : !this.$store.state.lists_container
	  	});
	  },
	  searchInfo : function(){
	  	this.searchData({
	  		search_Info : this.search
	  	})
	},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	$ui-width:750px;
	@function pr($px){
		@return $px/$ui-width*7.5rem
	}

	#header{
		height: 1.5rem;
		line-height: 1.5rem;
		background: #f8f8f8;
		position: relative;
		text-align: center;
	 .listPage{	
	 		
		.arrow{
			height:1.5rem ;
			width: 1rem;
		    float:left;
			img{
					width: pr(40px);
					height: pr(70px);
					margin-top: pr(40px) ;
				}
		}
		.search{
			width:pr(750px) ;
			height: pr(80px);
			float: left;
			position: relative;
			margin-left: pr(20px);
			form{
				input{
					width:pr(750px);
					height:pr(80px);
					text-indent: 2em;
					border: none;
					
				};
			}
			a{
				position: absolute;
				top:5px;
				right:10px;
				img{
					width:pr(50px) ;
					height: pr(45px);
					
				}
			}
		}
		.menu{
			margin-left: pr(20px);
			float: left;
			img{
				margin-top: pr(45px);
				width: pr(72px);
				height: pr(60px);
				
			}
		}
	}
	.searchPage{
			width: 100%;
			height: 100%;
			background: #fff;
			border-bottom:1px solid #ccc;
			.arrow{
			height:1.5rem ;
			width: 1rem;
		    float:left;
			img{
					width: pr(40px);
					height: pr(50px);
					margin-top: pr(50px) ;
				}
		}
		.search{
			width:pr(750px) ;
			height: pr(80px);
			float: left;
			position: relative;
			margin-left: pr(20px);
			form{
				input{
					width:pr(800px);
					height:pr(90px);
					text-indent: 2em;
					border: 1px solid #000000;
					
				};
			}
			p{
				position: absolute;
				top:pr(20px);
				right:pr(40px);
				img{
					width:pr(50px) ;
					height: pr(45px);
					
				}
			}
		}
		.searcRes{
				margin-top: 50px;
				position: absolute;
				width: 100%;
				height: 100%;
				zoom: 1;
				z-index: 111;
			    .searchPage:after {
				    content: "020";
				    display: block;
				    height: 0;
				    clear: both;
				}
				.searchLi{
					width: 100%;
					height: pr(150px);
					background: #fff;
					z-index: 1111;
					position: relative;
					border-bottom: 1px solid #ccc;
					a{
						color: #ccc;
					}
				}
			}
		.menu{
			margin-left: pr(20px);
			float: left;
			img{
				margin-top: pr(45px);
				width: pr(72px);
				height: pr(60px);	
			}
		}
	
		}
		
}
</style>
