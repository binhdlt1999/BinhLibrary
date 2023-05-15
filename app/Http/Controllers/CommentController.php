<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\khachhang;
use App\Models\comment;
use App\Models\donhang;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function submitComment(Request $request)
    {
        if(Auth::check()) {
            $khachhang = khachhang::where('id_tk', Auth::id())
                                    ->first();
            $damua = donhang::whereHas('sach', fn ($query) => 
                                $query->where('saches.id', $request->detail_idSach)
                            )
                            ->where('id_kh', $khachhang->id)
                            ->where('trangthai', 5)
                            ->first();
            $damuahang = 0;
            if (!empty($damua)) {
                $damuahang = 1;
            }
            $id_kh = $khachhang->id;
            $id_s = $request->detail_idSach;
            $noidung = $request->content;
            $tenkhachhang = $khachhang->ho . ' ' . $khachhang->ten;
            $loaikhachhang = 1;
        } else {
            $id_kh = null;
            $id_s = $request->detail_idSach;
            $noidung = $request->content;
            $tenkhachhang = null;
            $loaikhachhang = 0;
            $damuahang = 0;
        }

        $data = [
            'id_kh' => $id_kh,
            'id_s' => $id_s,
            'noidung' => $noidung,
            'tenkhachhang' => $tenkhachhang,
            'loaikhachhang' => $loaikhachhang,
            'damuahang' => $damuahang,
        ];
        if (!empty(comment::create($data))) {
            $div = $this->refreshComment($request->detail_idSach);
            return response()->json([
                'success' => true,
                'div' => $div,
            ]);
        } else {
            return response()->json(['success' => false]);
        }
    }

    public function refreshComment($id)
    {
        $comments = comment::where('id_s', $id)
                            ->orderBy('created_at', 'desc')
                            ->limit(10)
                            ->get();
        $div = '';
        if (!$comments->isEmpty()) {
            foreach ($comments as $comment) {
                if ($comment->loaikhachhang == 1) {
                    $div .= '<div class="tg-authorbox">
                                <figure class="tg-authorimg" style="width: 8%">
                                    <img src="' . asset("images/users/no_user.png") . '" alt="image description">
                                </figure>
                                <div class="tg-authorinfo">
                                    <div class="tg-authorhead">
                                        <div class="tg-leftarea">
                                            <div class="tg-authorname"  style="margin-top: 10px">
                                                <h2>' . $comment->tenkhachhang;
                                                if ($comment->damuahang == 1) {
                                                    $div .= '<span style="font-size: 70%; margin-top: 3px; color: #3998e1">
                                                                <i class="glyphicon glyphicon-ok-circle"></i> Đã mua hàng
                                                            </span>';
                                                }
                    $div .=                     '</h2>
                                                <span>' . $comment->created_at->diffForHumans() . '</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tg-description">
                                        <p>' . $comment->noidung . '</p>
                                    </div>
                                </div>
                            </div>';
                }
                else {
                    $div .= '<div class="tg-authorbox">
                                <figure class="tg-authorimg" style="width: 8%">
                                    <img src="' . asset("images/users/no_user.png") . '" alt="image description">
                                </figure>
                                <div class="tg-authorinfo">
                                    <div class="tg-authorhead">
                                        <div class="tg-leftarea">
                                            <div class="tg-authorname"  style="margin-top: 10px">
                                                <h2>Ẩn danh</h2>
                                                <span>' . $comment->created_at->diffForHumans() .'</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tg-description">
                                        <p>' . $comment->noidung. '</p>
                                    </div>
                                </div>
                            </div>';
                }
            }
        } else {
            $div += '<div class="tg-authorbox">
                        <p>chưa có nhận xét về sản phẩm này</p>
                    </div>';
        }

        return $div;
    }
}
