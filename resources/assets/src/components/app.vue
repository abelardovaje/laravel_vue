<template>
		
		<div>
				
			<app-header/>
					
				<router-view></router-view>
				
			<app-footer/>

		</div>

</template>

<script type="text/javascript">
	import Header from './layouts/header.vue';
	import Footer from './layouts/footer.vue';
	export default{
		data(){
			return{

			}
		},
		created(){
			var _this = this;
			this.$store.dispatch('getUser').then(function(res){

				if(res){					
					_this.$store.commit('setUser',res);				
				}else{
					_this.$store.commit('showLogin');
				}
				
			});
		},
		components:{
			'app-header':Header,
			'app-footer':Footer
		}
	}

</script>