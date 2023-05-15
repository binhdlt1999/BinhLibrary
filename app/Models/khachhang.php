<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class khachhang extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = [
        'id_tk',
        'ho',
        'ten',
        'gioitinh',
        'ngaysinh',
        'email',
        'sdt',
        'diachi',
        'loaidiachi',
        'loaikhachhang',
        'xaid',
        'giohang'
    ];
    public function sach()
    {
        return $this->belongsToMany(sach::class, comment::class, 'id_kh', 'id_s')
                ->withPivot('noidung');
    }
    public function donhang()
    {
        return $this->hasMany(donhang::class, 'id_kh');
    }
    public function User()
    {
        return $this->belongsTo(User::class, 'id_tk');
    }
}
