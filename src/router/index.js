import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/routes'

Vue.use(VueRouter)

//缓存原型上的push
const originpush = VueRouter.prototype.push
VueRouter.prototype.push = function (location, onComplete, onAbort) {
    console.log('push()', location, onComplete, onAbort)
    //this指的是路由器对象的实例
    //如果调用push 传递了成功或者失败的回调
    if (onComplete || onAbort) {
        originpush.call(this, location, onComplete, onAbort)
        
    } else {
        return originpush.call(this, location).catch(() => {
            console.log('catch error')
        })//必须返回产生的promise对象
    }

}

export default  new VueRouter({
    mode: 'history',
    routes
})