//管理首页相关数据的vuex子模块
import { reqBaseCategoryList,reqBannerList } from '@/api'

const state = {
    //存数据
    categoryList: [],
    bannerList:[]
};
const mutations = {
    //直接修改state数据
    RECEIVE_CATEGORY_LIST(state, categoryList) {
        state.categoryList =categoryList.splice(0,15)
    },
    RECEIVE_BANNER_LIST(state, bannerList) {
        state.bannerList =bannerList
    }
};
const actions = {
    async getBaseCategoryList({ commit }) {
        const result = await reqBaseCategoryList()
        if (result.code === 200) {
            const categoryList = result.data
            commit ('RECEIVE_CATEGORY_LIST',categoryList)
        }
    },



    async getBannerList({ commit }) {
        const result = await reqBannerList()
        if (result.code === 200) {
            const bannerList = result.data
            commit ('RECEIVE_BANNER_LIST',bannerList)
        }
    },

};
const getters = {
    
};






export default {
    state,
    mutations,
    actions,
    getters,
}