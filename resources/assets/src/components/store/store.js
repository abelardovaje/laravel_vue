import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/home/home';
import user from './modules/user/user';
import auth from './modules/auth/auth';
Vue.use(Vuex);


const store = new Vuex.Store({

	modules:{
		home,
		user,
		auth
	}

});


export default store;