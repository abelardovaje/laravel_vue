import axios from 'axios';
export default{
	getUser({commit},payload){
		return axios.get('/getUser').then(function(res){
			
			if(!_.isEmpty(res.data)){
				return res.data;
			}else{
				return false;
			}	
					
		});
	}
}