<?php

namespace App\Http\Controllers;

use App\Models\FotoMascota;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Storage;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

class FotoMascotaController extends Controller
{
    protected $cloudinary;

    public function __construct()
    {
        $this->cloudinary = new Cloudinary();
    }

    public function store(Request $request)
    {
        // Validar la imagen
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // Cargar la imagen a Cloudinary
        $uploadedFile = $request->file('image');

        // Upload
        $uploadedFileUrl = cloudinary()->upload($request->file('file')->getRealPath())->getSecurePath();

        // Upload with transformation
        $uploadedFileUrl = cloudinary()->upload($request->file('file')->getRealPath(), [
            'folder' => 'uploads',
            'transformation' => [
                'width' => 400,
                'height' => 400,
                'crop' => 'fill'
            ]
        ])->getSecurePath();

        // Guardar la URL en la base de datos
        FotoMascota::create([
            'url' => $uploadedFileUrl,
            'mascota_id' => $request->mascota_id, // ID de la mascota
        ]);

        return response()->json(['url' => $uploadedFileUrl], 201);
    }
}
