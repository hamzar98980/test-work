import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import Posts from './Posts';
import HorizontalMenu from './layouts/horizontalMenu';
import VerticalMenu from './layouts/verticalMenu';
import Footer from './layouts/footer';
export default function Dashboard(props) {
    // console.log(props);
    const { auth } = props;
    const { children } = props;
    console.log(auth);
    return (
        // <AuthenticatedLayout
        //     user={auth.user}
        //     header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        // >
        //     <Head title="Dashboard" />
        //     <div className="py-12">
        //         <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        //             <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        //                 <div className="p-6 text-gray-900">You're logged in!</div>
        //             </div>
        //         </div>
        //     </div>
        // </AuthenticatedLayout>
        <>

            <div className="hk-wrapper" data-layout="vertical" data-layout-style="default" data-menu="light" data-footer="simple">
                <HorizontalMenu auth={auth} />
                <VerticalMenu />
                <div id="hk_menu_backdrop" className="hk-menu-backdrop"></div>
                <div className="hk-pg-wrapper">
                    <div className="container-xxl">
                        <div className="hk-pg-body">
                            {children}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}
