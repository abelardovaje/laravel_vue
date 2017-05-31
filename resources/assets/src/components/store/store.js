import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/home/home';
import user from './modules/user/user';
import login from './modules/login/login';
Vue.use(Vuex);


const store = new Vuex.Store({

	modules:{
		home,
		user,
		login
	}

});


export default store;