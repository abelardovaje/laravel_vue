<template>
		
		<div>

			<h3>Login</h3>

			<form class="login-form" @submit.prevent="login">
			  <div class="form-group">
			    <label for="exampleInputEmail1">Email address</label>
			    <input type="email" v-model="email" class="form-control" placeholder="Email">
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">Password</label>
			    <input type="password" v-model="password" class="form-control" placeholder="Password">
			  </div>
			 			 
			  <button type="submit" class="btn btn-default">Submit</button>
			</form>

		</div>

</template>


<script type="text/javascript">
	
export default{
	data(){
		return{
			email:'',
			password:''
		}
	},
	methods:{
		login(){
			var _this = this;
			var credentials = {
				email:this.email,
				password:this.password
			}

			this.$store.dispatch('login',credentials).then(function(res){
				
				if(res){
					/*
						When login success redirect to home page
					*/
					_this.$router.push({name:'home'});					
					return;
				}
				alert('Invalid credentials!');				
				
			});
		}
	},
	mounted(){
		
		if(this.$store.state.auth.isLogin){			
			this.$router.push({name:'home'});
		}
		
	}
}

</script>

<style type="text/css" scope>

.login-form{
	width:300px;
}


</style>