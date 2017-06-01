export default{
	setUser(state,payload){

		payload.store.state.auth.user = payload.data;
		payload.store.state.auth.isLogin = true;
				
	}
}