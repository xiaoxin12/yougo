<template>
    <div class="shouye_repeat">
      <!--这里是空白线-->
      <img class="dapaiindex_img" src="static/image/index/line-margin.jpg" alt="">
      <!--这里是section-->
      <!--品牌咨询1-->
      <div class="brand">
        <!--品牌咨询-->
        <img class="brand_img pinpai" src="static/image/index/ajax/brand (1).jpg" alt="">

        <ul class="list4">
          <li class="fl"  v-for="item  in brands1 ">
            <a :href="item.dir">
              <img class="dapaiindex_img" v-bind:src="item.img_src"  alt="">
            </a>
          </li>
        </ul>
      </div>
      <!--周精选-->
      <div class="brand">
        <!--周精选-->
        <img class="brand_img" src="static/image/index/ajax/brand (2).jpg" alt="">

        <ul class="list4">
          <li class="fl"  v-for="item  in brands2 ">
            <a :href="item.dir">
              <img class="dapaiindex_img" v-bind:src="item.img_src"  alt="">
            </a>
          </li>
        </ul>
      </div>

      <!--新品着陆-->
      <div class="brand">
        <!--新品着陆-->
        <img class="brand_img" src="static/image/index/ajax/brand (3).jpg" alt="">

          <!--一行2个-->
        <ul class="list2">
          <li class="fl"  v-for="item  in brands3img2 ">
            <a :href="item.dir">
              <img class="dapaiindex_img" v-bind:src="item.img_src"  alt="">
            </a>
          </li>
        </ul>
        <ul class="list4">
           <li class="fl"  v-for="item  in brands3 ">
            <a :href="item.dir">
              <img class="dapaiindex_img" v-bind:src="item.img_src"  alt="">
            </a>
          </li>         
        </ul>
        <a href="">
        	<img  class="bagimg" src="static/image/index/ajax/bagimg (1).jpg" alt="">
        </a>
      </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
	
  export default {
    name: 'shouye_repeat',
    components: {

    },
    data () {
      return {
		brands1:[],
		brands2:[],
		brands3:[],
		brands3bg:[],
		brands3img2:[],
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
    	ajaxfun: function () {
			this.updateflag(true);
			//ajax
			 this.$http.get('/api/shouy/find?class=price&class=tejia').then(res => {
				for(var i = 0;i<eval(res.body).length;i++){
	//				console.log(res.body[i].class)
					if(res.body[i].class=="brands1"){
						this.brands1.push(eval(res.body)[i]);
	//					console.log(res.body[i].class);
					};
					if(res.body[i].class=="brands2"){
						this.brands2.push(eval(res.body)[i]);
					};
					if(res.body[i].class=="brands3"){
						if(res.body[i].price==1){
							this.brands3img2.push(eval(res.body)[i]);
							console.log(this.brands3img2)
						}else if(res.body[i].price==2){
							this.brands3bg.push(eval(res.body)[i]);							
						}else{
							this.brands3.push(eval(res.body)[i]);							
						
						}
						
					};
//					if(res.body[i].class=="price"){
//						this.price.push(eval(res.body)[i]);					
//					};
//					if(res.body[i].class=="dapaiindex"){
//						this.dapaiindex.push(eval(res.body)[i]);					
//					};
//					if(res.body[i].class=="list2"){
//						this.list2_cnic.push(eval(res.body)[i]);					
//					};
				}
			  }, response => {
			    // error callback
			  });
    	
    	}
    
      
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  body{
    background:#eee;
  }

  .fl{
    float:left;
  }
  .fr{
    float: right;
  }

  .shouye_repeat{
    width:100%;
    /*height:500px;*/
    background: #fff;
    overflow:hidden;
    img.dapaiindex_img{
      widht:100%;
      height:0.3rem;
    }
    div.brand{
      width:100%;
      img.brand_img{
        width: 100%;
        height:1rem;
      }
      ul.list4{
        width:100%;
        height:100%;
        li{
          width: 25%;
          height:100%;
          a{
            img{
              width: 100%;
              height:100%;
            }
          }
        }
      }

      ul.list2{
        width:100%;
        li{
          width:50%;
          height:100%;
          a{
            width: 100%;
            height:100%;
            img{
              width: 100%;
              height:3rem;
            }
          }
        }
      }


      img.bagimg{
        width:100%;
        height:3rem;
      }
    }
  }
</style>
