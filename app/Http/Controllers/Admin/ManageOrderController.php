<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\donhang;
use Laravel\Ui\Presets\React;

class ManageOrderController extends Controller
{
    public function index()
    {
        $donhangs = donhang::with('khachhang')
                            ->where('trangthai', '!=', 0)
                            ->where('trangthai', '!=', 9)
                            ->orderby('thoigiantao', 'desc')
                            ->get();
        return view('admin.pages.listOrder.manageListOrder')->with(['donhangs' => $donhangs]);
    }

    public function showDetailOrder(Request $request)
    {
        $id_dh = $request->id;
        $donhang = donhang::with(['khachhang', 'sach'])
                            ->where('id', $id_dh)
                            ->first();
        $divDetailOrder = $this->divDetailOrder($donhang);
        return response()->json([
            'success' => true,
            'trangthai' => $donhang->trangthai,
            'divDetailOrder' => $divDetailOrder
        ]);
    }

    public function divDetailOrder($donhang)
    {
        $trangthai = '';
        $div = '';
        switch ($donhang->trangthai) {
            case 1:
                $trangthai = 'Đang chờ';
                break;
            case 2:
                $trangthai = 'Đang chuẩn bị hàng';
                break;
            case 3:
                $trangthai = 'Đang giao';
                break;
            case 4:
                $trangthai = 'Đã giao';
                break;
            case 5:
                $trangthai = 'Hoàn thành';
                break;
            case 6:
                $trangthai = 'Khách hủy đơn';
                break;
            case 7:
                $trangthai = 'Từ chối đơn';
                break;
            case 8:
                $trangthai = 'Giao hàng thất bại';
                break;
        }

        if ($donhang->trangthaithanhtoan == 1) {
            $trangthaithanhtoan = 'Đã thanh toán';
        } else {
            $trangthaithanhtoan = 'Chưa thanh toán';
        }
        $hoten = $donhang->khachhang->ho . ' ' .$donhang->khachhang->ten;
        $div .= '<tr>
                    <td colspan=2 class="text-muted">Tên khách hàng</td>
                    <td colspan=2>' . $hoten . '</td>
                </tr>
                <tr>
                    <td colspan=2 class="text-muted">Thời gian tạo</td>
                    <td colspan=2>' . $donhang->thoigiantao . '</td>
                </tr>
                <tr>
                    <td colspan=2 class="text-muted">Trạng thái thanh toán</td>
                    <td colspan=2>' . $trangthaithanhtoan . '</td>
                </tr>';
                if ($donhang->thoigiannhan) {
                    $div .= '<tr>
                                <td colspan=2 class="text-muted">Thời gian hoàn thành</td>
                                <td colspan=2>' . $donhang->thoigiannhan . '</td>
                            </tr>';
                }
        $div .= '<tr>
                    <td colspan=2 class="text-muted">Trạng thái</td>
                    <td colspan=2>' . $trangthai . '</td>
                </tr>';
        $div .= '<tr class="table-info">
                    <td>Tên sản phẩm</td>
                    <td>Giá</td>
                    <td>Số lượng</td>
                    <td>Thành tiền</td>
                </tr>';
        foreach ($donhang->sach as $sach) {
            $div .= '<tr>
                        <td>' . substr($sach->tensach, 0, 15) . '</td>
                        <td>' . number_format($sach->pivot->gia, 0, '.', ',') . '</td>
                        <td>' . number_format($sach->pivot->soluong, 0, '.', ',') . '</td>
                        <td>' . number_format($sach->pivot->thanhtien, 0, '.', ',') . '</td>
                    </tr>';
        }
        $div .= '<tr>
                    <td colspan=4></td>
                </tr>';
        $div .= '<tr class="table-primary">
                    <td colspan=3>Tổng tiền</td>
                    <td>' . number_format($donhang->tongtien, 0, '.', ',') . '</td>
                </tr>';
        return $div;
    }
}
