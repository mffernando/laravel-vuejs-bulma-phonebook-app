<?php

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

Route::get('/', function () {
    return view('welcome');
});

//refresh page return to /
Route::get('/phonebook/{name}', function () {
  return redirect('/');
})->where('name', '[A-Za-z]+');

//phonebook CRUD route
Route::resource('phonebook', 'PhonebookController');
