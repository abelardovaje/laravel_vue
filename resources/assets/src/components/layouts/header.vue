<template>	
	<div>								
		<ol class="breadcrumb">
		  <li><router-link to="/">Home</router-link></li>
		  <li><router-link to="/users">User</router-link></li>
		  <li class="active"><router-link to="/users">Lobby</router-link></li>
		  <li class="active"><router-link to="/login">Login</router-link></li>
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
		}
	}
</script>