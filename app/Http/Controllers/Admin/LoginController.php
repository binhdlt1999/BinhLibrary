<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function index()
    {
        return view('admin.pages.login.login');
    }

    public function login(Request $request)
    {
        $username = $request->username;
        $password = $request->password;

        $data = [
            'username' => $username,
            'password' => $password,
            'phanquyen' => 3
        ];

        $validator = Validator::make($request->all(), [
            'username' => ['required'],
            'password' => ['required'],
        ], [
            'username.required' => 'Không được để trống username',
            'password.required' => 'Không được để trống password',
        ]);
 
        if ($validator->fails()) {
            return response()->json(array(
                'validate' => false,
                'login' => false,
                'errors' => $validator->getMessageBag()->toArray()
            ));
        }

        if (Auth::attempt($data)) {
            return response()->json(array(
                'validate' => true,
                'login' => true,
            ));
        }
        else {
            return response()->json(array(
                'validate' => true,
                'login' => false,
            ));
        }
    }
    
    public function logout() {
        if(Auth::check()) {
            if(Auth::user()->phanquyen == 3) {
                Auth::logout();
                return response(true, 200);
            }
        }
    }
}
