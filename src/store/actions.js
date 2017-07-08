// actions are functions that causes side effects and can involve
// asynchronous operations.
export const actions = {
	addTodo: ({ commit }, { text }) => {
		commit('addTodo',{ text:text })
	},
	listCon: ({ commit }, { lists_container }) => {
		commit('listCon',{ lists_container:lists_container })
	}
}