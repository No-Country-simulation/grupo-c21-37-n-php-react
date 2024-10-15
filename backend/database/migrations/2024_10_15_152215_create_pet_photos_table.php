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
        Schema::create('pet_photos', function (Blueprint $table) {
            $table->id(); // Primary Key (PK)
            $table->foreignId('pet_id')->constrained('pets'); // Foreign Key (FK) a 'pets'
            $table->string('photo_url'); // URL de la foto de la mascota
            $table->timestamps(); // created_at y updated_at
        });        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pet_photos');
    }
};
