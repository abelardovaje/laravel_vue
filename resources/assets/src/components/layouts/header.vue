<template>	
<div class="header">
  <div class="container">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">LOBBY's</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="" @click="active('home')" v-bind:class="{active:links.home}">
              <router-link to="/">Home</router-link>
            </li>
            <li  v-if="isLogin">
              <router-link to="/lobby">Lobby</router-link>
            </li>
            
          </ul>

          <ul class="nav navbar-nav navbar-right" v-if="!isLogin">
            <li v-if="!isLogin" v-bind:class="{show:showLogin,active:links.login}" class=""  @click="active('login')">
              <router-link to="/login">Login</router-link>
            </li>
            <li v-if="!isLogin" v-bind:class="{show:showLogin,active:links.register}" class=""  @click="active('register')">
              <router-link to="/register">Register</router-link>
            </li>   
          </ul>

          <ul class="nav navbar-nav navbar-right" v-if="isLogin">
            <li><a href="#"><i class="fa fa-envelope"></i></a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My account <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="/logout">Logout</a></li>
                
              </ul>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </div>
</div>	
</template>

<script>
	export default{
		data(){
			return {
				title:'header',
        links:{
          home:true,
          login:false,
          register:false
        }
			}
		},
    methods:{
      active(key){
        for(var x in this.links){
           this.links[x] = false;
        }
        this.links[key] = true;
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

<style type="text/css" scope>
	

/*li.dropdown{
	position: relative;
    top: -20px;
}*/

.login,.register{
	display:none !important;
}

.show{
	display:block !important;
}

.active{
  border-bottom:2px solid gold !important;
}

.active a{
  color:gold !important;
  background:none !important;
}

</style>