<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class chitietquyen extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'id_q',
        'id_cn',
        'chophep'
    ];
}
