<template>
    <div>
        <p>keep-alive 保持动态组件的状态</p>
        <div class="headerList">
            <div @click="changeLabel('one')"> 第 1 篇文章 </div>
            <div @click="changeLabel('two')"> 第 2 篇文章 </div>
        </div>
        <keep-alive>
            <articleCom :articleInfoListProp = 'childPropDatas'></articleCom>
        </keep-alive>
    </div>
</template>

<style>
    .headerList{
        width: 500px;
        height: 50px;
        line-height: 50px;
        border: 1px solid #b8b7b7;
    }

    .headerList div{
        display: inline-block;
        width: 100px;
        height: 100%;
        border-right: 1px solid #b8b7b7;
        font-size: 14px;
        text-align: center
    }

    .article{
        width: 500px;
        height: 300px;
        border: 1px solid green;
    }

    .article .articleUl{
        width: 22%;
        height: 100%;
        float: left;
        border: 1px solid #b8b7b7;
        padding: 0;
        margin: 0;
    }

    .article .articleUl li{
        list-style: none;
    }

    .article div{
        width: 77%;
        height: 100%;
        border: 1px solid red;
        float: right;
    }

    .article .motto{
        width: 90%;
        height: 100%;
        border: 1px solid yellow;
    }

    .article .articleUl .active{
        color:red;
    }
</style>

<script>
import Vue from 'vue';
Vue.component('articleCom',{
    data(){
        return {
            selsctedItem:{},
        }
    },
    props:['articleInfoListProp'],
    template:'<div class="article">'+
             '<ul class="articleUl">'+
             '<li v-for="(item,index) in articleInfoListProp" :key="index" :class="item.cls" @click="selectItem(item)">{{item.name}}</li>'+
             '</ul>'+ 
             '<slot><div>{{selsctedItem.motto}}</div></slot>'+
             '</div>',
    methods:{
        selectItem:function(item){
            for(var i = 0 ; i < this.articleInfoListProp.length ; i++){
                this.articleInfoListProp[i].cls = '';
            }
            item.cls = "active";
            this.selsctedItem = item;
        }
    }
})

Vue.use('articleCom')
export default {
    data(){
        return{
            articleInfoList:[
                {name:'顾海',motto:'我啊,我朝拜不求来世,只求今生能与你相伴',cls:''},
                {name:'白洛因',motto:'人家朝拜为求来生,你朝拜为什么',cls:''},
                {name:'渝州',motto:'如果 陪我到最后的人是你 即使一路风雨也没关系 如果陪我到最后的人不是你 那我们之间的点点滴滴 我一点也不会忘记',cls:''}
            ],
            articleInfoList1:[
                {name:'大粽子',motto:'不滚，不滚，就不滚',cls:''},
                {name:'妖儿',motto:'滚蛋，滚蛋，快滚蛋',cls:''},
                {name:'妖言惑粽',motto:'大粽子，你还在吗',cls:''}
            ],
            childPropDatas:[],
        }
    },
    methods:{
        changeLabel:function(tag){
            if(tag == 'one'){
                this.childPropDatas = this.articleInfoList;
            }else{
                this.childPropDatas = this.articleInfoList1
            }
        }
    }
}
</script>


