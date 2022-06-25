<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0'>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

       
        <!-- Fonts -->
        <link rel="stylesheet" href="{{ asset('public/fonts/material-icon/css/material-design-iconic-font.min.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/nouislider/nouislider.min.css') }}">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600" rel="stylesheet">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
       

        <link rel="stylesheet" href="{{ asset('app-assets/vendors/css/vendors.min.css') }}">
        <link rel="stylesheet" href="{{ asset('app-assets/vendors/css/charts/apexcharts.css') }}">
        <link rel="stylesheet" href="{{ asset('app-assets/vendors/css/extensions/toastr.min.css') }}">

        <link rel="stylesheet" href="{{ asset('app-assets/vendors/css/pickers/flatpickr/flatpickr.min.css') }}">
        <link rel="stylesheet" href="{{ asset('app-assets/vendors/css/forms/select/select2.min.css') }}">

        <link rel="stylesheet" href="{{ asset('app-assets/css/bootstrap.css') }}">
        <link rel="stylesheet" href="{{ asset('app-assets/css/bootstrap-extended.css') }}">
        <link rel="stylesheet" href="{{ asset('app-assets/css/colors.css') }}">
        <link rel="stylesheet" href="{{ asset('app-assets/css/components.css') }}">
        <link rel="stylesheet" href="{{ asset('app-assets/css/themes/dark-layout.css') }}">
        <link rel="stylesheet" href="{{ asset('app-assets/css/themes/bordered-layout.css') }}">
        <link rel="stylesheet" href="{{ asset('app-assets/css/themes/semi-dark-layout.css') }}">

        <link rel="stylesheet" href="{{ asset('app-assets/css/core/menu/menu-types/vertical-menu.css') }}">
        <link rel="stylesheet" href="{{ asset('app-assets/css/pages/dashboard-ecommerce.css') }}">
        <link rel="stylesheet" href="{{ asset('app-assets/css/plugins/charts/chart-apex.css') }}">
        <link rel="stylesheet" href="{{ asset('app-assets/css/plugins/extensions/ext-component-toastr.css') }}">
        <link rel="stylesheet" href="{{ asset('app-assets/css/plugins/forms/pickers/form-flat-pickr.css') }}">
        <link rel="stylesheet" href="{{ asset('app-assets/css/pages/app-invoice.css') }}">


        <link rel="stylesheet" href="{{ asset('app-assets/vendors/css/tables/datatable/dataTables.bootstrap5.min.css') }}">
        <link rel="stylesheet" href="{{ asset('app-assets/vendors/css/tables/datatable/extensions/dataTables.checkboxes.css') }}">
        <link rel="stylesheet" href="{{ asset('app-assets/vendors/css/tables/datatable/responsive.bootstrap5.min.css') }}">
        {{-- <link rel="stylesheet" href="{{ asset('app-assets/css/pages/app-invoice-list.css') }}"> --}}
        <link rel="stylesheet" href="{{ asset('app-assets/vendors/css/forms/select/select2.min.css') }}">


        <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
        <!-- Styles -->

        <link rel="stylesheet" href="{{ asset('app-assets/vendors/css/tables/datatable/buttons.bootstrap5.min.css') }}">
        <link rel="stylesheet" href="{{ asset('app-assets/vendors/css/tables/datatable/rowGroup.bootstrap5.min.css') }}">
        <link rel="stylesheet" href="{{ asset('app-assets/css/plugins/forms/form-validation.css') }}">

        <style>
            .disable-text-selection {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            }
            </style>

    </head>
    <body class="vertical-layout vertical-menu-modern  navbar-floating footer-static disable-text-selection " data-open="click" data-menu="vertical-menu-modern" data-col="">

                @include('layouts.navigation')

                @include('layouts.menu')



                    <!-- Page Content -->

                            <main>
                                {{ $slot }}
                            </main>

                    <!-- Content Container END -->



                    @include('layouts.footer')
       <!-- Scripts -->
