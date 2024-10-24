<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegistroRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class AuthController extends Controller
{

    public function register (RegistroRequest $request){
        // Validar el regitro
        $data = $request->validated();
        $username = $this->generateRandomUsername();

        // Crear usuario
        $user = User::create([
            'name' => $data['name'],
            'lastname' => $data['lastname'],
            'username' => $username,
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        // Retornar respuesta
        return [
            'token' => $user -> createToken ('token') -> plainTextToken,
            'user' => $user
        ];
    }
    public function login (LoginRequest $request){
        $data = $request->validated();  

        // Revisar el password
        if(!Auth::attempt($data)){
            return response ([
                'errors' => ['El email o el password son incorrectos']
            ], 422);
        }

            // Autenticar al usuario
            $user = Auth::user();

    // Retornar respuesta
        return [
            'token' => $user -> createToken ('token') -> plainTextToken,
            'user' => $user
        ];

    }
    public function logout (Request $request){
        $user = $request->user();
        $user->currentAccessToken()->delete();

        return [
            'user'=> null
        ];
    }

    public function generateRandomUsername()
    {
        $username = Str::random(8); // Genera una cadena aleatoria de 8 caracteres
    
        // Asegurarse de que el username no esté en uso
        while (User::where('username', $username)->exists()) {
            $username = Str::random(8);
        }
    
        return $username;
    }
}
