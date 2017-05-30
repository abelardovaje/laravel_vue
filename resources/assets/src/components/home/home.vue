<template>	
		<div>{{title}}</div>
</template>

<script>
	
	export default{
		data(){
			return{				
				title:'Home component',
			}
		},
		created(){
			console.log(this.$store.state.user.users[0].name);
		}
	}

</script>

