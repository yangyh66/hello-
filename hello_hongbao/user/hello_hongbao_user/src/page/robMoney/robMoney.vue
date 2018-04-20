<template>
    <div class="mainContain">
      <div>
        <router-link to="#">红包雨抢红包</router-link>
        <router-link to="#">答题抢红包</router-link>
      </div>
      <router-view/>
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
.mainContain{
  width: 100%;
  height: 100%;
  background: url("/static/img/robMoney/bgimg.png")no-repeat;
  background-size: cover;
  background-position: center;
  text-align: center;
  div{
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    bottom: 15%;
    width: 70%;
    a{
      font-family: "Microsoft YaHei UI";
      display: block;
      text-decoration: none;
      color: #da2c51;
      border: 1px solid;
      border-radius: 40px;
      width: 100%;
      height: 40px;
      line-height: 40px;
      margin-top: 20px;
      background:-webkit-gradient(linear, 0 0, 0 bottom, from(#f3f290), to(#eb840f));
      box-shadow: 0px 3px 10px 1px rgba(0,0,0,0.3);
      &:hover{
        background: -webkit-gradient(linear, 0 0, 0 bottom, from(#f3f290), to(#eb840f));
      }
    }
    }
}
@media screen and (min-width: 500px) { //ipad
  a{
    border-radius: 40px;
    height: 80px !important;
    line-height: 80px!important;
    margin-top: 20px;
    font-size: 2rem !important;
  }
}
@media screen and (min-width: 1000px) { //ipad pro
}
</style>
