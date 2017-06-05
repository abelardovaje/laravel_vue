<!doctype html>
<html>
<head>
	<title>Vue app</title>
	<link rel="stylesheet" type="text/css" href="{{asset('css/bootstrap/dist/css/bootstrap.css')}}">
	<link rel="stylesheet" type="text/css" href="{{asset('css/font-awesome/css/font-awesome.css')}}">
	<link rel="stylesheet" type="text/css" href="{{asset('css/app.css')}}">
	<script type="text/javascript" src="{{asset('js/jquery/dist/jquery.js')}}"></script>
	<script type="text/javascript" src="{{asset('css/bootstrap/dist/js/bootstrap.js')}}"></script>
</head>
<body>

	<div>

		<div class="container">
			
			@yield('content')
			
		</div>
		
	</div>

	
	@yield('scripts')
</body>
</html>