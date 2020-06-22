<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->post('/login', 'AuthController@postLogin');
$router->post('/register', 'AuthController@postRegister');
$router->group(['middleware' => ['auth:api', 'cors']], function ($router) {
    $router->group(['prefix' => 'admin'], function () use ($router) {
        $router->get('users/data', 'Admin\UserController@data');
        $router->post('users/create', 'Admin\UserController@create');
        $router->post('users/{id}/edit', 'Admin\UserController@edit');
        $router->delete('users/{id}/delete', 'Admin\UserController@delete');
    });
    $router->post('logout', 'AuthController@postLogout');
});
