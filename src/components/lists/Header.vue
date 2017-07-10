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
					<input type="text" placeholder="请输入关键字" />
				</form>
				<a href=""> <img src="static/lists/nvxie/ygseach.png" alt="" /></a>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
	  name: 'header',
	  data : function () {
	    return {
	    	
	    }
	  },
	  methods:{
    	...mapActions([
	    'listCon'
	  ]),
	  showCon : function(){
	  	this.listCon({
	  		lists_container : !this.$store.state.lists_container
	  	});
	  }
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
		overflow: hidden;
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
}
</style>
