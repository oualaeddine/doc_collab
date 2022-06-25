<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600">

        <link rel="stylesheet" href="{{ asset('css/app.css') }}">

        <link rel="stylesheet" href="{{ asset('app-assets/vendors/css/vendors.min.css') }}">

        <link rel="stylesheet" href="{{ asset('app-assets/css/bootstrap.css') }}">
        <link rel="stylesheet" href="{{ asset('app-assets/css/bootstrap-extended.css') }}">
        <link rel="stylesheet" href="{{ asset('app-assets/css/colors.css') }}">
        <link rel="stylesheet" href="{{ asset('app-assets/css/components.css') }}">
        <link rel="stylesheet" href="{{ asset('app-assets/css/themes/dark-layout.css') }}">
        <link rel="stylesheet" href="{{ asset('app-assets/css/themes/bordered-layout.css') }}">
        <link rel="stylesheet" href="{{ asset('app-assets/css/themes/semi-dark-layout.css') }}">
        <!-- Styles -->
        <link rel="stylesheet" href="{{ asset('app-assets/css/core/menu/menu-types/vertical-menu.css') }}">
        <link rel="stylesheet" href="{{ asset('app-assets/css/plugins/forms/form-validation.css') }}">
        <link rel="stylesheet" href="{{ asset('app-assets/css/pages/authentication.css') }}">

        <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">



    </head>
    <body class="vertical-layout vertical-menu-modern blank-page navbar-floating footer-static  " data-open="click" data-menu="vertical-menu-modern" data-col="blank-page">
        <div class="font-sans text-gray-900 antialiased">
            {{ $slot }}
        </div>


        <!-- Scripts -->
        <script src="{{ asset('js/app.js') }}" defer></script>

        <script src="{{ asset('app-assets/vendors/js/vendors.min.js') }}" ></script>
        <script src="{{ asset('app-assets/vendors/js/forms/validation/jquery.validate.min.js') }}" ></script>

        <script src="{{ asset('app-assets/js/core/app-menu.js') }}" ></script>
        <script src="{{ asset('app-assets/js/core/app.js') }}" ></script>


        <script src="{{ asset('app-assets/js/scripts/pages/auth-login.js') }}" ></script>

        <script>
            $(window).on('load', function() {
                if (feather) {
                    feather.replace({
                        width: 14,
                        height: 14
                    });
                }
            })
        </script>
    </body>
</html>
