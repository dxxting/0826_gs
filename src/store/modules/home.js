//管理首页相关数据的vuex子模块
import {reqCategoryList,reqBannerList,reqRecommends,reqFloors} from '@/api'

const state = {
    //存数据
    categoryList: [],
    bannerList: [],
    recommends: [],//今日推荐数据的数组
    floors:[],//所有楼层数据的数组
};
const mutations = {
    //直接修改state数据
    RECEIVE_CATEGORY_LIST(state, categoryList) {
        state.categoryList =categoryList.splice(0,15)
    },
    RECEIVE_BANNER_LIST(state, bannerList) {
        state.bannerList =bannerList
    },
    RECEIVE_RECOMMENDS_LIST(state, recommends) {
        state.recommends =recommends
    },
    RECEIVE_FLOORS_LIST(state, floors) {
        state.floors =floors
    },
};
const actions = {
    async getCategoryList({ commit }) {
        const result = await reqCategoryList()
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
        async getRecommends({ commit }) {
        const result = await reqRecommends()
        if (result.code === 200) {
            const recommends = result.data
            commit ('RECEIVE_RECOMMENDS_LIST',recommends)
        }
    },
        async getFloors({ commit }) {
            const result = await reqFloors()
            if (result.code === 200) {
                const floors = result.data
                commit ('RECEIVE_FLOORS_LIST',floors)
        }
    },

};
const getters = {
    //商品分页列表
    
};






export default {
    state,
    mutations,
    actions,
    getters,
}