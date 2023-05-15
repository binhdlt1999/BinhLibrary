<?php

namespace App\Rules;

use App\Models\phivanchuyen;
use App\Models\xaphuongthitran;
use Illuminate\Contracts\Validation\Rule;

class acceptDelivery implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $phivanchuyen = phivanchuyen::where('xaid', $value)->first();
        if (empty($phivanchuyen)) {
            return false;
        }
        if ($phivanchuyen->trangthaihoatdong == 1) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Hiện tại cửa hàng không hỗ trợ giao tới địa chỉ này';
    }
}
