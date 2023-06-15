<?php

namespace App\Http\Controllers;

use App\Models\chitietloaisach;
use App\Models\sach;
use App\Models\theloai;
use Illuminate\Http\Request;
use BotMan\BotMan\Messages\Conversations\Conversation;
use BotMan\BotMan\Messages\Incoming\Answer;
use BotMan\BotMan\Messages\Outgoing\Question;
use BotMan\BotMan\Messages\Outgoing\Actions\Button;

class tuvan extends Conversation
{
    public function run()
    {
        $theloais = theloai::all();
        $arrButton = [];
        foreach ($theloais as $theloai) {
            $Button = Button::create($theloai->tenloai)->value($theloai->id);
            array_push($arrButton, $Button);
        }
        $question = Question::create('Bạn thích loại sách cụ thể nào trong đây không nè?')
            ->fallback('Unable to create a new database')
            ->callbackId('create_database')
            ->addButtons($arrButton);

        $this->ask($question, function (Answer $answer) {
            // Detect if button was clicked:
            if ($answer->isInteractiveMessageReply()) {
                $this->theloai = $answer->getText();
                $this->say('Đã hiểu rõ!');
                // $this->askGia();
                $this->askTacgia();
            } else {
                // $this->say('Xin lỗi! Bot không hiểu ý bạn');
                $this->theloai = null;
                $this->askTacgia();
            }
        });
    }

