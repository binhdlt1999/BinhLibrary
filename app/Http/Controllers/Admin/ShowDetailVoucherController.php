<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\vivoucher;
use Illuminate\Http\Request;
use App\Models\voucher;

class ShowDetailVoucherController extends Controller
{
    public function showDetailVoucher(Request $request)
    {
        $idVoucher = $request->id;
        $detailVoucher = voucher::where('id', $idVoucher)->first();

        if(empty($detailVoucher)) {
           return response()->json([
               'success' => false
           ]); 
        }

        $detailVoucher->ngaybatdau = date_format(date_create($detailVoucher->ngaybatdau), 'd/m/Y');
        $detailVoucher->ngayketthuc = date_format(date_create($detailVoucher->ngayketthuc), 'd/m/Y');
        $detailVoucher->mucuudai = $detailVoucher->mucuudai/1000;
        $detailVoucher->dieukien = $detailVoucher->dieukien/1000;

        $dadoi = false;
        $vivoucher = vivoucher::where('id_voucher', $idVoucher)->first();
        if (!empty($vivoucher)) {
            $dadoi = true;
        }
        return response()->json([
            'success' => true,
            'dadoi' => $dadoi,
            'voucher' => $detailVoucher
        ]); 
    }
}
