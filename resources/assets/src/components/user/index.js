import Vue from 'vue';
import User from './user.vue';
import store from '../store';

new Vue({
	el:'#app',
	store:store,	
	render:createEl=>createEl(User)
});
