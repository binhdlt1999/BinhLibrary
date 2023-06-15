<?php
namespace App\Http\Controllers;

use BotMan\BotMan\BotMan;
use Illuminate\Http\Request;
use BotMan\BotMan\Messages\Incoming\Answer;
use BotMan\BotMan\Messages\Outgoing\Question;
use BotMan\BotMan\Messages\Outgoing\Actions\Button;
use BotMan\BotMan\Messages\Conversations\Conversation;
use App\Models\kichban;
use App\Models\chitietloaisach;
use App\Models\sach;
use App\Models\theloai;
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

        //------------------------------------------------------------------------------
        //hàm tạm thời trả về sách khi đúng tên sách ngay
        $hearname = sach::where('tensach', 'like', $this->messages)
                            ->where('soluong', '>=', 1)
                            ->where('trangthaikinhdoanh', 1)
                            ->first();
        if($hearname != null) {
            $tensach = $hearname->tensach;
            $tacgia = $hearname->tacgia;
            $mota = $hearname->mota;
            $gia = $hearname->gia;
            $giagiam = $hearname->giakhuyenmai;
            $bot->reply($tensach . ' là một cuốn sách đang bán chạy của ' . $tacgia . '. ' . $mota);
            $bot->reply($tensach . ' có giá là: ' . substr($gia, 0, -3) . 'đ');
            $bot->reply('Hiện tại shop đang giảm giá đấy, chỉ còn ' . substr($giagiam, 0, -3) . 'đ');
        }
        //------------------------------------------------------------------------------

        elseif (empty($kichban)) {
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
        $samples = ['Bạn có thể giới thiệu cho tôi quyển sách bán chạy nhất không?', //sach hay
            'Có thể chỉ cho tôi quyển sách hot nhất hiện nay được không?',
            'Xin bạn giới thiệu quyển sách được đánh giá cao nhất trong cửa hàng?',
            'Tôi muốn biết về quyển sách phổ biến nhất, bạn có thể giới thiệu không?',
            'Có thể nêu ra quyển sách nổi bật nhất mà tôi nên đọc không?',
            'Bạn có thể giới thiệu cho tôi 3 quyển sách bán chạy nhất của cửa hàng không?',
            'Những quyển sách nào được đánh giá cao nhất bởi khách hàng của cửa hàng?',
            'Tôi muốn mua những quyển sách bán chạy nhất của cửa hàng, bạn có thể giới thiệu cho tôi được không?',
            'Cửa hàng của bạn có những quyển sách nào được nhiều người quan tâm nhất không?',
            'Bạn có thể giới thiệu cho tôi các quyển sách bán chạy nhất của cửa hàng trong tháng vừa qua không?',
            'Tôi đang tìm kiếm các quyển sách bán chạy nhất của cửa hàng trong năm nay, bạn có thể giới thiệu cho tôi được không?',
            'Có bao nhiêu quyển sách bán chạy nhất của cửa hàng được đánh giá là rất tốt?',
            'Tôi muốn biết các quyển sách nổi bật nhất của cửa hàng, bạn có thể giới thiệu cho tôi được không?',
            'Những quyển sách nào được khách hàng đánh giá cao nhất trong tháng trước?',
            'Tôi muốn tìm các quyển sách mới nhất và được đánh giá cao nhất của cửa hàng, bạn có thể giới thiệu cho tôi được không?',
            'Bạn có thể giới thiệu cho tôi những quyển sách hay và nổi bật nhất hiện nay?',
            'Tôi muốn biết những quyển sách được đánh giá cao và rất được khuyến nghị, bạn có thể gợi ý cho tôi được không?',
            'Có những quyển sách nào đang rất hot và được người đọc yêu thích nhiều nhất?',
            'Tôi cần một danh sách các quyển sách nổi bật và đáng đọc, bạn có thể tư vấn cho tôi được không?',
            'Bạn có những quyển sách được coi là "must-read" mà bạn muốn giới thiệu cho tôi?',
            'Tôi muốn tìm những quyển sách nổi bật và có nội dung sâu sắc, liệu bạn có thể giúp tôi tìm được không?',
            'Bạn có những quyển sách mà bạn tự đánh giá là đáng đọc và thú vị không?',
            'Tôi quan tâm đến những quyển sách mà mọi người đều đánh giá cao, bạn có thể giới thiệu cho tôi được không?',
            'Bạn có danh sách những quyển sách được đánh giá là "best-seller" hiện nay không?',
            'Bạn có những quyển sách mà bạn cho là đáng đọc và không thể bỏ qua không?',
            'Tôi đang tìm kiếm những quyển sách nổi bật và ảnh hưởng, liệu bạn có thể giúp tôi tìm được không?',
            'Bạn có thể giới thiệu cho tôi những quyển sách hay mà bạn đã đọc và ấn tượng không?',
            'Tôi quan tâm đến những quyển sách nổi bật nhất .',
            'Bạn có danh sách những quyển sách được xem là "kỳ quan" của thế giới sách không?',
            'Tôi đang quan tâm đến những quyển sách hay hay .',
            'Các quyển sách bán chạy nhất hiện nay là gì?',
            'Bạn có thể chỉ cho tôi các quyển sách bán chạy nhất không?',
            'Những quyển sách hot nhất hiện tại là gì?',
            'Tôi muốn biết về các quyển sách nổi tiếng nhất trong cửa hàng',
            'Có những quyển sách nổi bật nhất mà tôi nên đọc là gì?',
            'Bạn có thể gợi ý cho tôi các quyển sách bán chạy nhất không?',
            'Cho tôi biết về các quyển sách hot nhất hiện nay mà tôi nên đọc?',
            'Tôi quan tâm đến các quyển sách đang được ưa chuộng nhất, bạn có thể giới thiệu cho tôi không?',
            'Có những quyển sách nổi tiếng mà tôi nên tìm hiểu là gì?',
            'Tôi muốn mua những quyển sách hot nhất, bạn có thể gợi ý cho tôi không?',

            //sách văn học
            'Bạn có sách văn học nổi tiếng của nhà văn Ernest Hemingway không?',
            'Giới thiệu cho tôi vài sách về văn học',
            'Bạn có sách văn học kỹ năng sống và phát triển bản thân không?',
            'Tôi đang quan tâm đến sách văn học của nhà văn Haruki Murakami, có sách nào giới thiệu không?',
            'Bạn có sách văn học viễn tưởng và khoa học không?',
            'Bạn có sách văn học tâm linh và triết lý không?',
            'Bạn có sách văn học hiện đại và nhạy cảm xã hội không?',
            'Tôi đang quan tâm đến sách văn học của nhà văn Gabriel Garcia Marquez, có sách nào giới thiệu không?',
            'Bạn có sách văn học lãng mạn và tình yêu không?',
            'Tôi muốn đọc một cuốn tiểu thuyết văn học kịch tính và ly kỳ, có gợi ý nào không?',
            'Bạn có sách văn học trinh thám và hình sự không?',
            'Tôi đang quan tâm đến sách văn học của nhà văn Jane Austen, có sách nào giới thiệu không?',
            'Bạn có sách văn học phiêu lưu và khám phá không?',
            'Tôi muốn đọc một cuốn tiểu thuyết văn học, có gợi ý nào không?',
            'Bạn có sách văn học hài hước và giả tưởng không?',
            'Tôi đang quan tâm đến sách văn học của nhà văn Fyodor Dostoevsky, có sách nào giới thiệu không?',
            'Bạn có sách văn học kinh dị và ma quái không?',
            'Tôi muốn đọc một tuyển tập truyện tranh văn học, có sách nào được đánh giá cao không?',
            'Bạn có sách văn học gia đình và cuộc sống hàng ngày không?',
            'Tôi đang quan tâm đến sách văn học của nhà văn George Orwell, có sách nào giới thiệu không?',
            'Bạn có sách văn học kinh điển của William Shakespeare không?',
            'Bạn có sách văn học thần thoại và huyền bí không?',
            'Bạn có sách văn học đương đại và chính trị không?',
            'Tôi đang quan tâm đến sách văn học của nhà văn J.R.R. Tolkien, có sách nào giới thiệu không?',
            'Bạn có sách văn học tình cảm và gia đình không?',
            'Bạn có sách văn học truyện cười và hài hước không?',
            'Bạn có sách văn học kỹ năng lãnh đạo và quản lý không?',
            'Tôi đang quan tâm đến sách văn học của nhà văn Leo Tolstoy, có sách nào giới thiệu không?',
            'Bạn có sách văn học tình dục và quan hệ không?',
            'Tôi đang quan tâm đến sách văn học của nhà văn Hermann Hesse, có sách nào giới thiệu không?',
            'Có những tác phẩm văn học kinh điển mà bạn biết không?',
            'Có những quyển sách văn học nổi bật mà bạn đề xuất không?',
            'Bạn có thể giới thiệu cho tôi một số quyển sách văn học hay không?',
            'Những tác phẩm văn học nổi tiếng mà tôi nên đọc là gì?',
            'Tôi quan tâm đến thể loại sách văn học, bạn có thể gợi ý cho tôi không?',
            'Có những cuốn sách văn học mới nhất mà tôi nên tham khảo không?',
            'Tôi đang tìm kiếm những quyển sách văn học, bạn có thể chỉ cho tôi không?',
            'Có những tác phẩm nổi tiếng trong lĩnh vực văn học mà bạn biết không?',
            'Bạn có thể giới thiệu cho tôi 3 quyển sách văn học phổ biến nhất không?',
            'Tôi muốn tìm hiểu về sách văn học, có gợi ý nào cho tôi không?',

            //sách kinh tế
            'Bạn có những quyển sách kinh tế nào đang hot hiện nay?',
            'Tôi muốn tìm sách kinh tế về khởi nghiệp, bạn có gợi ý nào?',
            'Quyển sách kinh tế nào giúp tôi hiểu rõ hơn về quản lý tài chính cá nhân?',
            'Tôi đang tìm sách kinh tế về đầu tư chứng khoán, bạn có gợi ý gì không?',
            'Bạn có những quyển sách kinh tế nào về phân tích thị trường và dự báo xu hướng?',
            'Tôi cần tìm sách kinh tế về quản lý dự án, có gợi ý gì cho tôi?',
            'Bạn có quyển sách kinh tế nào nói về bí quyết thành công trong kinh doanh không?',
            'Tôi muốn đọc sách kinh tế về quản lý nhân sự, bạn có sách nào giới thiệu?',
            'Bạn có quyển sách kinh tế nào nói về tư duy kinh doanh sáng tạo không?',
            'Tôi cần tìm sách kinh tế về chiến lược kinh doanh, có gợi ý nào không?',
            'Bạn có những quyển sách kinh tế nổi tiếng nên đọc không?',
            'Tôi muốn tìm sách kinh tế về quản trị sản phẩm, có sách nào phù hợp không?',
            'Bạn có quyển sách kinh tế nào giải thích về các khái niệm kinh tế cơ bản không?',
            'Giới thiệu cho tôi vài sách về kinh tế',
            'Bạn có sách kinh tế nào nói về quy trình lập kế hoạch kinh doanh không?',
            'Tôi cần tìm sách kinh tế về phân tích tài chính, bạn có gợi ý gì không?',
            'Bạn có quyển sách kinh tế nào giới thiệu về kinh tế học không?',
            'Tôi muốn đọc sách kinh tế về quản lý chuỗi cung ứng, có sách nào phù hợp không?',
            'Bạn có sách kinh tế nào giải thích về thị trường tài chính và ngân hàng không?',
            'Tôi đang quan tâm đến sách kinh tế về bất động sản, có sách nào nên đọc không?',
            'Bạn có sách kinh tế nào nói về quản lý rủi ro và phân tích rủi ro không?',
            'Tôi muốn tìm sách kinh tế về kỹ năng đàm phán và giao dịch, bạn có gợi ý nào không?',
            'Bạn có quyển sách kinh tế nào giải thích về kinh tế học ứng dụng không?',
            'Tôi cần tìm sách kinh tế về quản lý chiến lược quốc tế, có sách nào phù hợp không?',
            'Bạn có sách kinh tế nào giới thiệu về thương mại quốc tế và hội nhập kinh tế không?',
            'Tôi đang quan tâm đến sách kinh tế về phân tích dữ liệu và khai thác thông tin, có gợi ý nào không?',
            'Bạn có quyển sách kinh tế nào giải thích về kinh doanh trực tuyến và thương mại điện tử không?',
            'Tôi muốn đọc sách kinh tế về quản lý chất lượng, có sách nào giới thiệu không?',
            'Bạn có sách kinh tế nào nói về quản lý cung ứng và logistics không?',
            'Tôi cần tìm sách kinh tế về quản lý đổi mới và sáng tạo, có gợi ý nào không?',
            'Có những quyển sách về kinh tế mà bạn đề xuất không?',
            'Bạn có thể giới thiệu cho tôi một số quyển sách kinh tế hay không?',
            'Những quyển sách kinh tế nổi tiếng mà tôi nên đọc là gì?',
            'Tôi quan tâm đến thể loại sách kinh tế, bạn có thể gợi ý cho tôi không?',
            'Có những cuốn sách kinh tế mới nhất mà tôi nên tham khảo không?',
            'Tôi đang tìm kiếm những quyển sách về kinh tế, bạn có thể chỉ cho tôi không?',
            'Có những tác phẩm nổi tiếng trong lĩnh vực kinh tế mà bạn biết không?',
            'Bạn có thể giới thiệu cho tôi 3 quyển sách kinh tế phổ biến nhất không?',
            'Tôi muốn tìm hiểu về sách kinh tế, có gợi ý nào cho tôi không?',
            'Những quyển sách kinh tế giúp hiểu về quản lý tài chính là gì?',


            //sách tâm lý
            'Bạn có thể giới thiệu cho tôi những quyển sách tâm lý phổ biến và hữu ích nhất hiện nay?',
            'Tôi muốn tìm những quyển sách tâm lý giúp nâng cao hiểu biết về bản thân và phát triển tâm lý, bạn có thể gợi ý cho tôi được không?',
            'Bạn có danh sách những quyển sách tâm lý mà bạn đánh giá là cung cấp kiến thức sâu và thực tiễn không?',
            'Tôi đang quan tâm đến những quyển sách tâm lý nổi tiếng và có tầm ảnh hưởng, liệu bạn có thể giới thiệu cho tôi được không?',
            'Bạn có những quyển sách tâm lý mà bạn cho là phù hợp cho việc giải quyết căng thẳng và quản lý stress không?',
            'Tôi muốn tìm hiểu về những quyển sách tâm lý học giúp cải thiện sự tự tin và xây dựng một tâm lý khỏe mạnh, bạn có thể giúp tôi tìm được không?',
            'Giới thiệu cho tôi vài sách về tâm lý',
            'Tôi đang quan tâm đến những quyển sách tâm lý phân tích về tâm trạng và cảm xúc, liệu bạn có thể gợi ý cho tôi được không?',
            'Bạn có những quyển sách tâm lý mà bạn cho là phù hợp cho việc phát triển sự tự yêu thương và chăm sóc bản thân không?',
            'Tôi muốn tìm hiểu về những quyển sách tâm lý giúp phát triển tư duy và sự sáng tạo, bạn có thể giới thiệu cho tôi được không?',
            'Bạn có danh sách những quyển sách tâm lý học về chủ đề xây dựng một cuộc sống ý nghĩa và hạnh phúc không?',
            'Tôi đang quan tâm đến những quyển sách tâm lý học về chủ đề giải quyết xung đột và xây dựng mối quan hệ tốt đẹp, liệu bạn có thể gợi ý cho tôi được không?',
            'Bạn có những quyển sách tâm lý phân tích về tâm lý trẻ em và phương pháp nuôi dạy con không?',
            'Tôi muốn tìm hiểu về những quyển sách tâm lý giúp nắm bắt tư duy và cách thức hoạt động của người khác, bạn có thể giúp tôi tìm được không?',
            'Bạn có danh sách những quyển sách tâm lý học về chủ đề thay đổi thói quen và phát triển những thói quen tích cực không?',
            'Tôi đang quan tâm đến những quyển sách tâm lý học về chủ đề phục hồi sau tổn thương và xây dựng sự kiên cường, liệu bạn có thể gợi ý cho tôi được không?',
            'Bạn có những quyển sách tâm lý học về chủ đề tâm lý của người già và quá trình lão hóa không?',
            'Tôi muốn tìm hiểu về những quyển sách tâm lý giúp cải thiện sự tập trung và năng suất làm việc, bạn có thể giới thiệu cho tôi được không?',
            'Bạn có danh sách những quyển sách tâm lý học về chủ đề phát triển sự kiên nhẫn và sự kiên trì không?',
            'Tôi đang quan tâm đến những quyển sách tâm lý học về chủ đề giải quyết khủng hoảng và vượt qua thách thức, liệu bạn có thể gợi ý cho tôi được không?',
            'Bạn có những quyển sách tâm lý học về chủ đề phát triển sự nhạy bén trong quan sát và phân tích không?',
            'Tôi muốn tìm hiểu về những quyển sách tâm lý giúp cải thiện khả năng lãnh đạo và quản lý, bạn có thể giới thiệu cho tôi được không?',
            'Bạn có danh sách những quyển sách tâm lý học về chủ đề tâm lý của người trẻ và những thách thức trong quá trình trưởng thành không?',
            'Tôi đang quan tâm đến những quyển sách tâm lý học về chủ đề tạo động lực và đạt được mục tiêu, liệu bạn có thể gợi ý cho tôi được không?',
            'Bạn có những quyển sách tâm lý học về chủ đề phân tích về tâm lý công việc và định hướng sự nghiệp không?',
            'Tôi muốn tìm hiểu về những quyển sách tâm lý giúp cải thiện khả năng quyết định và đưa ra lựa chọn, bạn có thể giới thiệu cho tôi được không?',
            'Bạn có danh sách những quyển sách tâm lý học về chủ đề sức khỏe tâm lý và cách duy trì trạng thái cân bằng không?',
            'Tôi đang quan tâm đến những quyển sách tâm lý học về chủ đề xử lý cảm xúc và kiểm soát stress, liệu bạn có thể gợi ý cho tôi được không?',
            'Bạn có những quyển sách tâm lý học về chủ đề phân tích về tâm lý đội nhóm và tạo động lực làm việc nhóm không?',
            'Tôi muốn tìm hiểu về những quyển sách tâm lý giúp nâng cao khả năng giao tiếp và xây dựng mối quan hệ tốt đẹp, bạn có thể giới thiệu cho tôi được không?',
            'Bạn có thể gợi ý cho tôi 3 quyển sách về tâm lý không?',
            'Những quyển sách tâm lý nổi tiếng nhất hiện nay là gì?',
            'Bạn có những đề xuất về sách tâm lý phổ biến không?',
            'Có những quyển sách tâm lý dành cho người mới bắt đầu không?',
            'Có những quyển sách về tâm lý mà bạn đề xuất không?',
            'Bạn có thể giới thiệu cho tôi một số quyển sách tâm lý hay không?',
            'Những quyển sách tâm lý nổi tiếng mà tôi nên đọc là gì?',
            'Tôi quan tâm đến thể loại sách tâm lý, bạn có thể gợi ý cho tôi không?',
            'Có những cuốn sách tâm lý mới nhất mà tôi nên tham khảo không?',
            'Tôi muốn tìm hiểu về sách tâm lý',

            //sách hồi ký
            'Bạn có sách hồi ký của các nhà lãnh đạo nổi tiếng không?',
            'Tôi quan tâm đến hồi ký của các nghệ sĩ và diễn viên, có sách nào giới thiệu không?',
            'Bạn có sách hồi ký của các nhà khoa học và nhà phát minh không?',
            'Tôi muốn đọc một cuốn hồi ký về cuộc sống của một nhà văn nổi tiếng, có gợi ý nào không?',
            'Bạn có sách hồi ký của các vận động viên và võ sĩ không?',
            'Tôi quan tâm đến hồi ký của các doanh nhân thành đạt, có sách nào giới thiệu không?',
            'Bạn có sách hồi ký của các nhà chính trị và nhà lãnh đạo quốc gia không?',
            'Tôi muốn đọc một cuốn hồi ký về cuộc sống trong quân đội, có gợi ý nào không?',
            'Bạn có sách hồi ký của các nhà ngoại giao và nhà nghiên cứu quốc tế không?',
            'Tôi quan tâm đến hồi ký của các nhà du hành và nhà thám hiểm, có sách nào giới thiệu không?',
            'Bạn có sách hồi ký về các sự kiện lịch sử quan trọng không?',
            'Tôi muốn đọc một cuốn hồi ký về cuộc sống trong ngành nghệ thuật, có gợi ý nào không?',
            'Bạn có sách hồi ký của các nhà nghiên cứu khoa học và nhà bác học không?',
            'Tôi quan tâm đến hồi ký của các nhà lãnh đạo tôn giáo, có sách nào giới thiệu không?',
            'Bạn có sách hồi ký về các nhà nhân văn và nhà từ thiện không?',
            'Tôi muốn đọc một cuốn hồi ký về cuộc sống trong ngành công nghiệp, có gợi ý nào không?',
            'Bạn có sách hồi ký của các nhà văn và nhà thơ nổi tiếng không?',
            'Bạn có sách hồi ký về các nhà nhà văn hóa và nhà sưu tập nghệ thuật không?',
            'Tôi muốn đọc một cuốn hồi ký về cuộc sống trong ngành giáo dục, có gợi ý nào không?',
            'Bạn có sách hồi ký của các nhà hoạt động xã hội và nhà bảo vệ quyền con người không?',
            'Tôi quan tâm đến hồi ký của các nhà khởi nghiệp và doanh nhân, có sách nào giới thiệu không?',
            'Bạn có sách hồi ký của các nhà nghiên cứu về môi trường và bảo vệ tự nhiên không?',
            'Tôi muốn đọc một cuốn hồi ký về cuộc sống trong ngành y tế, có gợi ý nào không?',
            'Bạn có sách hồi ký của các nhà nghệ sĩ đa năng và người tài năng đa phương diện không?',
            'Tôi quan tâm đến hồi ký của các nhà quay phim và nhà sản xuất phim, có sách nào giới thiệu không?',
            'Bạn có sách hồi ký của các nhà lãnh đạo và nhà điều hành trong ngành công nghiệp giải trí không?',
            'Tôi muốn đọc một cuốn hồi ký về cuộc sống trong ngành thể thao, có gợi ý nào không?',
            'Bạn có sách hồi ký của các nhà tư vấn và nhà huấn luyện sự nghiệp không?',
            'Giới thiệu cho tôi vài sách về thể loại hồi ký',
            'Bạn có sách hồi ký của các nhà văn và nhà xuất bản nổi tiếng không?',
            'Có những quyển sách hồi ký nổi bật mà bạn đề xuất không?',
            'Bạn có thể giới thiệu cho tôi một số quyển sách hồi ký hay không?',
            'Những tác phẩm hồi ký nổi tiếng mà tôi nên đọc là gì?',
            'Tôi quan tâm đến thể loại sách hồi ký, bạn có thể gợi ý cho tôi không?',
            'Có những cuốn sách hồi ký mới nhất mà tôi nên tham khảo không?',
            'Tôi đang tìm kiếm những quyển sách hồi ký, bạn có thể chỉ cho tôi không?',
            'Có những tác phẩm nổi tiếng trong lĩnh vực hồi ký mà bạn biết không?',
            'Bạn có thể giới thiệu cho tôi 3 quyển sách hồi ký phổ biến nhất không?',
            'Tôi muốn tìm hiểu về sách hồi ký, có gợi ý nào cho tôi không?',
            'Gợi ý sách hồi ký',


            //sách khác
            'Bạn có sách về lịch sử nghệ thuật và kiến trúc không?',
            'Tôi quan tâm đến sách về khoa học và công nghệ mới nhất, có gợi ý nào không?',
            'Bạn có sách về viễn tưởng và khoa học viễn tưởng không?',
            'Tôi muốn tìm sách về chăm sóc sức khỏe và lối sống lành mạnh, có gợi ý nào không?',
            'Bạn có sách về lịch sử và văn hóa các quốc gia trên thế giới không?',
            'Bạn có sách về triết học và tư duy sáng tạo không?',
            'Tôi muốn đọc sách về kỹ năng giao tiếp và quản lý thời gian, có gợi ý nào không?',
            'Bạn có sách về kỹ năng viết và sáng tác không?',
            'Tôi quan tâm đến sách về du lịch và khám phá thế giới, có gợi ý nào không?',
            'Bạn có sách về kỹ năng lãnh đạo và quản lý nhóm không?',
            'Bạn có sách về khoa học xã hội và xã hội học không?',
            'Tôi quan tâm đến sách về thiết kế đồ họa và nghệ thuật minh họa, có gợi ý nào không?',
            'Bạn có sách về kỹ năng phân tích dữ liệu và khai phá dữ liệu không?',
            'Tôi muốn đọc sách về tâm linh và phát triển tinh thần, có gợi ý nào không?',
            'Bạn có sách về giáo dục không?',
            'Tôi quan tâm đến sách về công nghệ thông tin và lập trình, có gợi ý nào không?',
            'Bạn có sách về kỹ năng bán hàng và tiếp thị không?',
            'Tôi muốn tìm sách về pháp luật và quyền lợi của người tiêu dùng, có gợi ý nào không?',
            'Bạn có sách nấu ăn và công thức nấu ăn đặc biệt không?',
            'Tôi quan tâm đến sách về yoga và tư duy tích cực, có gợi ý nào không?',
            'Tôi muốn đọc một cuốn sách về kỹ năng giao tiếp và lãnh đạo, có gợi ý nào không?',
            'Bạn có sách về thực phẩm hữu cơ và sống khỏe không?',
            'Tôi quan tâm đến sách về phát triển bản thân và tư duy tài chính, có gợi ý nào không?',
            'Bạn có sách về nghệ thuật và thiết kế không?',
            'Tôi muốn đọc một cuốn sách về kỹ năng viết và sáng tác, có gợi ý nào không?',
            'Bạn có sách về truyện tranh và thiết kế đồ họa không?',
            'Tôi quan tâm đến sách về sức khỏe và cân bằng cuộc sống, có gợi ý nào không?',
            'Bạn có sách về kỹ năng sống và phát triển cá nhân không?',
            'Tôi muốn đọc một cuốn sách về du lịch và khám phá thế giới, có gợi ý nào không?',
            'Bạn có sách về âm nhạc và nghệ thuật biểu diễn không?',
            'Có sách về khoa học không?',
            'Bạn có thể gợi ý cho tôi 3 quyển sách về y học không?',
            'Những quyển sách ngoại ngữ nổi tiếng nhất hiện nay là gì?',
            'Bạn có những đề xuất về sách triết học phổ biến không?',
            'Có những quyển sách tử vi dành cho người mới bắt đầu không?',
            'Có những quyển sách về phong thủy mà bạn đề xuất không?',
            'Bạn có thể giới thiệu cho tôi một số quyển sách thiếu nhi hay không?',
            'Những quyển sách thể thao nổi tiếng mà tôi nên đọc là gì?',
            'Tôi quan tâm đến thể loại sách huyền bí, bạn có thể gợi ý cho tôi không?',
            'Tôi muốn tìm hiểu về sách sức khỏe',


            //giới thiệu sách
            // 'Tôi muốn biết sách bán chạy nhất của shop là gì?',
            // 'Bạn có bán sách giáo khoa không?',
            // 'Tôi muốn tìm hiểu thêm về sách của Dan Brown, bạn có thể giới thiệu cho tôi không?',
            // 'Bạn có thể giới thiệu cho tôi một số cuốn sách mới nhất không?',
            // 'Tôi cần tìm sách về lịch sử của Việt Nam. Bạn có thể giới thiệu cho tôi một số tác phẩm không?',
            // 'Bạn có thể giới thiệu cho tôi các tác phẩm của Shakespeare không?',
            // 'Bạn có sách mới nhất nào về kinh doanh không?',
            // 'Giới thiệu về sách "Mắt biếc" của tác giả Nguyễn Nhật Ánh được xuất bản vào năm bao nhiêu?',
            // 'Bạn có thể giới thiệu cho tôi sách nổi bật nhất của năm?',
            // 'Tôi quan tâm đến sách văn học kinh điển, có gợi ý nào không?',
            // 'Có quyển sách nào giới thiệu về lịch sử nghệ thuật không?',
            // 'Tôi muốn mua một quyển sách về phiêu lưu.',
            // 'Tôi muốn tìm hiểu về các sách khoa học viễn tưởng, có đề xuất nào không?',
            // 'Sách nổi tiếng của nhà văn George Orwell là gì?',
            // 'Tác phẩm nào của Shakespeare nên đọc để hiểu văn học cổ điển?',
            // 'Tôi muốn biết sách nghệ thuật phát triển cá nhân?',
            // 'Tôi cần tìm một quyển sách hướng dẫn lập trình web',
            // 'Giới thiệu cho tôi những cuốn sách kinh điển của thế giới',
            // 'Có sách nào giới thiệu về triết học không?',
            // 'Tác phẩm nào của Jane Austen được coi là một trong những tiểu thuyết lãng mạn hay nhất?',
            // 'Bạn có thể giới thiệu cho tôi sách về khoa học không?',
            // 'Tôi quan tâm đến sách văn học nổi tiếng, bạn có thể giới thiệu cho tôi không?',
            // 'Tôi muốn tìm hiểu về sách của nhà văn Haruki Murakami, bạn có thể giới thiệu cho tôi không?',
            // 'Có cuốn sách nào nói về lịch sử thế giới hay không?',
            // 'Tôi muốn mua một quyển sách kinh doanh mới nhất, bạn có gợi ý gì không?',
            // 'Có sách nào giới thiệu về nghệ thuật viết văn không?',
            // 'Tôi quan tâm đến sách tự truyện, bạn có thể giới thiệu cho tôi một quyển hay không?',
            // 'Tôi muốn tìm sách về lịch sử Việt Nam, bạn có gợi ý gì không?',
            // 'Có sách nào giới thiệu về lập trình PHP không?',
            // 'Tôi quan tâm đến sách khoa học viễn tưởng, bạn có thể giới thiệu cho tôi một quyển hay không?',
            // 'Tôi quan tâm đến sách văn học cổ điển, có gợi ý nào không?',
            // 'Có sách nào giới thiệu về lịch sử thế giới không?',
            // 'Tác phẩm nổi tiếng nhất của William Shakespeare là gì?',
            // 'Tôi muốn đọc một quyển sách kinh doanh, có gợi ý nào không?',
            // 'Tác phẩm nào của Jane Austen được coi là kiệt tác?',
            // 'Có sách nào giới thiệu về triết học không?',
            // 'Tôi quan tâm đến sách về kỹ năng giao tiếp, có gợi ý nào không?',
            // 'Có sách nào giới thiệu về nghệ thuật hướng dẫn làm bánh không?',
            // 'Tôi muốn tìm sách về kỹ năng lãnh đạo, có gợi ý nào không?',
            // 'Có quyển sách nào giới thiệu về khoa học không gian không?',
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
        $labels = ['Sách hay', 'Sách hay', 'Sách hay', 'Sách hay', 'Sách hay','Sách hay', 'Sách hay', 'Sách hay', 'Sách hay', 'Sách hay','Sách hay', 'Sách hay', 'Sách hay', 'Sách hay', 'Sách hay','Sách hay', 'Sách hay', 'Sách hay', 'Sách hay', 'Sách hay','Sách hay', 'Sách hay', 'Sách hay', 'Sách hay', 'Sách hay','Sách hay', 'Sách hay', 'Sách hay', 'Sách hay', 'Sách hay', 'Sách hay', 'Sách hay', 'Sách hay', 'Sách hay', 'Sách hay','Sách hay', 'Sách hay', 'Sách hay', 'Sách hay', 'Sách hay',
            'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học', 'Văn học',
            'Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế', 'Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế','Kinh tế', 
            'Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý', 'Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý','Tâm lý',
            'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký', 'Hồi ký',
            'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 'Sách khác', 
            //'Giới thiệu sách', 'Giới thiệu sách', 'Giới thiệu sách', 'Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách', 'Giới thiệu sách', 'Giới thiệu sách', 'Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách', 'Giới thiệu sách', 'Giới thiệu sách', 'Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách', 'Giới thiệu sách', 'Giới thiệu sách', 'Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách',
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
                    $answers = array(
                        "Xin lỗi, tôi không thể giải đáp câu hỏi này. Bạn vui lòng liên hệ chuyên viên qua số điện thoại: 081.6666.666 để được hỗ trợ trực tiếp nhé!",
                        "Xin lỗi, tôi không tìm thấy thông tin liên quan đến câu hỏi của bạn. Bạn có thể thử lại hoặc liên hệ chuyên viên qua số điện thoại: 081.6666.666 để được hỗ trợ trực tiếp.",
                        "Rất tiếc, tôi không có thông tin cụ thể về câu hỏi của bạn. Bạn có thể cung cấp thông tin chi tiết hơn hoặc liên hệ chuyên viên qua số điện thoại: 081.6666.666 để được hỗ trợ trực tiếp nhé!",
                        "Tôi không hiểu câu hỏi của bạn hoặc không có thông tin để trả lời. Bạn có thể giải thích thêm hoặc liên hệ chuyên viên qua số điện thoại: 081.6666.666 để được hỗ trợ trực tiếp.",
                        "Tôi xin lỗi, nhưng tôi không thể cung cấp câu trả lời cho câu hỏi của bạn. Bạn có thể hỏi về một chủ đề khác hoặc liên hệ chuyên viên qua số điện thoại: 081.6666.666 để được hỗ trợ trực tiếp.",
                        "Tôi không thể tìm thấy câu trả lời cho câu hỏi của bạn. Bạn có thể đặt câu hỏi khác hoặc liên hệ chuyên viên qua số điện thoại: 081.6666.666 để được hỗ trợ trực tiếp."
                    );

                    $randomIndex = array_rand($answers);
                    $response =  $answers[$randomIndex];
                    break;
                default:
                    $response = "Xin lỗi, tôi không hiểu câu hỏi của bạn. Bạn có thể thử lại với một câu hỏi khác.";
                    break;
            }
        
            // Trả về phản hồi cho người dùng
            return $response;
        }

        //Trả về sách nổi bật
        if ($predictedLabel[0] == 'Sách hay') {
            $bestSelling = sach::where('noibat', 1) // sách bán chạy nhất
                ->with('theloai')
                ->orderby('created_at', 'desc')
                ->inRandomOrder()
                ->limit(3)
                ->get();

            $bot->reply('Bot sẽ gợi ý cho bạn 3 quyển sách đang là bán chạy (best selling) của shop.');
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
                $bot->reply($message);
            }

        //Trả về sách văn học
        }elseif ($predictedLabel[0] == 'Văn học') {
            $bot->reply('Bạn thích đọc văn học trong nước hay ngoài nước nè?');
            $bot->startConversation(new SVMVanhoc());

        //Trả về sách kinh tế
        }elseif ($predictedLabel[0] == 'Kinh tế') {
            $theloai = 2;

            $chitietsach = chitietloaisach::query();
            $chitietsach = $chitietsach ->where('id_l', 'like', "$theloai");
            $idsach = $chitietsach->pluck('id');
            $sach = sach::whereIn('id', $idsach)
                ->where('noibat', 1)
                ->where('soluong', '>=', 1)
                ->where('trangthaikinhdoanh', 1)
                ->inRandomOrder()
                ->limit(3)
                ->get();

            $bot->reply('Dưới đây là một số quyển sách về kinh tế mà bạn có thể quan tâm:');
            foreach($sach as $book){
                $tensach = $book->tensach;
                $tacgia = $book->tacgia;
                $message = "Tên sách: $tensach; Tác giả: $tacgia; Thể loại: Kinh Tế";
                
                $bot->reply($message);
            }
            

        //Trả về sách tâm lý
        }elseif ($predictedLabel[0] == 'Tâm lý') {
            $theloai = 3;
            $chitietsach = chitietloaisach::query();
            $chitietsach = $chitietsach ->where('id_l', 'like', "$theloai");
            $idsach = $chitietsach->pluck('id');
            $sach = sach::whereIn('id', $idsach)
                ->where('noibat', 1)
                ->where('soluong', '>=', 1)
                ->where('trangthaikinhdoanh', 1)
                ->inRandomOrder()
                ->limit(3)
                ->get();

            $bot->reply('Dưới đây là một số quyển sách về tâm lý mà bạn có thể quan tâm:');
            foreach($sach as $book){
                $tensach = $book->tensach;
                $tacgia = $book->tacgia;
                $message = "Tên sách: $tensach; Tác giả: $tacgia; Thể loại: Tâm Lý";
                
                $bot->reply($message);
            }

        //Trả về sách hồi ký
        }elseif ($predictedLabel[0] == 'Hồi ký') {
            $theloai = 4;
            $chitietsach = chitietloaisach::query();
            $chitietsach = $chitietsach ->where('id_l', 'like', "$theloai");
            $idsach = $chitietsach->pluck('id');
            $sach = sach::whereIn('id', $idsach)
                ->where('noibat', 1)
                ->where('soluong', '>=', 1)
                ->where('trangthaikinhdoanh', 1)
                ->inRandomOrder()
                ->limit(3)
                ->get();

            $bot->reply('Dưới đây là một số quyển sách về hồi ký mà bạn có thể quan tâm:');
            foreach($sach as $book){
                $tensach = $book->tensach;
                $tacgia = $book->tacgia;
                $message = "Tên sách: $tensach; Tác giả: $tacgia; Thể loại: Hồi Ký";
                
                $bot->reply($message);
            }
        }elseif ($predictedLabel[0] == 'Sách khác') {

            $bot->reply('Hiện tại shop chỉ có 4 loại sách là: Văn học, Kinh tế, Tâm lý và Hồi ký. 
                        Trong tương lai shop sẽ cố gắng bổ sung thêm nhiều thể loại khác.');
            $bot->reply('Nếu bạn có hứng thú với các thể loại trên, bạn có thể chat "tư vấn" 
                        để shop hỗ trợ tìm kiếm sách phù hợp với bạn nhé!');

        }
        else {
            $response = respondToUser($question, $predictedLabel[0]);
            $bot->reply("$response");
        }

    }

}


