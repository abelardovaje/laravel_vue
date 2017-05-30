<!doctype html>
<html>
<head>
	<title>Vue app</title>
	<link rel="stylesheet" type="text/css" href="{{asset('css/bootstrap/dist/css/bootstrap.css')}}">
	<link rel="stylesheet" type="text/css" href="{{asset('css/style.css')}}">
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