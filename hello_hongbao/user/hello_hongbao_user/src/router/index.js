import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index/index.vue'
import cersonalCenter from '@/page/cersonalCenter/cersonalCenter.vue'
import findMoney from '@/page/findMoney/findMoney.vue'
import robMoney from '@/page/robMoney/robMoney.vue'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        title: 'hello红包',
        menuShow:true
      }
    },
    {
      path: '/cersonalCenter',
      name: 'cersonalCenter',
      component: cersonalCenter,
      meta: {
        title: '个人中心',
        menuShow:true
      }
    },
    {
      path: '/findMoney',
      name: 'findMoney',
      component: findMoney,
      meta: {
        title: '找红包',
        menuShow:true
      }
    },
    {
      path: '/robMoney',
      name: 'robMoney',
      component: robMoney,
      meta: {
        title: '抢红包',
        menuShow:true
      }
    },
    {
      path:"/",
      redirect:"index"
    }
  ]
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  document.setTitle = function(t) {
    document.title = t;
    var i = document.createElement('iframe');
    i.src = '/static/title.html';
    i.style.display = 'none';
    i.onload = function() {
      setTimeout(function(){
        i.remove();
      }, 9)
    }
    document.body.appendChild(i);
  }
  if (to.meta.title) {
    document.setTitle(to.meta.title)
  }
  next()
})
export default router;

