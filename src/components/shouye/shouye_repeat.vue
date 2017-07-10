<template>
    <div class="shouye_repeat">
      <!--这里是空白线-->
      <img class="dapaiindex_img" src="static/image/index/line-margin.jpg" alt="">
      <!--这里是section-->
      <!--品牌咨询1-->
      <div class="brand">
        <!--品牌咨询-->
        <img class="brand_img" src="static/image/index/ajax/brand (1).jpg" alt="">

        <ul class="list4">
          <li class="fl">
            <a href="#myorder">
              <img class="dapaiindex_img" src="static/image/index/ajax/brands1 (1).jpg" alt="">
            </a>
          </li>
          <li class="fl">
            <a href="">
              <img class="dapaiindex_img" src="static/image/index/ajax/brands1 (2).jpg" alt="">
            </a>
          </li>
          <li class="fl">
            <a href="">
              <img class="dapaiindex_img" src="static/image/index/ajax/brands1 (3).jpg" alt="">
            </a>
          </li>
          <li class="fl">
            <a href="">
              <img class="dapaiindex_img" src="static/image/index/ajax/brands1 (4).jpg" alt="">
            </a>
          </li>
          <li class="fl">
            <a href="">
              <img class="dapaiindex_img" src="static/image/index/ajax/brands1 (5).jpg" alt="">
            </a>
          </li>

          <li class="fl">
            <a href="">
              <img class="dapaiindex_img" src="static/image/index/ajax/brands1 (6).jpg" alt="">
            </a>
          </li>

          <li class="fl">
            <a href="">
              <img class="dapaiindex_img" src="static/image/index/ajax/brands1 (7).jpg" alt="">
            </a>
          </li>

          <li class="fl">
            <a href="">
              <img class="dapaiindex_img" src="static/image/index/ajax/brands1 (8).jpg" alt="">
            </a>
          </li>
        </ul>
      </div>
      <!--周精选-->
      <div class="brand">
        <!--周精选-->
        <img class="brand_img" src="static/image/index/ajax/brand (2).jpg" alt="">

        <ul class="list4">
          <li class="fl">
            <a href="">
              <img class="dapaiindex_img" src="static/image/index/ajax/brands2 (1).jpg" alt="">
            </a>
          </li>
          <li class="fl">
            <a href="">
              <img class="dapaiindex_img" src="static/image/index/ajax/brands2 (2).jpg" alt="">
            </a>
          </li>
          <li class="fl">
            <a href="">
              <img class="dapaiindex_img" src="static/image/index/ajax/brands2 (3).jpg" alt="">
            </a>
          </li>
          <li class="fl">
            <a href="">
              <img class="dapaiindex_img" src="static/image/index/ajax/brands2 (4).jpg" alt="">
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
          <li class="fl">
            <a href="">
              <img class="dapaiindex_img" src="static/image/index/ajax/brands3img2 (1).jpg" alt="">
            </a>
          </li>
          <li class="fl">
            <a href="">
              <img class="dapaiindex_img" src="static/image/index/ajax/brands3img2 (2).jpg" alt="">
            </a>
          </li>
        </ul>
        <ul class="list4">
          <li class="fl">
            <a href="">
              <img class="dapaiindex_img" src="static/image/index/ajax/brands3 (1).jpg" alt="">
            </a>
          </li>
          <li class="fl">
            <a href="">
              <img class="dapaiindex_img" src="static/image/index/ajax/brands3 (2).jpg" alt="">
            </a>
          </li>
          <li class="fl">
            <a href="">
              <img class="dapaiindex_img" src="static/image/index/ajax/brands3 (3).jpg" alt="">
            </a>
          </li>
          <li class="fl">
            <a href="">
              <img class="dapaiindex_img" src="static/image/index/ajax/brands3 (4).jpg" alt="">
            </a>
          </li>

        </ul>
        <img  class="bagimg" src="static/image/index/ajax/bagimg (1).jpg" alt="">
      </div>
    </div>
</template>
<script>
  export default {
    name: 'shouye_repeat',
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
