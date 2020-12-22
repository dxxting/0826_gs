import Vue from 'vue'
import App from '@/App'
import router from '@/router'

//  全局注册的组件
import TypeNav from '@/components/TypeNav'
Vue.component('TypeNav',TypeNav)
Vue.config.productionTip = false
new Vue({
  router,
    render: h=>h(App)
}).$mount('#app')