<template>	
	<div>
		<h1>Header</h1>
		<router-link to="/">Home</router-link>	
		<router-link to="/users">User</router-link>	
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