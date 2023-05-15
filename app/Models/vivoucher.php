<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class vivoucher extends Model
{
    use HasFactory;

    public $timestamps = false;
    public $fillable = [
        'id_voucher',
        'id_kh',
        'soluong',
        'ngayketthuc'
    ];
}
