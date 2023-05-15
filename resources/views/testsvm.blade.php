<!-- <html>
  <head>
    <title>SVM</title>
  </head>
  <body>
    <script src="https://www.lactame.com/lib/ml/3.2.0/ml.min.js"></script>
    <script>
      //Sử dụng thuật toán
        X = [
            [1,	52000,	1],
            [1,	60000,	2],
            [2,	75000,	3],
            [3,	30000,	4],
            [3,	52000,	5],
            [4,	52000,	6],
            [4,	52000,	7],
            [3,	52000,	8],
            [3,	52000,	9],
            [3,	52000,	10],
            [3,	52000,	11],
            [2,	52000,	12],
            [1,	85000,	13],
            [1,	68000,	14],
            [4,	55000,	15],
            [1,	145000,	16],
            [1,	350000,	17],
            [1,	168000,	18],
            [1,	248000,	19],
            [1,	139000,	20],
            [1,	128000,	21],
            [1,	179000,	22],
            [1,	169000,	23],
            [1,	145000,	24],
            [1,	108000,	25],
            [1,	99000,	26],
            [1,	122000,	27],
            [1,	68000,	28],
            [1,	305000,	29],
            [1,	158000,	13],
            [2,	98000,	30],
            [2,	75000,	31],
            [2,	105000,	32],
            [2,	90000,	33],
            [2,	79000,	34],
            [2,	55000,	35],
            [2,	130000,	36],
            [2,	89000,	37],
            [2,	135000,	37],
            [2,	89000,	37],
            [3,	108000,	25],
            [3,	86000,	38],
            [3,	79000,	39],
            [3,	56000,	40],
            [3,	128000,	41],
            [3,	139000,	20],
            [3,	139000,	20],
            [3,	90000,	42],
            [3,	89000,	43],
            [3,	90000,	44],
            [4,	89000,	44],
            [4,	86000,	44],
            [4,	92000,	44],
            [4,	90000,	45],
            [4,	86000,	46],
            [4,	248000,	19],
            [4,	105000,	47],
            [4,	175000,	48],
            [4,	228000,	49],
            [4,	88000,	50],
            [3,	98000,	31],
            [3,	128000,	13],
            [3,	79000,	34],
            [3,	248000,	19],
            [3,	105000,	47],
            [4,	85000,	48],
            [4,	108000,	49],
            [4,	125000,	50],
            [4,	149000,	51],
            [4,	159000,	52],
        ];
      

      y = [-1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]; //Thư viện ml.js sử dụng -1 và 1 thay vì 0 và 1
      svm = new ML.SVM();
      svm.train(X, y);

      //Ứng dụng
      X_test = [
        [1, 52000, 1],
        [4, 50000, 20],
        [1, 32000, 2]
      ];
      y_hat_test = svm.predict(X_test);
      document.write("Bông hoa có độ dài đài hoa " + X_test[0][0] + " cm, độ rộng đài hoa " + X_test[0][1] + " cm, độ dài cánh hoa " + X_test[0][2] + " cm là " + (y_hat_test[0] == 1 ? "Iris virginica" : "Iris setosa") + ".<br>");
      document.write("Bông hoa có độ dài đài hoa " + X_test[1][0] + " cm, độ rộng đài hoa " + X_test[1][1] + " cm, độ dài cánh hoa " + X_test[1][2] + " cm là " + (y_hat_test[1] == 1 ? "Iris virginica" : "Iris setosa") + ".<br>");
      document.write("Bông hoa có độ dài đài hoa " + X_test[2][0] + " cm, độ rộng đài hoa " + X_test[2][1] + " cm, độ dài cánh hoa " + X_test[2][2] + " cm là " + (y_hat_test[2] == 1 ? "Iris virginica" : "Iris setosa") + ".<br>");
    </script>
  </body>
</html> -->


<?php

use Phpml\Classification\SVC;
use Phpml\SupportVectorMachine\Kernel;
use Illuminate\Support\Str;
use Illuminate\Support\Collection;
use Phpml\FeatureExtraction\TokenCountVectorizer;
use Phpml\Tokenization\WhitespaceTokenizer;
use Phpml\FeatureExtraction\TfIdfTransformer;



