import { Link, Head } from '@inertiajs/react';

const VerticalMenu = () => {
    return <>
        <div className="hk-menu">
            <div className="menu-header">
                <span>
                    <a className="navbar-brand" href="index.html">
                        <img className="brand-img img-fluid" src="assets/dist/img/brand-sm.svg" alt="brand" />
                        <img className="brand-img img-fluid" src="assets/dist/img/Jampack.svg" alt="brand" />
                    </a>
                    <button className="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover navbar-toggle">
                        <span className="icon">
                            <span className="svg-icon fs-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-bar-to-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <line x1="10" y1="12" x2="20" y2="12"></line>
                                    <line x1="10" y1="12" x2="14" y2="16"></line>
                                    <line x1="10" y1="12" x2="14" y2="8"></line>
                                    <line x1="4" y1="4" x2="4" y2="20"></line>
                                </svg>
                            </span>
                        </span>
                    </button>
                </span>
            </div>

            <div data-simplebar className="nicescroll-bar">
                <div className="menu-content-wrap">
                    <div className="menu-group">
                        <ul className="navbar-nav flex-column">
                            <li className="nav-item active">
                                <Link className="nav-link" href={route('home.dashboard')}>
                                    <span className="nav-icon-wrap">
                                        <span className="svg-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-template" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <rect x="4" y="4" width="16" height="4" rx="1" />
                                                <rect x="4" y="12" width="6" height="8" rx="1" />
                                                <line x1="14" y1="12" x2="20" y2="12" />
                                                <line x1="14" y1="16" x2="20" y2="16" />
                                                <line x1="14" y1="20" x2="20" y2="20" />
                                            </svg>
                                        </span>
                                    </span>
                                    <span className="nav-link-text">Dashboard</span>
                                    <span className="badge badge-sm badge-soft-pink ms-auto">Hot</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="menu-gap"></div>
                    <div className="menu-group">
                        <div className="nav-header">
                            <span>Apps</span>
                        </div>
                        <ul className="navbar-nav flex-column">
                            <li className="nav-item">
                                <Link className="nav-link" href={route('home.challange1')}>
                                    <span className="nav-icon-wrap">
                                        <span className="svg-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-inbox" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <rect x="4" y="4" width="16" height="16" rx="2" />
                                                <path d="M4 13h3l3 3h4l3 -3h3" />
                                            </svg>
                                        </span>
                                    </span>
                                    <span className="nav-link-text">challenge 01</span>
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav flex-column">
                            <li className="nav-item">
                                <Link className="nav-link" href={route('home.Challange_four')}>
                                    <span className="nav-icon-wrap">
                                        <span className="svg-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-inbox" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <rect x="4" y="4" width="16" height="16" rx="2" />
                                                <path d="M4 13h3l3 3h4l3 -3h3" />
                                            </svg>
                                        </span>
                                    </span>
                                    <span className="nav-link-text">challenge 04</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="menu-gap"></div>
                </div>
            </div>

        </div>
    </>
}

export default VerticalMenu
