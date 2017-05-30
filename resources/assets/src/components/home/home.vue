<template>

	<div class="home-container">
		<app-header/>
		<contact-form/>			
		<app-footer/>
	</div>

</template>

<script>

import header from '../layouts/header.vue';
import footer from '../layouts/footer.vue';

export default {
  data () {
    return {
      title: 'Home pages'
    }
  },
  components:{
  	'app-header':header,
  	'app-footer':footer,
  	
  }
}
</script>

<style scope>
.message {
  color: blue;
}
</style>