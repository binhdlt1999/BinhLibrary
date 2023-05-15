<?php

namespace App\Http\Controllers;

use App\Models\danhsachcam;
use App\Models\donhang;
use App\Models\khachhang;
use App\Models\theloai;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Laravel\Ui\Presets\React;
use App\Models\sach;

class StatisticsController extends Controller
{
    public function index()
    {
        return view('admin.pages.statistics.statistics');
    }

    public function dateChart(Request $request) {
        $ngaybatdau = $request->ngaybatdau;
        $ngayketthuc = $request->ngayketthuc;
        $donhang = donhang::selectRaw("
                                        count(*) AS data, DATE_FORMAT(thoigiannhan, '%Y-%m-%d') as thoigiannhan
                                    ")
                                    ->where('thoigiannhan', '>=', $ngaybatdau)
                                    ->where('thoigiannhan', '<=', $ngayketthuc)
                                    ->groupByRaw("DATE_FORMAT(thoigiannhan, '%Y-%m-%d')")
                                    ->get();

        $data = [];
        foreach ($donhang as $value) {
            $data[$value->thoigiannhan] = $value->data;
        }
        return response()->json([
            'data' => $data
        ]);
    }

    public function minVolume(Request $request)
    {
        $soluong = $request->soluong;
        $sach = sach::where('soluong', '<=', $soluong)
                    ->orderby('soluong', 'desc')
                    ->get();
        $div = $this->divTableProduct($sach);
        return response()->json([
            'sach' => $sach,
            'div' => $div
        ]);
    }

    public function divTableProduct($sach)
    {
        $div = '';
        $i = 1;
        foreach ($sach as $value) {
            $div .= "<tr>
                        <td>" . $i++ . "</td>
                        <td><img src=" . asset('images/books/' . $value->hinhanh) . " /></td>
                        <td>$value->tensach</td>
                        <td>$value->soluong</td>
                    </tr>";
        }
        return $div;
    }

    public function maxCancleOrder(Request $request)
    {
        $ngaybatdau = $request->ngaybatdau;
        $ngayketthuc = $request->ngayketthuc;

        $danhsachcam = danhsachcam::all();
        $sdt_cam = [];
        foreach ($danhsachcam as $value) {
            array_push($sdt_cam, $value->sdt);
        }

        $khachhang = khachhang::with([
            'donhang' => fn($query) =>
                        $query->where('trangthai', 8)
                            ->where('thoigiannhan', '>=', $ngaybatdau)
                            ->where('thoigiannhan', '<=', $ngayketthuc)
        ])
                                ->where('sdt', '!=', null)
                                ->whereNotIn('sdt', $sdt_cam)
                                ->orderby('sdt')
                                ->get();
        $labels = [];
        $data = [];
        foreach ($khachhang as $value) {
            if (!$value->donhang->isEmpty()) {
                if (!in_array($value->sdt, $labels)) {
                    array_push($labels, $value->sdt);
                    $data[$value->sdt] = count($value->donhang);
                } else {
                    $increase = count($value->donhang);
                    $data[$value->sdt] += $increase;
                }
            }
        }
        return response()->json([
            'data' => $data
        ]);
    }

    public function avenueByGenre(Request $request)
    {
        $ngaybatdau = $request->ngaybatdau;
        $ngayketthuc = $request->ngayketthuc;

        $theloai = theloai::with(['sach', 
            'sach.donhang' =>  fn($query) => 
                                    $query
                                    ->where('donhangs.trangthai', 4)
                                    ->where('donhangs.thoigiannhan', '>=', $ngaybatdau)
                                    ->where('donhangs.thoigiannhan', '<=', $ngayketthuc)
        ])
        ->whereHas('sach.donhang', fn ($query) => 
                $query->where('donhangs.trangthai', 4)
        )
        ->get();

        $data = [];
        foreach ($theloai as $value) {
            $data[$value->tenloai] = 0;
            foreach ($value->sach as $sach) {
                if (!$sach->donhang->isEmpty()) {
                    foreach ($sach->donhang as $donhang) {
                        $data[$value->tenloai] += $donhang->tongtien;
                    }
                }
            }
        }

        foreach ($data as $key => $value) {
            if ($value == 0) {
                unset($data[$key]);
            }
        }

        return response()->json([
            'data' => $data
        ]);
    }
    
}
