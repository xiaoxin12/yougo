<template>
    <div id="shouye_bgred">
        <ul class="xie_xue_fj_list">

          <li class="tejia">
            <a href="">
              <img src="static/image/index/xxtejia (1).jpg" alt="">
            </a>
          </li>
          <li class="tejia">
            <a href="">
              <img src="static/image/index/xxtejia (2).jpg" alt="">
            </a>
          </li>
          <li class="tejia">
            <a href="">
              <img src="static/image/index/xxtejia (3).jpg" alt="">
            </a>
          </li>
          <li class="tejia">
            <a href="">
              <img src="static/image/index/xxtejia (4).jpg" alt="">
            </a>
          </li>

        </ul>
        <section class="price">
          <a href="">
            <img class="prices" src="static/image/index/prices.jpg" alt="">
          </a>
        </section>
          <ul class="dapaiindex">
            <li class="fl">
              <a href="">
                <img class="dapaiindex_img" src="static/image/index/dapaiindex_img (1).jpg" alt="">
              </a>
            </li>
            <li class="fl">
              <a href="">
                <img class="dapaiindex_img" src="static/image/index/dapaiindex_img (2).jpg" alt="">
              </a>
            </li>

            <li class="fl">
              <a href="">
                <img class="dapaiindex_img" src="static/image/index/dapaiindex_img (3).jpg" alt="">
              </a>
            </li>

            <li class="fl">
              <a href="">
                <img class="dapaiindex_img" src="static/image/index/dapaiindex_img (4).jpg" alt="">
              </a>
            </li>

          </ul>
        <section class="listimg4">
          <ul class="dapaiindex">
            <li class="fl">
              <a href="">
                <img class="dapaiindex_img" src="static/image/index/list_4img (1).jpg" alt="">
              </a>
            </li>
            <li class="fl">
              <a href="">
                <img class="dapaiindex_img" src="static/image/index/list_4img (2).jpg" alt="">
              </a>
            </li>

            <li class="fl">
              <a href="">
                <img class="dapaiindex_img" src="static/image/index/list_4img (3).jpg" alt="">
              </a>
            </li>

            <li class="fl">
              <a href="">
                <img class="dapaiindex_img" src="static/image/index/list_4img (4).jpg" alt="">
              </a>
            </li>

          </ul>
          <ul class="dapaiindex">
            <li class="fl">
              <a href="">
                <img class="dapaiindex_img" src="static/image/index/list_4img (5).jpg" alt="">
              </a>
            </li>
            <li class="fl">
              <a href="">
                <img class="dapaiindex_img" src="static/image/index/list_4img (6).jpg" alt="">
              </a>
            </li>

            <li class="fl">
              <a href="">
                <img class="dapaiindex_img" src="static/image/index/list_4img (7).jpg" alt="">
              </a>
            </li>

            <li class="fl">
              <a href="">
                <img class="dapaiindex_img" src="static/image/index/list_4img (8).jpg" alt="">
              </a>
            </li>

          </ul>
        </section>
      <!--折是空白线-->
      <img class="dapaiindex_img" src="static/image/index/line-margin.jpg" alt="">

      <section>
          <ul class="list2">
            <li class="fl">
              <a href="">
                <img class="dapaiindex_img" src="static/image/index/list_2img (1).jpg" alt="">
              </a>
            </li>
            <li class="fl">
              <a href="">
                <img class="dapaiindex_img" src="static/image/index/list_2img (2).jpg" alt="">
              </a>
            </li>
            <li class="fl">
              <a href="">
                <img class="dapaiindex_img" src="static/image/index/list_2img (3).jpg" alt="">
              </a>
            </li>
            <li class="fl">
              <a href="">
                <img class="dapaiindex_img" src="static/image/index/list_2img (4).jpg" alt="">
              </a>
            </li>
          </ul>
        </section>
    </div>
</template>
<script>
  export default {
    name: 'Shouye_bgred',
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
  input{
    border:none;
  }
  #shouye_bgred{
    width:100%;
    height:15rem;
    background:red;
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
