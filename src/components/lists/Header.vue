<template>
	<div id="header" v-show="$store.state.lists_container">
		<div class="arrow">
			
			<a href="/"><img src="../../assets/lists/nvxie/new-back.png"></img></a>
		</div>
		<div class="search">
			<form action="" >
				<input type="text" placeholder="请输入关键字" @click="showCon()"/>
			</form>
			<a href=""> <img src="../../assets/lists/nvxie/ygseach.png" alt="" /></a>
		</div>
		<div class="menu"> 
			<img src="../../assets/lists/nvxie/ico-menu.png" alt="" />
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
	  		lists_container :false
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
	#container{
		display: none;
	}
</style>
