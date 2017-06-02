export default{
	setUser(state,payload){
		state.user = payload;
		state.isLogin = true;
	},
	showLogin(state){
		state.showLogin = true;
	}
}