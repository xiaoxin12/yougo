<template>
    <div id="shouye_bgred">

        <ul class="xie_xue_fj_list" >

          <li class="tejia"  v-for="item  in tejia ">
            <a :href="item.dir">
              <img v-bind:src="item.img_src" alt=""  @click='changehref(item.hrefVal)'>
            </a>
          </li>
        </ul>
        <section class="price"  v-for="item  in price ">
          <a :href="item.dir">
            <img class="prices" v-bind:src="item.img_src" alt=""   @click='changehref(item.hrefVal)'>
          </a>
        </section>
          <ul class="dapaiindex">
            <li class="fl" v-for="item  in dapaiindex ">
              <a :href="item.dir">
                <img class="dapaiindex_img"  v-bind:src="item.img_src" alt=""   @click='changehref(item.hrefVal)'>
              </a>
            </li>
          </ul>
        
      <!--折是空白线-->
      <img class="dapaiindex_img" src="static/image/index/line-margin.jpg" alt="">

      <section>
          <ul class="list2">
            <li class="fl" v-for="item  in list2_cnic ">
              <a :href="item.dir">
                <img class="dapaiindex_img" v-bind:src="item.img_src" alt=""   @click='changehref(item.hrefVal)'>
              </a>
            </li>
          </ul>
        </section>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
	
  export default {
    name: 'Shouye_bgred',
    components: {

    },
     data () {
      return {
    		product:[],
    		tejia:[],
    		price:[],
    		dapaiindex:[],
    		list2_cnic:[],
      }
    },
    mounted(){
	  	this.ajaxfun()
	},
    methods: {
      	 ...mapActions([
		    'savedata',
		    'updateflag',
        'hrefVal'
		  ]
	    ),
    	ajaxfun: function () {
  		  this.updateflag(true);
  			//ajax
  		 this.$http.get('/api/shouy/find?class=price&class=tejia').then(res => {

    			for(var i = 0;i<eval(res.body).length;i++){
    				if(res.body[i].class=="tejia"){
    					this.tejia.push(eval(res.body)[i]);
              // console.log(tejia)
    				};
    				if(res.body[i].class=="price"){
    					this.price.push(eval(res.body)[i]);					
    				};
    				if(res.body[i].class=="dapaiindex"){
    					this.dapaiindex.push(eval(res.body)[i]);					
    				};
    				if(res.body[i].class=="list2"){
    					this.list2_cnic.push(eval(res.body)[i]);					
    				};
    			}
  		  }, response => {
  		    // error callback
  		  });
      	
      },
      changehref(val) {
        this.hrefVal({
          hrefVal: val
        });
        console.log(this.$store.state.hrefVal);
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
  input{
    border:none;
  }
  #shouye_bgred{
    width:100%;
    height:15rem;
    // background:red;
    .xie_xue_fj_list{
      height:3rem;
      width:100%;
      display: flex;
      font-size:0;
      /*background:yellow;*/
      li{
        background:#fff;
        overflow:hidden;
        a{
          display: inline-block;
          overflow: hidden;
          textl-align:center;
          display:block;
          width: 2.5rem;
        }
        img{
          height:3rem;
          display:block;
          vertical-align: top;
          border: none;
        }
      }
    }
    section.price{
      height:3.2rem;
      line-height: 3.2rem;
      a{
        overflow: hidden;
        img{
          height:3.2rem;
          width: 100%;
        }
      }
    }
 .dapaiindex{
    width:100%;
    height:3.5rem;
    /*display: flex;*/
    flex-direction:row;
    li{
      width:25%;
      /*flex: 1;*/
      a{
        img{
          width:100%;
          height:3.5rem;
          display: block;
        }
      }
    }
  }
  section{
    ul.list2{
      width:100%;
      height:4rem;
      li{
        width:50%;
        height:50%;
        a{
          img{
            width:5rem;
            height:100%;
          }
        }
      }
    }
  }


  }
</style>
 <!-- @click="changehref('{{item.hrefVal}}')" -->