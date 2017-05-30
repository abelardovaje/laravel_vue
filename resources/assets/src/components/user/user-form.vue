<template>
	
	<div>
			
		<form @submit.prevent="submit">						
			<div>
				<label>Name:</label><input required v-model="formData.name"type="text" name="" placeholder="name">
			</div>
			<div>
				<label>Email:</label><input required v-model="formData.email"type="email" name="" placeholder="email">
			</div>
			<div>
				<label>Address:</label><input required v-model="formData.address"type="text" name="" placeholder="address">
			</div>
			<div>
				<button >{{(onEdit) ? 'Update' : 'Add'}}</button>
			</div>
		</form>

	</div>

</template>

<script type="text/javascript">
	
	export default {
		props:['onEdit','onEditKey'],
		data(){
			return{
				title:'Form components',								
			}
		},
		methods:{
			submit(){
				if(this.onEdit){				
					this.$store.commit('updateUser',{payload:this.formData,key:this.onEditKey});
					this.$emit('toggleOnEdit');					
					return;
				}
				this.$store.dispatch('addUser',this.formData);
				//this.$store.commit('addUser',this.formData);
			}
		},
		computed:{
			formData(){
				return this.$store.state.user.formData;
			}
		}
	}

</script>