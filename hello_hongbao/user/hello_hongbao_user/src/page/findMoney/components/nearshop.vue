<template>
    <div class="shopBox">
        <div class="shopImg">
          <img src="@/assets/img/timg.jpg" alt="">
        </div>
      <div class="contain">
          <h4>草原清汤黄牛肉糖果店</h4>
          <p>毕升路88号C座7楼
          <span>1.3km</span>
          </p>
        <div>
          <img src="/static/img/find/money.png" alt="">
          <!--<img src="/static/img/find/money1.png" alt="">-->
        </div>
        <div>
          <span>剩余<span style="color: red">466</span>个</span>
          <!--<span>红包已抢光</span>-->
          <!--<span>活动已结束</span>-->
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>


<style scoped lang="scss">
.shopBox{
  height: 100px;
  border-top: 1px solid  silver;
  border-bottom: 1px solid silver;
  background: white;
  padding: 20px;
  .shopImg{
    height: 100px;
    width: 100px;
    float: left;
    img{
      height: 100px;
      width: 100px;
    }
  }
  .contain{
    height: 100px;
    background: wheat;
    margin-left: 100px;
  }
}
</style>
