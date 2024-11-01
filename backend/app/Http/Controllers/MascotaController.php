<?php

namespace App\Http\Controllers;

use App\Models\Mascota;
use App\Models\FotoMascota;
use Illuminate\Routing\Controller;
use App\Http\Requests\MascotaRequest;
use App\Http\Resources\MascotaCollection;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

class MascotaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new MascotaCollection(
            Mascota::with('fotos_mascotas') // Utiliza la relación con el nuevo nombre
                ->orderBy('id', 'DESC')
                ->paginate(9)
        );
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(MascotaRequest $request)
    {
        // Validar el regitro
        $data = $request->validated();
        $data['microchip'] = filter_var($request->input('microchip', false), FILTER_VALIDATE_BOOLEAN);
        $data['castrado'] = filter_var($request->input('castrado', false), FILTER_VALIDATE_BOOLEAN);
     
        // Crear mascota perdida
        $mascota = Mascota::create([
            'nombre' => $data['nombre'],
            'especie' => $data['especie'],
            'raza' => $data['raza'],
            'sexo' => $data['sexo'],
            'edad' => $data['edad'],
            'microchip' => $data['microchip'],
            'castrado' => $data['castrado'],
            'fecha_hora_desaparicion' => $data['fecha_hora_desaparicion'],
            'ubicacion' => $data['ubicacion'],
            'descripcion' => $data['descripcion'],
            'user_id' => $data['user_id'],
        ]);
        
        // Cargar y guardar las fotos
        if ($request->hasFile('fotos')) {
            foreach ($request->file('fotos') as $foto) {
                // Subir la imagen a Cloudinary
                $uploadedFileUrl = Cloudinary::upload($foto->getRealPath())->getSecurePath();

                // Crear una nueva entrada en la tabla de fotos
                FotoMascota::create([
                    'url' => $uploadedFileUrl,
                    'mascota_id' => $mascota->id,
                ]);
            }
        }

        return response()->json([
            'mensaje' => 'Mascota registrada con éxito',
            'mascota' => $mascota
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Mascota $mascota)
    {
        return response()->json($mascota);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(MascotaRequest $request, Mascota $mascota)
    {
// 
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Mascota $mascota)
    {
        // Eliminar la mascota junto con sus fotos relacionadas
        $mascota->fotos_mascotas()->delete();
        $mascota->delete();

        return response()->json(['mensaje' => 'Mascota eliminada con éxito']);
    }
}
