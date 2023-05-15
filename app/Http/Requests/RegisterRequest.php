<?php

namespace App\Http\Requests;

use App\Rules\isUsernameAvailable;
use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'username' => ['required', 'min:6', 'max:20', new isUsernameAvailable],
            'password' => ['required', 'min:6', 'max:20'],
            'rePassword' => ['same:password']
        ];
    }

    public function messages()
    {
        return [
            'username.required' => 'Không được để trống username',
            'username.min' => 'Ít nhất 6 ký tự',
            'username.max' => 'Nhiều nhất 20 ký tự',
            'password.required' => 'Không được để trống password',
            'password.min' => 'Ít nhất 6 ký tự',
            'password.max' => 'Nhiều nhất 20 ký tự',
            'rePassword.same' => 'Xác nhận password thất bại'
        ];
    }
}
