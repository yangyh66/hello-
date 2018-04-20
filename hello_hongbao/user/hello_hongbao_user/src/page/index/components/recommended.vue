<template>
    <div class="recommendedBox">
      <div>
        <img src="@/assets/img/timg.jpg" alt="">
      </div>
      <p>
        {{name}}
        <span>({{address}})</span>
      </p>
    </div>
</template>

<script>
    export default {
      name: 'recommended',
      props:['name','address'],
        data() {
            return {}
        }
    }
</script>


<style scoped lang="scss">
.recommendedBox{
  width: 46%;
  margin: 2%;
  float: left;
  margin-bottom: 15px;
  margin-top: 5px;
  div{
    width: 100%;
    height: 120px;
    border: 1px solid;
    img{
      width: 100%;
      height: 100%;
    }
  }
  p{
    margin-top: 10px;
    font-size: .8rem;
  }
}
@media screen and (min-width: 500px) {  //ipad
  .recommendedBox{
    div{
      height: 220px;
    }
    p{
      font-size: 1.2rem;
    }
  }
}
@media screen and (min-width: 1000px) {
.recommendedBox{
  div{
    height: 270px;
  }
  p{
    font-size: 1.5rem;
  }
}

}
</style>
