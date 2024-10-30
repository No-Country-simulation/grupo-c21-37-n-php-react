<?php

namespace App\Http\Controllers;

use App\Models\Mascota;
use Illuminate\Http\Request;
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
        $validatedData['microchip'] = filter_var($request->input('microchip', false), FILTER_VALIDATE_BOOLEAN);
        $validatedData['castrado'] = filter_var($request->input('castrado', false), FILTER_VALIDATE_BOOLEAN);
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
            // 'fotos' => $data['fotos'],
        ]);
        
        // Subida de fotos a Cloudinary
        // $fotosUrl = [];
        // if ($request->hasFile('fotos')) {
        //     foreach ($request->file('fotos') as $foto) {
        //         $upload = Cloudinary::upload($foto->getRealPath(), ['folder' => 'mascotas']);
        //         $fotosUrl[] = $upload->getSecurePath(); // Guardamos las URLs de Cloudinary
        //     }
        // }

        // Asignación de las fotos a la mascota
        // foreach ($fotosUrl as $url) {
        //     $mascota->fotos()->create(['url' => $url]);
        // }

        return response()->json([
            'mensaje' => 'Mascota registrada con éxito',
            'mascota' => $mascota,
            // 'fotos' => $fotosUrl
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Mascota $mascota)
    {
        return response()->json($mascota->load('fotos_mascotas'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(MascotaRequest $request, Mascota $mascota)
    {
        // Actualizar los datos de la mascota
        $mascota->update($request->validated());

        // Subida de nuevas fotos a Cloudinary si existen
        $fotosUrl = [];
        if ($request->hasFile('fotos')) {
            foreach ($request->file('fotos') as $foto) {
                $upload = Cloudinary::upload($foto->getRealPath(), ['folder' => 'mascotas']);
                $fotosUrl[] = $upload->getSecurePath();
            }
        }

        // Asignación de las nuevas fotos
        foreach ($fotosUrl as $url) {
            $mascota->fotos_mascotas()->create(['url' => $url]);
        }

        return response()->json([
            'mensaje' => 'Mascota actualizada con éxito',
            'mascota' => $mascota->load('fotos_mascotas')
        ]);
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
