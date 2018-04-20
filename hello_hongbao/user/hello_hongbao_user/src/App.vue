<template>
  <div id="app">
    <router-view/>
    <div v-show="this.$route.meta.menuShow">
      <mt-tabbar v-model="selected">
        <mt-tab-item id="index">
          <img slot="icon" :src="icon.index[index==1?1:0]">
          首页
        </mt-tab-item>
        <mt-tab-item id="robMoney">
          <img slot="icon" :src="icon.robMoney[index==2?1:0]">
          抢红包
        </mt-tab-item>
        <mt-tab-item id="findMoney">
          <img slot="icon" :src="icon.find[index==3?1:0]">
          找红包
        </mt-tab-item>
        <mt-tab-item id="cersonalCenter">
          <img slot="icon" :src="icon.man[index==4?1:0]">
          个人中心
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
  import { Tabbar, TabItem } from 'mint-ui';

export default {
  name: 'App',
  data() {
    return {
      selected: 'index',
      icon:{
        index: ['/static/img/index/index.png','/static/img/index/index1.png'],
        robMoney: ['/static/img/index/qiang.png','/static/img/index/qiang1.png'],
        find: ['/static/img/index/find.png','/static/img/index/find1.png'],
        man: ['/static/img/index/User.png','/static/img/index/User1.png']
      },
      index:1 //用于标识当前的icon图标
    };
  },
  created(){
    this.selecte(this.$route.fullPath)
  },
  watch:{
    selected(val,oldval){ /*监听tabBar进行页面跳转*/
      this.$router.push('/'+val)
      switch (val){  /*切换图标*/
        case 'index':
          this.index = 1;
          break;
        case 'robMoney':
          this.index = 2;
          break;
        case 'findMoney':
          this.index = 3;
          break;
        case 'cersonalCenter':
          this.index = 4;
          break
      }
    }
  },
  methods:{
    selecte(val){  //判断当前进入页面的路由
      let path = val.split("/")[1];
      this.selected = path;
      switch (val){  /*切换图标*/
        case '/index':
          this.index = 1;
          break;
        case '/robMoney':
          this.index = 2;
          break;
        case '/findMoney':
          this.index = 3;
          break;
        case '/cersonalCenter':
          this.index = 4;
          break
      }
    }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }

  .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }

  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }
  .is-selected{
    background-color: #fff !important;
    color: #f04747 !important;
  }
  .mint-tabbar{
    background-color: #fff !important;
    border-top: 1px solid #dedede;
    color: #999999;
    position: fixed !important;
  }

</style>
