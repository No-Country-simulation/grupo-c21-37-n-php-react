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
        Schema::create('sightings', function (Blueprint $table) {
            $table->id(); // Primary Key (PK)
            $table->foreignId('pet_id')->constrained('pets'); // Foreign Key (FK) a 'pets'
            $table->foreignId('user_id')->constrained('users'); // Foreign Key (FK) a 'users'
            $table->text('description')->nullable(); // Detalles del avistamiento
            $table->string('location'); // Lugar donde fue visto
            $table->dateTime('date_reported'); // Fecha y hora del avistamiento
            $table->timestamps(); // created_at y updated_at
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sightings');
    }
};
