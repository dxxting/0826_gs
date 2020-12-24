//管理首页相关数据的vuex子模块
import { reqBaseCategoryList } from '@/api'

const state = {
    //存数据
    categoryList:[]
};
const mutations = {
    //直接修改state数据
    RECEIVE_CATEGORY_LIST(state, categoryList) {
        state.categoryList =categoryList.splice(0,15)
    }
};
const actions = {
    async reqBaseCategoryList({ commit }) {
        const result = await reqBaseCategoryList()
        if (result.code === 200) {
            const categoryList = result.data
            commit ('RECEIVE_CATEGORY_LIST',categoryList)
        }
    }
};
const getters = {
    
};






export default {
    state,
    mutations,
    actions,
    getters,
}