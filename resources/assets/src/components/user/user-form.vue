<template>
	
	<div>
			
		<form @submit.prevent="submit">						
			<div>								
				<v-text-field  required name="input-1"  v-model="formData.name"  label="Name" ></v-text-field>		                                    
			</div>
			<div>				
				<v-text-field
				  required
	              name="input-1"	             
	              v-model="formData.email"
	              label="Email"	              
	            ></v-text-field>
			</div>
			<div>
				
				<v-text-field
				  required
	              name="input-1"	            
	              v-model="formData.address"
	              label="Address"	              
	            ></v-text-field>
			</div>
			<div>
				<button>{{(onEdit) ? 'Update' : 'Add'}}</button>
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