<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        if (Auth::check()) {
            return Inertia::render('Dashboard');
        } else {
            return Inertia::render('Auth/Login');
        }
    }
    public function posts()
    {
        $user = 'hamza';
        return Inertia::render('Posts', ['user' => $user]);
    }
    public function dashboard()
    {
        return Inertia::render('Posts', [
            'component' => 'Posts',
            'props' => [
                'hamza'
            ],
        ]);
    }

    public function groupByOwnersService()
    {
        $insurancecompany = ["insurance.txt" => "Company A", "letter.docx" => "Company A", "Contract.docx" => "Company B"];
        $companydata = [];
        foreach ($insurancecompany as $key => $value) {
            $companydata[$value][] = $key;
        }
        return Inertia::render('Challange_four', [
            'insurancecompany' =>  $insurancecompany,
            'companydata' =>  $companydata,
        ]);
    }

    public function challange1()
    {
        $allnumbers = [1, 2, 3, 2, 5, 6, 3, 6, 7, 2, 5, 9];
        $temparray = [];
        $doublenumarray = [];
        for ($i = 0; $i < count($allnumbers); $i++) {
            if (array_search($allnumbers[$i], $temparray) !== null && array_search($allnumbers[$i], $temparray) !== false) {
                array_push($doublenumarray, $allnumbers[$i]);
            } else {
                array_push($temparray, $allnumbers[$i]);
            }
        }

        return Inertia::render('Challange', [
            'testarray' =>  $allnumbers,
            'doublenumarray' => $doublenumarray,
        ]);
    }
}
