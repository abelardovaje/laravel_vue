const user = {
	state:{
		users:[
			{
				id:1,
				name:'abel',
				address:'cavite',
				email:'abel@gmail.com'
			}
		],
		formData:{				
			name:'',
			email:'',
			address:'',
		},
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
			var index = _.findLastIndex(state.users,'id');			
			data.id = (state.users[index].id+1);		
			state.users.push(data);
			state.formData = {};					
		},
		deleteUser(state,key){

			state.users.splice(key,1);

		},
		updateUser(state,data){
								
			for(var x in state.users[data.key]){
				state.users[data.key][x] = data.payload[x];
			}

			state.formData = {};
			
		},
		setFormData(state,data){
			state.formData = data;
		}
	},
	actions:{
		addUser(context,payload){
			context.commit('addUser',payload);
		}
	}
}

export default user;