<template>
    <div>
        <TypeNav></TypeNav>
        <ListContainer></ListContainer>
        <TodayRecommend :recommends="recommends"></TodayRecommend>
        <Rank></Rank>
        <Like></Like>
        <Floor v-for="(floor) in floors" :key="floor.id" :floor="floor"></Floor>
        <Brank></Brank>
    </div>
</template>

<script>
import ListContainer from './ListContainer'
import TodayRecommend from './TodayRecommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brank from './Brank'
import { mapState } from 'vuex'
export default {
    name: '',
    components:{
        ListContainer,
        TodayRecommend,
        Rank,
        Like,
        Floor,
        Brank
    },
    computed:{
        ...mapState({
            recommends:state=>state.home.recommends
        }),
        ...mapState({
            floors:state=>state.home.floors
        })
    }
}
</script>

<style lang="less" scoped>

</style>
