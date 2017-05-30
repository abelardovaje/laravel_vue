import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		users:[
			{
				id:1,
				name:'abel',
				address:'cavite',
				email:'abel@gmail.com'
			}
		]
	},
	getters:{
		usersList(state){
			return state.users;
		}
	},
	mutations:{
		editData(state,user){
		    let _self = this;
			
		    state.users.filter(function(item){
		          if(item.id === user.id){
		            for(var x in item){

		              item[x] = user[x];

		            }
		          }
		    });		    
		},
		addUser(state,data){			
			state.users.push(data);			
		},
		deleteUser(state,key){

			state.users.splice(key,1);

		},
		updateUser(state,data){
								
			for(var x in state.users[data.key]){
				state.users[data.key][x] = data.payload[x];
			}
			
		}
	}
});

export default store;



