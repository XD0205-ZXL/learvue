import Vue from 'vue'
import Router from 'vue-router'

import Test from "../components/timePicker/test.vue";
import keepaliveCom from '../components/keep-alive.vue';

import EmitFun from "../components/emitFun.vue";





Vue.use(Router)

export default new Router({
  routes: [
   {
      path:'/test',
      name:'Test',
      component:Test
    },
    {
      path:'/keepaliveCom',
      name:'keepaliveCom',
      component:keepaliveCom
    },
    //监听子组件的事件1
    {
      path:'emitfun',
      name:'emitfun',
      component:EmitFun
    }
  ]
})
