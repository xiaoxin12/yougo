<template>
    <div id="header">
        <div class="logo fl"></div>
        <input class="input fl" type="text" placeholder="百丽集团盛夏折扣季 领卷最多减20元">
        <div class="mesg fr">
            <p class="span2">消息</p>
        </div>

    </div>
</template>

<script>
  export default {
    name: 'shouye_head',
    components: {

    },
    data () {
      return {

      }
    },
    mounted(){
      this.scrolltop()
    },
    methods :{
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
    padding:0 5px;
    height: 1.1rem;
    /*line-height: 1.1rem;*/
    // background: red;
    position: fixed;
    text-align: center;
    overflow: hidden;
    top:0;
    z-index:999;
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
      width:0.7rem;
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
</style>
