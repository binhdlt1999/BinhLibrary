<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tacgia extends Model
{
    use HasFactory;
    public $timestamps = false;

    public function sach()
    {
        return $this->hasMany(sach::class);
    }
}
