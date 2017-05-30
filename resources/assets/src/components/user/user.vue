<template>
	
	<div>
		<h4>{{title}}</h4>

		<div class="container">
			
			<div class="row user-container">
			
				<div class="col-lg-2 side-bar-container">

					<user-form 
					:onEdit="onEdit" 
					:onEditKey="onEditKey" 
					v-on:toggleOnEdit="toggleOnEdit"/>
					
				</div>

				<div class="col-lg-10 user-table-container">
						
						<table class="table table-hover">		
							<thead>	
								<tr>
									<th>Id</th>
									<th>Name</th>
									<th>Email</th>
									<th>Address</th>
									<th>Actions</th>

								</tr>															
							</thead>

							<tbody>								
								<tr v-for="(value,key) in users">
									<td>{{value.id}}</td>
									<td>{{value.name}}</td>
									<td>{{value.email}}</td>
									<td>{{value.address}}</td>
									<td>
										<button @click="edit(value,key)">Edit</button>
										<button @click="deleteUser(key,value.id)">Delete</button>
									</td>
								</tr>
							</tbody>
						</table>

				</div>

			</div>

		</div>
	</div>

</template>

<script type="text/javascript">

import userForm from './user-form.vue';
export default{
	data(){
		return {
			title:'User component',			
			onEdit:false,			
			onEditKey:undefined
		}
	},
	methods:{
		edit(user,key){
			
			this.$store.commit('setFormData',_.clone(user,true));
			this.onEdit = true;
			this.onEditKey = key;

		},
		toggleOnEdit(){
			
			this.onEdit = !this.onEdit;				

		},
		deleteUser(key,id){

			this.$store.commit('deleteUser',key);

		}

	},
	computed:{
		users(){
			return this.$store.state.user.users;
		}
	},
	components:{
		'user-form':userForm
	}

}

</script>

<style type="text/css" scope>
	
.user-container{
	border:0px solid;
}

.user-container > div{
	height:400px;
}

.side-bar-container{
	border-right:1px solid #ddd;
	padding:0px;	
}

.side-bar-container form{
	border:0px solid;
}

.side-bar-container form > div{
	padding:3px;
}

.user-table-container{
	border-left:1px solid #ddd;
}

</style>