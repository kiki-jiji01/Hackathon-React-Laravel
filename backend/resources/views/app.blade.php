@extends('layouts.app')
@section('content')
    @auth
        @php
            $user_id = Auth::id();
        @endphp
    @endauth
    <script>
        window.user_id = @json($user_id);
    </script>
    <div id="app">
    </div>
@endsection