<!-- JS -->
<script src="{{ asset('vendor/jquery/jquery.min.js') }}"></script>
<script src="{{ asset('vendor/jquery-validation/dist/jquery.validate.min.js') }}"></script>
<script src="{{ asset('vendor/jquery-validation/dist/additional-methods.min.js') }}"></script>
<script src="{{ asset('vendor/jquery-steps/jquery.steps.min.js') }}"></script>
<script src="{{ asset('vendor/minimalist-picker/dobpicker.js') }}"></script>
<script src="{{ asset('vendor/nouislider/nouislider.min.js') }}"></script>
<script src="{{ asset('vendor/wnumb/wNumb.js') }}"></script>
<script src="{{ asset('js/main.js') }}"></script>


       <script src="{{ asset('js/app.js') }}"></script>

       <script src="{{ asset('app-assets/vendors/js/vendors.min.js') }}" ></script>

       <script src="{{ asset('app-assets/vendors/js/extensions/toastr.min.js') }}" defer></script>

       <script src="{{ asset('app-assets/vendors/js/forms/repeater/jquery.repeater.min.js') }}" ></script>
       <script src="{{ asset('app-assets/vendors/js/forms/select/select2.full.min.js') }}" ></script>
       <script src="{{ asset('app-assets/vendors/js/pickers/flatpickr/flatpickr.min.js') }}" ></script>

       <script src="{{ asset('app-assets/js/core/app-menu.js') }}" ></script>
       <script src="{{ asset('app-assets/js/core/app.js') }}" ></script>
       <script src="{{ asset('app-assets/js/scripts/pages/app-invoice.js') }}" ></script>
       {{-- <script src="{{ asset('app-assets/js/scripts/pages/app1-invoice.js') }}" ></script> --}}
       {{-- <script src="{{ asset('app-assets/js/scripts/pages/app-invoice2.js') }}" ></script> --}}

       <script src="{{ asset('app-assets/vendors/js/extensions/moment.min.js') }}" ></script>
       <script src="{{ asset('app-assets/vendors/js/tables/datatable/jquery.dataTables.min.js') }}" ></script>
       <script src="{{ asset('app-assets/vendors/js/tables/datatable/datatables.buttons.min.js') }}" ></script>
       <script src="{{ asset('app-assets/vendors/js/tables/datatable/dataTables.bootstrap5.min.js') }}" ></script>
       <script src="{{ asset('app-assets/vendors/js/tables/datatable/datatables.checkboxes.min.js') }}" ></script>
       <script src="{{ asset('app-assets/vendors/js/tables/datatable/dataTables.responsive.min.js') }}" ></script>
       <script src="{{ asset('app-assets/vendors/js/tables/datatable/responsive.bootstrap5.js') }}" ></script>

       {{-- <script src="{{ asset('app-assets/js/scripts/pages/app-invoice-list.js') }}" ></script> --}}
       {{-- <script src="{{ asset('app-assets/vendors/js/forms/select/select2.full.min.js') }}"></script>
       <script src="{{ asset('app-assets/js/scripts/forms/form-select2.js') }}"></script> --}}



       <script src="{{ asset('app-assets/vendors/js/tables/datatable/jszip.min.js') }}"></script>
       <script src="{{ asset('app-assets/vendors/js/tables/datatable/pdfmake.min.js') }}"></script>
       <script src="{{ asset('app-assets/vendors/js/tables/datatable/vfs_fonts.js') }}"></script>
       <script src="{{ asset('app-assets/vendors/js/tables/datatable/buttons.html5.min.js') }}"></script>
       <script src="{{ asset('app-assets/vendors/js/tables/datatable/buttons.print.min.js') }}"></script>
       <script src="{{ asset('app-assets/vendors/js/tables/datatable/dataTables.rowGroup.min.js') }}"></script>
       <script src="{{ asset('app-assets/vendors/js/forms/validation/jquery.validate.min.js') }}"></script>
       <script src="{{ asset('app-assets/vendors/js/forms/cleave/cleave.min.js') }}"></script>
       <script src="{{ asset('app-assets/vendors/js/forms/cleave/addons/cleave-phone.us.js') }}"></script>
       {{-- <script src="{{ asset('app-assets/js/scripts/pages/app-user-list.js') }}"></script> --}}
       <script src="{{ asset('app-assets/js/scripts/components/components-tooltips.js') }}"></script>



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
    <script type="text/javascript">

        // Disable right click on web page
        $("html").on("contextmenu",function(e){
            return false;
        });
        // Disable cut, copy and paste on web page
        $('html').bind('cut copy paste', function (e) {
             e.preventDefault();
        });
        </script>

</body>
</html>


