<body>
    <!-- Wrapper -->
    <div class="hk-wrapper" data-layout="vertical" data-layout-style="default" data-menu="light" data-footer="simple">
        <!-- Top Navbar -->
        <nav class="hk-navbar navbar navbar-expand-xl navbar-light fixed-top">
            <div class="container-fluid">
                <!-- Start Nav -->

                <!-- /Start Nav -->

                <!-- End Nav -->
                <div class="nav-end-wrap">
                    <ul class="navbar-nav flex-row">

                        <li class="nav-item">
                            <div class="dropdown ps-2">
                                <a class=" dropdown-toggle no-caret" href="#" role="button"
                                    data-bs-display="static" data-bs-toggle="dropdown" data-dropdown-animation
                                    data-bs-auto-close="outside" aria-expanded="false">
                                    <div class="avatar avatar-rounded avatar-xs">
                                        <img src="{{ url('images/profile.jpg') }}" alt="user" class="avatar-img">
                                    </div>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <div class="p-2">
                                        <div class="media">
                                            <div class="media-head me-2">
                                                <div class="avatar avatar-rounded avatar-sm avatar-rounded">
                                                    <img src="{{ url('images/profile.jpg') }}" alt="user"
                                                        class="avatar-img">
                                                </div>

                                            </div>
                                            <div class="media-body">
                                                <div class="d-block link-dark fw-medium">
                                                    {{ auth()->user()->first_name }}
                                                </div>

                                                <div class="fs-7">
                                                    {{ auth()->user()->email }}
                                                </div>
                                                <form method="get" action="{{ route('logout') }}">
                                                    @csrf

                                                    <a href="{{ route('logout') }}"
                                                        onclick="event.preventDefault(); this.closest('form').submit();"
                                                        class="d-block fs-8 link-secondary"><u>Sign
                                                            Out</u></a>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- /End Nav -->
            </div>
        </nav>
        <!-- Top Navbar -->
        <nav class="hk-navbar navbar navbar-expand-xl navbar-light fixed-top">
            <div class="container-fluid">
                <!-- Start Nav -->
                <div class="nav-start-wrap">
                    <button
                        class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover navbar-toggle d-xl-none"><span
                            class="icon"><span class="feather-icon"><i
                                    data-feather="align-left"></i></span></span></button>


                </div>
                <!-- /Start Nav -->

                <!-- End Nav -->
                <div class="nav-end-wrap">
                    <ul class="navbar-nav flex-row">


                        <li class="nav-item">
                            <div class="dropdown ps-2">
                                <a class=" dropdown-toggle no-caret" href="#" role="button"
                                    data-bs-display="static" data-bs-toggle="dropdown" data-dropdown-animation
                                    data-bs-auto-close="outside" aria-expanded="false">
                                    <div class="avatar avatar-rounded avatar-xs">
                                        <img src="{{ url('images/profile.jpg') }}" alt="user" class="avatar-img">
                                    </div>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <div class="p-2">
                                        <div class="media">
                                            <div class="media-head me-2">
                                                <div class="avatar avatar-rounded avatar-sm avatar-rounded">
                                                    <img src="{{ url('images/profile.jpg') }}" alt="user"
                                                        class="avatar-img">
                                                </div>
                                            </div>
                                            <div class="media-body">
                                                <div class="d-block link-dark fw-medium">
                                                    {{ auth()->user()->first_name }}
                                                </div>

                                                <div class="fs-7">
                                                    {{ auth()->user()->email }}
                                                    {{-- {{ Auth::user()->email }} --}}
                                                </div>
                                                <form method="get" action="{{ route('logout') }}">
                                                    @csrf

                                                    <a href="{{ route('logout') }}"
                                                        onclick="event.preventDefault(); this.closest('form').submit();"
                                                        class="d-block fs-8 link-secondary"><u>Sign
                                                            Out</u></a>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- /End Nav -->
            </div>
        </nav>
        <!-- /Top Navbar -->
