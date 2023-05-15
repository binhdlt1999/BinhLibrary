<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\phivanchuyen;
use App\Models\quanhuyen;
use Illuminate\Http\Request;
use App\Models\tinhthanhpho;
use App\Models\xaphuongthitran;
use Illuminate\Support\Facades\Validator;

class ManageShipCashController extends Controller
{
    public function index()
    {
        $tinhthanhpho = tinhthanhpho::all();
        $phivanchuyens = phivanchuyen::orderby('thanhpho', 'desc')
                                        ->get();
        return view('admin.pages.shipCash.manageShipCash')->with([
            'tinhthanhpho' => $tinhthanhpho,
            'phivanchuyens' => $phivanchuyens
        ]);
    }

    public function validateInput($request)
    {
        $validator = Validator::make($request->all(), [
            'matp' => ['required'],
            'maqh' => ['required'],
            'xaid' => ['required'],
            'phi' => ['required', 'numeric', 'min:0'],
        ], [
            'matp.required' => 'Chưa chọn tỉnh/thành phố',
            'maqh.required' => 'Chưa chọn quận/huyện',
            'xaid.required' => 'Chưa chọn phường xã',
            'phi.required' => 'Nhập phí vận chuyển',
            'phi.min' => 'phí vận chuyển phải là số dương',
            'phi.numeric' => 'Chỉ nhận các số từ 0-9', 
        ]);
 
        if ($validator->fails()) {
            return $validator->getMessageBag()->toArray();
        }
    }

    public function divShipCash()
    {
        $i = 1;
        $div = '';
        $phivanchuyens = phivanchuyen::orderby('thanhpho', 'desc')
                                        ->get();

        foreach ($phivanchuyens as $phivanchuyen) {
            $div .= '<tr onclick="showDetailShipCash(\'' . $phivanchuyen->xaid . '\')">
                        <td>' . $i++ . '</td>
                        <td>' . $phivanchuyen->thanhpho . '</td>
                        <td>' . $phivanchuyen->quanhuyen . '</td>
                        <td>' . $phivanchuyen->phuongxa . '</td>
                        <td>' . number_format($phivanchuyen->phi, 0, ',', '.') . '</td>
                        <td>';
                    if ($phivanchuyen->trangthaihoatdong == 1) {
                        $div .= '<label class="badge badge-primary">Hoạt động</label>';
                    } else {
                        $div .= '<label class="badge badge-danger">Ngừng hoạt động</label>';
                    }
            $div .= '</td></tr>';
        }

        return $div;
    }

    public function uploadShipCash(Request $request)
    {
        $validation = $this->validateInput($request);
        if (!empty($validation)) {
            return response()->json([
                'success' => false,
                'errors' => $validation
            ]);
        }

        $matp = $request->matp;
        $maqh = $request->maqh;
        $xaid = $request->xaid;
        $phi = $request->phi;

        $thanhpho = tinhthanhpho::where('matp', 'like', $matp)->first();
        $quanhuyen = quanhuyen::where('maqh', 'like', $maqh)->first();
        $phuongxa = xaphuongthitran::where('xaid', 'like', $xaid)->first();
        $created_at = date('Y-m-d H:i:s', time());
        $phivanchuyen = phivanchuyen::create([
            'xaid' => $xaid,
            'phi' => $phi * 1000,
            'thanhpho' => $thanhpho->name,
            'quanhuyen' => $quanhuyen->name,
            'phuongxa' => $phuongxa->name,
            'trangthaihoatdong' =>1,
            'created_at' => $created_at
        ]);

        $divShipCash = $this->divShipCash();
        if ($phivanchuyen) {
            return response()->json([
                'success' => true,
                'divShipCash' => $divShipCash
            ]);
        }
    }

    public function showDetailShipCash(Request $request)
    {
        $phuongxa = xaphuongthitran::where('xaid', 'like', $request->xaid)->first();
        $quanhuyen = quanhuyen::where('maqh', 'like', $phuongxa->maqh)->first();
        $thanhpho = quanhuyen::where('matp', 'like', $quanhuyen->matp)->first();
        $phivanchuyen = phivanchuyen::where('xaid', $request->xaid)->first();

        $divShipCash = $this->divShipCash();
        return response()->json([
            'xaid' => $phuongxa->xaid,
            'maqh' => $quanhuyen->maqh,
            'matp' => $thanhpho->matp,
            'phi' => $phivanchuyen->phi/1000,
            'trangthaihoatdong' => $phivanchuyen->trangthaihoatdong,
            'divShipCash' => $divShipCash
        ]);
    }

    public function deleteShipCash(Request $request)
    {
        $xaid = $request->xaid;
        $phivanchuyen = phivanchuyen::where('xaid', 'like', $xaid)->first();
        $phivanchuyen->trangthaihoatdong = 0;
        $phivanchuyen->save();
        $divShipCash = $this->divShipCash();
        return response()->json([
            'divShipCash' => $divShipCash
        ]);
    }

    public function updateShipCash(Request $request)
    {
        // $validation = $this->validateInput($request);
        // if (!empty($validation)) {
        //     return response()->json([
        //         'success' => false,
        //         'errors' => $validation
        //     ]);
        // }

        $phivanchuyen = phivanchuyen::where('xaid', 'like', $request->xaid)->first();
        $phivanchuyen->phi = $request->phi*1000;
        $phivanchuyen->save();

        $divShipCash = $this->divShipCash();
        return response()->json([
            'divShipCash' => $divShipCash
        ]);
    }

    public function reuseShipCash(Request $request) {
        $xaid = $request->xaid;
        $phivanchuyen = phivanchuyen::where('xaid', 'like', $xaid)->first();
        $phivanchuyen->trangthaihoatdong = 1;
        $phivanchuyen->save();
        $divShipCash = $this->divShipCash();
        return response()->json([
            'divShipCash' => $divShipCash
        ]);
    }
}
