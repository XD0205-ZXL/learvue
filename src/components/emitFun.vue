<template>
    <div>
        <p class="pageName"></p>
    </div>
</template>

<script>
import Vue from "vue";

//组件子组件
Vue.component('emit-fun',{
    props:'title',
    data:function(){
        return {
            clickTime :1 , 
        }
    },
    template:`
            <div class="compBox">
                <p>{{title}}:</p>
                <span>当前的点击次数:{{clickTime}}</span>
                <button @click="addNum"><button>
            </div>
    `,
    methods:{
        addNum:function(){
            this.clickTime ++ ;
        }
    }
})

export default {
    data(){
        return {

        }
    }
}
</script>

<style>
    .pageName{
        color: cadetblue;
        font-size: 14px;
        font-weight: 600;
        text-align: left;
        border-bottom: 1px solid cadetblue;
    }
</style>

