import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)  //使用插件

const store = new Vuex.Store({
	state:{
		buyshops:[]
	},
	mutations:{
		addshopM:function(state,data){
			state.buyshops.push(data)
		}
	},
	actions:{
		addshopA:function({commit},data){
			commit('addshopM',data)
		}
	}
})
export default store