<template>	
	<div>								
		<ol class="breadcrumb">
		  <li><router-link to="/">Home</router-link></li>
		  <li><router-link to="/users">User</router-link></li>
		  <li class="active"><router-link to="/users">Lobby</router-link></li>
		  <li v-if="!isLogin" v-bind:class="{show:showLogin}" class="active login">
		  	<router-link to="/login">Login</router-link>
		  </li>
		  <li v-if="!isLogin" v-bind:class="{show:showLogin}" class="register">
		  	<router-link to="/register">Register</router-link>
		  </li>
		  <li v-if="isLogin" class="active">
		  	<a href="logout">logout</a>
		  </li>	
		  <li v-show="isLogin"class="pull-right">Welcome {{user.name}}</li>		  
		</ol>	
		<hr>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				title:'header'
			}
		},
		computed:{
			isLogin(){
				return this.$store.state.auth.isLogin;
			},
			user(){
				return this.$store.state.auth.user;
			},
			showLogin(){
				return this.$store.state.auth.showLogin;
			}
		}
	}
</script>

<style type="text/css">
	
.breadcrumb li:last-child:before{
	content:'';	
}

.login,.register{
	display:none !important;
}

.show{
	display:inline-block !important;
}

</style>