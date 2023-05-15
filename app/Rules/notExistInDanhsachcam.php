<?php

namespace App\Rules;

use App\Models\danhsachcam;
use Illuminate\Contracts\Validation\Rule;

class notExistInDanhsachcam implements Rule
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
        $ds = danhsachcam::where('sdt', $value)->first();
        if (empty($ds)) {
            return true;
        }
        return false;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Số điện thoại này đã bị cấm đặt hàng do hủy quá nhiều lần.';
    }
}
