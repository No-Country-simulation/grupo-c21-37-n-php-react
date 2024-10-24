<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMascotasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mascotas', function (Blueprint $table) {
            $table->id();
            $table->string('nombre', 100);
            $table->enum('especie', ['perro', 'gato']); // Especie con ENUM
            $table->string('raza', 100)->nullable();
            $table->integer('edad')->nullable();
            $table->enum('sexo', ['macho', 'hembra']); // Sexo con ENUM
            $table->boolean('castrado')->default(false); // Castrado como booleano (false por defecto)
            $table->boolean('microchip')->default(false); // Microchip como booleano
            $table->text('descripcion')->nullable();
            $table->enum('estado', ['perdido', 'encontrado'])->default('perdido'); // Estado con ENUM
            $table->foreignId('user_id')->constrained('users'); // Relación con usuario
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mascotas');
    }
}
