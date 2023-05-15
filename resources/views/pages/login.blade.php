<!doctype html>
<html class="no-js" lang="zxx">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	 <title>Book Library</title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="{{ asset('css/login.css') }}" rel="stylesheet" type="text/css" media="all">
</head>
<body>
	<div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true">
		<div class="signup">
			<form>
				@csrf
				<label for="chk" aria-hidden="true" style="color: #423446">Đăng ký</label>
				<input type="text" id="sign-up-username" placeholder="Username">
				<input type="password" id="sign-up-password" placeholder="Password">
				<input type="password" id="sign-up-re-password" placeholder="Re-enter password">
				<button type="button" onClick="signUp()" style="background-color: #ffc1c2; color: #423446">Đăng ký</button>
			</form>
		</div>

		<div class="login">
			<form>
				@csrf
				<label for="chk" aria-hidden="true" style="padding-top: 3%; color: #423446">Đăng nhập</label>
				<input type="text" id="login-username" value="songbinh" placeholder="Username">
				<input type="password" id="login-password" value="123456" placeholder="Password">
				<button type="button" onClick="login()" style="background-color: #ffc1c2; color: #423446">Đăng nhập</button>
				<br>
				<button type="button" onClick="" style="background-color: #3b82f6">Facebook <i class="fa-solid fa-user"></i></button>
			</form>
		</div>
	</div>
	<!-- show errors -->
	<div class="contain-inform" id="contain-errors">
		<div class="show-inform">
			<ul id="error-username"></ul>
			<ul id="error-password"></ul>
			<ul id="error-re-password"></ul>
		</div>
	</div>
	<!-- show success -->
	<div class="contain-inform" id="contain-success">  
		<div class="show-inform">
			<ul id="sign-up-success" style="color: blue">
				<li>Đăng ký thành công</li>
				<li>Click đăng nhập để tiến hành đăng nhập</li>
				
			</ul>
		</div>
	</div>
	<!-- show login that bai -->
	<div class="contain-inform" id="contain-login-fail">
		<div class="show-inform">
			<ul id="login-fail">- Sai tài khoản hoặc mật khẩu</ul>
		</div>
	</div>
	<script src="{{ asset('js/app.js') }}"></script>
	<script src="{{ asset('js/all.js') }}"></script>
	<script src="{{ asset('js/login.js') }}"></script>

	<script src="https://maps.google.com/maps/api/js?key=AIzaSyCR-KEWAVCn52mSdeVeTqZjtqbmVJyfSus&amp;language=en"></script>
</body>
</html>