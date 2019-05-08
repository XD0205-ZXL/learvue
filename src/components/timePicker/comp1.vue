<template>
    <div id="comp1">
        <h3>组件一:</h3>
        <p>结果:{{count}}</p>
        <button @click="count ++ ">加1</button>
        <button @click="count -- ">减1</button>
         测试
        <testComponent></testComponent>
    </div>
</template>

<script>
import TestComponent from "./test.vue";
export default {
    name:'comp1',
    data(){
        return {
            count:0,
        }
    }
}
</script>

<style>

</style>
