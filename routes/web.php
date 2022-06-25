<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FactureController;
use App\Http\Controllers\PaiementsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('dashboard');
// });

// Route::get('/', function () {
//     return view('dashboard');
// })->middleware(['auth'])->name('dashboard');

// require __DIR__.'/auth.php';


Route::middleware(['auth'])->group(function(){

    //Route Facturer
    Route::get('/', function () { return view('pages.dashboard');})->name('dashboard');
    Route::get('/companies', function () { return view('pages.companies');})->name('companies');
    Route::get('/profile', function () { return view('auth.profile');})->name('profile');
 



});

require __DIR__.'/auth.php';
