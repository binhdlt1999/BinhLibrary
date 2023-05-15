<?php
namespace App\Http\Controllers;

use BotMan\BotMan\BotMan;
use Illuminate\Http\Request;
use BotMan\BotMan\Messages\Incoming\Answer;
use BotMan\BotMan\Messages\Outgoing\Question;
use BotMan\BotMan\Messages\Outgoing\Actions\Button;
use App\Models\kichban;
use Illuminate\Support\Str;
use Illuminate\Support\Collection;
use Phpml\Classification\SVC;
use Phpml\SupportVectorMachine\Kernel;
use Phpml\FeatureExtraction\TokenCountVectorizer;
use Phpml\Tokenization\WhitespaceTokenizer;
use Phpml\FeatureExtraction\TfIdfTransformer;

class BotmanController extends Controller
{
    /**
     * Place your BotMan logic here.
     */
    public function handle()
    {
        $botman = app('botman');
        $botman->hears('{messages}', function ($bot, $messages) {
            $actions = ['mua hang', 'mua hàng'];
            $tuvan = ['tu van','tư vấn'];
            if (in_array($messages, $actions)) {
                $bot->startConversation(new TuVanChonSach);
            } elseif(in_array($messages, $tuvan)) {
                $bot->startConversation(new tuvan);
            } else {
                $this->messages = $messages;
                $this->databaseChatbot($bot);
            }
        });

        $botman->listen();
    }

    public function databaseChatbot($bot)
    {
        $kichban = kichban::where('cauhoi', 'like', $this->messages)
                            ->where('trangthai', 1)
                            ->first();
        if (empty($kichban)) {
            $check_kichban = kichban::where('cauhoi', 'like', $this->messages)
                            ->get();
            if ($check_kichban->isEmpty()) {
                kichban::create([
                    'cauhoi' => $this->messages,
                    'trangthai' => 2
                ]);
            }
            //$bot->reply("Xin lỗi, tôi không hiểu ý bạn. Gõ \"mua hàng\" để tôi trợ giúp");
            $this->SVMChatbot($bot);

        } else {
            $bot->reply($kichban->traloi);
        }
    }