$samples = ['Sách "Hai số phận" của tác giả Nguyễn Ngọc Tư do nhà xuất bản Kim Đồng xuất bản vào năm bao nhiêu?',
            'Sách mới nhất bạn có bán là gì?',
            'Bạn có bán sách giáo khoa không?',
            'Tôi muốn tìm hiểu thêm về sách của Dan Brown, bạn có thể giới thiệu cho tôi không?',
            'Bạn có thể giới thiệu cho tôi một số cuốn sách mới nhất không?',
            'Tôi cần tìm sách về lịch sử của Việt Nam. Bạn có thể giới thiệu cho tôi một số tác phẩm không?',
            'Bạn có thể giới thiệu cho tôi các tác phẩm của Shakespeare không?',
            'Bạn có sách mới nhất nào về kinh doanh không?',
            'Giới thiệu về sách "Mắt biếc" của tác giả Nguyễn Nhật Ánh được xuất bản vào năm bao nhiêu?',
            'Bạn có thể giới thiệu cho tôi sách nổi bật nhất của năm?',
            //--
            'Tôi muốn mua cuốn sách "Mắt biếc" giá bao nhiêu?',
            'Có khuyến mãi gì cho sách "Thế giới và chúng ta" không?',
            'Có được giảm giá khi mua sách "Số đỏ" không?',
            'Tôi muốn tìm hiểu giá sách của bạn. Bạn có thể cho tôi biết giá sách mới nhất được không?',
            'Sách bán chạy nhất của tháng này giá bao nhiêu?',
            'Giá sách giáo khoa lớp 10 là bao nhiêu?',
            'Bạn có chương trình khuyến mãi nào cho các loại sách không?',
            'Tôi muốn tìm sách về lập trình PHP, giá bao nhiêu?',
            'Bạn có sách nào về thiết kế đồ họa không?',
            'Sách bán chạy nhất của tháng này giá bao nhiêu?',
            //--
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
            //--
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
            //-- 
            'Bạn có cuốn sách nào giúp học tiếng Anh tốt không?',
            'Tôi muốn hỏi về chương trình khuyến mãi của bạn. Bạn có chương trình khuyến mãi nào đang diễn ra không?',
            'Bạn có địa chỉ cửa hàng gần nhất của bạn không?',
            'Bạn có bán quà tặng không?',
            'Tôi có thể yêu cầu gói quà tặng không?',
            'Tôi có thể yêu cầu in tên lên sách không?',
            'Bạn có sách bằng tiếng Anh không?',
            'Bạn có thể tìm kiếm sách theo tên tác giả được không?',
            'Tôi có thể đặt mua sách trên trang web của bạn được không?',
            'Tôi muốn biết nếu tôi không hài lòng với sách tôi đã mua thì tôi có thể đổi sách hoặc được hoàn tiền không?',
];
$labels = ['Giới thiệu sách', 'Giới thiệu sách', 'Giới thiệu sách', 'Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách','Giới thiệu sách',
          'Giá sách', 'Giá sách', 'Giá sách', 'Giá sách', 'Giá sách','Giá sách', 'Giá sách', 'Giá sách', 'Giá sách','Giá sách',
          'Vận chuyển', 'Vận chuyển', 'Vận chuyển','Vận chuyển','Vận chuyển','Vận chuyển', 'Vận chuyển', 'Vận chuyển','Vận chuyển','Vận chuyển',
          'Thanh toán' ,'Thanh toán', 'Thanh toán', 'Thanh toán', 'Thanh toán','Thanh toán' ,'Thanh toán', 'Thanh toán', 'Thanh toán', 'Thanh toán',
          'Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác','Khác'
          ];


// $samples = ['Tôi muốn tìm hiểu thêm về sách của Dan Brown, bạn có thể giới thiệu cho tôi không?',
//             'Bạn có thể giới thiệu cho tôi các tác phẩm của Shakespeare không?',
//             'Bạn có thể giới thiệu cho tôi sách nổi bật nhất của năm?',
//             'Tôi muốn mua cuốn sách "Mắt biếc" giá bao nhiêu?',
//             'Có được giảm giá khi mua sách "Số đỏ" không?',
//             'Tôi muốn tìm sách về lập trình PHP, giá bao nhiêu?'];
// $labels = ['a', 'a', 'a', 'b', 'b', 'b'];

function preprocessQuestion($question)
{
    // Chuẩn hóa văn bản và chuyển đổi về chữ thường
    $question = preg_replace('/[^\p{L}\p{N}\s]/u', '', $question);
    $question = preg_replace('/\s+/', ' ', $question);
    $question = trim($question);
    $stopwords = ['và', 'là', 'của']; // Các từ dừng
    $question = mb_strtolower($question); // Chuyển về chữ thường
    $question = str_replace('"', '', $question); // Xóa dấu ngoặc kép
    $tokens = explode(' ', $question); // Tách từ theo khoảng trắng
    $filteredTokens = array_diff($tokens, $stopwords); // Loại bỏ từ dừng
    return implode(' ', $filteredTokens); // Trả về câu hỏi đã được tiền xử lý
    

}



$preprocessedSamples = [];

foreach ($samples as $question) {
    $preprocessedQuestion = preprocessQuestion($question);
    $preprocessedSamples[] = $preprocessedQuestion;
}


$vectorizer = new TokenCountVectorizer(new WhitespaceTokenizer()); // Tạo đối tượng vectorizer
$vectorizer->fit($preprocessedSamples); // Huấn luyện vectorizer với dữ liệu đã được tiền xử lý
$vectorizer->transform($preprocessedSamples); // Trích xuất đặc trưng từ văn bản

$tfIdfTransformer = new TfIdfTransformer($preprocessedSamples);
$tfIdfTransformer->fit($preprocessedSamples);


$tfIdfTransformer->transform($preprocessedSamples);
// print_r($preprocessedSamples);
// echo json_encode($features); // Xuất các đặc trưng đã trích xuất ra màn hình

// echo json_encode($transformedSamples);
// echo json_encode($preprocessedSamples);

$classifier = new SVC(Kernel::LINEAR, $cost = 1000);
$classifier->train($preprocessedSamples, $labels);


$Inputquestion = 'Bạn có thể giới thiệu cho tôi sách Conan không?';
// Tiền xử lý
$preprocessedInputQuestion = [preprocessQuestion($Inputquestion)];

// Chuyển đổi câu hỏi thành đặc trưng văn bản
$vectorizer->transform($preprocessedInputQuestion); // Chuyển đổi câu hỏi thành đặc trưng văn bản

$tfIdfTransformer->transform($preprocessedInputQuestion);
// Dự đoán nhãn của câu hỏi
$predictedLabel = $classifier->predict($preprocessedInputQuestion);

// echo json_encode($preprocessedInputQuestion);
// echo json_encode($transformedInputQuestion);
// echo json_encode($transformedQuestion);
echo json_encode($predictedLabel);

//----------------------------------------------------------------------------------------


// ?>