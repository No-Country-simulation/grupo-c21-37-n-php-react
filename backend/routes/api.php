<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MascotaController;
use App\Models\Mascota;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function(){
    Route::get('/user', function (Request $request){
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::apiResource('/reportar-mascota', MascotaController::class);
});

// Autenticación
Route::post('/registro', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::apiResource('/perdidos', MascotaController::class);
