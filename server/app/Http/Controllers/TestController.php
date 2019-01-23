<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;	
use \App\User;

class TestController extends Controller
{
    public function index(){
		$data = User::all();
		
		return $data;
	}
	
	public function add(Request $request){
		$data = new User();
		
		$data->username = $request->username;
		$data->password = bcrypt($request->password);
		$data->email = $request->email;
		$data->save();
		
		$message = array(
            'message'      => 'success'
        );
		
		
		return $message;
	}
	
	public function deleteAll(){
		
		$data = User::get()->each->delete();
		$message = array(
            'message'      => 'Delete success'
        );
		
		
		return $message;
		
	}
}
