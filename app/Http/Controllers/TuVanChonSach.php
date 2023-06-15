<?php

namespace App\Http\Controllers;

use App\Models\kichban;
use App\Models\sach;
use App\Models\theloai;
use App\Models\chitietloaisach;
use Illuminate\Http\Request;
use BotMan\BotMan\Messages\Conversations\Conversation;
use BotMan\BotMan\Messages\Incoming\Answer;
use BotMan\BotMan\Messages\Outgoing\Question;
use BotMan\BotMan\Messages\Outgoing\Actions\Button;

class TuVanChonSach extends Conversation
{
    public function run()
    {
        $theloais = theloai::all();
        $arrButton = [];
        foreach ($theloais as $theloai) {
            $Button = Button::create($theloai->tenloai)->value($theloai->id);
            array_push($arrButton, $Button);
        }
        $question = Question::create('Bạn muốn chọn loại sách nào?')
            ->fallback('Unable to create a new database')
            ->callbackId('create_database')
            ->addButtons($arrButton);

        $this->ask($question, function (Answer $answer) {
            // Detect if button was clicked:
            if ($answer->isInteractiveMessageReply()) {
                $this->theloai = $answer->getText();
                $this->askGia();
            } else {
                $kichban = kichban::where('cauhoi', 'like', $answer->getText())
                                    ->where('trangthai', 1)
                                    ->first();
                if (empty($kichban)) {  
                    $check_kichban = kichban::where('cauhoi', 'like', $answer->getText())
                            ->get();
                    if ($check_kichban->isEmpty()) {
                        kichban::create([
                            'cauhoi' => $answer->getText(),
                            'trangthai' => 2
                        ]);
                    }
                    $this->say('Xin lỗi! Bot không hiểu ý bạn');
                } else {
                    $this->answer = $answer->getText();
                    $this->say($kichban->traloi);
                }
            }
        });
    }

    public function askGia()
    {
        $this->ask('Mức giá cao nhất bạn mong muốn là bao nhiêu?
                    Nhớ nhập đến phần nghìn giùm bot nhé', function ($answer) {
            $this->gia = $answer->getText();
            $this->askTacgia();
        });
    }

    public function askTacgia()
    {
        $this->ask('Bạn có thích tác giả nào trong thể loại này không?
                    Nếu không có hãy chat "Không" để bot biết nhé!', function ($answer) {

            $tacgia = sach::where('tacgia', 'like', "%" . $answer->getText() . "%")->get();
            if (in_array($answer->getText(), ['khong', "không", "Không", "Khong"]) ) {
                $this->tacgia = null;
                $this->ketthuc();
            } elseif ($tacgia->isEmpty()) {
                $this->say('Xin lỗi! Bot không tìm thấy tác giả này');
                $this->askTacgia();
            } else {
                $this->tacgia = $answer->getText();
                $this->ketthuc();
            }
        });
    }

    public function ketthuc()
    {
        $theloai = $this->theloai;
        $gia = $this->gia;
        $tacgia = $this->tacgia;

        $chitietsach = chitietloaisach::query();
        $chitietsach = $chitietsach ->where('id_l', 'like', "$theloai");
        $idsach = $chitietsach->pluck('id');
        
        $sach = sach::query();
        if ($tacgia != null) {
            $sach = $sach->where('tacgia', 'like', "%$tacgia%");
        }

        $sach = $sach->whereIn('id', $idsach)
                ->where('gia', '<=', (int)$gia)
                ->where('soluong', '>=', 1)
                ->where('trangthaikinhdoanh', 1)
                ->first();
        if ($sach !=null) {
            $tensach = $sach->tensach;
            $this->say('Bot đã tìm thấy rồi: ' . $tensach);
        } else {
            $this->say('Bot không tìm thấy sách hợp yêu cầu của bạn rồi!!');
            $this->say('Tuy nhiên có lẽ bạn sẽ thích các quyển sách đang là bán chạy (best selling) của shop.');
            $bestSelling = sach::limit(3) // sách bán chạy nhất
                ->where('noibat', 1)
                ->with('theloai')
                ->orderby('created_at', 'desc')
                ->get();
            foreach ($bestSelling as $book) {
                $tensach = $book->tensach;
                $tacgia = $book->tacgia;
                $idsach = $book->id;
                // tìm thể loại
                $chitietsach = chitietloaisach::query();
                $chitietsach = $chitietsach ->where('id_s', 'like', "$idsach")
                    ->first();
                $idloai = $chitietsach->id_l;
                // query đến bảng the loại
                $theloais = theloai::query();
                $theloais = $theloais ->where('id', 'like', "$idloai")
                    ->first();
                $theloai = $theloais->tenloai;
                
                $message = "Tên sách: $tensach; Tác giả: $tacgia; Thể loại: $theloai";
                
                // In thông tin sách ra màn hình chatbot
                $this->say($message);
            }

        }
        
    }
}
