<template>
<div>
  <Header></Header>
  <router-view></router-view>
  <Footer v-show='!$route.meta.isHidefooter'></Footer>
</div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// import {reqBaseCategoryList} from './api'
export default {
  name: '',
  components:{
    Header,
    Footer
  },
  // mounted(){
  //     // reqBaseCategoryList().then(
  //     //   result =>{
  //     //     console.log('result',result);
  //     //   } )
  //     //分发请求获取分类列表的异步action
  //     this.$store.dispatch('getCategoryList')
  // }
  mounted(){
        this.getBaseCategoryList()
        this.getBannerList()
    },
    methods:{
        getBaseCategoryList(){
            this.$store.dispatch('getBaseCategoryList')
        },
        getBannerList(){
          this.$store.dispatch('getBannerList')
        }
    }
}
</script>

<style lang="less" scoped>

</style>
