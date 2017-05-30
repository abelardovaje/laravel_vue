import Vue from 'vue';
import VueRouter from 'vue-router';
import home from './home/home.vue';
import User from './user/user.vue';
Vue.use(VueRouter);

const routes = [
	{
		path:'/',component:home,		
	},
	{
		path:'/users',component:User
	}
];

const Router = new VueRouter({
	routes,
	mode:'history'
});

export default Router;