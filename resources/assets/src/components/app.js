import Vue from 'vue';
import Router from './router';
import Store from './store/store';
import App from './app.vue';
window._ = require('lodash');


new Vue({
	el:'#app',
	store:Store,
	router:Router,
	render:createEl=>createEl(App)
})
