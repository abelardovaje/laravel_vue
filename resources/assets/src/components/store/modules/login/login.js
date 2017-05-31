import axios from 'axios';
const login = {
	state:{
		isLogin:false,
		user:{}
	},
	getters:{

	},
	mutations:{
		
	},
	actions:{
		login({commit,state},payload){
			 return axios.post('login',payload).then(function(res){
				
				if(!_.isEmpty(res.data)){
					state.user = res.data;
					return true;
				}else{
					return false;
				}

			});
		}
	}
}


export default login;