import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <div class="hk-pg-body">
                <div class="container-xxl">
                    <div class="row">
                        <div class="col-xl-7 col-lg-6 d-lg-block d-none v-separator separator-sm">
                            <div class="auth-content py-md-0 py-8">
                                <div class="row">
                                    <div class="col-xxl-9 col-xl-8 col-lg-11 text-center mx-auto">
                                        <img src="assets/dist/img/macaroni-logged-out.png" class="img-fluid w-sm-40 w-50 mb-3" alt="login" />
                                        <h3 class="mb-2">Dig into festive savings, Go Premium</h3>
                                        <p class="w-xxl-65 w-100 mx-auto">Save 20% on the premium membership plan by using the promo code "JAMPACK20"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-5 col-lg-6 col-md-7 col-sm-10 position-relative mx-auto">
                            <div class="auth-content py-md-0 py-8">
                                <form class="w-100" onSubmit={submit} >
                                    <div class="row">
                                        <div class="col-lg-10 mx-auto">
                                            <h4 class="mb-4">Sign in to your account</h4>
                                            <div class="row gx-3">
                                                <div class="form-group col-lg-12">
                                                    <div class="form-label-group">
                                                        <label>Email</label>
                                                    </div>
                                                    <input id="email" name="email" value={data.email} isFocused={true} onChange={(e) => setData('email', e.target.value)} className="form-control" placeholder="Enter your email" type="email" />
                                                    <InputError message={errors.email} className="mt-2" />

                                                </div>
                                                <div class="form-group col-lg-12">
                                                    <div class="form-label-group">
                                                        <label>Password</label>
                                                        <Link  href={route('password.request')}  class="fs-7 fw-medium" >
                                                            Forgot your password ?
                                                        </Link>
                                                    </div>
                                                    <div class="input-group password-check">
                                                        <span class="input-affix-wrapper">
                                                            <input id="password" autoComplete="current-password" type="password" name="password" onChange={(e) => setData('password', e.target.value)} className="form-control" placeholder="Enter your password" value={data.password} />
                                                            <InputError message={errors.password} className="mt-2" />
                                                            <a href="#" class="input-suffix text-muted">
                                                                <span class="feather-icon"><i class="form-icon" data-feather="eye"></i></span>
                                                                <span class="feather-icon d-none"><i class="form-icon" data-feather="eye-off"></i></span>
                                                            </a>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-center">
                                                <div class="form-check form-check-sm mb-3">
                                                    <input type="checkbox" class="form-check-input" id="logged_in" checked />
                                                    <label class="form-check-label text-muted fs-7" for="logged_in">Keep me logged in</label>
                                                </div>
                                            </div>
                                            <PrimaryButton className="btn btn-primary btn-uppercase btn-block" disabled={processing}>
                                                Log in
                                            </PrimaryButton>
                                            <p class="p-xs mt-2 text-center">New to Jmapack ? <a href="#"><u>Create new account</u></a></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout >
    );
}
