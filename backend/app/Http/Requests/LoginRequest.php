<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email' => [
                'required',       // Campo obligatorio
                'email',          // Debe tener formato de email
                'exists:users,email',          // El email debe existir
            ],
            'password' => [
                'required',       // Campo obligatorio
            ]
        ];
    }

    public function messages()
    {        
        return [
        'email.required' => 'El correo electrónico es obligatorio. ',
        'email.email' => 'Debes ingresar un correo electrónico válido. ',
        'email.exists' => 'La cuenta no existe. ',
        'password.required' => 'La contraseña es obligatoria. ',
        ];
    }
}
