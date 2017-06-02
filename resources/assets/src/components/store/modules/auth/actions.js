import axios from 'axios';
export default{
	login({commit,state},payload){
			 return axios.post('login',payload).then(function(res){
				/*
					Set user data when login is success
				*/
				if(!_.isEmpty(res.data)){
					state.user = res.data;
					state.isLogin= true;
					return true;
				}else{
					return false;
				}

		});
	},
	logout(){
		return axios.post('/logout').then(function(res){
			console.log(res);
		});
	},
	getUser({commit},payload){
		return axios.get('/getUser').then(function(res){
			
			if(!_.isEmpty(res.data)){				
				return res.data;
			}else{
				return false;
			}	
					
		}).catch(function(error){
			console.log(error);
		});
	},
	register({commit,state},payload){
		return axios.post('/register',payload).then(function(res){
			/*
				Set user data when register is success
			*/
			state.user = res.data;
			state.isLogin= true;
			return res;
		}).catch(function(error){			
			alert('Failed to register');
		});
	}
}