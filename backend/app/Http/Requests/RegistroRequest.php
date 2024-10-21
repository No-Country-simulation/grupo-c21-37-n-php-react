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
            'lastname' => [
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
            ],
            'confirmpassword' => [
                'required',       // Campo obligatorio
                'same:password',  // Debe coincidir con el campo 'password'
            ],
        ];
    }

    public function messages()
    {
        return [
                        // Mensajes de error personalizados
                        'name.required' => 'El nombre es obligatorio. ',
                        'name.min' => 'El nombre debe tener al menos 2 caracteres. ',
                        'name.max' => 'El nombre no puede exceder los 50 caracteres. ',
                        'name.regex' => 'El nombre solo puede contener letras y espacios. ',

                        'lastname.required' => 'El apellido es obligatorio. ',
                        'lastname.min' => 'El apellido debe tener al menos 2 caracteres. ',
                        'lastname.max' => 'El apellido no puede exceder los 50 caracteres. ',
                        'lastname.regex' => 'El apellido solo puede contener letras y espacios. ',
            
                        'username.required' => 'El nombre de usuario es obligatorio. ',
                        'username.min' => 'El nombre de usuario debe tener al menos 3 caracteres. ',
                        'username.max' => 'El nombre de usuario no puede exceder los 20 caracteres. ',
                        'username.alpha_dash' => 'El nombre de usuario solo puede contener letras, números, guiones y guiones bajos. ',
                        'username.unique' => 'El nombre de usuario ya está en uso. ',
            
                        'email.required' => 'El correo electrónico es obligatorio. ',
                        'email.email' => 'Debes ingresar un correo electrónico válido. ',
                        'email.max' => 'El correo electrónico no puede exceder los 255 caracteres. ',
                        'email.unique' => 'El correo electrónico ya está registrado. ',
            
                        'password.required' => 'La contraseña es obligatoria. ',
                        'password.min' => 'La contraseña debe tener al menos 8 caracteres. ',
                        'password.max' => 'La contraseña no puede exceder los 20 caracteres. ',
                        'password.regex' => 'La contraseña debe contener al menos una letra minúscula, una mayúscula, un número y un carácter especial. ',
            
                        'confirmpassword.required' => 'Repetir la contraseña es obligatorio. ',
                        'confirmpassword.same' => 'Las contraseñas no coinciden. ',
        ];
    }
}
