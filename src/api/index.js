/* 
包含应用的所有接口的接口请求函数
  函数内部调用ajax函数发送请求
  函数返回的是promise对象
*/
import ajax from './ajax'
import mockAjax from './ajaxMock.js'

// console.log(ajax);
/* 
首页三级分类
/api/product/getBaseCategoryList  GET
*/
export function reqCategoryList () {
  // return ajax.get('/product/getBaseCategoryList')
  // return ajax('/product/getBaseCategoryList') // 发不带参数的get请求
  return ajax({
    url: '/product/getBaseCategoryList',
    // method: 'get'
  })
}


/* 
获取首页广告轮播列表
/api/cms/banner  GET
*/
export const reqBannerList = () => ajax('/cms/banner')

//获取广告轮播列表
export const reqRecommends = () => mockAjax.get('/recommends')
//获取首页楼层列表
export const reqFloors = () => mockAjax.get('/floors') 
//请求匹配的商品相关数据
export const reqGoodsListInfo = (searchParams) => ajax.post('/list', searchParams)

//测试
// reqGoodsListInfo({})
