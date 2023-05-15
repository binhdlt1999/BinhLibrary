<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class phivanchuyen extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'phivanchuyens';
    protected $fillable = [
        'xaid',
        'phi',
        'thanhpho',
        'quanhuyen',
        'phuongxa',
        'trangthaihoatdong',
        'created_at'
    ];
}
