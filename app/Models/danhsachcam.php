<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class danhsachcam extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'danhsachcams';
    protected $fillable = ['sdt'];
}
