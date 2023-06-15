<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class sach extends Model
{
    use HasFactory;
    public $timestamps = false;
    public $fillable = [
        'tacgia',
        'tensach',
        'gia',
        'giakhuyenmai',
        'mota',
        'diemdanhgia',
        'hinhanh',
        'noibat',
        'soluong',
        'keyword',
        'created_at',
        'trangthaikinhdoanh',
        'loai',
        'xuatxu'
    ];

    public function theloai()
    {
        return $this->belongsToMany(theloai::class, chitietloaisach::class, 'id_s', 'id_l');
    }
    
    public function donhang() {
        return $this->belongsToMany(donhang::class, chitietdonhang::class, 'id_s', 'id_dh')
        ->withPivot('soluong', 'thanhtien');
    }
}
