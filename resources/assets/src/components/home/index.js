import Vue from 'vue'
import Home from './home.vue'
import ContactForm from './contact-form.vue';
import store from '../store';

Vue.component('contact-form',ContactForm)
new Vue({
  el: '#app',
  store:store,
  render:createEl=>createEl(Home)
})