<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\donhang;
use App\Models\chitietdonhang;
use App\Models\sach;

class ActionButtonController extends Controller
{
    public function detailOrder($id_dh) {
        $donhang = donhang::with(['khachhang', 'sach'])
                            ->where('id', $id_dh)
                            ->first();
        $divDetailOrder = $this->divDetailOrder($donhang);
        return $divDetailOrder;
    }

    public function updateToReady(Request $request)
    {
        $idDonhang = $request->id;
        $donhang = donhang::where('id', $idDonhang)->first();

        if ($donhang->trangthaithanhtoan == 0) {
            $chitietdonhang = chitietdonhang::where('id_dh', $idDonhang)
                                            ->orderBy('id_s', 'asc')
                                            ->get();
    
            $idSach = [];
            foreach ($chitietdonhang as $value) {
                array_push($idSach, $value->id_s);
            }
    
            $sach = sach::whereIn('id', $idSach)
                        ->orderBy('id', 'asc')
                        ->get();
    
            for ($i = 0; $i < count($chitietdonhang); $i++) {
                if ($chitietdonhang[$i]->id_s == $sach[$i]->id) {
                    $soluongconlai = $sach[$i]->soluong - $chitietdonhang[$i]->soluong;
                    if ($soluongconlai < 0) {
                        $chitietdonhang[$i]->soluong = $sach[$i]->soluong;
                        $chitietdonhang[$i]->save();
                        for ($j = --$i; $j >= 0; $j--) {
                            $soluongbandau = $sach[$j]->soluong + $chitietdonhang[$j]->soluong;
                            $sach[$j]->soluong = $soluongbandau;
                            $sach[$j]->save();
                        }
                        return response()->json(array(
                            'success' => 'overStorehouse',
                        ));
                    } else {
                        $sach[$i]->soluong = $soluongconlai;
                        $sach[$i]->save();
                    }
                }
            }
        }

        $donhang->trangthai = 2;
        $donhang->save();

        $donhangs = donhang::with('khachhang')
                            ->where('trangthai', '!=', 0)
                            ->where('trangthai', '!=', 9)
                            ->orderby('thoigiantao', 'desc')
                            ->get();

        $divDetailOrder = $this->detailOrder($idDonhang);
        $divTable = $this->divTable($donhangs);

        return response()->json([
            'success' => true,
            'trangthai' => $donhang->trangthai,
            'divDetailOrder' => $divDetailOrder,
            'divTable' => $divTable
        ]);
    }

    public function updateToDeny(Request $request)
    {
        $donhang = donhang::where('id', $request->id)->first();
        $donhang->trangthai = 7;
        $donhang->save();

        $donhangs = donhang::with('khachhang')
                            ->where('trangthai', '!=', 0)
                            ->where('trangthai', '!=', 9)
                            ->orderby('thoigiantao', 'desc')
                            ->get();
        $divDetailOrder = $this->detailOrder($request->id);
        $divTable = $this->divTable($donhangs);

        return response()->json([
            'success' => true,
            'trangthai' => $donhang->trangthai,
            'divDetailOrder' => $divDetailOrder,
            'divTable' => $divTable
        ]);
    }

    public function updateToDelivery(Request $request)
    {
        $donhang = donhang::where('id', $request->id)->first();
        $donhang->trangthai = 3;
        $donhang->save();

        $donhangs = donhang::with('khachhang')
                            ->where('trangthai', '!=', 0)
                            ->where('trangthai', '!=', 9)
                            ->orderby('thoigiantao', 'desc')
                            ->get();
        $divDetailOrder = $this->detailOrder($request->id);
        $divTable = $this->divTable($donhangs);

        return response()->json([
            'success' => true,
            'trangthai' => $donhang->trangthai,
            'divDetailOrder' => $divDetailOrder,
            'divTable' => $divTable
        ]);
    }

    public function updateToConfirmDelivered(Request $request)
    {
        $donhang = donhang::where('id', $request->id)->first();
        $donhang->trangthai = 4;
        $donhang->trangthaithanhtoan = 1;
        $donhang->thoigiannhan = date('Y-m-d H:i:s', time());
        $donhang->save();
        $donhangs = donhang::with('khachhang')
                            ->where('trangthai', '!=', 0)
                            ->where('trangthai', '!=', 9)
                            ->orderby('thoigiantao', 'desc')
                            ->get();
        $divDetailOrder = $this->detailOrder($request->id);
        $divTable = $this->divTable($donhangs);

        return response()->json([
            'success' => true,
            'trangthai' => $donhang->trangthai,
            'divDetailOrder' => $divDetailOrder,
            'divTable' => $divTable
        ]);
    }

    public function updateToFail(Request $request)
    {
        $donhang = donhang::where('id', $request->id)->first();
        $donhang->trangthai = 8;
        $donhang->save();

        $donhangs = donhang::with('khachhang')
                            ->where('trangthai', '!=', 0)
                            ->where('trangthai', '!=', 9)
                            ->orderby('thoigiantao', 'desc')
                            ->get();
        $divDetailOrder = $this->detailOrder($request->id);
        $divTable = $this->divTable($donhangs);

        return response()->json([
            'success' => true,
            'trangthai' => $donhang->trangthai,
            'divDetailOrder' => $divDetailOrder,
            'divTable' => $divTable
        ]);
    }

