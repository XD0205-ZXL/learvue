<template>
    <div class="app">
        <ul>
            <li v-for="(item,index) in personInfo" :key="index">名字:{{item.name}} -- 年龄:{{item.age}}</li>
        </ul>
        <button @click="changeItem">设置特别item的值</button>
        <p>{{items[0]}}</p>

        <p>--------测试组件的用法---------</p>
        <comp1></comp1>
        <testComponent title="这个使用prop来传递的数据" v-bind:person-info="personInfo"></testComponent>
        <ComponentA :title="22"></ComponentA>

        <p>--------插槽 v-slot ---------</p>
        <!-- <testSlot><h1>slot插槽:</h1></testSlot>
        <testSlot></testSlot> -->
        <testSlot>
            <template v-slot:default="msg">
                测试：{{ msg }}
            </template>
        </testSlot>
    </div>
</template>

<script>
import Vue from 'vue';
import Comp1 from "./comp1";

Vue.component('TestComponent',{
    data(){
        return {
            msg:'这个组件式使用vue.component的方式创建的组件',
            propData:this.title
        }
    },
    props:['title','personInfo'],
    template:'<h1><p>{{personInfo}}</p><ul><li v-for="item in personInfo">{{item.name}}--{{item.age}}</li></ul><h5 style="color:green">{{propData}}</h5></h1>'
});
Vue.component('testSlot',{
    data(){
        return {
            msg:' 这个组件是用来学习插槽的'
        }
    },
    props:['title','personInfo'],
    template:'<h3>{{msg}}:<slot v-bind:msg="msg">{{msg}}</slot></h3>'
})

var ComponentA = {
    props:{title:Number},
    template:'<h1 style="color:red">{{title}}</h1>'
}


Vue.use('TestComponent','TestSlot');
export default {
    data(){
        return{
            personInfo:[
                {name:'大粽子',age:"31"},
                {name:'妖儿',age:"24"},
                {name:'顾海',age:"24"},
            ],
            items: ['a', 'b', 'c']
        }
    },
    components:{
        comp1:Comp1,
        ComponentA:ComponentA,

    },
    methods:{
        changeItem:function(){
            this.items[0] = 'zhangxil';
            console.log(this.items[0]);
            Vue.set(this.items, 0, 'hahah');
            console.log(this.items)
        }
    }

}
</script>

<style>

</style>

