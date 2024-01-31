<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        @if (trim($__env->yieldContent('page-title')))
            @yield('page-title')
        @else
            Sales Dashboard
        @endif

    </title>
    <meta name="description"
        content="A modern CRM Dashboard Template with reusable and flexible components for your SaaS web applications by hencework. Based on Bootstrap." />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ url('favicon.ico') }}">
    <link rel="icon" href="{{ url('favicon.ico') }}" type="image/x-icon">

    <!-- Daterangepicker CSS -->
    <link href="{{ url('assets/vendors/daterangepicker/daterangepicker.css') }}" rel="stylesheet" type="text/css" />

    <!-- Data Table CSS -->
    <link href="{{ url('assets/vendors/datatables.net-bs5/css/dataTables.bootstrap5.min.css') }}" rel="stylesheet"
        type="text/css" />
    <link href="{{ url('assets/vendors/datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css') }}"
        rel="stylesheet" type="text/css" />
    <style>
        [data-notify] {
            z-index: 9999 !important;
        }
    </style>

    <link href="{{ url('assets/dist/css/style.css') }}" rel="stylesheet" type="text/css">
    {{-- <script src="{{ asset('js/app.js') }}"></script> --}}


    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead

</head>

<body>
