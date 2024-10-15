<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegistroRequest extends FormRequest
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
            'name' => [
                'required',       // Campo obligatorio
                'string',         // Debe ser una cadena de texto
                'min:2',          // Mínimo 2 caracteres
                'max:50',         // Máximo 50 caracteres
                'regex:/^[a-zA-Z\s]+$/',  // Solo letras y espacios
            ],
            'email' => [
                'required',       // Campo obligatorio
                'string',         // Debe ser una cadena de texto
                'email',          // Debe tener formato de email
                'max:255',        // Máximo 255 caracteres
                'unique:users,email', // Debe ser único en la tabla 'users'
            ],
            'password' => [
                'required',       // Campo obligatorio
                'string',         // Debe ser una cadena de texto
                'min:8',          // Mínimo 8 caracteres
                'max:20',         // Máximo 20 caracteres
                'regex:/[a-z]/',  // Debe contener al menos una letra minúscula
                'regex:/[A-Z]/',  // Debe contener al menos una letra mayúscula
                'regex:/[0-9]/',  // Debe contener al menos un número
                'regex:/[@$!%*#?&]/', // Debe contener al menos un carácter especial
                // 'confirmed',        // Debe coincidir con el campo 'password'
            ],
            'confirm-password' => [
                'required',       // Campo obligatorio
                'same:password',  // Debe coincidir con el campo 'password'
            ],
        ];
    }
}
