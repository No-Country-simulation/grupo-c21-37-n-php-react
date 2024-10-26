<?php

namespace App\Models;

use App\Models\FotoMascota;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Mascota extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'especie',
        'raza',
        'edad',
        'sexo',
        'descripcion',
        'estado',
        'user_id',
    ];

    // Relación con el modelo User
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relación con fotos
    public function fotos_mascotas()
    {
        return $this->hasMany(FotoMascota::class);
    }

}