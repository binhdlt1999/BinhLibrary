<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\danhsachcam;
use App\Models\khachhang;
use App\Models\User;
use Illuminate\Http\Request;

class SearchCustomerController extends Controller
{
    public function index()
    {
        $khachhang = khachhang::with(['donhang'])
                                ->where('sdt', '!=', null)
                                ->get();
        $danhsachcam = danhsachcam::all();
        return view('admin.pages.search.searchCustomer')->with([
            'khachhang' => $khachhang,
            'danhsachcam' => $danhsachcam
        ]);
    }

    public function search(Request $request)
    {
        $keyword = strtolower($request->keyword);
        if (!$keyword) {
            $khachhang = khachhang::with(['donhang', 'User'])
                                ->where('sdt', '!=', null)
                                ->get();
        } else {
            $khachhang = khachhang::with(['donhang', 'User'])
                                ->orwhere('ho', 'like', "%$keyword%")
                                ->orwhere('ten', 'like', "%$keyword%")
                                ->orwhere('sdt', 'like', "%$keyword%")
                                ->orwhere('email', 'like', "%$keyword%")
                                ->get();
        }
        
        if ($khachhang->isEmpty()) {
            return response()->json([
                'success' => false,
            ]);
        }
        $divCustomer = $this->divCustomer($khachhang);
        return response()->json([
            'success' => true,
            'div' => $divCustomer
        ]);
    }

    public function divCustomer($khachhang)
    {
        $danhsachcam = danhsachcam::all();
        $i = 1;
        $div = '';
            foreach ($khachhang as $value) {
            $vip = 0;
            $huy = 0;
            foreach ($value->donhang as $donhang) {
                if ($donhang->trangthai == 8) {
                    $huy++;
                } elseif ($donhang->trangthai == 4) {
                    $vip++;
                }
            }
            $div .= '<tr>
                        <td><a href="/detail-customer/' . $value->id . '" class="text-decoration-none text-secondary">' . $i .'</a></td>
                        <td><a href="/detail-customer/' . $value->id . '" class="text-decoration-none text-secondary">' . $value->sdt .'</a></td>
                        <td><a href="/detail-customer/' . $value->id . '" class="text-decoration-none text-secondary">' . $value->ho .'</a></td>
                        <td><a href="/detail-customer/' . $value->id . '" class="text-decoration-none text-secondary">' . $value->ten .'</a></td>
                        <td class="text-success" style="text-align: center">' . $vip .'</td>
                        <td class="text-danger" style="text-align: center">' . $huy . '</td>';
                            if ($vip < 5)
                                $div .= '<td ><a href="/detail-customer/' . $value->id . '"><label class="badge badge-success">Thường</label></a></td>';
                            elseif ($vip >= 5 && $vip < 20)
                                $div .= '<td><a href="/detail-customer/' . $value->id . '"><label class="badge badge-info">Bạc</label></a></td>';
                            elseif ($vip >= 20 && $vip < 50)
                                $div .= '<td><a href="/detail-customer/' . $value->id . '"><label class="badge badge-warning">Vàng</label></a></td>';
                            else {
                                $div .= '<td><a href="/detail-customer/' . $value->id . '"><label class="badge badge-primary">Kim cương</label></a></td>';
                            }
                        if ($danhsachcam->contains('sdt', $value->sdt)) {
                            $div .= '<td><button type="button" onclick="searchCustomerUnlock(' . $value->id . ')" class="btn btn-warning mb-2">Mở Khóa</button></td>';
                        } else {
                            $div .= '<td><button type="button" onclick="searchCustomerLockAccount(' . $value->id . ')" class="btn btn-danger mb-2">Khóa</button></td>';
                        }
            $div .= '</tr>';
            $i++;
        }
        return $div;
    }
    
    public function lockCustomer(Request $request)
    {
        $id_kh = $request->id;
        $sdt = khachhang::find($id_kh);
        danhsachcam::create(['sdt' => $sdt->sdt]);
        $khachhang = khachhang::with(['donhang'])
                                ->where('sdt', '!=', null)
                                ->get();
        $divCustomer = $this->divCustomer($khachhang);
        return response()->json([
            'success' => true,
            'div' => $divCustomer
        ]);
    }

    public function unlockCustomer(Request $request)
    {
        $id_kh = $request->id;
        $sdt = khachhang::find($id_kh);
        danhsachcam::where('sdt', $sdt->sdt)->delete();
        $khachhang = khachhang::with(['donhang'])
                                ->where('sdt', '!=', null)
                                ->get();
        $divCustomer = $this->divCustomer($khachhang);
        return response()->json([
            'success' => true,
            'div' => $divCustomer
        ]);
    }
}
