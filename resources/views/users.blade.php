@extends('layouts.master')

@section('content')
	
	
	<div id="app"></div>

	
@stop


@section('scripts')
	@parent
	<script type="text/javascript" src="{{asset('dist/commons.js')}}"></script>
	<script type="text/javascript" src="{{asset('dist/user.bundle.js')}}"></script>
@stop