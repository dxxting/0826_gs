//利用mockjs来提供mock数据接口
import Mock from 'mockjs'
import recommends from './recommends.json'
import floors from './floors.json'
//提供今日数据的接口
Mock.mock('/mock/recommends', {
    code: 200,
    data:recommends
})
//提提所有楼层数据的接口
Mock.mock('/mock/floors', {
    code: 200,
    data:floors
})

//不需要向外暴露任何东西
console.log('mockServer..');
