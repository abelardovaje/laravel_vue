<template>

	<div>
		<h4>{{title}}</h4>
		<form v-on:submit.prevent="addContact">
			<input type="text" placeholder="Name" v-model="name"/><br>
			<input type="text" placeholder="Address" v-model="address"/><br>
			<input type="text" placeholder="Email" v-model="email"/><br>
			<button v-if="toggleFormAction">Add contact</button>
      <button v-if="!toggleFormAction">Save</button>
		</form>
		<contact-table v-on:toggleFormAction="onToggleFormAction"/>
	</div>

</template>

<script>

import contactTable from './contact-table.vue';
export default {

  data () {
    return {
      title: 'Contacts',
      name:'',
      address:'',
      email:'',
      id:0,
      inputs:'',
      toggleFormAction:true,
      rowData:{}

    }
  },
  components:{
  	'contact-table':contactTable
  },
  methods:{
  	addContact(){

  		var data = {
  			name:this.name,
  			address:this.address,
  			email:this.email,
        id:(this.id) ? this.id : ''
  		}

      if(!this.toggleFormAction){
        //show add contact button on the form
        this.toggleFormAction = !this.toggleFormAction;
        this.name  = "";
        this.address ="";
        this.email = "";
        this.$store.commit('editData',data);
        return;
      }
  		
      this.$store.state.users.push(data);

  	},
    onToggleFormAction(data){

      //set row data on the form inputs
      this.name = data.name;
      this.address = data.address;
      this.email = data.email;
      this.id = data.id;

      //show save button on the form
      this.toggleFormAction = !this.toggleFormAction;

    }
  }

}
</script>

<style scope>
.message {
  color: blue;
}
</style>