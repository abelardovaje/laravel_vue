var elixir = require('laravel-elixir');
 
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

 var vendor = [
 	'./node_modules/materialize-css/dist/css/materialize.css'
 ];


elixir(function(mix) {
    mix.sass([
    	'app.scss',
    	'home.scss'
    ],'public/css/app.css');

 //    elixir(function(mix) {
	//     mix.copy('./node_modules/materialize-css/fonts', 'public/fonts');
	// });

    // mix.sass(vendor,'public/css/vendor.css');
});
