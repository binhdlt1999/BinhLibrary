<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class donhang extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = [
        'id_kh',
        'id_voucher',
        'madonhang',
        'trangthai',
        'tamtinh',
        'phivanchuyen',
        'giagiam',
        'tongtien',
        'trangthaithanhtoan',
        'thoigiantao',
        'thoigiannhan'
    ];

    public function khachhang()
    {
        return $this->belongsTo(khachhang::class, 'id_kh');
    }

    public function sach()
    {
        return $this->belongsToMany(sach::class, chitietdonhang::class, 'id_dh', 'id_s')
                ->withPivot('soluong', 'gia', 'thanhtien');
    }
}