class SVMVanhoc extends Conversation
{
    public function run()
    {
        $this->Xuatxu();
    }

    public function Xuatxu()
    {
        $this->ask('Lưu ý là văn học nước ngoài thì shop chỉ có sách định dạng tiếng Anh thôi nhé!', function ($answer) {
        $xuatxu = $answer->getText();
        
        //huấn luyện SVM lần 2
        $samples = [];
        $labels = ['Trong', 'Trong', 'Trong', 'Trong', 'Trong', 'Trong', 'Trong', 'Trong', 'Trong', 'Trong', 'Trong', 'Trong', 'Trong', 'Trong', 'Trong', 'Trong', 'Trong', 'Trong', 'Trong', 'Trong', 
            'Ngoài', 'Ngoài', 'Ngoài', 'Ngoài', 'Ngoài', 'Ngoài', 'Ngoài', 'Ngoài', 'Ngoài', 'Ngoài', 'Ngoài', 'Ngoài', 'Ngoài', 'Ngoài', 'Ngoài', 'Ngoài', 'Ngoài', 'Ngoài', 'Ngoài', 'Ngoài', 
            'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 
            'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 
            'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy'];
        // Đường dẫn đến file CSV
        $csvFile = '../database/Questions_xuatxu.csv';

        // Mở file CSV
        if (($handle = fopen($csvFile, 'r')) !== false) {

            // Đọc từng dòng dữ liệu
            while (($data = fgetcsv($handle)) !== false) {
                // Lấy câu hỏi từ cột tương ứng trong file CSV
                $question = $data[0];

                // Thêm câu hỏi và nhãn vào mảng samples và labels
                $samples[] = $question;
            }
            // Đóng file CSV
            fclose($handle);
        }

        //hàm để tiền xử lý dữ liệu
        function preprocessQuestion2($question)
        {
            // Loại bỏ các ký tự đặc biệt không cần thiết, dấu cách thừa và ngoặc kép
            $question = preg_replace('/[^\p{L}\p{N}\s]/u', '', $question);// Loại bỏ các ký tự đặc biệt
            $question = preg_replace('/\s+/', ' ', $question); //Loại bỏ dấu cách thừa
            $question = trim($question);//loại bỏ các khoảng trắng không cần thiết ở đầu và cuối chuỗi

            $stopwords = ['và', 'là', 'của', 'cho', 'không', 'có', 'trong', 'từ', 'qua', 'tại', 'được', 'thì']; // Các từ dừng
            $question = mb_strtolower($question); // Chuyển về chữ thường
            $question = str_replace('"', '', $question); // Xóa dấu ngoặc kép
            $question = removeAccents2($question); // Chuyển đổi chữ có dấu thành chữ không dấu

            $tokens = explode(' ', $question); // Tách từ theo khoảng trắng
            $filteredTokens = array_diff($tokens, $stopwords); // Loại bỏ từ dừng
            return implode(' ', $filteredTokens); // Trả về câu hỏi đã được tiền xử lý
        }

        //Hàm chuyển đổi chữ có dấu thành ko dấu
        function removeAccents2($str)
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
            $preprocessedQuestion = preprocessQuestion2($question);
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
        $classifier->train($preprocessedSamples, $labels);

        //hàm để phân loại câu hỏi
        function classifyQuestion2($question, $vectorizer, $tfIdfTransformer, $classifier) {
            $preprocessedInputQuestion = [preprocessQuestion2($question)];
            // Chuyển đổi câu hỏi thành đặc trưng văn bản
            $vectorizer->transform($preprocessedInputQuestion); 
            $tfIdfTransformer->transform($preprocessedInputQuestion);
            $predictedLabel = $classifier->predict($preprocessedInputQuestion);
            return $predictedLabel;
        }   

        // Phân loại câu hỏi
        $predictedLabel = classifyQuestion2($xuatxu, $vectorizer, $tfIdfTransformer, $classifier);
        // $this->say($predictedLabel[0]);
        
        // Trả về phản hồi
        if ($predictedLabel[0] == 'Trong') {
            $this->xuatxu = $predictedLabel[0];
            $this->askTheloai2();
        }elseif ($predictedLabel[0] == 'Ngoài') {
            $this->xuatxu = $predictedLabel[0];
            $this->askTheloai2();
        }elseif ($predictedLabel[0] == 'Cả hai') {
            $this->xuatxu = null;
            $this->loai = null;
            $this->gia = null;
            $this->ketthuc();
        }elseif ($predictedLabel[0] == 'Khác') {
            $this->say('Shop hiện chỉ có sách định dạng tiếng Anh thôi. Trong tương lai shop sẽ ráng bổ sung thêm theo nhu cầu của quý khách.');
            $this->Xuatxu();
        }elseif ($predictedLabel[0] == 'Hủy') {
            $this->say('Chưa có đủ thông tin để bot tư vấn cho bạn. Bạn có thể hỏi cụ thể hơn hoặc đổi câu hỏi khác giúp bot được không?');
        }

        });
    }
    
