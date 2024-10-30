<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class MascotaCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray($request)
    {
        return [
            'data' => $this->collection->map(function ($mascota) {
                return [
                    'id' => $mascota->id,
                    'nombre' => $mascota->nombre,
                    'descripcion' => $mascota->descripcion,
                    'fotos_mascotas' => $mascota->fotos_mascotas->map(function ($foto) {
                        return [
                            'id' => $foto->id,
                            'url' => $foto->url,
                        ];
                    }),
                ];
            }),
            'links' => [
                'self' => 'link-value',
            ],
        ];
    }
    
}
