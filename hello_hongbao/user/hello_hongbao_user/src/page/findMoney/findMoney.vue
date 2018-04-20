<template>
    <div>
      <div class="navBar">
        <ul>
          <li class="left" @click="change(1)" :class="changeid===1?'active':''">附近红包</li>
          <li class="right" @click="change(2)" :class="changeid===2?'active':''">购买优惠券</li>
        </ul>
      </div>

      <!-- tab-container -->
      <div class="container">
          <div v-show="changeid===1">
            <nearshop></nearshop>
          </div>
          <div v-show="changeid===2">

          </div>
      </div>
    </div>
</template>

<script>
  import nearshop from './components/nearshop.vue'
    export default {
        data() {
          return {
            changeid: 1
          }
        },
      components:{nearshop},
      methods:{
          change(id){
            this.changeid = id;
          }
      }
    }
</script>


<style scoped lang="scss">
.navBar{
  width: 70%;
  margin: 10px auto;
  ul{
    overflow: hidden;
    li{
      list-style: none;
      float: left;
      width: 49%;
      text-align: center;
      height: 40px;
      line-height: 40px;
      border: 1px solid;
      color: #f04747;
    }
    .left{
      border-radius: 5px 0 0 5px;
    }
    .right{
      border-radius: 0 5px 5px 0;
    }
    .active{
      background: #f04747;
      color: #fff;
      border-color: #f04747;
    }
  }
}
  .container{
    background: #f4f4f4;
    padding-top: 8px;
  }
</style>