    public function updateToReaccept(Request $request)
    {
        $donhang = donhang::where('id', $request->id)->first();
        $donhang->trangthai = 1;
        $donhang->save();

        $donhangs = donhang::with('khachhang')
                            ->where('trangthai', '!=', 0)
                            ->where('trangthai', '!=', 9)
                            ->orderby('thoigiantao', 'desc')
                            ->get();
        $divDetailOrder = $this->detailOrder($request->id);
        $divTable = $this->divTable($donhangs);

        return response()->json([
            'success' => true,
            'trangthai' => $donhang->trangthai,
            'divDetailOrder' => $divDetailOrder,
            'divTable' => $divTable
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

    public function getListOrderByKeyword(Request $request)
    {
        $keyword = $request->keyword;
        if ($keyword != null) {
            $donhangs = donhang::with('khachhang')
            ->where('trangthai', '!=', 0)
            ->where('trangthai', '!=', 9)
            ->orderby('thoigiantao', 'desc')
            ->whereHas('khachhang', fn ($query) => 
                $query->where('khachhangs.ho', 'like', "%$keyword%")
                    ->orwhere('khachhangs.ten', 'like', "%$keyword%")
                    ->orwhere('khachhangs.email', 'like', "%$keyword%")
                    ->orwhere('khachhangs.sdt', 'like', "%$keyword%")
            )->get();

            if ($donhangs->isEmpty()) {
                $donhangs = donhang::with('khachhang')
                                    ->where('trangthai', '!=', 0)
                                    ->where('trangthai', '!=', 9)
                                    ->where('madonhang', 'like', "%$keyword%")
                                    ->orderby('thoigiantao', 'desc')
                                    ->get();
            }
        } else {
            $donhangs = donhang::with('khachhang')
            ->where('trangthai', '!=', 0)
            ->where('trangthai', '!=', 9)
            ->orderby('thoigiantao', 'desc')
            ->get();
        }
        

        if ($donhangs->isEmpty()) {
            return response()->json([
                'success' => false
            ]);
        }

        $divTable = $this->divTable($donhangs);
        return response()->json([
            'success' => true,
            'divTable' => $divTable
        ]);
    }

    public function divTable($donhangs)
    {
        $i = 1;
        $div = '';
        foreach ($donhangs as $donhang) {
            $div .= '<tr onclick="showDetailOrder(' . $donhang->id . ')">
                <td class="py-1">';
            $div .= $i++;
            $div .= '</td>
                <td class="py-1">
                    ' . $donhang->madonhang . '
                </td>
                <td class="py-1">
                    ' . $donhang->khachhang->ho . ' ' . $donhang->khachhang->ten . '
                </td>
                <td>
                    ' . number_format($donhang->tongtien, 0, '.', ',') . '
                </td>
                <td>
                    ' . date_format(date_create($donhang->thoigiantao), 'd/m/Y H:i:s') . '
                </td>
                <td>
                    <div class="progress">';
                        if($donhang->trangthai == 1)
                            $div .= '<div class="progress-bar bg-warning" role="progressbar" style="width: 25%" aria-valuenow="" aria-valuemin="0" aria-valuemax="100">Đang chờ</div>';
                        elseif($donhang->trangthai == 2)
                            $div .= '<div class="progress-bar bg-primary" role="progressbar" style="width: 50%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">Đang chuẩn bị hàng</div>';
                        elseif($donhang->trangthai == 3)
                            $div .= '<div class="progress-bar bg-primary" role="progressbar" style="width: 75%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">Đang giao</div>';
                        elseif($donhang->trangthai == 4)
                            $div .= '<div class="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">Đã giao</div>';
                        elseif($donhang->trangthai == 5)
                            $div .= '<div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Hoàn thành</div>';
                        elseif($donhang->trangthai == 6)
                            $div .= '<div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Khách hủy đơn</div>';
                        elseif($donhang->trangthai == 8)
                            $div .= '<div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Giao hàng thất bại</div>';
                        else
                            $div .= '<div class="progress-bar bg-info" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Từ chối đơn</div>';
                $div .= '</div>
                </td>
                <td>';
                    if($donhang->trangthai == 1)
                        $div .= '<label class="badge badge-warning">Đang chờ</label>';
                    elseif($donhang->trangthai == 2)
                        $div .= '<label class="badge badge-primary">Đang chuẩn bị</label>';
                    elseif($donhang->trangthai == 3)
                        $div .= '<label class="badge badge-primary">Đang giao</label>';
                    elseif($donhang->trangthai == 4)
                        $div .= '<label class="badge badge-primary">Đã giao</label>';
                    elseif($donhang->trangthai == 5)
                        $div .= '<label class="badge badge-success">Hoàn thành</label>';
                    elseif($donhang->trangthai == 6)
                        $div .= '<label class="badge badge-danger">Khách hủy đơn</label>';
                    elseif($donhang->trangthai == 8)
                        $div .= '<label class="badge badge-danger">Giao hàng thất bại</label>';
                    else
                        $div .= '<label class="badge badge-info">Từ chối</label>';
            $div .= '</td>
            </tr>';
        }

        return $div;
    }
}
