<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class theloai extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'tenloai'
    ];

    public function sach()
    {
        return $this->belongsToMany(sach::class, chitietloaisach::class, 'id_l', 'id_s');
    }
}
