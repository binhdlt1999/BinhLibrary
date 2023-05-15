<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class comment extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_kh',
        'id_s',
        'noidung',
        'tenkhachhang',
        'hinhanh',
        'loaikhachhang',
        'damuahang',
        'created_at'
    ];
}
