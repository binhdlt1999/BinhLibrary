<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Book Library</title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Styles -->
    <link href="{{ asset('css/all.css') }}" rel="stylesheet" type="text/css" media="all">
</head>

<body class="tg-home tg-homevtwo">
    <div id="tg-wrapper" class="tg-wrapper tg-haslayout">
        <header id="tg-header" class="tg-header tg-headervtwo tg-haslayout">
            <!-- user -->
            <div class="tg-topbar">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <strong class="tg-logo"><a href="/"><img src="{{ asset('images/logo.png') }}" alt="company name here"></a></strong>
                            <!-- user -->
                            <div class="tg-userlogin" style="background-color: white">
                                @if (Auth::check() && Auth::user()->phanquyen != 3)
                                <button type="button" class="btn btn-danger" onClick="logout()" style="color: white; border: none">Đăng xuất</button>
                                @else
                                <a href="/login-page" style="color: white"><button type="button" class="btn btn-success" style="border: none">Đăng nhập / Đăng ký</button></a>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- search -->
            @section('menuBar')
            <div class="tg-middlecontainer">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div>
                                <form class="tg-formtheme tg-formsearch" action="/search" method="GET">
                                    <fieldset>
                                        <input type="text" name="keyword" class="typeahead form-control" placeholder="">
                                        <button type="submit" class="tg-btn">Tìm kiếm</button>
                                    </fieldset>
                                    {{-- <a href="javascript:void(0);">+  Advanced Search</a> --}}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- navigation -->
            <div class="tg-navigationarea">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="tg-navigationholder">
                                <nav id="tg-nav" class="tg-nav">
                                    <!-- All categories -->
                                    <div class="navbar-header">
                                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#tg-navigation" aria-expanded="false">
                                            <span class="sr-only">Toggle navigation</span>
                                        </button>
                                    </div>
                                    <!-- All categories -->
                                    <!-- show toggle -->
                                    <div id="tg-navigation" class="collapse navbar-collapse tg-navigation">
                                        <ul>
                                            <!-- show menu chi tiết lớn -->
                                        <li class="menu-item-has-children menu-item-has-mega-menu">
                                            <a href="/">Tất cả sản phẩm</a>
                                            <div class="mega-menu">
                                                <!-- danh sách thể loại -->
                                                <!-- lưu ý để href="#id" như ví dụ để show chi tiết bên dưới, bên dưới đặt id như trong href-->
                                                <ul class="tg-themetabnav" role="tablist">
                                                    <li role="presentation" class="active">
                                                        <a href="#artandphotography" aria-controls="artandphotography" role="tab" data-toggle="tab">Art &amp; Photography</a>
                                                    </li>
                                                    <li role="presentation">
                                                        <a href="#biography" aria-controls="biography" role="tab" data-toggle="tab">Biography</a>
                                                    </li>
                                                </ul>
                                                <!-- danh sách thể loại -->
                                                <!-- chi tiết các thể loại -->
                                                <!-- lưu ý đặt id giống với href danh sách phía trên -->
                                                <div class="tab-content tg-themetabcontent">
                                                    <div role="tabpanel" class="tab-pane active" id="artandphotography">
                                                        <ul>
                                                            <li>
                                                                <div class="tg-linkstitle">
                                                                    <h2>Architecture</h2>
                                                                </div>
                                                                <ul>
                                                                    <li><a href="products.html">Tough As Nails</a></li>
                                                                    <li><a href="products.html">Pro Grease Monkey</a></li>
                                                                    <li><a href="products.html">Building Memories</a></li>
                                                                    <li><a href="products.html">Bulldozer Boyz</a></li>
                                                                    <li><a href="products.html">Build Or Leave On Us</a></li>
                                                                </ul>
                                                                <a class="tg-btnviewall" href="products.html">View All</a>
                                                            </li>
                                                            <li>
                                                                <div class="tg-linkstitle">
                                                                    <h2>Art Forms</h2>
                                                                </div>
                                                                <ul>
                                                                    <li><a href="products.html">Consectetur adipisicing</a></li>
                                                                    <li><a href="products.html">Aelit sed do eiusmod</a></li>
                                                                    <li><a href="products.html">Tempor incididunt labore</a></li>
                                                                    <li><a href="products.html">Dolore magna aliqua</a></li>
                                                                    <li><a href="products.html">Ut enim ad minim</a></li>
                                                                </ul>
                                                                <a class="tg-btnviewall" href="products.html">View All</a>
                                                            </li>
                                                            <li>
                                                                <div class="tg-linkstitle">
                                                                    <h2>History</h2>
                                                                </div>
                                                                <ul>
                                                                    <li><a href="products.html">Veniam quis nostrud</a></li>
                                                                    <li><a href="products.html">Exercitation</a></li>
                                                                    <li><a href="products.html">Laboris nisi ut aliuip</a></li>
                                                                    <li><a href="products.html">Commodo conseat</a></li>
                                                                    <li><a href="products.html">Duis aute irure</a></li>
                                                                </ul>
                                                                <a class="tg-btnviewall" href="products.html">View All</a>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <figure><img src="{{ asset('images/img-01.png') }}" alt="image description"></figure>
                                                                <div class="tg-textbox">
                                                                    <h3>More Than<br></br><span>12,0657,53</span>Books Collection</h3>
                                                                    <div class="tg-description">
                                                                        <p>Consectetur adipisicing elit sed doe eiusmod tempor incididunt laebore toloregna aliqua enim.</p>
                                                                    </div>
                                                                    <a class="tg-btn" href="products.html">view all</a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div role="tabpanel" class="tab-pane" id="biography">
                                                        <ul>
                                                            <li>
                                                                <div class="tg-linkstitle">
                                                                    <h2>History</h2>
                                                                </div>
                                                                <ul>
                                                                    <li><a href="products.html">Veniam quis nostrud</a></li>
                                                                    <li><a href="products.html">Exercitation</a></li>
                                                                    <li><a href="products.html">Laboris nisi ut aliuip</a></li>
                                                                    <li><a href="products.html">Commodo conseat</a></li>
                                                                    <li><a href="products.html">Duis aute irure</a></li>
                                                                </ul>
                                                                <a class="tg-btnviewall" href="products.html">View All</a>
                                                            </li>
                                                            <li>
                                                                <div class="tg-linkstitle">
                                                                    <h2>Architecture</h2>
                                                                </div>
                                                                <ul>
                                                                    <li><a href="products.html">Tough As Nails</a></li>
                                                                    <li><a href="products.html">Pro Grease Monkey</a></li>
                                                                    <li><a href="products.html">Building Memories</a></li>
                                                                    <li><a href="products.html">Bulldozer Boyz</a></li>
                                                                    <li><a href="products.html">Build Or Leave On Us</a></li>
                                                                </ul>
                                                                <a class="tg-btnviewall" href="products.html">View All</a>
                                                            </li>
                                                            <li>
                                                                <div class="tg-linkstitle">
                                                                    <h2>Art Forms</h2>
                                                                </div>
                                                                <ul>
                                                                    <li><a href="products.html">Consectetur adipisicing</a></li>
                                                                    <li><a href="products.html">Aelit sed do eiusmod</a></li>
                                                                    <li><a href="products.html">Tempor incididunt labore</a></li>
                                                                    <li><a href="products.html">Dolore magna aliqua</a></li>
                                                                    <li><a href="products.html">Ut enim ad minim</a></li>
                                                                </ul>
                                                                <a class="tg-btnviewall" href="products.html">View All</a>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <figure><img src="{{ asset('images/img-01.png') }}" alt="image description"></figure>
                                                                <div class="tg-textbox">
                                                                    <h3>More Than<br></br><span>12,0657,53</span>Books Collection</h3>
                                                                    <div class="tg-description">
                                                                        <p>Consectetur adipisicing elit sed doe eiusmod tempor incididunt laebore toloregna aliqua enim.</p>
                                                                    </div>
                                                                    <a class="tg-btn" href="products.html">view all</a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <!-- chi tiết các thể loại -->
                                            </div>
                                        </li>
                                            <!-- show menu chi tiết lớn -->
                                            <!-- show nút HOME có hiển thị menu ẩn-->
                                            <!-- show nút HOME có hiển thị menu ẩn-->
                                            <!-- show nút Best selling -->
                                        <li><a href="products.html">Bán chạy</a></li>
                                            <!-- show nút Best selling -->
                                            <!-- show nút Hamburger -->
                                        <li class="menu-item-has-children">
                                            <a href="javascript:void(0);"><i class="icon-menu"></i></a>
                                            <ul class="sub-menu">
                                                <li class="menu-item-has-children">
                                                    <a href="aboutus.html">Products</a>
                                                    <ul class="sub-menu">
                                                        <li><a href="products.html">Products</a></li>
                                                        <li><a href="productdetail.html">Product Detail</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="aboutus.html">About Us</a></li>
                                                <li><a href="404error.html">404 Error</a></li>
                                                <li><a href="comingsoon.html">Coming Soon</a></li>
                                            </ul>
                                        </li>
                                            <!-- show nút Hamburger -->
                                    </ul>
                                    </div>
                                    <!-- show toggle -->
                                </nav>
                                <!-- giỏ hàng -->
                                <div class="tg-wishlistandcart">
                                    <!-- chi hien thi khi nguoi dung dang nhap -->
                                    @if (Auth::id())
                                    <!-- cap nhat thong tin ca nhan -->
                                    <div class="dropdown tg-themedropdown tg-wishlistdropdown">
										{{-- <a href="/manage-info" id="tg-wishlisst" class="tg-btnthemedropdown" style="font-family: Arial, Helvetica, sans-serif">
                                        <i class="glyphicon glyphicon-user"></i>
										</a> --}}
                                        <a href="javascript:void(0);" id="tg-wishlisst" class="tg-btnthemedropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											<i class="glyphicon glyphicon-user"></i>
										</a>
										<div class="dropdown-menu tg-themedropdownmenu" aria-labelledby="tg-wishlisst">
											<div class="tg-description">
                                                <a href="/manage-info" style="color: gray"><h5>Thông tin tài khoản</h5></a>
                                                <hr>
                                            </div>
                                            <div class="tg-description">
                                                <a href="/manage-voucher-wallet" style="color: gray"><h5>Tích lũy điểm đổi voucher</h5></a>
                                            </div>
										</div>
									</div>
                                    <!-- Đơn hàng đã đặt -->
                                    <div class="dropdown tg-themedropdown tg-wishlistdropdown">
										<a href="/list-order" id="tg-wishlisst" class="tg-btnthemedropdown" style="font-family: Arial, Helvetica, sans-serif">
                                        <i class="glyphicon glyphicon-list-alt"></i>
										</a>
									</div>
                                    <!-- wish list -->
                                    {{-- <div class="dropdown tg-themedropdown tg-wishlistdropdown">
										<a href="javascript:void(0);" id="tg-wishlisst" class="tg-btnthemedropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											<span class="tg-themebadge">3</span>
											<i class="icon-heart"></i>
										</a>
										<div class="dropdown-menu tg-themedropdownmenu" aria-labelledby="tg-wishlisst">
											<div class="tg-description"><p>No products were added to the wishlist!</p></div>
										</div>
									</div> --}}
                                    @endif
                                    <!-- mini cart -->
                                    <div class="dropdown tg-themedropdown tg-minicartdropdown">
                                        <a href="javascript:void(0);" id="tg-minicart" class="tg-btnthemedropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span id="show-number-cart" class="tg-themebadge">...</span>
                                            <i class="icon-cart"></i>
                                            <input type="number" value="0" style="display: none" id="value-number-cart">
                                        </a>
                                        <div class="dropdown-menu tg-themedropdownmenu" aria-labelledby="tg-minicart">
                                            <div id="product-minicart" class="tg-minicartbody">
                                                <!-- san pham -->
                                                <!-- <div class="tg-minicarproduct">
                                                    <figure>
                                                        <img src="{{ asset('images/products/img-03.jpg') }}" alt="image description">
                                                    </figure>
                                                    <div class="tg-minicarproductdata">
                                                        <h5><a href="">Have Faith In Your Soul</a></h5>
                                                        <h6><a href="">$ 12.15</a></h6>
                                                    </div>
                                                </div> -->
                                                <!-- san pham -->
                                            </div>
                                            <div class="tg-minicartfoot">
                                                 <a class="tg-btnemptycart" href="javascript:void(0);">
                                                    <i class="fa fa-trash-o"></i>
                                                    <span>Clear Your Cart</span>
                                                </a>

                                                <!-- php test hiện tổng tiền -->

                                                @php
                                                    if(isset($tamtinh))
                                                        $tongtien = $tamtinh;
                                                    else
                                                        $tongtien = 0;
                                                    
                                                @endphp
                                                
                                                <span class="tg-subtotal">Subtotal: <strong id="mini-giatien"></strong>{{ number_format($tongtien, 0, ',', '.') }} ₫</span> 
                                                <div class="tg-btns">
                                                    <a class="tg-btn tg-active" href="/cart">Xem thêm</a>
                                                     <a class="tg-btn" href="javascript:void(0);">Checkout</a> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- giỏ hàng -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            @show
        </header>
        @yield('main')
        <footer id="tg-footer" class="tg-footer tg-haslayout">
            <div class="tg-footerarea">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <ul class="tg-clientservices">
                                <li class="tg-devlivery">
                                    <span class="tg-clientserviceicon"><i class="icon-rocket"></i></span>
                                    <div class="tg-titlesubtitle">
                                        <h3>Nhanh chóng</h3>
                                    </div>
                                </li>
                                <li class="tg-discount">
                                    <span class="tg-clientserviceicon"><i class="icon-tag"></i></span>
                                    <div class="tg-titlesubtitle">
                                        <h3>Nhiều khuyến mãi</h3>
                                    </div>
                                </li>
                                <li class="tg-quality">
                                    <span class="tg-clientserviceicon"><i class="icon-leaf"></i></span>
                                    <div class="tg-titlesubtitle">
                                        <h3>Chất lượng</h3>
                                    </div>
                                </li>
                                <li class="tg-support">
                                    <span class="tg-clientserviceicon"><i class="icon-heart"></i></span>
                                    <div class="tg-titlesubtitle">
                                        <h3>hỗ trợ 24/7</h3>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {{-- <div class="tg-threecolumns">
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                <div class="tg-footercol">
                                    <strong class="tg-logo"><a href="javascript:void(0);"><img src="{{ asset('images/flogo.png') }}" alt="image description"></a></strong>
                                    <ul class="tg-contactinfo">
                                        <li>
                                            <i class="icon-apartment"></i>
                                            <address>Suit # 07, Rose world Building, Street # 02, AT246T Manchester</address>
                                        </li>
                                        <li>
                                            <i class="icon-phone-handset"></i>
                                            <span>
                                                <em>0800 12345 - 678 - 89</em>
                                                <em>+4 1234 - 4567 - 67</em>
                                            </span>
                                        </li>
                                        <li>
                                            <i class="icon-clock"></i>
                                            <span>Serving 7 Days A Week From 9am - 5pm</span>
                                        </li>
                                        <li>
                                            <i class="icon-envelope"></i>
                                            <span>
                                                <em><a href="mailto:support@domain.com">support@domain.com</a></em>
                                                <em><a href="mailto:info@domain.com">info@domain.com</a></em>
                                            </span>
                                        </li>
                                    </ul>
                                    <ul class="tg-socialicons">
                                        <li class="tg-facebook"><a href="javascript:void(0);"><i class="fa fa-facebook"></i></a></li>
                                        <li class="tg-twitter"><a href="javascript:void(0);"><i class="fa fa-twitter"></i></a></li>
                                        <li class="tg-linkedin"><a href="javascript:void(0);"><i class="fa fa-linkedin"></i></a></li>
                                        <li class="tg-googleplus"><a href="javascript:void(0);"><i class="fa fa-google-plus"></i></a></li>
                                        <li class="tg-rss"><a href="javascript:void(0);"><i class="fa fa-rss"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                <div class="tg-footercol tg-widget tg-widgetnavigation">
                                    <div class="tg-widgettitle">
                                        <h3>Shipping And Help Information</h3>
                                    </div>
                                    <div class="tg-widgetcontent">
                                        <ul>
                                            <li><a href="javascript:void(0);">Terms of Use</a></li>
                                            <li><a href="javascript:void(0);">Terms of Sale</a></li>
                                            <li><a href="javascript:void(0);">Returns</a></li>
                                            <li><a href="javascript:void(0);">Privacy</a></li>
                                            <li><a href="javascript:void(0);">Cookies</a></li>
                                            <li><a href="javascript:void(0);">Contact Us</a></li>
                                            <li><a href="javascript:void(0);">Our Affiliates</a></li>
                                            <li><a href="javascript:void(0);">Vision &amp; Aim</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="javascript:void(0);">Our Story</a></li>
                                            <li><a href="javascript:void(0);">Meet Our Team</a></li>
                                            <li><a href="javascript:void(0);">FAQ</a></li>
                                            <li><a href="javascript:void(0);">Testimonials</a></li>
                                            <li><a href="javascript:void(0);">Join Our Team</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="tg-footercol tg-widget tg-widgettopsellingauthors">
                                    <div class="tg-widgettitle">
                                        <h3>Top Selling Authors</h3>
                                    </div>
                                    <div class="tg-widgetcontent">
                                        <ul>
                                            <li>
                                                <figure><a href="javascript:void(0);"><img src="{{ asset('images/author/imag-09.jpg') }}" alt="image description"></a></figure>
                                                <div class="tg-authornamebooks">
                                                    <h4><a href="javascript:void(0);">Jude Morphew</a></h4>
                                                    <p>21,658 Published Books</p>
                                                </div>
                                            </li>
                                            <li>
                                                <figure><a href="javascript:void(0);"><img src="{{ asset('images/author/imag-10.jpg') }}" alt="image description"></a></figure>
                                                <div class="tg-authornamebooks">
                                                    <h4><a href="javascript:void(0);">Shaun Humes</a></h4>
                                                    <p>20,257 Published Books</p>
                                                </div>
                                            </li>
                                            <li>
                                                <figure><a href="javascript:void(0);"><img src="{{ asset('images/author/imag-11.jpg') }}" alt="image description"></a></figure>
                                                <div class="tg-authornamebooks">
                                                    <h4><a href="javascript:void(0);">Kathrine Culbertson</a></h4>
                                                    <p>15,686 Published Books</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> --}}
                    </div>
                </div>
            </div>
            <div class="tg-newsletter">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <h4>Nhận thông báo từ cửa hàng!</h4>
                            <h5>Được nhận những phần thưởng hấp dẫn nhất.</h5>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <form class="tg-formtheme tg-formnewsletter">
                                <fieldset>
                                    <input type="email" name="email" class="form-control" placeholder="Enter Your Email ID">
                                    <button type="button"><i class="icon-envelope"></i></button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tg-footerbar">
                <a id="tg-btnbacktotop" class="tg-btnbacktotop" href="javascript:void(0);"><i class="icon-chevron-up"></i></a>
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <span class="tg-paymenttype"><img src="{{ asset('images/paymenticon.png') }}" alt="image description"></span>
                            <span class="tg-copyright">2017 All Rights Reserved By &copy; Book Library</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
        <!-- Scripts -->
        
        <script src="{{ asset('js/app.js') }}"></script>
        <script src="{{ asset('js/all.js') }}"></script>

        <script src="https://maps.google.com/maps/api/js?key=AIzaSyCR-KEWAVCn52mSdeVeTqZjtqbmVJyfSus&amp;language=en"></script>
        <script >// Remove Items From Cart
            $('button.remove').click(function(){
                event.preventDefault();
                $( this ).parent().parent().parent().hide( 400 );
            });

            function logout() {
                axios.post('/logout')
                .then(() => {
                    window.location.replace("/");
                })
            }
        </script>
        
        {{-- bot man --}}
        <script>
            var botmanWidget = {
                frameEndpoint: '<?php echo asset('chatbot');?>',
                aboutText: 'Write Something',
                mainColor:'#77b748',
                bubbleBackground:'#77b748',
                title:'Book Library',
                headerTextColor: '#fff',
                introMessage: '✋ chat "mua hàng" để chúng tôi hỗ trợ bạn!'
            };
        </script>
        <script src='https://cdn.jsdelivr.net/npm/botman-web-widget@0/build/js/widget.js'></script>
        <script>
            function link(id) {
                alert(id)
            }
        </script>
<script>
    window.onload = function() {
        axios.get('/get-total-product-in-cart')
        .then((response) => {
            if (response.data.result == true) {
                $('#show-number-cart').html(response.data.soluong);
                $('#value-number-cart').val(response.data.soluong);

                $('#product-minicart').append(response.data.divCartMini);
            }
            else {
                $('#show-number-cart').html(0);
                $('#value-number-cart').val(0);
            }
        })
    };
</script>
</body>
</html>
