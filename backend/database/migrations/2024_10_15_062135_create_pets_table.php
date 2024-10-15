<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pets', function (Blueprint $table) {
            $table->id(); // Primary Key (PK)
            $table->foreignId('user_id')->constrained('users'); // Foreign Key (FK) a 'users'
            $table->string('name'); // Nombre de la mascota
            $table->string('type'); // Tipo (gato o perro)
            $table->string('breed'); // Raza
            $table->string('age'); // Edad (cachorro o adulto)
            $table->string('colour'); // Color de la mascota
            $table->string('gender'); // Género (macho o hembra)
            $table->text('description')->nullable(); // Otras observaciones (castración, chip, etc.)
            $table->enum('status', ['perdido', 'encontrado']); // Estado de la mascota
            $table->string('location_lost')->nullable(); // Lugar de pérdida
            $table->dateTime('location_date_lost')->nullable(); // Fecha y hora de la pérdida
            $table->string('location_last_seen')->nullable(); // Última ubicación reportada
            $table->dateTime('date_last_seen')->nullable(); // Fecha y hora en la que fue vista por última vez
            $table->timestamps(); // created_at y updated_at
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pets');
    }
};
