<template>
	
	<div>		
		<h3>Register</h3>

		<form class="register-form" @submit.prevent="register">

		  <div class="form-group">
		    <label for="exampleInputEmail1">Username</label>
		    <input type="text" v-model="formInputs.username" class="form-control" placeholder="username">
		  </div>
		  <div class="form-group">
		    <label for="exampleInputEmail1">Email address</label>
		    <input type="email" v-model="formInputs.email" class="form-control" placeholder="Email">
		  </div>
		  <div class="form-group">
		    <label for="exampleInputPassword1">Password</label>
		    <input type="password" v-model="formInputs.password" class="form-control" placeholder="Password">
		  </div>
		 			 
		  <button type="submit" class="btn btn-default">Submit</button>
		</form>

	</div>

</template>

<script type="text/javascript">
	
export default{
	data(){
		return {
			formInputs:{
				username:'',
				email:'',
				password:''
			}
		}
	},
	methods:{
		register(){
			var _this = this;
			this.$store.dispatch('register',this.formInputs).then(function(res){
				/*
					When register is success redirect to home page
				*/
				_this.$router.push({name:'home'});
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