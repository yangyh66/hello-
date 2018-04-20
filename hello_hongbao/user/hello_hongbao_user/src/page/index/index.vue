<template>
  <div>
    <div class="swiper">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="/static/img/index/banner.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="/static/img/index/banner.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="/static/img/index/banner.jpg" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="contain">
      <div class="rank">
        <div class="rankList">
          <div class="list">
            <rank></rank>
          </div>
          <div class="list">
            <rank></rank>
          </div>
          <div class="list">
          <rank></rank>
        </div>
        </div>
      </div>
    </div>
    <div class="recommended">
        <div class="title">
          <div>
            <div>
              <img src="/static/img/index/recommended.png" alt="">
            </div>
            <h2>推荐商家</h2>
          </div>
        </div>
      <div class="mainBox">
        <recommended  v-for="(item,index) in recommended " :name="item.name" :address="item.address" :key="index" v-if="index<show"></recommended>
      </div>
      <button @click="showMore" v-text="recommended.length>show?'查看更多':'已经到底啦'"></button>
    </div>
  </div>
</template>

<script>
  import rank from "./components/rank.vue"
  import recommended from "./components/recommended.vue"
  export default {
    data() {
      return {
        recommended: [
            {
            name:'良品铺子',
            address:"锦华店"
            },
          {
            name:'1111',
            address:"1111"
          },
          {
            name:'222',
            address:"2222"
          },
          {
            name:'333',
            address:"3333"
          },
          {
            name:'444',
            address:"444"
          },
          {
            name:'555',
            address:"555"
          },
          {
            name:'6666',
            address:"6666"
          },
          {
            name:'7777',
            address:"777"
          },
          {
            name:'88',
            address:"8888"
          }
        ],
        show:6
      };
    },
    components:{
      rank,
      recommended
    },
    methods:{
      showMore(){
        this.show = this.recommended.length;
      }
    }
  };
</script>

<style scoped lang="scss">
.swiper{
  height: 200px;
}
  .mint-swipe{
    img{
      width: 100%;
      height: 100%;
    }
  }
  .contain{
    background-color: #ffd25b;
    position: relative;
    padding: 20px 0;
    height: 300px;
    width: 100%;
    .rank{
      background: url("/static/img/index/rank.png")no-repeat;
      background-size: contain;
      background-position: center;
      width: 100%;
      height: 300px;
      position: absolute;
      left: 50%;
      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      -o-transform: translateX(-50%);
      transform: translateX(-50%);
      img{
        width: 100%;
      }
    }
  }

  .rankList{
    width: 79.5%;
    position: absolute;
    top: 107px;
    left: 15%;
  }
  .list{
    height: 30px;
    line-height: 30px;
    margin-top: 9px;
    padding-top: 9px;
    position: relative;
    font-family: "Microsoft YaHei UI";
    font-size: .8rem;
    color: #333;
  }
  .list~.list{
    border-top: 1px solid #f2deaf;
  }
  .recommended{
    .mainBox{
      padding: 0 10px;
      overflow: hidden;
      padding-top: 10px;
    }
    .title{
      border-bottom: 1px solid #e3e3e3;
      height: 30px;
      padding: 15px 0;
      div{
        width: 35%;
        margin: 0 auto;
        div{
          float: left;
          width: 30px;
          height: 30px;
          margin-right: 10px;
          img{
            height: 100%;
            width: 100%;
          }
        }
        h2{
          text-align: center;
          height: 30px;
          line-height: 30px;
          font-family: "Microsoft YaHei UI";
          font-weight: 400;
          font-size: 20px;
        }
      }
    }
  }
  button{
    height: 30px;
    width: 120px;
    border: 1px solid;
    outline: none;
    background: #fff;
    color: #f04747;
    border-radius: 30px;
    margin: 0px auto;
    display: block;
    margin-bottom: 76px;
  }
@media screen and (min-width: 500px) {  //ipad
  .swiper{
    height: 300px;
  }
  .contain{
    height: 450px;
    .rank{
      height: 450px;
      .rankList{
        width: 58.5%;
        position: absolute;
        top: 150px;
        left: 25%;
        .list{
          height: 33px;
          line-height: 40px;
          margin-top: 21px;
          padding-top: 21px;
          position: relative;
          font-family: "Microsoft YaHei UI";
          font-size: 1.5rem;
          color: #333;
        }
      }
    }
  }
  .title>div{
    width: 25% !important;
    h2{
      font-size: 30px !important;
    }
  }
  button{
    height: 60px;
    width: 220px;
    border-radius: 60px;
    font-size: 1.6rem;
  }
}
@media screen and (min-width: 1000px) { //ipad pro
  .swiper{
    height: 500px;
  }
  .contain{
    height: 550px;
    .rank{
      height: 550px;
      .rankList{
        width: 50.5%;
        position: absolute;
        top: 195px;
        left: 25%;
        .list{
          height: 60px;
          line-height: 60px;
          margin-top: 14px;
          padding-top: 14px;
          position: relative;
          font-family: "Microsoft YaHei UI";
          font-size: 1.8rem;
          color: #333;
        }
      }
    }
  }
  .title>div{
    width: 20% !important;
    h2{
      font-size: 40px !important;
    }
  }
}
@media screen and (max-width: 350px) {
  .rank{
    width: 325px;
  }
}
@media screen and (max-width: 330px){
  .list {
    height: 30px;
    line-height: 30px;
    margin-top: 7px;
    padding-top: 7px;
  }
  .title{
    h2{
      font-size: 18px !important;
    }
  }
}
</style>
