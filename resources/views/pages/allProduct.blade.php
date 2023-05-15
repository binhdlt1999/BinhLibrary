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
    <div class="tg-innerbanner tg-haslayout tg-parallax tg-bginnerbanner" data-z-index="-100" data-appear-top-offset="600" data-parallax="scroll" data-image-src="images/parallax/bgparallax-07.jpg">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="tg-innerbannercontent">
                        <h1>Products</h1>
                        <ol class="tg-breadcrumb">
                            <li><a href="/">home</a></li>
                            <li class="tg-active">Products</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--************************************
            Inner Banner End
    *************************************-->
    <!--************************************
            Main Start
    *************************************-->
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
                                <div class="tg-products">
                                    <div class="tg-sectionhead">
                                        <h2><span>Nơi trưng bày những quyển sách hay nhất</span>Danh mục sản phẩm</h2>
                                    </div>
                                    <div class="tg-productgrid">
                                        <div class="tg-refinesearch">
                                            {{-- <span>showing 1 to 8 of 20 total</span> --}}
                                            <form class="tg-formtheme tg-formsortshoitems">
                                                <fieldset>
                                                    {{-- <div class="form-group">
                                                        <label>sort by:</label>
                                                        <span class="tg-select">
                                                            <select>
                                                                <option>name</option>
                                                                <option>name</option>
                                                                <option>name</option>
                                                            </select>
                                                        </span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label>show:</label>
                                                        <span class="tg-select">
                                                            <select>
                                                                <option>8</option>
                                                                <option>16</option>
                                                                <option>20</option>
                                                            </select>
                                                        </span>
                                                    </div> --}}
                                                </fieldset>
                                            </form>
                                        </div>
                                        @foreach($allProducts as $sach)
                                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                            <div class="tg-postbook">
                                                <figure class="tg-featureimg">
                                                    <div class="tg-bookimg">
                                                        <div class="tg-frontcover" style="height: 250px"><img src="{{ asset("images/books/$sach->hinhanh") }}" alt="image description"  style="height: 250px"></div>
                                                        <div class="tg-backcover" style="height: 240px"><img src="{{ asset("images/books/$sach->hinhanh") }}" alt="image description" style="height: 240px"></div>
                                                    </div>
                                                    <a class="tg-btnaddtowishlist" href="#">
                                                        <i class="icon-heart"></i>
                                                        <span>Thêm vào yêu thích</span>
                                                    </a>
                                                </figure>
                                                <div class="tg-postbookcontent" style="height: 300px">
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
                                                    <div class="tg-themetagbox"></div>
                                                    <div class="tg-booktitle">
                                                        <h3><a href="/detail-product/{{$sach->id}}">{{substr($sach->tensach, 0, 15)}}</a></h3>
                                                    </div>
                                                    <span class="tg-bookwriter">By: {{ $sach->tacgia }}</span>
                                                    
                                                    <span class="tg-bookprice">
                                                        @if ($sach->giakhuyenmai)
                                                        <ins>{{ number_format($sach->giakhuyenmai, 0, ',', '.') }} ₫</ins>
                                                        <del>{{ number_format($sach->gia, 0, ',', '.') }} ₫</del>
                                                        @else
                                                        <ins>{{ number_format($sach->gia, 0, ',', '.') }} ₫</ins>
                                                        @endif
                                                    </span>
                                                    @if ($sach->soluong > 0)
                                                    <button type="button" class="tg-btn tg-btnstyletwo" onclick="addProduct('{{ $sach->id }}')">
                                                        <i class="fa fa-shopping-basket"></i>
                                                        <em>Thêm vào giỏ</em>
                                                    </button>
                                                    @else
                                                    <button type="button" class="tg-btn tg-btnstyletwo" disabled style="background-color: gray; border-color: gray">
                                                        <i class="fa fa-shopping-basket"></i>
                                                        <em>Hết hàng</em>
                                                    </button>
                                                    @endif
                                                </div>
                                            </div>
                                        </div>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                            @if($totalPage >= 2)
                            <div class="pull-right pagination">
                                
                                @php
                                    $i = 1;
                                @endphp

                                {{-- Previous Page Link --}}                                
                                @if ($allProducts->previousPageUrl())
                                <li>
                                    <a href="{{ $allProducts->previousPageUrl() . $search }}">
                                        <span><i class="fa fa-angle-double-left"></i></span>Previous
                                    </a>
                                </li>
                                @endif

                                {{-- Pagination Elements --}}
                                @for ($i; $i <= $totalPage; $i++)
                                    @if ($i == $allProducts->currentPage())
                                        <li class="active"><span>{{ $i }}</span></li>
                                    @else
                                    <li>
                                        <a href="{{  $allProducts->url($i) . $search }}">{{ $i }}</a>
                                    </li>
                                    @endif
                                @endfor

                                {{-- Next Page Link --}}
                                @if ($allProducts->nextPageUrl())
                                <li>
                                    <a href="{{ $allProducts->nextPageUrl() . $search }}">
                                        <span><i class="fa fa-angle-double-right"></i></span>Next
                                    </a>
                                </li>
                                @endif
                            </div>
                            @endif
                        </div>
                        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-3 pull-left">
                            <aside id="tg-sidebar" class="tg-sidebar">
                                <div class="tg-widget tg-widgetsearch">
                                    <form class="tg-formtheme tg-formsearch">
                                        <div class="form-group">
                                            {{-- <button type="submit"><i class="icon-magnifier"></i></button> --}}
                                            {{-- <input type="search" name="search" class="form-group" placeholder="Search by title, author, key..."> --}}
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
    <!--************************************
            Main End
    *************************************-->
</div>
@endsection