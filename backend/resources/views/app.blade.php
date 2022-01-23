@extends('layouts.app')
@section('content')
    @auth
        @php
            $user_id = Auth::id();
        @endphp
        <script>
            window.user_id = @json($user_id);
        </script>
    @endauth
    <div id="app">
    </div>
@endsection