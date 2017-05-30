<template>

	<div>
		<input type="text" v-model="searchText" placeholder="Search"/>
		<br>
		<table class="table table-hover">

			<thead>
				<tr>
					<th>ID</th>
					<th>NAME</th>
					<th>ADDRESS</th>
					<th>EMAIL</th>
					<th>ACTION</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="(value,key) in contactsData(users)">
					<td>{{value.id}}</td>
					<td>{{value.name}}</td>
					<td>{{value.address}}</td>
					<td>{{value.email}}</td>
					<td>
						<button @click="deleteContact(key)">Delete</button>
						<button @click="editContact(value.id)">Edit</button>
					</td>					
				</tr>	
			</tbody>
		</table>
	</div>


</template>


<script>
	
	var data = {
		contacts:[],
		key:undefined,
		searchText:''
	}

	var methods = {
		addContact(data){
			if(data){

				if(this.contacts.length == 0){
					data.id = 1;
					this.contacts.push(data);
					return;
				}

				data.id = (this.contacts[(this.contacts.length-1)].id + 1);
				this.contacts.push(data);
			}
		},
		deleteContact(key){			
			this.$store.state.users.splice(key,1);					
		},
		editContact(id){
			
			let _self = this;
			this.$store.state.users.filter(function(item){
				if(item.id === id){
					_self.$emit('toggleFormAction',item);
				}
			})[0];

		},
		contactsData(c){
			let self = this;

			return c.filter(function(item){

				if(!self.searchText){
					return item;
				}
				
				for(var x in item){
					if(item[x].toString().includes(self.searchText)){
						return item;
					}
				}

			});
		}
	}

	export default {
		data(){
			return data;
		},
		methods:methods,	
		watch:{
			searchText:function(){
				this.contactsData(this.$store.state.users);
			}
		},
		computed:{
			users(){
				console.log(this.$store.getters.usersList);
				return this.$store.getters.usersList;
			}
		},
		created(){
			
		}

	}

</script>