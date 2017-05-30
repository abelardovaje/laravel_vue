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
		components:{
			'app-header':Header,
			'app-footer':Footer
		}
	}

</script>