    public function askGia()
    {
        $this->ask('Mức giá cao nhất bạn mong muốn là bao nhiêu?
                    Nhớ nhập đến phần nghìn giùm bot nhé', function ($answer) {
            // if (gettype((int)$answer->getText()) == "int" ) {
            //     $this->gia = $answer->getText();
            //     $this->askTacgia();
            // } else {
            //     $this->say(gettype($answer->getText()));
            //     $this->say('Xin lỗi! Tôi không hiểu ý bạn');
            //     $this->askGia();
            // }
            $this->gia = $answer->getText();
            $this->askTacgia();
        });
    }

    public function askTacgia()
    {
        $this->ask('Viết đầy đủ lại tên tác giả bạn muốn tìm hiểu giúp bot nhé!
                    Nếu không có hãy chat "Không" để bot biết nhé!', function ($answer) {
            $tacgia = sach::where('tacgia', 'like', "%" . $answer->getText() . "%")->get();
            if (in_array($answer->getText(), ['khong', "không", "Không", "Khong", "ko"]) ) {
                $this->tacgia = null;
                $this->askTen();
            } elseif ($tacgia->isEmpty()) {
                $this->say('Xin lỗi! Có lẽ shop chưa có sách nào của tác giả này. Bạn thay đổi tác giả khác được không?');
                $this->askTacgia();
            } else {
                $this->tacgia = $answer->getText();
                $this->askTen();
            }
        });
    }

    public function askTen()
    {
        $this->ask('Bạn biết tên sách không? Viết đầy đủ tên quyển sách ra giúp bot nhé!
                    Nếu không biết bạn viết "không" là được.', function ($answer) {
            $tensach = sach::where('tensach', 'like', "%" . $answer->getText() . "%")->get();
            if (in_array($answer->getText(), ['khong', "không", "Không", "Khong", "ko"]) ) {
                $this->tensach = null;
                $this->ketthuc();
            } elseif ($tensach->isEmpty()) {
                $this->say('Xin lỗi! Bot không tìm thấy sách này trong shop');
                $this->say('Bot sẽ note lại rồi cập nhật sách này trong tương lai nhé! 
                            Bạn có cần bot giúp đỡ gì nữa không?');
            } else {
                $this->tensach = $answer->getText();
                $this->ketthuc();
            }
        });
    }

    public function ketthuc()
    {
        $theloai = $this->theloai;
        // $gia = $this->gia;
        $tacgia = $this->tacgia;
        $tensach = $this->tensach;

        $sach = sach::query();
        $chitietsach = chitietloaisach::query();
        $chitietsach = $chitietsach ->where('id_l', 'like', "$theloai");
        $idsach = $chitietsach->pluck('id');
        
        // Thể loại, tác giả, tên sách có
        if ($theloai != null && $tacgia != null && $tensach != null) {
            $sach = $sach->whereIn('id', $idsach)   //->where('gia', '<=', (int)$gia)
                ->where('tacgia', 'like', "%$tacgia%")
                ->where('tensach', 'like', "%$tensach%")
                ->where('soluong', '>=', 1)
                ->where('trangthaikinhdoanh', 1)
                ->first();
            if (!$sach){
                $this->say('Bot không thấy shop có quyển sách nào liên quan đến mô tả của bạn. Có thể bạn đã nhầm lẫn tác giả và tên sách rồi đấy!');
            } else {
                $mota = $sach->mota;
                $gia = $sach->gia;
                $giagiam = $sach->giakhuyenmai;
                $this->say($tensach . ' là một cuốn sách rất thú vị của ' . $tacgia . '. ' . $mota);
                $this->say($tensach . ' có giá là: ' . substr($gia, 0, -3) . 'đ');
                $this->say('Hiện tại shop đang giảm giá đấy, chỉ còn ' . substr($giagiam, 0, -3) . 'đ');
            }

        // Thể loại, tác giả có -> Bot gợi ý tên sách
        } elseif ($theloai != null && $tacgia != null) {
            $sach = $sach->whereIn('id', $idsach)
                ->where('tacgia', 'like', "%$tacgia%")
                ->where('soluong', '>=', 1)
                ->where('trangthaikinhdoanh', 1)
                ->first();
            if (!$sach){
                $this->say('Bot không thấy shop có quyển sách nào liên quan đến mô tả của bạn. Có lẽ bạn nhầm lẫn tác giả với thể loại đấy!');
            } else {
                $tensach = $sach->tensach;
                $mota = $sach->mota;
                $gia = $sach->gia;
                $giagiam = $sach->giakhuyenmai;
                $this->say('Bot sẽ gợi ý cho bạn một quyển sách hay của ' . $tacgia . '. ');
                $this->say($tensach . ' là một cuốn sách rất thú vị của ' . $tacgia . '. ' . $mota);
                $this->say($tensach . ' có giá là: ' . substr($gia, 0, -3) . 'đ');
                $this->say('Hiện tại shop đang giảm giá đấy, chỉ còn ' . substr($giagiam, 0, -3) . 'đ');
            }

        // Thể loại, tên sách có -> Khách hàng muốn gt về nó
        } elseif ($theloai != null && $tensach != null) {
            $sach = $sach->whereIn('id', $idsach)  
                ->where('tensach', 'like', "%$tensach%")
                ->where('soluong', '>=', 1)
                ->where('trangthaikinhdoanh', 1)
                ->first();
            if (!$sach){
                $this->say('Bot không thấy shop có quyển sách nào liên quan đến mô tả của bạn. Bạn có lẽ nhầm thể loại của sách rồi');
            } else {
                $tacgia = $sach->tacgia;
                $mota = $sach->mota;
                $gia = $sach->gia;
                $giagiam = $sach->giakhuyenmai;
                $this->say($tensach . ' là một lựa chọn tốt đấy. Sách của ' . $tacgia . '. ' . $mota);
                $this->say($tensach . ' có giá là: ' . substr($gia, 0, -3) . 'đ');
                $this->say('Hiện tại shop đang giảm giá đấy, chỉ còn ' . substr($giagiam, 0, -3) . 'đ');
            }

        // Thể loại có -> KH cần gt về 1 sách
        } elseif ($theloai != null) {
            $theloais = theloai::all();
            $theloais = $theloais ->where('id', 'like', "$theloai")
                ->first();
            $theloai = $theloais->tenloai;
            $sach = $sach->whereIn('id', $idsach) 
                ->where('noibat', 1)
                ->where('soluong', '>=', 1)
                ->where('trangthaikinhdoanh', 1)
                ->first();
            $tensach = $sach->tensach;
            $tacgia = $sach->tacgia;
            $mota = $sach->mota;
            $gia = $sach->gia;
            $giagiam = $sach->giakhuyenmai;
            $this->say('Bot sẽ gợi ý cho bạn một quyển sách thuộc thể loại ' . $theloai . ' của ' . $tacgia . '. ');
            $this->say($tensach . ' là top những quyển sách đang bán chạy của shop. '. $mota);
            $this->say($tensach . ' có giá là: ' . substr($gia, 0, -3) . 'đ');
            $this->say('Hiện tại shop đang giảm giá đấy, chỉ còn ' . substr($giagiam, 0, -3) . 'đ');

        // Thể loại không có, tác giả và tên sách có -> KH cần mua sách
        } elseif ($tacgia != null && $tensach != null) {
            $sach = $sach
                ->where('tensach', 'like', "%$tensach%")
                ->where('tacgia', 'like', "%$tacgia%")
                ->where('soluong', '>=', 1)
                ->where('trangthaikinhdoanh', 1)
                ->first();
            if (!$sach){
                $this->say('Bot không thấy shop có quyển sách nào liên quan đến mô tả của bạn. Tác giả của tên sách hình như sai rồi.');
            } else {
                $mota = $sach->mota;
                $gia = $sach->gia;
                $giagiam = $sach->giakhuyenmai;
                $this->say($tensach . ' là một quyển sách rất nổi tiếng của ' . $tacgia . '. ' . $mota);
                $this->say($tensach . ' có giá là: ' . substr($gia, 0, -3) . 'đ');
                $this->say('Hiện tại shop đang giảm giá đấy, chỉ còn ' . substr($giagiam, 0, -3) . 'đ');
            }

        // Chỉ biết tác giả -> KH muốn gợi ý sách nào đó
        } elseif ($tacgia != null) {
            $sach = $sach   
                ->where('tacgia', 'like', "%$tacgia%")
                ->where('soluong', '>=', 1)
                ->where('trangthaikinhdoanh', 1)
                ->first();
            $tensach = $sach->tensach;
            $mota = $sach->mota;
            $gia = $sach->gia;
            $giagiam = $sach->giakhuyenmai;
            $this->say('Bot sẽ gợi ý cho bạn một quyển sách của ' . $tacgia . '. ');
            $this->say($tensach . ' là một quyển sách khá hay và đã đạt được nhiều giải thưởng. '. $mota);
            $this->say($tensach . ' có giá là: ' . substr($gia, 0, -3) . 'đ');
            $this->say('Hiện tại shop đang giảm giá đấy, chỉ còn ' . substr($giagiam, 0, -3) . 'đ');

        // Chỉ biết tên sách -> KH muốn thông tin và mua sách đó
        } elseif ($tensach !=null) {
            $sach = $sach   
                ->where('tensach', 'like', "%$tensach%")
                ->where('soluong', '>=', 1)
                ->where('trangthaikinhdoanh', 1)
                ->first();
            $tacgia = $sach->tacgia;
            $mota = $sach->mota;
            $gia = $sach->gia;
            $giagiam = $sach->giakhuyenmai;
            $this->say($tensach . ' là một cuốn sách đang bán chạy của ' . $tacgia . '. ' . $mota);
            $this->say($tensach . ' có giá là: ' . substr($gia, 0, -3) . 'đ');
            $this->say('Hiện tại shop đang giảm giá đấy, chỉ còn ' . substr($giagiam, 0, -3) . 'đ');

        // Ko có bất cứ gì -> KH muốn gợi ý -> Gợi ý sách bán chạy nhất
        } else {
            $bestSelling = sach::limit(3) // sách bán chạy nhất
                ->where('noibat', 1)
                ->with('theloai')
                ->orderby('created_at', 'desc')
                ->get();

            $this->say('Bot sẽ gợi ý cho bạn 3 quyển sách đang là bán chạy (best selling) của shop.');
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

    public function sachhay()
    {
        $bestSelling = sach::limit(3) // sách bán chạy nhất
                ->where('noibat', 1)
                ->with('theloai')
                ->orderby('created_at', 'desc')
                ->get();

            $this->say('Bot sẽ gợi ý cho bạn 3 quyển sách đang là bán chạy (best selling) của shop.');
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
