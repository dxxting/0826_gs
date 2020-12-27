//Vuex 最核心的
import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import user from './modules/user'
import  search from './modules/search'
Vue.use(Vuex)
const  mutations ={}
const  actions ={}
const getters = {}



//向外暴露一个store对象
export default new Vuex.Store({
    mutations,
    actions,
    getters,
    //合并每一个小模块的store到 大的store 使用这个核心概念
    modules: {
        home,
        user,
        search
    }
})