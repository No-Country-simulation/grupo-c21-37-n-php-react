<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FotoMascota extends Model
{
    use HasFactory;

    protected $fillable = ['url', 'mascota_id'];

    public function mascota()
    {
        return $this->belongsTo(Mascota::class);
    }
}