import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="hk-wrapper hk-pg-auth" data-footer="simple">
            <nav class="hk-navbar navbar navbar-expand-xl navbar-light fixed-top">
                <div class="container-xxl">

                    <div class="nav-start-wrap">
                        <a class="navbar-brand" href="index.html">
                            <img class="brand-img d-inline-block" src="assets/dist/img/logo-light.png" alt="brand" />
                        </a>
                    </div>
                    <div class="nav-end-wrap">
                        <ul class="navbar-nav flex-row">
                            <li class="nav-item nav-link py-0">
                                <button class="btn btn-sm btn-outline-light"><span><span class="icon"><span class="feather-icon"><i data-feather="help-circle"></i></span></span><span>Get Help</span></span></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="hk-pg-wrapper">
                {children}
                <div class="hk-footer">
                    <footer class="container-xxl footer">
                        <div class="row">
                            <div class="col-xl-8">
                                <p class="footer-text"><span class="copy-text">Jampack © 2022 All rights reserved.</span> <a href="#" class="" target="_blank">Privacy Policy</a><span class="footer-link-sep">|</span><a href="#" class="" target="_blank">T&C</a><span class="footer-link-sep">|</span><a href="#" class="" target="_blank">System Status</a></p>
                            </div>
                            <div class="col-xl-4">
                                <a href="#" class="footer-extr-link link-default"><span class="feather-icon"><i data-feather="external-link"></i></span><u>Send feedback to our help forum</u></a>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>

        </div>
    );
}
