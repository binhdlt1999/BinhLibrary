<?php

namespace App\Http\Controllers;

use App\Models\kichban;
use Illuminate\Http\Request;

class ManageChatbotController extends Controller
{
    public function index()
    {
        $kichban = kichban::where('trangthai', '!=', 0)
                            ->orderby('id', 'desc')
                            ->get();
        return view('admin.pages.chatbot.chatbot')->with(['kichban' => $kichban]);
    }

    public function accept(Request $request)
    {
        $id = $request->id;
        $traloi = $request->traloi;
        $kichban = kichban::where('id', $id)
                            ->first();
        $kichban->traloi = $traloi;
        $kichban->trangthai = 1;
        $kichban->save();
    }

    public function deny(Request $request)
    {
        $id = $request->id;
        $kichban = kichban::where('id', $id)
                            ->first();
        $kichban->trangthai = 0;
        $kichban->save();

        $div = $this->div();
        return response()->json([
            'div' => $div
        ]);
    }

    public function div()
    {
        $kichban = kichban::where('trangthai', '!=', 0)
                            ->orderby('id', 'desc')
                            ->get();
        $i = 0;
        $div = '';
        foreach ($kichban as $value) {
            $div .= '<tr>
                <td>
                    ' . $i++ . '
                </td>
                <td>
                    ' . $value->cauhoi . '
                </td>
                <td>';
                    if ($value->traloi != null) {
                        $div .= '<input type="text" id="manage-chatbot-answer' . $value->id . '" class="form-control" value="' . $value->traloi . '" placeholder="Nhập câu trả lời">';
                    } else {
                        $div .= '<input type="text" id="manage-chatbot-answer' . $value->id . '" class="form-control" placeholder="Nhập câu trả lời">';
                    }
            $div .= '
                </td>
                    <td>
                        <button type="button" id="manage-chatbot-btn-accept" onclick="acceptKichban(' . $value->id . ')" class="btn btn-primary mb-2">Xác nhận</button>
                        <button type="button" id="manage-chatbot-btn-deny" onclick="denyKichban(' . $value->id . ')" class="btn btn-danger mb-2">Từ chối</button>
                    </td>
                </tr>';
        }

        return $div;
    }
}