    public function askTheloai2()
    {
        $this->ask('Bạn thích thể loại văn học nào, hiện tại shop có các thể loại: 
                Tiểu thuyết, truyện cười và trinh thám.', function ($answer) {
            $theloai2 = $answer->getText();
            
            //huấn luyện SVM lần 3
            $samples = [];
            $labels = ['Tiểu thuyết', 'Tiểu thuyết', 'Tiểu thuyết', 'Tiểu thuyết', 'Tiểu thuyết', 'Tiểu thuyết', 'Tiểu thuyết', 'Tiểu thuyết', 'Tiểu thuyết', 'Tiểu thuyết', 'Tiểu thuyết', 'Tiểu thuyết', 'Tiểu thuyết', 'Tiểu thuyết', 'Tiểu thuyết', 'Tiểu thuyết', 'Tiểu thuyết', 'Tiểu thuyết', 'Tiểu thuyết', 'Tiểu thuyết', 
                    'Truyện cười', 'Truyện cười', 'Truyện cười', 'Truyện cười', 'Truyện cười', 'Truyện cười', 'Truyện cười', 'Truyện cười', 'Truyện cười', 'Truyện cười', 'Truyện cười', 'Truyện cười', 'Truyện cười', 'Truyện cười', 'Truyện cười', 'Truyện cười', 'Truyện cười', 'Truyện cười', 'Truyện cười', 'Truyện cười', 
                    'Trinh thám', 'Trinh thám', 'Trinh thám', 'Trinh thám', 'Trinh thám', 'Trinh thám', 'Trinh thám', 'Trinh thám', 'Trinh thám', 'Trinh thám', 'Trinh thám', 'Trinh thám', 'Trinh thám', 'Trinh thám', 'Trinh thám', 'Trinh thám', 'Trinh thám', 'Trinh thám', 'Trinh thám', 'Trinh thám',
                    'Ngẫu nhiên', 'Ngẫu nhiên', 'Ngẫu nhiên', 'Ngẫu nhiên', 'Ngẫu nhiên', 'Ngẫu nhiên', 'Ngẫu nhiên', 'Ngẫu nhiên', 'Ngẫu nhiên', 'Ngẫu nhiên', 'Ngẫu nhiên', 'Ngẫu nhiên', 'Ngẫu nhiên', 'Ngẫu nhiên', 'Ngẫu nhiên', 'Ngẫu nhiên', 'Ngẫu nhiên', 'Ngẫu nhiên', 'Ngẫu nhiên', 'Ngẫu nhiên', 
                    'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 'Khác', 
                    'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy'];
            // Đường dẫn đến file CSV
            $csvFile = '../database/Questions_theloai2.csv';

            // Mở file CSV
            if (($handle = fopen($csvFile, 'r')) !== false) {

                // Đọc từng dòng dữ liệu
                while (($data = fgetcsv($handle)) !== false) {
                    // Lấy câu hỏi từ cột tương ứng trong file CSV
                    $question = $data[0];

                    // Thêm câu hỏi và nhãn vào mảng samples và labels
                    $samples[] = $question;
                }
                // Đóng file CSV
                fclose($handle);
            }

            //hàm để tiền xử lý dữ liệu
            function preprocessQuestion3($question)
            {
                // Loại bỏ các ký tự đặc biệt không cần thiết, dấu cách thừa và ngoặc kép
                $question = preg_replace('/[^\p{L}\p{N}\s]/u', '', $question);// Loại bỏ các ký tự đặc biệt
                $question = preg_replace('/\s+/', ' ', $question); //Loại bỏ dấu cách thừa
                $question = trim($question);//loại bỏ các khoảng trắng không cần thiết ở đầu và cuối chuỗi

                $stopwords = ['và', 'là', 'của', 'cho', 'không', 'có', 'trong', 'từ', 'qua', 'tại', 'được', 'thì']; // Các từ dừng
                $question = mb_strtolower($question); // Chuyển về chữ thường
                $question = str_replace('"', '', $question); // Xóa dấu ngoặc kép
                $question = removeAccents3($question); // Chuyển đổi chữ có dấu thành chữ không dấu

                $tokens = explode(' ', $question); // Tách từ theo khoảng trắng
                $filteredTokens = array_diff($tokens, $stopwords); // Loại bỏ từ dừng
                return implode(' ', $filteredTokens); // Trả về câu hỏi đã được tiền xử lý
            }

            //Hàm chuyển đổi chữ có dấu thành ko dấu
            function removeAccents3($str)
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
                $preprocessedQuestion = preprocessQuestion3($question);
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
            $classifier->train($preprocessedSamples, $labels);

            //hàm để phân loại câu hỏi
            function classifyQuestion3($question, $vectorizer, $tfIdfTransformer, $classifier) {
                $preprocessedInputQuestion = [preprocessQuestion3($question)];
                // Chuyển đổi câu hỏi thành đặc trưng văn bản
                $vectorizer->transform($preprocessedInputQuestion); 
                $tfIdfTransformer->transform($preprocessedInputQuestion);
                $predictedLabel = $classifier->predict($preprocessedInputQuestion);
                return $predictedLabel;
            }   

            // Phân loại câu hỏi
            $predictedLabel = classifyQuestion3($theloai2, $vectorizer, $tfIdfTransformer, $classifier);
            // $this->say($predictedLabel[0]);
            
            // Trả về phản hồi
            if ($predictedLabel[0] == 'Tiểu thuyết') {
                $this->loai = $predictedLabel[0];
                $this->askGia();
            }elseif ($predictedLabel[0] == 'Truyện cười') {
                $this->loai = $predictedLabel[0];
                $this->askGia();
            }elseif ($predictedLabel[0] == 'Trinh thám') {
                $this->loai = $predictedLabel[0];
                $this->askGia();
            }elseif ($predictedLabel[0] == 'Ngẫu nhiên') {
                $this->loai = null;
                $this->gia = null;
                $this->ketthuc();
            }elseif ($predictedLabel[0] == 'Khác') {
                $this->say('Shop hiện chỉ có sách văn học thuộc 3 thể loại trên thôi. Tôi xin phép gợi ý cho bạn 1 số sách có lẽ bạn thích.');
                $this->loai = null;
                $this->gia = null;
                $this->ketthuc();
            }elseif ($predictedLabel[0] == 'Hủy') {
                $this->say('Chưa có đủ thông tin để bot tư vấn cho bạn. Bạn có thể hỏi cụ thể hơn hoặc đổi câu hỏi khác giúp bot được không?');
            }

        });
    }

    public function askGia()
    {
        $this->ask('Bạn muốn mức giá như thế nào? Rẻ một chút hay cao mà chất lượng đây nhỉ!!', function ($answer) {
        $gia = $answer->getText();
        
        //huấn luyện SVM lần 4
        $samples = [];
        $labels = ['Giá rẻ', 'Giá rẻ', 'Giá rẻ', 'Giá rẻ', 'Giá rẻ', 'Giá rẻ', 'Giá rẻ', 'Giá rẻ', 'Giá rẻ', 'Giá rẻ', 'Giá rẻ', 'Giá rẻ', 'Giá rẻ', 'Giá rẻ', 'Giá rẻ', 'Giá rẻ', 'Giá rẻ', 'Giá rẻ', 'Giá rẻ', 'Giá rẻ', 'Giá rẻ', 'Giá rẻ', 'Giá rẻ', 'Giá rẻ', 'Giá rẻ', 'Giá rẻ', 'Giá rẻ', 'Giá rẻ', 'Giá rẻ', 'Giá rẻ', 
            'Giá cao', 'Giá cao', 'Giá cao', 'Giá cao', 'Giá cao', 'Giá cao', 'Giá cao', 'Giá cao', 'Giá cao', 'Giá cao', 'Giá cao', 'Giá cao', 'Giá cao', 'Giá cao', 'Giá cao', 'Giá cao', 'Giá cao', 'Giá cao', 'Giá cao', 'Giá cao',  'Giá cao', 'Giá cao', 'Giá cao', 'Giá cao', 'Giá cao', 'Giá cao', 'Giá cao', 'Giá cao', 'Giá cao', 'Giá cao', 
            'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 'Cả hai', 
            'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy', 'Hủy'];
        // Đường dẫn đến file CSV
        $csvFile = '../database/Questions_gia.csv';

        // Mở file CSV
        if (($handle = fopen($csvFile, 'r')) !== false) {

            // Đọc từng dòng dữ liệu
            while (($data = fgetcsv($handle)) !== false) {
                // Lấy câu hỏi từ cột tương ứng trong file CSV
                $question = $data[0];

                // Thêm câu hỏi và nhãn vào mảng samples và labels
                $samples[] = $question;
            }
            // Đóng file CSV
            fclose($handle);
        }

        //hàm để tiền xử lý dữ liệu
        function preprocessQuestion4($question)
        {
            // Loại bỏ các ký tự đặc biệt không cần thiết, dấu cách thừa và ngoặc kép
            $question = preg_replace('/[^\p{L}\p{N}\s]/u', '', $question);// Loại bỏ các ký tự đặc biệt
            $question = preg_replace('/\s+/', ' ', $question); //Loại bỏ dấu cách thừa
            $question = trim($question);//loại bỏ các khoảng trắng không cần thiết ở đầu và cuối chuỗi

            $stopwords = ['và', 'là', 'của', 'cho', 'không', 'có', 'trong', 'từ', 'qua', 'tại', 'được', 'thì']; // Các từ dừng
            $question = mb_strtolower($question); // Chuyển về chữ thường
            $question = str_replace('"', '', $question); // Xóa dấu ngoặc kép
            $question = removeAccents4($question); // Chuyển đổi chữ có dấu thành chữ không dấu

            $tokens = explode(' ', $question); // Tách từ theo khoảng trắng
            $filteredTokens = array_diff($tokens, $stopwords); // Loại bỏ từ dừng
            return implode(' ', $filteredTokens); // Trả về câu hỏi đã được tiền xử lý
        }

        //Hàm chuyển đổi chữ có dấu thành ko dấu
        function removeAccents4($str)
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
            $preprocessedQuestion = preprocessQuestion4($question);
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
        $classifier->train($preprocessedSamples, $labels);

        //hàm để phân loại câu hỏi
        function classifyQuestion4($question, $vectorizer, $tfIdfTransformer, $classifier) {
            $preprocessedInputQuestion = [preprocessQuestion4($question)];
            // Chuyển đổi câu hỏi thành đặc trưng văn bản
            $vectorizer->transform($preprocessedInputQuestion); 
            $tfIdfTransformer->transform($preprocessedInputQuestion);
            $predictedLabel = $classifier->predict($preprocessedInputQuestion);
            return $predictedLabel;
        }   

        // Phân loại câu hỏi
        $predictedLabel = classifyQuestion4($gia, $vectorizer, $tfIdfTransformer, $classifier);
        // $this->say($predictedLabel[0]);
        
        // Trả về phản hồi
        if ($predictedLabel[0] == 'Giá rẻ') {
            $this->gia = 100000;
            $this->ketthuc();
        }elseif ($predictedLabel[0] == 'Giá cao') {
            $this->gia = 1000000;
            $this->ketthuc();
        }elseif ($predictedLabel[0] == 'Cả hai') {
            $this->gia = null;
            $this->ketthuc();
        }elseif ($predictedLabel[0] == 'Hủy') {
            $this->say('Chưa có đủ thông tin để bot tư vấn cho bạn. Bạn có thể hỏi cụ thể hơn hoặc đổi câu hỏi khác giúp bot được không?');
        }

        });
    }

    public function ketthuc()
    {
        $xuatxu = $this->xuatxu;
        $loai = $this->loai;
        $gia = $this->gia;
        $theloai = 1;

        $chitietsach = chitietloaisach::query();
        $chitietsach = $chitietsach ->where('id_l', 'like', "$theloai");
        $idsach = $chitietsach->pluck('id');
        
        if($xuatxu == null && $loai == null && $gia == null){
            $sach = sach::whereIn('id', $idsach)
                ->where('soluong', '>=', 1)
                ->where('trangthaikinhdoanh', 1)
                ->inRandomOrder()
                ->limit(3)
                ->get();
        }elseif ($loai == null && $gia == null){
            $sach = sach::whereIn('id', $idsach)
                ->where('xuatxu', 'like', "$xuatxu")
                ->where('soluong', '>=', 1)
                ->where('trangthaikinhdoanh', 1)
                ->inRandomOrder()
                ->limit(3)
                ->get();
        }elseif ($gia == null){
            $sach = sach::whereIn('id', $idsach)
                ->where('xuatxu', 'like', "$xuatxu")
                ->where('loai', 'like', "$loai")
                ->where('soluong', '>=', 1)
                ->where('trangthaikinhdoanh', 1)
                ->inRandomOrder()
                ->limit(3)
                ->get();
        }else{
            $sach = sach::whereIn('id', $idsach)
                ->where('xuatxu', 'like', "$xuatxu")
                ->where('loai', 'like', "$loai")
                ->where('soluong', '>=', 1)
                ->where('trangthaikinhdoanh', 1)
                ->where('gia', '<=', (int)$gia)
                ->inRandomOrder()
                ->limit(3)
                ->get();
        }

            $this->say('Dưới đây là một số quyển sách phù hợp với bạn:');
            foreach($sach as $book){
                $tensach = $book->tensach;
                $tacgia = $book->tacgia;
                $giagiam = $book->giakhuyenmai;
            
                $message = "Tên sách: $tensach; Tác giả: $tacgia; Thể loại: Văn học; 
                Đang giảm giá chỉ còn " . substr($giagiam, 0, -3) . "đ";
                $this->say($message);
                
            }
    }
}