<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\khachhang;
use Illuminate\Support\Facades\Validator;
use App\Rules\isUsernameAvailable;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AccountController extends Controller
{
    public function index() {
        if(Auth::check()) {
            return redirect()->route('home');
        }
        else {
            return view('pages.login');
        }
    }

    public function signUp(Request $request) {
        $validator = Validator::make($request->all(), [
            'username' => ['required', 'min:6', 'max:20', new isUsernameAvailable],
            'password' => ['required', 'min:6', 'max:20'],
            'rePassword' => ['same:password']
        ], [
            'username.required' => 'Không được để trống username',
            'username.min' => 'Username ít nhất 6 ký tự',
            'username.max' => 'Username nhiều nhất 20 ký tự',
            'password.required' => 'Không được để trống password',
            'password.min' => 'Password ít nhất 6 ký tự',
            'password.max' => 'Password nhiều nhất 20 ký tự',
            'rePassword.same' => 'Xác nhận password thất bại'
        ]);
 
        if ($validator->fails()) {
            return response()->json(array(
                'success' => false,
                'errors' => $validator->getMessageBag()->toArray()
            ));
        }

        $username = $request->username;
        $password = $request->password;

        User::create([
            'username' => $username,
            'password' => Hash::make($password),
            'phanquyen' => 2
        ]);

        $getId_tk = User::where('username', 'like', $username)
                        ->where('phanquyen', 2)    
                        ->first();

        khachhang::create([
            'id_tk' => $getId_tk->id,
            'loaikhachhang' => 1,
        ]);

        return response()->json(array(
            'success' => true
        ));
    }

    public function login(Request $request) {
        $username = $request->username;
        $password = $request->password;

        $data = [
            'username' => $username,
            'password' => $password,
            'phanquyen' => 2
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
            ))->cookie('cart', null, -1);
        }
        else {
            return response()->json(array(
                'validate' => true,
                'login' => false,
            ));
        }
    }

    public function logout() {
        Auth::logout();
        return response(true, 200);
    }
}
