<template>
  <div>
    <div class="head">
      <img src="@/assets/img/person.jpeg" alt="">
    </div>
      <span class="name">黄铁森</span>
      <span class="number">1153.58元</span>
  </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {}
        }
    }
</script>


<style scoped lang="scss">
    .name{
      margin-left: 15px;
    }
    .number{
      position: absolute;
      right: 0;
      margin-right: 25px;
    }

.head{
  margin-left: 10px;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  overflow: hidden;
  float: left;
  img{
    width: 100%;
    height: 100%;
  }
}
    @media screen and (min-width: 1000px) { //ipad pro
      .head {
        width: 60px;
        height: 60px;
        border-radius: 60px;
      }
    }
</style>
