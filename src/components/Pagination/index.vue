<template>
    <div class="pagination">
    <button :disabled="currentPageNum===1" @click="$emit('changeNum',currentPageNum-1)">上一页</button>
    <button v-if="startEnd.start > 1"  @click="$emit('changeNum',1)">1</button>
    <button v-if="startEnd.start >2">···</button>
<!-- v-for 和v-if可以混用 v-for 的优先级要高于v-if -->
    <button :class="{active:currentPageNum===page}" v-for="page in startEnd.end" :key="page"  v-if="page >=startEnd.start"  @click="$emit('changeNum',page)">{{page}}</button>

    
    <button v-if="startEnd.end < totalpageNum-1">···</button>
    <button v-if="startEnd.end <totalpageNum" @click="$emit('changeNum',totalpageNum)">{{totalpageNum}}</button>
    <button :disabled="currentPageNum===totalpageNum" @click="$emit('changeNum',currentPageNum+1)" >下一页</button>
    
    <button style="margin-left: 30px">共 {{total}} 条</button>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props:{
        currentPageNum:Number,
        pageSize:Number,
        total:{
            type:Number,
            default:0
            
        },
        continueNum:{
            type:Number,
            required:true

        }
    },
    computed:{
        totalpageNum(){
            return Math.ceil(this.total / this.pageSize)
        },
        startEnd(){
            let {currentPageNum,continueNum,totalpageNum} =this
            let start,end
            if(totalpageNum <=continueNum){
                //如果计算出的总页数比continueNum小那么
                start =1
                end=totalpageNum
            }else{
                //计算起始位置和结束位置 除去左右两端
                start=currentPageNum -  Math.floor(continueNum /2)
                end=currentPageNum + Math.floor(continueNum /2)

                //修正左右两端的情况
                if(start <1){
                    start=1
                    end=continueNum
                }

                if(end>totalpageNum){
                    
                    end =totalpageNum
                    start=totalpageNum-continueNum
                }
                
            }
            return {start,end}
            
        }
    }
}
</script>

<style lang="less" scoped>
    .pagination {
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
    }
</style>
