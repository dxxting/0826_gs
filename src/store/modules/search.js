//管理搜索商品模块的数据
import {reqGoodsListInfo } from '@/api'

const state = {
    goodsListInfo:{},//搜索出的商品列表相关的对象
}
const mutations = {
    //接收保存商品列表相关的数据对象
    RECEIVEGOODSLISTINFOT(state,goodsListInfo) {
        state.goodsListInfo =goodsListInfo
    }
}

const actions = {
    async getGoodsListInfo({ commit }, searchParams) {
        const result = await reqGoodsListInfo(searchParams)
        if (result.code === 200) {
            const goodsListInfo = result.data
            commit('RECEIVEGOODSLISTINFOT',goodsListInfo)
        }
        
        
    }
}
//是把获取到的对象当中的数组全部计算出来
const getters = {
    //商品分页列表
    goodsList(state) {
        return state.goodsListInfo.goodsList || []
    },
    //品牌分类列表
    trademarkList(state) {
        return state.goodsListInfo.trademarkList || []
    },

    //属性列表
    attrsList(state) {
            return state.goodsListInfo.attrsList || []
        }


}


export default {
    state,
    mutations,
    actions,
    getters
}