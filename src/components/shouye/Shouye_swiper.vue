<template>
    <div id="shouye_swiper">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <a href="#detail">
            <img src="static/image/index/swiper (1).jpg" alt="">
          </a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="#detail">
            <img src="static/image/index/swiper (2).jpg" alt="">
          </a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="#detail">
            <img src="static/image/index/swiper (3).jpg" alt="">
          </a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="#detail">
            <img src="static/image/index/swiper (4).jpg" alt="">
          </a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="#detail">
            <img src="static/image/index/swiper (5).jpg" alt="">
          </a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="#detail">
            <img src="static/image/index/swiper (6).jpg" alt="">
          </a>
        </mt-swipe-item>

      </mt-swipe>

    </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui';
  import Vue from 'vue'
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
  export default {
    name: 'shouye_swiper',
    components: {

    },
    data () {
      return {

      }
    },
    methods: {
      handleChange(index) {
//      ...
      }
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
