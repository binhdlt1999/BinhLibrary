<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class chitietdonhang extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = ['id_dh', 'id_s', 'soluong', 'gia', 'thanhtien'];
}
