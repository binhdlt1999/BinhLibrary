<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AlertController extends Controller
{
    public function alert(Request $request, $trangthai)
    {
        if ($trangthai == 0) {
            echo "<script>alert('Thanh toán thất bại')</script>";
            echo "<script>window.location.href='http://127.0.0.1:8000/cart'</script>";
        } else {
            echo "<script>alert('Thanh toán thành công')</script>";
            echo "<script>window.location.href='http://127.0.0.1:8000'</script>";
        }
    }
}
