<template>
    <div id="header">
      <div class="listPage" v-show="$store.state.shouye">
        <div class="logo fl"></div>
        <div class="search">
          <form action="" >
            <input type="text" class="input fl"  placeholder="百丽集团盛夏折扣季 领卷最多减20元" @click="showCons()"/>
          </form>
        </div>
        <div class="mesg fr">
            <p class="span2">消息</p>
        </div>
      </div>

            <div class="searchPage"  v-show="!$store.state.shouye">
              <div class="arrow">
                  <img @click="showCons()" src="static/lists/search/ico-close.png"></img>
              </div>
              <div class="search">
                <form action="" >
                  <input type="text" placeholder="请输入关键字"  v-model="search"  @keyup="get()" />
                </form>
                <a > <img src="static/lists/nvxie/ygseach.png" alt=""   @click="searchInfo()" /></a>
              </div>
              <ul id="resjson" class="searcRes ">
                 <a href="#"><li v-for="item in t1"  class="searchLi">{{item}}</li></a>
              </ul>  
            </div>

    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'shouye_head',
    data : function () {
      return {
        search:"",
        t1:''
      }
    },
    mounted(){
      this.scrolltop()
    },
    methods:{
    get:function(){
            this.$http.jsonp('https://sug.so.360.cn/suggest?word=' + this.search + '&encodein=utf-8&encodeout=utf-8')
            .then(function(res){
           this.t1 = JSON.parse(res.bodyText).s
        
          },function(error){
            console.log(error)
          });
         },
      ...mapActions([
      'listCons',
      'searchData'
    ]),
    showCons : function(){
      this.listCons({
        shouye : !this.$store.state.shouye
      });
    },
    searchInfo : function(){
      this.searchData({
        search_Info : this.search
      })
    },
    scrolltop: function (){
        // console.log()
        $("#con").scroll(function(evt){
         var height = $('#con').scrollTop();
         // console.log(height);
          if(height>100){
            $("#header").css({
              "background":"red"
              // "opacity":"1"
            })
          }else{
            $("#header").css({
              "background":"rgba(255,255,200,0.2)"
              // "opacity":"1"
            })
          }
        })
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
  #header{
    width:100%;
    // padding:0 5px;
    height: 1.1rem;
    /*line-height: 1.1rem;*/
    // background: #fff;
    position: fixed;
    text-align: center;
    // overflow: hidden;
    top:0;
    z-index:999;
    .listPage{
      .logo{
        width:1.5rem;
        height:0.9rem;
        /*padding:0.1rem;*/
        margin:0.1rem 0;
        background:url('../../../src/assets/image/index/logo.png') no-repeat;
       background-size: cover;

      }
      input.input{
        width: 7rem;
        height:0.9rem;
        line-height: 0.9rem;
        /*margin:0.1rem .2rem;*/
        margin:0.1rem;
        /*margin-bottom: 0;*/
        padding:0 0.3rem 0 0.7rem;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius:3px;
        background: #fff url('../../../src/assets/image/index/search-gray.png') no-repeat ;
        background-position: 0.1rem 0.2rem;
        background-size: 0.5rem;
      }
      div.mesg{
        width:0.9rem;
        height:1rem;
        text-align:center;
        .span2{
          font-size: 12px;
          width: 0.8rem;
          height:0.5rem;
          padding-top:0.6rem;
          background: url("../../../src/assets/image/index/information-small.png") no-repeat;
          background-size: 18px;
          background-position: 0.15rem 0.1rem;
          color: #fff;
        }
      }
    }
    .searchPage{
      width:100%;
      height:100%;
      background:#fff;
      border-bottom:1px solid #ccc;
      .arrow{
        height:1.1rem ;
        width: 1rem;
        float:left;
        img{
          width: 0.7rem;
          height: 0.7rem;
          margin-top: 0.2rem;

        }
      }
      .search{
        width:8rem ;
        height: 1rem;
        float: left;
        position: relative;
        margin-left: 0.2rem;
        form{
          input{
            width:8.5rem ;
            height: 0.9rem;
            text-indent: 2em;
            border: 1px solid #000;
            margin-top: 0.1rem;
            
          };
        }
        a{
          position: absolute;
          top:0.2rem;
          right:-0.2rem;
          img{
            width:0.7rem ;
            height:0.7rem;
            
          }
        }
      }
      .searcRes{
        margin-top: 1rem;
        position: absolute;
        width: 100%;
        height: 100%;
        zoom: 1;
        z-index: 222;
        .searchPage:after {
          content: "020";
          display: block;
          height: 0;
          clear: both;
        }
        a{
          // color: red;
          .searchLi{
            height: 1rem;
            line-height: 1rem;
            background:#fff;
            z-index: 1111;
            position: relative;
            border-bottom: 1px solid #ccc;
            a{
              color: #ccc;
            }
          }
        }
      }
    }

  }
</style>
