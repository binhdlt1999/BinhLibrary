@extends('layouts.app')
<!-- Main Start -->
@section('main')
<main id="tg-main" class="tg-main tg-haslayout">
	<!--************************************
			Best Selling Start
	*************************************-->
	<!--  -->
	<section class="tg-sectionspace tg-haslayout">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<div class="tg-sectionhead">
						<h2><span>Được lựa chọn nhiều nhất</span>Sản phẩm nổi bật</h2>
						<a class="tg-btn" href="/all">Xem tất cả</a>
					</div>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<div id="tg-bestsellingbooksslider" class="tg-bestsellingbooksslider tg-bestsellingbooks owl-carousel">
						<!-- sách -->
						@foreach ($bestSelling as $sach)
							<div class="item">
								<div class="tg-postbook">
									<figure class="tg-featureimg">
										<div class="tg-bookimg">
											<div class="tg-frontcover" style="height: 250px"><img src="images/books/{{$sach->hinhanh}}" alt="image description"  style="height: 250px"></div>
											<div class="tg-backcover" style="height: 240px"><img src="images/books/{{$sach->hinhanh}}" alt="image description" style="height: 240px"></div>
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
										<!-- <li class="quick-view"><a href="{{url('/test/'.$sach->id)}}">them</a></li> -->
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
						<!-- sách -->
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--************************************
			Best Selling End
	*************************************-->
	<!--************************************
			Featured Item Start
	*************************************-->
	<section class="tg-bglight tg-haslayout">
		<div class="container">
			<div class="row">
				<div class="tg-featureditm">
					<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 hidden-sm hidden-xs">
						<figure><img src="images/img-02.png" alt="image description"></figure>
					</div>
					<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
						<div class="tg-featureditmcontent">
							<div class="tg-themetagbox"><span class="tg-themetag">featured</span></div>
							<div class="tg-booktitle">
								<h3><a href="detail-product/{{ $latest->id }}">{{$latest->tensach}}</a></h3>
							</div>
							<div class="tg-priceandbtn" style="margin-top: 15%">
								<span class="tg-bookprice">
									<ins>{{number_format($latest->giakhuyenmai, 0, ',', '.')}}  ₫</ins>
									<del>{{number_format($latest->gia, 0, ',', '.')}}  ₫</del>
								</span>
								<button type="button" class="tg-btn tg-btnstyletwo" onclick="addProduct('{{ $latest->id }}')">
									<i class="fa fa-shopping-basket"></i>
									<em>Thêm vào giỏ</em>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--************************************
			Featured Item End
	*************************************-->
	<!--************************************
			New Release Start
	*************************************-->
	<section class="tg-sectionspace tg-haslayout">
		<div class="container">
			<div class="row">
				<div class="tg-newrelease">
					<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
						<div class="tg-sectionhead">
							<h2>Sản phẩm mới</h2>
						</div>
						<div class="tg-description">
							<h5>
								Đây là những đầu sách mới nhất tại Book Library. Chúng tôi rất hân hạnh được cung cấp cho các bạn những quyển sách mới mẻ và hấp dẫn nhất
							</h5>
						</div>
						<div class="tg-btns">
							<a class="tg-btn tg-active" href="javascript:void(0);">Xem thêm</a>
						</div>
					</div>
					<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
						<div class="row">
							<div class="tg-newreleasebooks">
								@php
									$i = 0;
								@endphp
								@foreach ($threeLatest as $sach)
									@if($i < 2)
									<div class="col-xs-4 col-sm-4 col-md-6 col-lg-4">
										<div class="tg-postbook">
											<figure class="tg-featureimg">
												<div class="tg-bookimg">
													<div class="tg-frontcover" style="height: 250px"><img src="images/books/{{$sach->hinhanh}}" alt="image description"  style="height: 250px"></div>
													<div class="tg-backcover" style="height: 240px"><img src="images/books/{{$sach->hinhanh}}" alt="image description" style="height: 240px"></div>
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
												<div class="tg-booktitle">
													<h3><a href="detail-product/{{ $sach->id }}">{{substr($sach->tensach, 0, 15)}}</a></h3>
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
									@else
									<!-- khi kéo nhỏ lại hàng sách này sẽ mất -->
									<div class="col-xs-4 col-sm-4 col-md-3 col-lg-4 hidden-md">
										<div class="tg-postbook">
											<figure class="tg-featureimg">
												<div class="tg-bookimg">
													<div class="tg-frontcover" style="height: 250px"><img src="images/books/{{$sach->hinhanh}}" alt="image description"  style="height: 250px"></div>
													<div class="tg-backcover" style="height: 240px"><img src="images/books/{{$sach->hinhanh}}" alt="image description" style="height: 240px"></div>
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
												<div class="tg-booktitle">
													<h3><a href="detail-product/{{ $sach->id }}">{{substr($sach->tensach, 0, 15)}}</a></h3>
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
									@endif
									@php
										$i++;
									@endphp
								@endforeach
								<!-- khi kéo nhỏ lại hàng sách này sẽ mất -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--************************************
			New Release End
	*************************************-->
	<!--************************************
			Collection Count Start
	*************************************-->
	<!--************************************
			Collection Count End
	*************************************-->
	<!--************************************
			Picked By Author Start
	*************************************-->
	<section class="tg-sectionspace tg-haslayout">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<div class="tg-sectionhead">
						<h2><span>Bộ ba nổi bật và mới nhất</span>Được Đề cử bởi cửa hàng</h2>
						<a class="tg-btn" href="javascript:void(0);">Xem thêm</a>
					</div>
				</div>
				<div id="tg-pickedbyauthorslider" class="tg-pickedbyauthor tg-pickedbyauthorslider owl-carousel">
					<!-- thêm sách tác giả chọn ở đây -->
					@foreach ($threeLatest as $sach)
					<div class="item">
						<div class="tg-postbook">
							<figure class="tg-featureimg">
								<div class="tg-bookimg">
									<div class="tg-frontcover" style="height: 250px"><img src="images/books/{{$sach->hinhanh}}" alt="image description" style="height: 250px"></div>
								</div>
								<div class="tg-hovercontent">
									<div class="tg-description">
										<p>{{ $sach->mota }}</p>
									</div>
									<strong class="tg-bookpage">Số trang: 206</strong>
									<strong class="tg-bookcategory">
										Thể loại:
										@for($i = 0; $i < count($sach->theloai); $i++)
											@if($i < count($sach->theloai)-1)
											<a href="/search/?genre={{ $sach->theloai[$i]->id }}" style="color: gray">{{ $sach->theloai[$i]->tenloai }},</a>
											@else
											<a href="/search/?genre={{ $sach->theloai[$i]->id }}" style="color: gray">{{ $sach->theloai[$i]->tenloai }}</a>
											@endif
										@endfor
									</strong>
									<strong class="tg-bookprice">
										Giá:
										@if ($sach->giakhuyenmai)
										{{ number_format($sach->giakhuyenmai, 0, ',', '.') }} ₫
										@else
										{{ number_format($sach->gia, 0, ',', '.') }} ₫
										@endif
									</strong>
								</div>
							</figure>
							<div class="tg-postbookcontent">
								<div class="tg-booktitle">
									<h3><a href="detail-product/{{ $sach->id }}">{{ $sach->tensach }}</a></h3>
								</div>
								<span class="tg-bookwriter">By: <a href="javascript:void(0);">{{ $sach->tacgia }}</a></span>
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
					<!-- thêm sách tác giả chọn ở đây -->
				</div>
			</div>
		</div>
	</section>
	<!--************************************
			Picked By Author End
	*************************************-->
	<!--************************************
			Testimonials Start
	*************************************-->
	<section class="tg-parallax tg-bgtestimonials tg-haslayout" data-z-index="-100" data-appear-top-offset="600" data-parallax="scroll" data-image-src="images/parallax/bgparallax-05.jpg">
		<div class="tg-sectionspace tg-haslayout">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-push-2">
						<div id="tg-testimonialsslider" class="tg-testimonialsslider tg-testimonials owl-carousel">
							<div class="item tg-testimonial">
								<figure><img src="{{ asset('images/author/imag-16.jpg') }}" alt="image description"></figure>
								<blockquote><q>Những sản phẩm chất lượng, tới từ nơi chất lượng nhất. Chúng tôi dành nhiều thời gian để tìm những sản phẩm chất lượng cho các bạn hơn bao giờ hết.</q></blockquote>
								<div class="tg-testimonialauthor">
									<h3>Đinh Lê Sông Bình</h3>
									<span>CEO - Tổng giám đốc điều hành Book Library</span>
								</div>
							</div>
							<div class="item tg-testimonial">
								<figure><img src="{{ asset('images/author/imag-20.jpg') }}" alt="image description"></figure>
								<blockquote><q>Những sản phẩm chất lượng, tới từ nơi chất lượng nhất. Chúng tôi dành nhiều thời gian để tìm những sản phẩm chất lượng cho các bạn hơn bao giờ hết.</q></blockquote>
								<div class="tg-testimonialauthor">
									<h3>Nguyễn Minh Nhựt</h3>
									<span>Trưởng Bộ phận quảng cáo Book Library</span>
								</div>
							</div>
							<div class="item tg-testimonial">
								<figure><img src="{{ asset('images/author/anhminh.jpg') }}" alt="image description"></figure>
								<blockquote><q>Những sản phẩm chất lượng, tới từ nơi chất lượng nhất. Chúng tôi dành nhiều thời gian để tìm những sản phẩm chất lượng cho các bạn hơn bao giờ hết.</q></blockquote>
								<div class="tg-testimonialauthor">
									<h3>Nguyễn Vũ Anh Minh</h3>
									<span>Trưởng Bộ phận bán kem trộn Việt Nam</span>
								</div>
							</div>
							<!-- thêm 2 cái ở đây để click tới lui -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--************************************
			Testimonials End
	*************************************-->
	
	<!--************************************
			Call to Action Start
	*************************************-->
	<!--************************************
			Call to Action End
	*************************************-->
	<!--************************************
			Latest News Start
	*************************************-->
	<!-- <section class="tg-sectionspace tg-haslayout">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<div class="tg-sectionhead">
						<h2><span>Latest News &amp; Articles</span>What's Hot in The News</h2>
						<a class="tg-btn" href="javascript:void(0);">Xem thêm</a>
					</div>
				</div>
				<div id="tg-postslider" class="tg-postslider tg-blogpost owl-carousel">
					<article class="item tg-post">
						<figure><a href="javascript:void(0);"><img src="images/blog/img-01.jpg" alt="image description"></a></figure>
						<div class="tg-postcontent">
							<ul class="tg-bookscategories">
								<li><a href="javascript:void(0);">Adventure</a></li>
								<li><a href="javascript:void(0);">Fun</a></li>
							</ul>
							<div class="tg-themetagbox"><span class="tg-themetag">featured</span></div>
							<div class="tg-posttitle">
								<h3><a href="javascript:void(0);">Where The Wild Things Are</a></h3>
							</div>
							<span class="tg-bookwriter">By: <a href="javascript:void(0);">Kathrine Culbertson</a></span>
							<ul class="tg-postmetadata">
								<li><a href="javascript:void(0);"><i class="fa fa-comment-o"></i><i>21,415 Comments</i></a></li>
								<li><a href="javascript:void(0);"><i class="fa fa-eye"></i><i>24,565 Views</i></a></li>
							</ul>
						</div>
					</article>
				</div>
			</div>
		</div>
	</section> -->
	<!--************************************
			Latest News End
	*************************************-->
</main>
@endsection
<!-- <script>
	function addProduct(id){
		console.log(id)
	}
</script> -->
<!--************************************
		Main End

