<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App;
class UserController extends Controller
{
    //

    public function index(){
    	return view('index');
    }

    public function login(Request $request){
    	
    	return response()->json(App\User::Login($request->all()));

    }

    public function getUser(){

    	return response()->json(auth()->user());
    	
    }
}
