@extends('layouts.app')
<!-- Main Start -->
@section('main')
<div id="tg-wrapper" class="tg-wrapper tg-haslayout">
    <!--************************************
            Header Start
    *************************************-->
    <!--************************************
            Header End
    *************************************-->
    <!--************************************
            Inner Banner Start
    *************************************-->
    <div class="tg-innerbanner tg-haslayout tg-parallax tg-bginnerbanner" data-z-index="-100" data-appear-top-offset="600" data-parallax="scroll" data-image-src="{{ asset('images/parallax/bgparallax-07.jpg') }}">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="tg-innerbannercontent">
                        <h1>Tất cả sản phẩm</h1>
                        <ol class="tg-breadcrumb">
                            <li><a href="/">Trang chủ</a></li>
                            <li><a href="/all">Tất cả sản phẩm</a></li>
                            <li class="tg-active">{{ $sach->tensach }}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <main id="tg-main" class="tg-main tg-haslayout">
        <!--************************************
                News Grid Start
        *************************************-->
        <div class="tg-sectionspace tg-haslayout">
            <div class="container">
                <div class="row">
                    <div id="tg-twocolumns" class="tg-twocolumns">
                        <div class="col-xs-12 col-sm-8 col-md-8 col-lg-9 pull-right">
                            <div id="tg-content" class="tg-content">
                                <div class="tg-productdetail">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                            <div class="tg-postbook">
                                                <figure class="tg-featureimg"><img src="{{ asset('images/books/'. $sach->hinhanh) }}" alt="image description"></figure>
                                                <div class="tg-postbookcontent">
                                                    <span class="tg-bookprice">
                                                        <ins>{{ number_format($sach->giakhuyenmai, 0, ',', '.') }} ₫</ins>
                                                        <del>{{ number_format($sach->gia, 0, ',', '.') }} ₫</del>
                                                    </span>
                                                    <span class="tg-bookwriter">Tiết kiệm lên đến: {{ number_format($sach->gia - $sach->giakhuyenmai, 0, ',', '.') }} ₫</span>
                                                    <ul class="tg-delevrystock">
                                                        @if ($sach->soluong > 0)
                                                            <li><i class="icon-store"></i><span>Trạng thái: <em>Còn hàng</em></span></li>
                                                        @else
                                                            <li><i class="icon-store"></i><span>Trạng thái: <em>Hết hàng</em></span></li>
                                                        @endif
                                                    </ul>
                                                    <div class="tg-quantityholder">
                                                        <em class="minus">-</em>
                                                        <input type="text" class="result" value="0" id="quantity1" name="quantity">
                                                        <em class="plus">+</em>
                                                    </div>
                                                    @if ($sach->soluong > 0)
                                                        <button type="button" class="tg-btn tg-active tg-btn-lg" onclick="addProduct('{{ $sach->id }}')">
                                                            <i class="fa fa-shopping-basket"></i>
                                                            <em>Thêm vào giỏ</em>
                                                        </button>
                                                    @else
                                                        <button type="button" class="tg-btn tg-active tg-btn-lg" disabled style="background-color: gray; border-color: gray">
                                                            <i class="fa fa-shopping-basket"></i>
                                                            <em>Thêm vào giỏ</em>
                                                        </button>
                                                    @endif
                                                    {{-- <a class="tg-btnaddtowishlist" href="javascript:void(0);">
                                                        <span>add to wishlist</span>
                                                    </a> --}}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                            <div class="tg-productcontent">
                                                <div class="tg-bookscategories">
                                                    <span style="color: gray">
                                                    @for($i = 0; $i < count($sach->theloai); $i++)
                                                        @if($i < count($sach->theloai)-1)
                                                        <a href="/search/?genre={{ $sach->theloai[$i]->id }}" style="color: gray">{{ $sach->theloai[$i]->tenloai }},</a>
                                                        @else
                                                        <a href="/search/?genre={{ $sach->theloai[$i]->id }}" style="color: gray">{{ $sach->theloai[$i]->tenloai }}</a>
                                                        @endif
                                                    @endfor
                                                    </span>
                                                </div>
                                                <div class="tg-themetagbox"><span class="tg-themetag">sale</span></div>
                                                <div class="tg-booktitle">
                                                    <h3>{{$sach->tensach}}</h3>
                                                </div>
                                                <span class="tg-bookwriter">By: {{$sach->tacgia}}</span>
                                                <div class="tg-description">
                                                    <h4>Mô tả sản phẩm: </h4>
                                                    <p>{{ $sach->mota }}</p>
                                                </div>

                                                <!-- section product detail thủ công, phát triển sau -->

                                                 <div class="tg-sectionhead">
                                                    <h2>Product Details</h2>
                                                </div>
                                                <ul class="tg-productinfo">
                                                    <li><span>Format:</span><span>Hardback</span></li>
                                                    <li><span>Pages:</span><span>528 pages</span></li>
                                                    <li><span>Dimensions:</span><span>153 x 234 x 43mm | 758g</span></li>
                                                    <li><span>Publication Date:</span><span>June 27, 2017</span></li>
                                                    <li><span>Publisher:</span><span>Sunshine Orlando</span></li>
                                                    <li><span>Language:</span><span>English</span></li>
                                                    <li><span>Illustrations note:</span><span>b&amp;w images thru-out; 1 x 16pp colour plates</span></li>
                                                    <li><span>ISBN10:</span><span>1234567890</span></li>
                                                    <li><span>ISBN13:</span><span>1234567890000</span></li>
                                                    <li><span>Other Fomate:</span><span>CD-Audio, Paperback, E-Book</span></li>
                                                </ul> 
                                                <!-- ------------------------------------- -->
                                            </div>
                                        </div>
                                        <!-- section product description thủ công, phát triển sau -->
                                        {{-- <div class="tg-productdescription">
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <div class="tg-sectionhead">
                                                    <h2>Product Description</h2>
                                                </div>
                                                <ul class="tg-themetabs" role="tablist">
                                                    <li role="presentation" class="active"><a href="#description" data-toggle="tab">Description</a></li>
                                                    <li role="presentation"><a href="#review" data-toggle="tab">Reviews</a></li>
                                                </ul>
                                                <div class="tg-tab-content tab-content">
                                                    <!-- description -->
                                                    <div role="tabpanel" class="tg-tab-pane tab-pane active" id="description">
                                                        <div class="tg-description">
                                                            <p>
                                                                Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenden
                                                                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                            </p>
                                                            <ul class="tg-liststyle">
                                                                <li><span>Sed do eiusmod tempor incididunt ut labore et dolore</span></li>
                                                                <li><span>Magna aliqua enim ad minim veniam</span></li>
                                                                <li><span>Quis nostrud exercitation ullamco laboris nisi ut</span></li>
                                                                <li><span>Aliquip ex ea commodo consequat aute dolor reprehenderit</span></li>
                                                                <li><span>Voluptate velit esse cillum dolore eu fugiat nulla pariatur</span></li>
                                                                <li><span>Magna aliqua enim ad minim veniam</span></li>
                                                                <li><span>Quis nostrud exercitation ullamco laboris nisi ut</span></li>
                                                            </ul>
                                                            <p>
                                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam remmata aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enimsam
                                                                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos quistatoa.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <!-- review -->
                                                    <div role="tabpanel" class="tg-tab-pane tab-pane" id="review">
                                                        <div class="tg-description">
                                                            <p>
                                                                day la review
                                                            </p>
                                                            <ul class="tg-liststyle">
                                                                <li><span>Sed do eiusmod tempor incididunt ut labore et dolore</span></li>
                                                                <li><span>Magna aliqua enim ad minim veniam</span></li>
                                                                <li><span>Quis nostrud exercitation ullamco laboris nisi ut</span></li>
                                                                <li><span>Aliquip ex ea commodo consequat aute dolor reprehenderit</span></li>
                                                                <li><span>Voluptate velit esse cillum dolore eu fugiat nulla pariatur</span></li>
                                                                <li><span>Magna aliqua enim ad minim veniam</span></li>
                                                                <li><span>Quis nostrud exercitation ullamco laboris nisi ut</span></li>
                                                            </ul>
                                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam remmata aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enimsam
                                                                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos quistatoa.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> --}}
                                        {{-- end section product --}}
                                        <div class="tg-productdescription" style="margin-top: 50px">
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <div class="tg-sectionhead">
                                                    <h2>Bình luận ({{ count($comments) }})</h2>
                                                </div>
                                                <div class="tg-tab-content tab-content">
                                                    <!-- description -->
                                                    <div role="tabpanel" class="" id="description">
                                                        <div class="tg-description" id="contain-comment">
                                                            @if (!$comments->isEmpty())
                                                            <!-- per comment -->
                                                            @foreach ($comments as $comment)
                                                                @if ($comment->loaikhachhang == 1)
                                                                <div class="tg-authorbox">
                                                                    <figure class="tg-authorimg" style="width: 8%">
                                                                        <img src="{{ asset('images/users/no_user.png') }}" alt="image description">
                                                                    </figure>
                                                                    <div class="tg-authorinfo">
                                                                        <div class="tg-authorhead">
                                                                            <div class="tg-leftarea">
                                                                                <div class="tg-authorname"  style="margin-top: 10px">
                                                                                    <h2>{{ $comment->tenkhachhang }}
                                                                                        @if ($comment->damuahang == 1)
                                                                                        <span style="font-size: 70%; margin-top: 3px; color: #3998e1">
                                                                                            <i class="glyphicon glyphicon-ok-circle"></i> Đã mua hàng
                                                                                        </span>
                                                                                        @endif
                                                                                    </h2>
                                                                                    <span>{{ $comment->created_at->diffForHumans() }}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="tg-description">
                                                                            <p>{{ $comment->noidung }}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                @else
                                                                <div class="tg-authorbox">
                                                                    <figure class="tg-authorimg" style="width: 8%">
                                                                        <img src="{{ asset('images/users/no_user.png') }}" alt="image description">
                                                                    </figure>
                                                                    <div class="tg-authorinfo">
                                                                        <div class="tg-authorhead">
                                                                            <div class="tg-leftarea">
                                                                                <div class="tg-authorname"  style="margin-top: 10px">
                                                                                    <h2>Ẩn danh</h2>
                                                                                    <span>{{ $comment->created_at->diffForHumans() }}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="tg-description">
                                                                            <p>{{ $comment->noidung }}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                @endif
                                                            @endforeach
                                                            <!-- end per comment  -->
                                                            @else
                                                            <div class="tg-authorbox">
                                                                <p>chưa có nhận xét về sản phẩm này</p>
                                                            </div>
                                                            @endif
                                                        </div>
                                                    </div>
                                                    <!-- review -->
                                                </div>
                                            </div>
                                        </div>
                                        <!-- comment -->
                                        <!-- form comment -->
                                        <div  class="tg-relatedproducts">
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <div class="tg-sectionhead" style="border-bottom: none; margin-bottom: 1px">
                                                    <h2><span>Nhận xét của bạn</span></h2>
                                                </div>
                                            </div>
                                            <form action="">
                                                <input type="hidden" id="detail_idSach" value="{{ $sach->id }}">
                                                <textarea class="form-control" rows="3" id="content-comment" style="text-transform: none"></textarea>
                                                <button type="button" class="btn btn-success" id="submitComment" style="float: right; margin-top: 1%; border: none">Gửi bình luận</button>
                                            </form>
                                        </div>
                                        <!-- relate product -->
                                        <div class="tg-relatedproducts">
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <div class="tg-sectionhead">
                                                    <h2><span>Sản phẩm liên quan</span>Có thể bạn thích</h2>
                                                    <a class="tg-btn" href="javascript:void(0);">Xem thêm</a>
                                                </div>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <div id="tg-relatedproductslider" class="tg-relatedproductslider tg-relatedbooks owl-carousel">
                                                    <!-- sản phẩm cùng loại -->
                                                    <div class="item">
                                                        <div class="tg-postbook">
                                                            <figure class="tg-featureimg">
                                                                <div class="tg-bookimg">
                                                                    <div class="tg-frontcover"><img src="{{ asset('images/books/img-01.jpg') }}" alt="image description"></div>
                                                                    <div class="tg-backcover"><img src="{{ asset('images/books/img-01.jpg') }}" alt="image description"></div>
                                                                </div>
                                                                <a class="tg-btnaddtowishlist" href="javascript:void(0);">
                                                                    <i class="icon-heart"></i>
                                                                    <span>Thêm vào yêu thích</span>
                                                                </a>
                                                            </figure>
                                                            <div class="tg-postbookcontent">
                                                                <ul class="tg-bookscategories">
                                                                    <li><a href="javascript:void(0);">Thám hiểm</a></li>
                                                                    <li><a href="javascript:void(0);">Trộn kem</a></li>
                                                                </ul>
                                                                <div class="tg-booktitle">
                                                                    <h3><a href="javascript:void(0);">Cách trộn kem</a></h3>
                                                                </div>
                                                                <span class="tg-bookwriter">By: <a href="javascript:void(0);">Nguyễn Vũ Anh Minh</a></span>
                                                                <span class="tg-bookprice">
                                                                    <ins>25.000</ins>
                                                                    <del>27.000</del>
                                                                </span>
                                                                <button type="button" class="tg-btn tg-btnstyletwo" onclick="addProduct('{{ $sach->id }}')">
                                                                    <i class="fa fa-shopping-basket"></i>
                                                                    <em>Thêm vào giỏ</em>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-3 pull-left">
                            <aside id="tg-sidebar" class="tg-sidebar">
                                <div class="tg-widget tg-widgetsearch">
                                    <form class="tg-formtheme tg-formsearch">
                                        <div class="form-group">
                                            {{-- <button type="submit"><i class="icon-magnifier"></i></button>
                                            <input type="search" name="search" class="form-group" placeholder="Search by title, author, key..."> --}}
                                        </div>
                                    </form>
                                </div>
                                <div class="tg-widget tg-catagories">
                                    <div class="tg-widgettitle">
                                        <h3>Thể loại</h3>
                                    </div>
                                    <div class="tg-widgetcontent">
                                        <ul>
                                            @foreach ($theloais as $value)
                                            <li><a href="/search/?genre={{ $value->id }}"><span>{{ $value->tenloai }}</span></a></li>
                                            @endforeach
                                        </ul>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--************************************
                News Grid End
        *************************************-->
    </main>
<script src="{{ asset('js/comment.js') }}"></script>
@endsection
