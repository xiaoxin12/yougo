import Vue from 'vue'
import Vuex from 'vuex'
import {actions} from './actions'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  count: 0,
  list: ['a','b','c'],
  lists_container:true,
<<<<<<< HEAD
  search:[],
  hrefVal:""
=======
//<<<<<<< HEAD
  wating:false,
//=======
  search:[],
  hrefVal: "5"
//>>>>>>> 233f7b6259eda9ed06b00a497134e6995dccb61d
>>>>>>> c70183729c0e2db4328cc4e3351f70b13095e90f
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
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
    state.search.push(search_Info)
  },
  reset (state,{resetInfo}){
<<<<<<< HEAD
    state.search=[]
  },
   hrefVal (state,{hrefVal}){
    state.hrefVal=hrefVal
=======
    state.search=[];
>>>>>>> c70183729c0e2db4328cc4e3351f70b13095e90f
  }
}



// getters are functions
const getters = {
  
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