    public function SVMChatbot ($bot){

        //dữ liệu huấn luyện
        $samples = ['Tôi muốn biết sách bán chạy nhất của shop là gì?',//giới thiệu sách
            'Bạn có bán sách giáo khoa không?',
            'Tôi muốn tìm hiểu thêm về sách của Dan Brown, bạn có thể giới thiệu cho tôi không?',
            'Bạn có thể giới thiệu cho tôi một số cuốn sách mới nhất không?',
            'Tôi cần tìm sách về lịch sử của Việt Nam. Bạn có thể giới thiệu cho tôi một số tác phẩm không?',
            'Bạn có thể giới thiệu cho tôi các tác phẩm của Shakespeare không?',
            'Bạn có sách mới nhất nào về kinh doanh không?',
            'Giới thiệu về sách "Mắt biếc" của tác giả Nguyễn Nhật Ánh được xuất bản vào năm bao nhiêu?',
            'Bạn có thể giới thiệu cho tôi sách nổi bật nhất của năm?',
            'Tôi quan tâm đến sách văn học kinh điển, có gợi ý nào không?',
            'Có quyển sách nào giới thiệu về lịch sử nghệ thuật không?',
            'Tôi muốn mua một quyển sách về phiêu lưu.',
            'Tôi muốn tìm hiểu về các sách khoa học viễn tưởng, có đề xuất nào không?',
            'Sách nổi tiếng của nhà văn George Orwell là gì?',
            'Tác phẩm nào của Shakespeare nên đọc để hiểu văn học cổ điển?',
            'Tôi muốn biết sách nghệ thuật phát triển cá nhân?',
            'Tôi cần tìm một quyển sách hướng dẫn lập trình web',
            'Giới thiệu cho tôi những cuốn sách kinh điển của thế giới',
            'Có sách nào giới thiệu về triết học không?',
            'Tác phẩm nào của Jane Austen được coi là một trong những tiểu thuyết lãng mạn hay nhất?',
            'Bạn có thể giới thiệu cho tôi sách về khoa học không?',
            'Tôi quan tâm đến sách văn học nổi tiếng, bạn có thể giới thiệu cho tôi không?',
            'Tôi muốn tìm hiểu về sách của nhà văn Haruki Murakami, bạn có thể giới thiệu cho tôi không?',
            'Có cuốn sách nào nói về lịch sử thế giới hay không?',
            'Tôi muốn mua một quyển sách kinh doanh mới nhất, bạn có gợi ý gì không?',
            'Có sách nào giới thiệu về nghệ thuật viết văn không?',
            'Tôi quan tâm đến sách tự truyện, bạn có thể giới thiệu cho tôi một quyển hay không?',
            'Tôi muốn tìm sách về lịch sử Việt Nam, bạn có gợi ý gì không?',
            'Có sách nào giới thiệu về lập trình PHP không?',
            'Tôi quan tâm đến sách khoa học viễn tưởng, bạn có thể giới thiệu cho tôi một quyển hay không?',
            'Tôi quan tâm đến sách văn học cổ điển, có gợi ý nào không?',
            'Có sách nào giới thiệu về lịch sử thế giới không?',
            'Tác phẩm nổi tiếng nhất của William Shakespeare là gì?',
            'Tôi muốn đọc một quyển sách kinh doanh, có gợi ý nào không?',
            'Tác phẩm nào của Jane Austen được coi là kiệt tác?',
            'Có sách nào giới thiệu về triết học không?',
            'Tôi quan tâm đến sách về kỹ năng giao tiếp, có gợi ý nào không?',
            'Có sách nào giới thiệu về nghệ thuật hướng dẫn làm bánh không?',
            'Tôi muốn tìm sách về kỹ năng lãnh đạo, có gợi ý nào không?',
            'Có quyển sách nào giới thiệu về khoa học không gian không?',
                //--Giá sách
            'Tôi muốn mua cuốn sách "Mắt biếc" giá bao nhiêu?',
            'Có khuyến mãi gì cho sách "Thế giới và chúng ta" không?',
            'Có được giảm giá khi mua sách "Số đỏ" không?',
            'Tôi muốn tìm hiểu giá sách của bạn. Bạn có thể cho tôi biết giá sách mới nhất được không?',
            'Sách bán chạy nhất của tháng này giá bao nhiêu?',
            'Giá sách giáo khoa lớp 10 là bao nhiêu?',
            'Bạn có chương trình khuyến mãi nào cho các loại sách không?',
            'Cho tôi biết giá sách "Dấu ấn pháp sư" được không?',
            'Tôi muốn tìm hiểu về giá sách khoa học viễn tưởng',
            'Sách nổi bật nhất của tháng này giá bao nhiêu?',
            'Bạn có thể cho biết giá sách "Harry Potter" là bao nhiêu không?',
            'Tôi muốn mua cuốn sách "Ngày xưa có một chuyện tình" thì với giá bao nhiêu?',
            'Giá sách "Dế Mèn phiêu lưu ký" là bao nhiêu?',
            'Tôi muốn tìm sách kinh doanh giá rẻ, cho tôi một số gợi ý về giá ở cửa hàng?',
            'Cho em hỏi giá của cuốn "Harry Potter và hòn đá phù thủy" với ạ?',
            'Cho mình xin thông tin giá sách Nhà Giả Kim với ạ?',
            'Giá sách "Đắc nhân tâm" hiện tại là bao nhiêu?',
            'Giá sách "Số đỏ" là bao nhiêu?',
            'Tôi muốn mua cuốn sách "Sapiens" với giá bao nhiêu?',
            'Giá sách văn học cổ điển như "Anna Karenina" là bao nhiêu?',
            'Giá sách tiếng Anh khá đắt phải không?',
            'Tôi quan tâm đến sách giáo trình, giá có cao không?',
            'Giá sách "Tôi đã bán đi cả thế giới" là bao nhiêu?',
            'Cuốn sách này giá phải chăng không?',
            'Tôi muốn mua cuốn sách "Thinking, Fast and Slow" với giá bao nhiêu?',
            'Giá sách kỹ năng giao tiếp như "How to Win Friends and Influence People" là bao nhiêu?',
            'Giá sách hướng dẫn nấu ăn có cao không?',
            'Sách giáo trình đại học thường có giá cao không?',
            'Giá sách "Số đỏ" hiện tại là bao nhiêu?',
            'Tôi quan tâm đến sách kỹ năng sống, giá sách khá đắt phải không?',
            'Quyển sách này có giá bao nhiêu?',
            'Giá sách mới nhất là bao nhiêu?',
            'Tôi muốn biết giá sách về lập trình Python',
            'Sách về kinh doanh có giá như thế nào?',
            'Giá sách nổi bật nhất trong tháng này là bao nhiêu?',
            'Tôi quan tâm đến giá sách văn học, có thông tin nào cụ thể về giá không?',
            'Sách điện tử có giá khác so với sách in không?',
            'Tôi cần biết giá sách giảm giá hiện tại',
            'Quyển sách bán chạy nhất có giá như thế nào?',
            'Giá sách nổi tiếng thường cao hay thấp?',
                //--Vận chuyển
            'Phí vận chuyển của cuốn sách "Tôi tài giỏi - bạn cũng thế" là bao nhiêu?',
            'Tôi muốn mua sách và giao hàng đến địa chỉ của tôi. Bạn có thể cho tôi biết chi phí vận chuyển được không?',
            'Tôi muốn biết thời gian giao hàng dự kiến của đơn hàng của tôi.',
            'Thời gian giao hàng của đơn hàng này là bao lâu?',
            'Bạn có miễn phí vận chuyển không?',
            'Thời gian giao hàng của bạn là bao lâu?',
            'Bạn có vận chuyển quốc tế không?',
            'Sách được giao bằng đường nào?',
            'Khi nào tôi có thể nhận được sách đã đặt?',
            'Bạn có thể gửi hàng đến địa chỉ khác không?',
            'Tôi muốn biết về dịch vụ giao hàng của bạn',
            'Có hỗ trợ vận chuyển quốc tế không?',
            'Thời gian giao hàng dự kiến là bao lâu?',
            'Có phí vận chuyển không?',
            'Vận chuyển miễn phí áp dụng cho đơn hàng nào?',
            'Tôi muốn biết về chính sách vận chuyển của bạn',
            'Giao hàng nhanh được hỗ trợ không?',
            'Tôi muốn biết về địa chỉ giao hàng',
            'Có dịch vụ giao hàng trong ngày không?',
            'Tôi muốn biết về trạng thái vận chuyển của đơn hàng',
            'Vận chuyển quốc tế có các tùy chọn nào?',
            'Có hỗ trợ vận chuyển COD không?',
            'Giao hàng đến địa chỉ xa có phụ phí không?',
            'Tôi cần biết về đối tác vận chuyển của bạn',
            'Có dịch vụ giao hàng trong vùng đồng quê không?',
            'Tôi muốn biết về thủ tục trả hàng',
            'Có hỗ trợ vận chuyển nhanh chóng vào cuối tuần không?',
            'Vận chuyển quốc tế có thời gian giao hàng dài không?',
            'Tôi muốn biết về chính sách trả hàng của bạn',
            'Có hỗ trợ vận chuyển đặt biệt cho sản phẩm không?',
            'Vận chuyển sách ra ngoại thành có phí không?',
            'Tôi muốn biết thời gian giao hàng ước tính',
            'Có dịch vụ vận chuyển quốc tế không?',
            'Tôi ở tỉnh lẻ, có thể giao hàng đến đó không?',
            'Chi phí vận chuyển sách trong nội thành là bao nhiêu?',
            'Có hỗ trợ vận chuyển nhanh chóng không?',
            'Tôi muốn biết về chính sách đổi trả hàng',
            'Sách được vận chuyển bằng đơn vị vận chuyển nào?',
            'Có phí vận chuyển riêng không?',
            'Tôi muốn biết thời gian giao hàng dự kiến',
                //--Thanh toán
            'Tôi muốn thanh toán bằng thẻ ngân hàng thì có được không?',
            'Tôi muốn biết phương thức thanh toán bạn hỗ trợ.',
            'Tôi muốn mua sách bằng thẻ tín dụng. Bạn có chấp nhận thanh toán bằng thẻ tín dụng không?',
            'Bạn có phương thức thanh toán nào khác không?',
            'Phương thức thanh toán nào bạn chấp nhận?',
            'Tôi có thể thanh toán bằng thẻ tín dụng không?',
            'Bạn có hỗ trợ thanh toán COD không?',
            'Bạn có chấp nhận thanh toán bằng Paypal không?',
            'Bạn có những phương thức thanh toán nào?',
            'Tôi muốn biết thông tin về phương thức thanh toán.',
            'Phương thức thanh toán nào được chấp nhận?',
            'Tôi có thể thanh toán bằng thẻ tín dụng không?',
            'Có hỗ trợ thanh toán qua ví điện tử không?',
            'Có phí giao dịch khi thanh toán không?',
            'Tôi muốn biết chi tiết về quy trình thanh toán',
            'Thanh toán online an toàn không?',
            'Có đăng ký tài khoản để thanh toán không?',
            'Tôi muốn biết cách thanh toán khi mua hàng trực tuyến',
            'Có hỗ trợ thanh toán trả góp không?',
            'Có chấp nhận thanh toán khi nhận hàng không?',
            'Phương thức thanh toán nhanh nhất là gì?',
            'Tôi muốn biết về chính sách hoàn tiền',
            'Có hỗ trợ thanh toán qua Paypal không?',
            'Thanh toán bằng thẻ quốc tế được không?',
            'Tôi muốn biết về chính sách thanh toán hằng tháng',
            'Có chấp nhận thanh toán trực tiếp tại cửa hàng không?',
            'Phí thanh toán qua Internet Banking là bao nhiêu?',
            'Tôi muốn biết thời gian xử lý thanh toán',
            'Có chế độ thanh toán linh hoạt không?',
            'Có hỗ trợ thanh toán qua ví điện tử nội địa không?',
            'Phương thức thanh toán nào được sử dụng ở shop của bạn?',
            'Có hỗ trợ thanh toán online không?',
            'Tôi muốn biết về cách thức thanh toán',
            'Có đặt cọc khi thanh toán không?',
            'Tôi muốn biết về hình thức thanh toán khi nhận hàng',
            'Thời gian xác nhận thanh toán là bao lâu?',
            'Có hỗ trợ thanh toán trả góp không?',
            'Có chính sách thanh toán linh hoạt không?',
            'Tôi muốn biết về phương thức thanh toán trực tuyến',
            'Có giảm giá khi thanh toán bằng thẻ không?',
                //-- Khác
            'Có hỗ trợ mua sách trả góp không?',
            'Tôi muốn biết về chính sách đặt cọc',
            'Tôi muốn hỏi về chương trình khuyến mãi của bạn. Bạn có chương trình khuyến mãi nào đang diễn ra không?',
            'Bạn có địa chỉ cửa hàng gần nhất của bạn không?',
            'Bạn có bán quà tặng kèm không?',
            'Tôi có thể yêu cầu gói quà tặng không?',
            'Tôi có thể yêu cầu in tên lên sách không?',
            'Bạn có thể tìm kiếm sách theo tên tác giả được không?',
            'Tôi có thể đặt mua sách trên trang web của bạn được không?',
            'Tôi muốn biết nếu tôi không hài lòng với sách tôi đã mua thì tôi có thể đổi sách hoặc được hoàn tiền không?',
            'Tại sao website của bạn không hoạt động?',
            'Bạn có chương trình khách hàng thân thiết không?',
            'Tôi muốn biết về quy định bảo hành',
            'Có chính sách đổi trả hàng không?',
            'Làm thế nào để liên hệ với bộ phận chăm sóc khách hàng?',
            'Tôi cần hỗ trợ kỹ thuật, làm thế nào để liên hệ?',
            'Có chương trình giảm giá đặc biệt cho sinh viên không?',
            'Tôi muốn biết về quy trình đặt hàng',
            'Có hỗ trợ vận chuyển quốc tế không?',
            'Có hỗ trợ gói quà tặng không?',
            'Tôi muốn xem các bài viết trên blog của bạn',
            'Có chương trình khuyến mãi vào dịp lễ không?',
            'Tôi muốn hủy đơn hàng, làm thế nào?',
            'Có hỗ trợ dịch vụ khách hàng 24/7 không?',
            'Tôi muốn biết về các chính sách bảo mật thông tin',
            'Có chính sách giữ hàng không?',
            'Tôi muốn đăng ký nhận tin tức và khuyến mãi',
            'Có cung cấp dịch vụ tư vấn sản phẩm không?',
            'Tôi muốn biết về quy trình trả hàng',
            'Có chương trình giới thiệu bạn bè không?',
            'Tôi muốn biết về điều khoản và điều kiện mua sách',
            'Có chương trình tích điểm không?',
            'Tôi muốn biết về quy trình đăng ký tài khoản',
            'Có hỗ trợ tư vấn sách phù hợp không?',
            'Tôi muốn biết về quy trình đặt hàng',
            'Có chính sách bảo mật thông tin không?',
            'Có nhận đặt sách theo yêu cầu không?',
            'Tôi muốn biết về địa chỉ cửa hàng gần nhất',
            'Có hỗ trợ mua sách trực tuyến không?',
            'Có đánh giá sách từ người dùng không?',
        ];
        $labels = ['Giới thiệu sách', 'Giới thiệu sách', 'Giới thiệu sách', 'Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách', 'Giới thiệu sách', 'Giới thiệu sách', 'Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách', 'Giới thiệu sách', 'Giới thiệu sách', 'Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách', 'Giới thiệu sách', 'Giới thiệu sách', 'Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách',
            'Giá sách', 'Giá sách', 'Giá sách', 'Giá sách', 'Giá sách','Giá sách', 'Giá sách', 'Giá sách', 'Giá sách','Giá sách','Giá sách', 'Giá sách', 'Giá sách', 'Giá sách', 'Giá sách','Giá sách', 'Giá sách', 'Giá sách', 'Giá sách','Giá sách','Giá sách', 'Giá sách', 'Giá sách', 'Giá sách', 'Giá sách','Giá sách', 'Giá sách', 'Giá sách', 'Giá sách','Giá sách','Giá sách', 'Giá sách', 'Giá sách', 'Giá sách', 'Giá sách','Giá sách', 'Giá sách', 'Giá sách', 'Giá sách','Giá sách',
            'Vận chuyển', 'Vận chuyển', 'Vận chuyển','Vận chuyển','Vận chuyển','Vận chuyển', 'Vận chuyển', 'Vận chuyển','Vận chuyển','Vận chuyển','Vận chuyển', 'Vận chuyển', 'Vận chuyển','Vận chuyển','Vận chuyển','Vận chuyển', 'Vận chuyển', 'Vận chuyển','Vận chuyển','Vận chuyển','Vận chuyển', 'Vận chuyển', 'Vận chuyển','Vận chuyển','Vận chuyển','Vận chuyển', 'Vận chuyển', 'Vận chuyển','Vận chuyển','Vận chuyển','Vận chuyển', 'Vận chuyển', 'Vận chuyển','Vận chuyển','Vận chuyển','Vận chuyển', 'Vận chuyển', 'Vận chuyển','Vận chuyển','Vận chuyển',
            'Thanh toán' ,'Thanh toán', 'Thanh toán', 'Thanh toán', 'Thanh toán','Thanh toán' ,'Thanh toán', 'Thanh toán', 'Thanh toán', 'Thanh toán','Thanh toán' ,'Thanh toán', 'Thanh toán', 'Thanh toán', 'Thanh toán','Thanh toán' ,'Thanh toán', 'Thanh toán', 'Thanh toán', 'Thanh toán','Thanh toán' ,'Thanh toán', 'Thanh toán', 'Thanh toán', 'Thanh toán','Thanh toán' ,'Thanh toán', 'Thanh toán', 'Thanh toán', 'Thanh toán','Thanh toán' ,'Thanh toán', 'Thanh toán', 'Thanh toán', 'Thanh toán','Thanh toán' ,'Thanh toán', 'Thanh toán', 'Thanh toán', 'Thanh toán',
            'Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác'
        ];

        //hàm để tiền xử lý dữ liệu
        function preprocessQuestion($question)
        {
            // Loại bỏ các ký tự đặc biệt không cần thiết, dấu cách thừa và ngoặc kép
            $question = preg_replace('/[^\p{L}\p{N}\s]/u', '', $question);// Loại bỏ các ký tự đặc biệt
            $question = preg_replace('/\s+/', ' ', $question); //Loại bỏ dấu cách thừa
            $question = trim($question);//loại bỏ các khoảng trắng không cần thiết ở đầu và cuối chuỗi

            $stopwords = ['và', 'là', 'của', 'cho', 'không', 'có', 'trong', 'từ', 'qua', 'tại', 'được', 'thì']; // Các từ dừng
            $question = mb_strtolower($question); // Chuyển về chữ thường
            $question = str_replace('"', '', $question); // Xóa dấu ngoặc kép
            $question = removeAccents($question); // Chuyển đổi chữ có dấu thành chữ không dấu

            $tokens = explode(' ', $question); // Tách từ theo khoảng trắng
            $filteredTokens = array_diff($tokens, $stopwords); // Loại bỏ từ dừng
            return implode(' ', $filteredTokens); // Trả về câu hỏi đã được tiền xử lý
        }

        //Hàm chuyển đổi chữ có dấu thành ko dấu
        function removeAccents($str)
        {
            $str = str_replace(
                ['á', 'à', 'ả', 'ã', 'ạ', 'â', 'ấ', 'ầ', 'ẩ', 'ẫ', 'ậ', 'ă', 'ắ', 'ằ', 'ẳ', 'ẵ', 'ặ'],
                'a',
                $str
            );
            $str = str_replace(
                ['é', 'è', 'ẻ', 'ẽ', 'ẹ', 'ê', 'ế', 'ề', 'ể', 'ễ', 'ệ'],
                'e',
                $str
            );
            $str = str_replace(
                ['í', 'ì', 'ỉ', 'ĩ', 'ị'],
                'i',
                $str
            );
            $str = str_replace(
                ['ó', 'ò', 'ỏ', 'õ', 'ọ', 'ô', 'ố', 'ồ', 'ổ', 'ỗ', 'ộ', 'ơ', 'ớ', 'ờ', 'ở', 'ỡ', 'ợ'],
                'o',
                $str
            );
            $str = str_replace(
                ['ú', 'ù', 'ủ', 'ũ', 'ụ', 'ư', 'ứ', 'ừ', 'ử', 'ữ', 'ự'],
                'u',
                $str
            );
            $str = str_replace(
                ['ý', 'ỳ', 'ỷ', 'ỹ', 'ỵ'],
                'y',
                $str
            );
            $str = str_replace(
                ['đ'],
                'd',
                $str
            );

            return $str;
        }

        //Trích xuất đặc trưng với mô hình BoW
        $preprocessedSamples = [];
        
        //Tiền xử lý trước
        foreach ($samples as $question) {
            $preprocessedQuestion = preprocessQuestion($question);
            $preprocessedSamples[] = $preprocessedQuestion;
        }
        
        $vectorizer = new TokenCountVectorizer(new WhitespaceTokenizer()); // Tạo đối tượng vectorizer
        $vectorizer->fit($preprocessedSamples); // Huấn luyện vectorizer với dữ liệu đã được tiền xử lý
        $vectorizer->transform($preprocessedSamples); // Trích xuất đặc trưng từ văn bản
        
        //thuật toán TF.IDF giúp số hóa văn bản chính xác
        $tfIdfTransformer = new TfIdfTransformer($preprocessedSamples);
        $tfIdfTransformer->fit($preprocessedSamples);
        $tfIdfTransformer->transform($preprocessedSamples);

        //hàm để huấn luyện mô hình SVM
        $classifier = new SVC(Kernel::LINEAR, $cost = 1000);
        // $classifier = new SVC(Kernel::SIGMOID, $cost = 1000, $gamma = 0.0005);
        $classifier->train($preprocessedSamples, $labels);

        //hàm để phân loại câu hỏi
        function classifyQuestion($question, $vectorizer, $tfIdfTransformer, $classifier) {
            $preprocessedInputQuestion = [preprocessQuestion($question)];
            // Chuyển đổi câu hỏi thành đặc trưng văn bản
            $vectorizer->transform($preprocessedInputQuestion); 
            $tfIdfTransformer->transform($preprocessedInputQuestion);
            $predictedLabel = $classifier->predict($preprocessedInputQuestion);
            return $predictedLabel;
        }   
        
        $question = $bot->getMessage()->getText();
        
        // Phân loại câu hỏi
        $predictedLabel = classifyQuestion($question, $vectorizer, $tfIdfTransformer, $classifier);
        
        // Hàm trả về phản hồi
        function respondToUser($question, $category)
        {
            switch ($category) {
                case 'Giá sách':
                    $response = "Giá của sách trong shop thường dao động từ 20.000đ đến 500.000đ. 
                    Hầu hết các sách của tôi đều có các đợt giảm giá theo thời gian nhất định và luân phiên nhau. 
                    Ngoài ra có rất nhiều Voucher cho khách hàng thành viên đổi khi mua nhiều sách.
                    Để biết thêm giá về các quyển sách mà bạn quan tâm, bạn vui lòng tìm kiếm nó trên shop hoặc gõ 'tư vấn' để bot trợ giúp cụ thể cho nhé!";
                    break;
                case 'Vận chuyển':
                    $response = "Chúng tôi hiện chỉ cung cung cấp dịch vụ vận chuyển tiêu chuẩn trong nội thành TP.HCM với giá rất rẻ. 
                    Thời gian nhận sách thường là từ 3 đến 5 ngày làm việc. Trong tương lai, shop sẽ ráng cập nhật thêm phương thức vận chuyển cho bạn nha!! 
                    Ngoài ra sách không thể hoàn trả lại khi đã kiểm kê và nhận hàng.
                    Bạn có thể theo dõi trạng thái vận chuyển trong List-Order của bạn và xem chi tiết giá trong phần thanh toán của bạn đấy.";
                    break;
                case 'Thanh toán':
                    $response = "Để thanh toán cho sách, chúng tôi cung cấp một số phương thức thanh toán khác nhau. 
                    Bạn có thể sử dụng thẻ tín dụng hoặc thanh toán khi nhận hàng. 
                    Đối với thanh toán bằng thẻ tín dụng, chúng tôi chấp nhận các loại thẻ tín dụng như Visa, MasterCard và American Express. 
                    Đối với thanh toán khi nhận hàng (COD), xin lưu ý rằng COD có thể áp dụng một số phí dịch vụ nhất định.
                    Nếu thắc mắc có bất cứ thắc mắc nào thêm, vui lòng liên hệ chuyên viên qua số điện thoại: 081.6666.666 để được hỗ trợ trực tiếp nhé!";
                    break;
                case 'Khác':
                    $response = "Xin lỗi, tôi không thể giải đáp câu hỏi này. Bạn vui lòng liên hệ chuyên viên qua số điện thoại: 081.6666.666 để được hỗ trợ trực tiếp nhé!";
                    break;
                default:
                    $response = "Xin lỗi, tôi không hiểu câu hỏi của bạn. Bạn có thể thử lại với một câu hỏi khác.";
                    break;
            }
        
            // Trả về phản hồi cho người dùng
            return $response;
        }

        if ($predictedLabel[0] == 'Giới thiệu sách') {
            $bot->reply("Bot cần biết nhiều thông tin cụ thể hơn, bạn vui lòng điền thông tin giùm bot nhé!!");
            $bot->startConversation(new tuvan);
        // } elseif ($predictedLabel[0] == 'Giá sách')
        // {
        //     $bot->reply("Bot cần biết nhiều thông tin cụ thể hơn, bạn vui lòng điền thông tin giùm bot nhé!!");
        //     $bot->startConversation(new tuvan1);
        }else {
            $response = respondToUser($question, $predictedLabel[0]);
            $bot->reply("$response");
        }

        //tập kiểm thử
        // $testSamples = [
        //     'Tôi muốn biết sách bán chạy nhất tháng này',
        //     'Tôi muốn biết sách phổ biến nhất trong thể loại tiểu thuyết',
        //     'Giới thiệu về sách của tác giả Tố Hữu',
        //     'Gợi ý cho tôi sách nào hay hay',
        //     'Có quyển sách nào giúp tôi giỏi tiếng đức không?',
        //     'Tôi cần tìm một quyển sách dạy nấu ăn?',
        //     'Giá của sách Tư Duy là bao nhiêu?',
        //     'Tôi đang quan tâm đến sách trinh thám, không biết giá cả cua shop bạn là bao nhiêu?',
        //     'Tư vấn cho tôi giá sách rẻ nhất',
        //     'Tôi muốn biết giá vài quyển sách',
        // ];
        
        // $testLabels = [
        //     'Giới thiệu sách',
        //     'Giới thiệu sách',
        //     'Giới thiệu sách',
        //     'Giới thiệu sách',
        //     'Giới thiệu sách',
        //     'Giá sách',
        //     'Giá sách',
        //     'Giá sách',
        //     'Giá sách',
        //     'Giá sách',
        // ];

        }
    
}
