<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MascotaRequest extends FormRequest
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
            'nombre' => 'required|string|max:100',
            'especie' => 'required|in:perro,gato',
            'raza' => 'nullable|string|max:100',
            'edad' => 'nullable|integer|min:0|max:20',
            'sexo' => 'required|in:macho,hembra',
            'microchip' => 'required|in:true,false', // Permitir "true" y "false"
            'castrado' => 'required|in:true,false',   // Permitir "true" y "false"
             'descripcion' => 'nullable|string|max:500',
            'fecha_hora_desaparicion' => 'required|date',
            'ubicacion' => 'required|string|max:255',
            'user_id' => 'required',
            'fotos' => 'array|max:3', // Limitado a 3 fotos
            'fotos.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048' // Validación de cada foto
        ];
    }

    public function messages()
    {
        return [
            'nombre.required' => 'El campo nombre es obligatorio.',
            'nombre.string' => 'El campo nombre debe ser una cadena de texto.',
            'nombre.max' => 'El campo nombre no puede tener más de 255 caracteres.',
        
            'especie.boolean' => 'Debes completar el campo especie.',
        
            'raza.string' => 'El campo raza debe ser una cadena de texto.',
            'raza.max' => 'El campo raza no puede tener más de 50 caracteres.',
        
            'sexo.boolean' => 'Debes completar el campo sexo',
        
            'edad.required' => 'El campo edad es obligatorio.',
            'edad.integer' => 'El campo edad debe ser un número entero.',
            'edad.min' => 'El campo edad no puede ser menor que 0.',
            'edad.max' => 'El campo edad no puede ser mayor que 20.',
        
            'microchip.boolean' => 'Debes completar el campo microchip',
        
            'castrado.boolean' => 'Debes completar el campo castrado',
        
            'fecha_hora_desaparicion.required' => 'El campo fecha y hora de desaparición es obligatorio.',
            'fecha_hora_desaparicion.date' => 'El campo fecha y hora de desaparición debe ser una fecha válida.',
        
            'ubicacion.required' => 'El campo ubicación es obligatorio.',
            'ubicacion.string' => 'El campo ubicación debe ser una cadena de texto.',
            'ubicacion.max' => 'El campo ubicación no puede tener más de 255 caracteres.',
        
            'descripcion.string' => 'El campo descripción debe ser una cadena de texto.',
            'descripcion.max' => 'El campo descripción no puede tener más de 500 caracteres.',
        
            'fotos.array' => 'El campo fotos debe ser un arreglo.',
            'fotos.max' => 'No se pueden subir más de 3 fotos.',
        
            // 'fotos.*.image' => 'Cada archivo en fotos debe ser una imagen.',
            // 'fotos.*.mimes' => 'Cada imagen debe estar en formato jpeg, png, jpg, gif o svg.',
        ];
        
    }
}
