import Vue from 'vue'
import App from './App.vue'
//引入路由模块
import VueRouter from 'vue-router'
//引入路由
import index from './components/index.vue';

//导入css
import './assets/statics/site/css/style.css';

//顶部轮播图插件引入文件
import ElementUI from 'element-ui';
//导入css样式
import 'element-ui/lib/theme-chalk/index.css';

//使用路由中间件
Vue.use(ElementUI);
Vue.use(VueRouter);
//定义路由规则
const router = new VueRouter({
  routes:[
    {path: '/index',component:index},
    {path: '/',component:index}
]
})


Vue.config.productionTip = false

new Vue({
  //挂载路由规则
  render: h => h(App),
  router
}).$mount('#app')
