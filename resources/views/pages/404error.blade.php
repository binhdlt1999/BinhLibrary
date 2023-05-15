@extends('layouts.app')
@section('menuBar')
@endsection
<!-- Main Start -->
@section('main')
<main id="tg-main" class="tg-main tg-haslayout">
	<!--************************************
			404 Error Start
	*************************************-->
	<div class="tg-sectionspace tg-haslayout">
		<div class="container">
			<div class="row">
				<div class="tg-404error">
					<div class="col-xs-12 col-sm-12 col-md-8 col-md-push-2 col-lg-6 col-lg-push-3">
						<div class="tg-404errorcontent">
							<h2>Ooops! Could Not Find It</h2>
							<span>404</span>
						</div>
						<form class="tg-formtheme tg-formsearch">
							<fieldset>
								<input type="text" name="search" class="typeahead form-control" placeholder="Search Here">
								<button type="submit"><i class="icon-magnifier"></i></button>
							</fieldset>
							<div class="tg-gobackhome">
								<span>Or Goto</span>
								<a href="javascript:void(0);">Homepage</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--************************************
			404 Error End
	*************************************-->
</main>
@endsection