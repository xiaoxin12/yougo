<template>
    <div id="shouye_swiper">
      <mt-swipe :auto="4000">
        <mt-swipe-item  v-for="(item ,index) in product " :key="index">
          <a v-bind:href="item.dir" >
            <img v-bind:src="item.img_src" alt=""   @click='changehref(item.hrefVal)'>
          </a>
        </mt-swipe-item>
      </mt-swipe>

    </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui';
import { mapGetters, mapActions } from 'vuex'
import Vue from 'vue'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  name: 'shouye_swiper',
  components: {

  },
  data () {
    return {
  		product:[]
    }
  },
  mounted() {
  	this.ajaxfun();
  },
  methods: {
    ...mapActions([
	    'savedata',
	    'updateflag',
      'hrefVal'
	  ]),
  	ajaxfun: function () {
  		this.updateflag(true);
  			//ajax
  		 this.$http.get('/api/shouy/find?class=swiper').then(res => {
    			for(var i = 0;i<eval(res.body).length;i++){
    				if(res.body[i].class=="swiper"){
    					this.product .push(eval(res.body)[i]);
    				}
    			}
  		  }, response => {
  		    // error callback
  		  });       	
      }  
    },
    changehref(val) {
        this.hrefVal({
          hrefVal: val
        });
        console.log(this.$store.state.hrefVal);
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .fl{
    float:left;
  }
  .fr{
    float: right;
  }
  input{
    border:none;
  }
  #shouye_swiper{
    width:10rem;
    height:8rem;
    /*background:#0f0;*/

    a{
      img{
        width:100%;
        heihgt:5rem;
      }
    }

  }
</style>
