<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Auth;
class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];
    protected $table = 'users';

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];


    public function scopeLogin($query,$data){

           if(Auth::attempt(['email'=>$data['email'],'password'=>$data['password']])){
                return auth()->user();
           }else{
                return;
           }        

    }
}
