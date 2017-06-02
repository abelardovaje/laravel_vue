import Vue from 'vue';
import VueRouter from 'vue-router';
import home from './home/home.vue';
import User from './user/user.vue';
import Login from './login/login.vue';
import Register from './register/register.vue';
Vue.use(VueRouter);

const routes = [
	{
		path:'/',component:home,name:'home'		
	},
	{
		path:'/users',component:User,name:'users'
	},
	{
		path:'/login',component:Login,name:'login'
	},
	{
		path:'/register',component:Register,name:'register'
	}
];

const Router = new VueRouter({
	routes,
	mode:'history'
});

export default Router;