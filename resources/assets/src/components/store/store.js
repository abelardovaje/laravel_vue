import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/home/home';
import user from './modules/user/user';
Vue.use(Vuex);


const Store = new Vuex.Store({

	modules:{
		home,
		user
	}

});


export default Store;