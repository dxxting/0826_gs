<template>
    <div>
        <TypeNav></TypeNav>
        <ListContainer></ListContainer>
        <TodayRecommend></TodayRecommend>
        <Rank></Rank>
        <Like></Like>
        <Floor></Floor>
        <Floor></Floor>
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
export default {
    name: '',
    components:{
        ListContainer,
        TodayRecommend,
        Rank,
        Like,
        Floor,
        Brank
    }
}
</script>

<style lang="less" scoped>

</style>
