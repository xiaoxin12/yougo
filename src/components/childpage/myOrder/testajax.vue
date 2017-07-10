<template>
	<div class="all Wode">
		<input type="text" ref="inputval">
		<!--<button @click="saveBy">baocun</button> 
		<button @click="ajaxfun">qushuju</button> 
		<div v-show="$store.state.wating">
			真在请求数据 
		</div>-->
		<ul>
			<!--<li v-for="item in $store.state.list ">
				{{item}}
			</li>-->
			<li v-for="(sort,index)  in product ">
				{{sort.creattime}}
			</li>
		</ul>
	</div>
	
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Toast } from 'mint-ui';
//http://mint-ui.github.io/docs/#/zh-cn2     ui使用文档地址
//https://github.com/alfhen/vue-cookie    Cookie用法网址
export default {
  name: 'testajax',
  components: {
     
  },
  data () {
    return {
		product:[]
    }
  },
  mounted(){
  	this.ajaxfun()
  },
  methods: {  	
    ...mapActions([
	    'savedata',
	    'updateflag'
	  ]
    ),
    saveBy: function() {
  	  this.savedata({data: this.$refs.inputval.value})
    },
    ajaxfun: function () {
		this.updateflag(true);
		//ajax
		// GET /someUrl
		 this.$http.get('/data/dingdan.json').then(res => {
		
		    // get body data
		   
//		    console.log(JSON.parser(res));
			for(var i = 0;i<eval(res.body).length;i++){
				this.product .push(eval(res.body)[i]);
				console.log((res.body)[i]);
			}
		    
		    console.log( this.product);

//		    this.someData = response.body;
		
		  }, response => {
		    // error callback
		  });
    	
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
