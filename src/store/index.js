import Vue from 'vue'
import Vuex from 'vuex'
import {actions} from './actions'

Vue.use(Vuex)
const state = {
  count: 0,
  list: ['a','b','c'],
  lists_container:true,
  search:[],
<<<<<<< HEAD
  hrefVal:"",
  wating:false,
  search:[],
  hrefVal: "5"
=======
  wating:false,
  hrefVal: "4"
>>>>>>> 4910597747eebf81aad5e5f24a8b770e5e78259f
}
const mutations = {
   addTodo(state,{text}) {
    state.list.push(text)
  },
  listCon (state,{lists_container}){
  	state.lists_container = lists_container;
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
<<<<<<< HEAD
    state.search=[];
  },
   hrefVal (state,{hrefVal}){
    state.hrefVal=hrefVal;
    state.search=[];
=======
// <<<<<<< HEAD
    state.search=[]
  },
   hrefVal (state,{hrefVal}){
    state.hrefVal=hrefVal
// =======
    state.search=[];
// <<<<<<< HEAD
  },
  hrefVal (state,{hrefVal}){
    state.hrefVal=hrefVal;
>>>>>>> 4910597747eebf81aad5e5f24a8b770e5e78259f
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
