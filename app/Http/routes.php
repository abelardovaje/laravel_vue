<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/home',function(){
	return 'home';
});

Route::get('/users',function(){
 return view('index');
});


Route::get('/login','UserController@index');
Route::post('/login','UserController@login');
Route::get('/logout','UserController@logout');
Route::get('/getUser','UserController@getUser');
Route::match(['get','post'],'/register','UserController@register');
Route::get('/lobby','LobbyController@index');