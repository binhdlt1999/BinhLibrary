<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class voucher extends Model
{
    use HasFactory;
    public $timestamps = false;
    public $fillable = [
        'mavoucher',
        'tenvoucher',
        'mucuudai',
        'dieukien',
        'soluong',
        'conlai',
        'trangthai',
        'ngaybatdau',
        'ngayketthuc',
        'created_at',
        'cothequydoi',
        'diemquydoi'
    ];
}
