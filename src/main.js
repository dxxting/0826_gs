import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from './store'
import './plugins/swiper'


//  全局注册的组件
import TypeNav from '@/components/TypeNav'
// import 'swiper/css/swiper.css'//所有组件都能用上这个组件
Vue.component('TypeNav',TypeNav)
Vue.config.productionTip = false
new Vue({
  store, // 注册vuex的store对象  ==> 所有组件对象都有一个$store属性
  router,
    render: h=>h(App)
}).$mount('#app')