import ajax from './ajax'
///api/product/getBaseCategoryList

export function reqBaseCategoryList() {
        
        return ajax({
        url: '/product/getBaseCategoryList',
        method:'GET'
        })
}
///api/cms/banner Get 发送广告轮播
    export const  reqBannerList=()=> ajax('/cms/banner')
    