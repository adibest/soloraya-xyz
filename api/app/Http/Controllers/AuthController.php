<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\JWTAuth;
// use App\Http\Resources\AuthResource;
use App\Model\User;

class AuthController extends Controller
{
    //
    protected $jwt;

    public function __construct(JWTAuth $jwt, User $user)
    {
        $this->jwt = $jwt;
        $this->user = $user;
    }

    public function postLogin(Request $request)
    {
        $this->validate($request, [
            'email'    => 'required|email|max:255',
            'password' => 'required',
        ]);

        try {

            if (! $token = app('auth')->attempt($request->only('email', 'password'))) {
            // if (! $token = $this->jwt->attempt($request->only('email', 'password'))) {
                return response()->json([
                    'success' => false,
                    'message' => 'User not found',
                ], 404);
            }

        } catch (\Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

            return response()->json([
                'success' => false,
                'message' => 'Token expired'
            ], 500);

        } catch (\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

            return response()->json([
                'success' => false,
                'message' => 'Token invalid'
            ], 500);

        } catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {

            return response()->json([
                // 'token_absent' => $e->getMessage()
                'success' => false,
                'message' => $e->getMessage()
            ], 500);

        }

        return response()->json([
            'success' => true,
            'message' => 'Login success',
            'data' => $this->user->with('role')->find(app('auth')->id()),
            'token' => $token
        ]);
    }

    public function postLogout(Request $request)
    {
        app('auth')->logout();

        return response()->json([
            'success' => true,
            'message' => 'Logout success'
        ]);
    }

    public function postRegister(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'name' => 'required|max:255',
            'email' => 'required|unique:users,email|max:255',
            'gender' => 'required',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Register failed',
                'errors' => $validator->errors()
            ]);
        }
        $this->user->create($request->all());

        return response()->json(['message' => 'success'], 200);
    }
}
