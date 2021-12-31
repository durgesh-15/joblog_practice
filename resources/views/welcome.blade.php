<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
        <link href="{{ asset('css/styles.css')}}" rel="stylesheet" />

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">
    </head>
    <body>
        <div id="app">
            <!-- <app /> -->
            <router-view></router-view>
        </div>
    <script type="text/javascript" src="{{asset('js/app.js')}}"></script>
    <!-- Bootstrap core JS-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Core theme JS-->
    <script src="{{asset('js/scripts.js')}}"></script>

    </body>
</html>
