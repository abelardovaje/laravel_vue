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
			var _this = this;
			this.$store.dispatch('getUser').then(function(res){

				if(res){					
					_this.$store.commit('setUser',{data:res,store:_this.$store});				
				}
				
			});
		}
	}

</script>

