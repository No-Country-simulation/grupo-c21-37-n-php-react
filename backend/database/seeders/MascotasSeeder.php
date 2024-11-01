<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MascotasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('mascotas')->insert([
            [
                'nombre' => 'Firulais',
                'especie' => 'perro',
                'raza' => 'Labrador',
                'edad' => 3,
                'sexo' => 'macho',
                'castrado' => true,
                'microchip' => true,
                'descripcion' => 'Perro amigable y juguetón',
                'estado' => 'perdido',
                'user_id' => 1,
            ],
            [
                'nombre' => 'Michi',
                'especie' => 'gato',
                'raza' => 'Siames',
                'edad' => 2,
                'sexo' => 'hembra',
                'castrado' => false,
                'microchip' => false,
                'descripcion' => 'Gata curiosa y traviesa',
                'estado' => 'encontrado',
                'user_id' => 1,
            ],
            [
                'nombre' => 'Max',
                'especie' => 'perro',
                'raza' => 'Golden Retriever',
                'edad' => 5,
                'sexo' => 'macho',
                'castrado' => true,
                'microchip' => false,
                'descripcion' => 'Muy amigable con los niños',
                'estado' => 'perdido',
                'user_id' => 1,
            ],
            [
                'nombre' => 'Nala',
                'especie' => 'gato',
                'raza' => 'Maine Coon',
                'edad' => 4,
                'sexo' => 'hembra',
                'castrado' => true,
                'microchip' => true,
                'descripcion' => 'Gata tranquila y cariñosa',
                'estado' => 'encontrado',
                'user_id' => 1,
            ],
            [
                'nombre' => 'Rocky',
                'especie' => 'perro',
                'raza' => 'Bulldog',
                'edad' => 6,
                'sexo' => 'macho',
                'castrado' => false,
                'microchip' => true,
                'descripcion' => 'Perro fuerte y protector',
                'estado' => 'perdido',
                'user_id' => 1,
            ],
            [
                'nombre' => 'Simba',
                'especie' => 'gato',
                'raza' => 'Persa',
                'edad' => 3,
                'sexo' => 'macho',
                'castrado' => false,
                'microchip' => false,
                'descripcion' => 'Le gusta dormir mucho',
                'estado' => 'encontrado',
                'user_id' => 1,
            ],
            [
                'nombre' => 'Luna',
                'especie' => 'perro',
                'raza' => 'Beagle',
                'edad' => 2,
                'sexo' => 'hembra',
                'castrado' => true,
                'microchip' => true,
                'descripcion' => 'Perra muy enérgica',
                'estado' => 'perdido',
                'user_id' => 1,
            ],
            [
                'nombre' => 'Bella',
                'especie' => 'gato',
                'raza' => 'Angora',
                'edad' => 5,
                'sexo' => 'hembra',
                'castrado' => false,
                'microchip' => true,
                'descripcion' => 'Gata muy elegante y tranquila',
                'estado' => 'encontrado',
                'user_id' => 1,
            ],
            [
                'nombre' => 'Toby',
                'especie' => 'perro',
                'raza' => 'Cocker Spaniel',
                'edad' => 4,
                'sexo' => 'macho',
                'castrado' => true,
                'microchip' => true,
                'descripcion' => 'Perro cariñoso y fiel',
                'estado' => 'perdido',
                'user_id' => 1,
            ],
        ]);
    }
}
