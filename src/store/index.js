import Vue from 'vue'
import Vuex from 'vuex'
import {actions} from './actions'

Vue.use(Vuex)
const state = {
  count: 0,
  list: ['a','b','c'],
  lists_container:true,
  shouye:true,
  wating:false,
  search:[],
  hrefVal: "1"

}
const mutations = {
   addTodo(state,{text}) {
    state.list.push(text)
  },
  listCon (state,{lists_container}){
  	state.lists_container = lists_container;
  },
  listCons (state,{shouye}){
    state.shouye = shouye;
  },

  savedata(state,{data}) {
    state.list.push(data);
  },
  updateflag(state,{flag}) {
   state.wating = flag;
  },
  searchData (state,{search_Info}){
    state.search.push(search_Info);
  },
  reset (state,{resetInfo}){

    state.search=[]
  },
   hrefVal (state,{hrefVal}){
    state.hrefVal=hrefVal
    state.search=[];
  }
}

const getters = {
  
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
