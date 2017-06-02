<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Auth;
use Hash;
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

    public function _login($data){
        if(Auth::attempt(['email'=>$data['email'],'password'=>$data['password']])){
            return auth()->user();
        }else{
            return;
        } 
    }

    public function scopeLogin($query,$data){

        return $this->_login($data);        

    }

    public function scopeRegister($query,$data){
        $this->insert([
            'name'=>$data['username'],
            'email'=>$data['email'],
            'password'=>Hash::make($data['password'])
        ]); 

        return $this->_login($data);      
    }
}
