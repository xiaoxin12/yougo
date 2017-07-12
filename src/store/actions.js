// actions are functions that causes side effects and can involve
// asynchronous operations.
export const actions = {
	addTodo: ({ commit }, { text }) => {
		commit('addTodo',{ text:text })
	},
	listCon: ({ commit }, { lists_container }) => {
		commit('listCon',{ lists_container:lists_container })
	},

	updateflag: ({ commit }, { flag}) => {
		commit('updateflag',{ flag:flag })
		
	},

	searchData: ({ commit }, { search_Info }) => {
		commit('searchData',{ search_Info:search_Info })
	},
	reset: ({ commit }, { resetInfo }) => {
		commit('reset',{ resetInfo:resetInfo })
	},
	hrefVal: ({ commit }, { hrefVal }) => {
		commit('hrefVal',{ hrefVal:hrefVal })
	}
	


}