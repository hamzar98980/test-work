<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<meta name="csrf-token" content="{{ csrf_token() }}">

<head>
    <!-- Meta Tags -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sales Dashboard</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Favicon -->
    <link rel="shortcut icon" href="favicon.ico">
    <link rel="icon" href="favicon.ico" type="image/x-icon">

    <!-- CSS -->
    <link href="{{ url('assets/dist/css/style.css') }}" rel="stylesheet" type="text/css">
    @stack('style-section')
</head>

<body>
    <div class="hk-wrapper hk-pg-auth" data-footer="simple">
        <!-- Main Content -->
        <div class="hk-pg-wrapper py-0">
            <div class="hk-pg-body py-0">
                <!-- Container -->
                <div class="container-fluid">
                    <!-- Row -->
                    <div class="row auth-split">
                        <div class="col-xl-5 col-lg-6 col-md-7 position-relative mx-auto">
                            <div class="auth-content flex-column pt-8 pb-md-8 pb-13">
                                <div class="text-center mb-7">
                                    <a class="navbar-brand me-0" href="/">
                                        <img class="brand-img d-inline-block"
                                            src="{{ url('assets/dist/img/brand-sm.svg') }}" alt="brand">
                                    </a>
                                </div>
                                @yield('main-section')
                            </div>
                            <!-- Page Footer -->
                            <div class="hk-footer border-0">
                                <footer class="container-xxl footer">
                                    <div class="row">
                                        <div class="col-xl-8 text-center">
                                            <p class="footer-text pb-0"><span class="copy-text"><a href="#"
                                                        class=""></a> ©
                                                    {{ date('Y') }} All rights
                                                    reserved.</span></p>
                                        </div>
                                    </div>
                                </footer>
                            </div>
                            <!-- / Page Footer -->
                        </div>
                        <div
                            class="col-xl-7 col-lg-6 col-md-5 col-sm-10 d-md-block d-none position-relative bg-primary-light-5">
                            <div class="auth-content flex-column text-center py-8">
                                <div class="row">
                                    <div class="col-xxl-7 col-xl-8 col-lg-11 mx-auto">
                                        <h2 class="mb-4">Meet all new Pro Sales Dashboard 2.0</h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, passages of
                                            Lorem Ipsum available, in some form, by injected.</p>
                                        <button class="btn  btn-flush-primary btn-uppercase mt-2">Take Tour</button>
                                    </div>
                                </div>
                                <img src="{{ url('assets/dist/img/macaroni-logged-out.png') }}"
                                    class="img-fluid w-sm-50 mt-7" alt="login" />
                            </div>
                            <p class="p-xs credit-text opacity-55"><a href="#" class="text-light"></a> ©
                                {{ date('Y') }} All rights
                                reserved.</p>
                        </div>
                    </div>
                    <!-- /Row -->
                </div>
                <!-- /Container -->
            </div>
            <!-- /Page Body -->
        </div>
        <!-- /Main Content -->
    </div>










    <!-- jQuery -->
    <script src="{{ url('assets/vendors/jquery/dist/jquery.min.js') }}"></script>

    <!-- Bootstrap Core JS -->
    <script src="{{ url('assets/vendors/bootstrap/dist/js/bootstrap.bundle.min.js') }}"></script>
    @stack('script-section')
    <!-- FeatherIcons JS -->
    <script src="{{ url('assets/dist/js/feather.min.js') }}"></script>

    <!-- Fancy Dropdown JS -->
    <script src="{{ url('assets/dist/js/dropdown-bootstrap-extended.js') }}"></script>

    <!-- Simplebar JS -->
    <script src="{{ url('assets/vendors/simplebar/dist/simplebar.min.js') }}"></script>
    <!-- Bootstrap Notify JS -->
    <script src="{{ url('assets/dist/js/bootstrap-notify.min.js') }}"></script>

    {{-- template notifications --}}
    {{-- <script src="{{ url('assets/dist/js/notification-init.js') }}"></script>

    <!-- Init JS --> --}}
    <script src="{{ url('assets/dist/js/init.js') }}"></script>
    <script>
        var siteName = window.location.host;
    </script>

</body>

</html>
