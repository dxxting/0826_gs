import ajax from './ajax'
///api/product/getBaseCategoryList

export function reqBaseCategoryList() {
        
        return ajax({
        url: '/product/getBaseCategoryList',
        method:'GET'
        })
    }