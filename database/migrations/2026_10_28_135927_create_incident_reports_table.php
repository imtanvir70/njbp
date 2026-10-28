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
        Schema::create('incident_reports', function (Blueprint $table) {
            $table->id();
            $table->string('tracking_number')->unique();
            $table->string('transit_mode')->default('road'); // road, air, train, water
            $table->string('title');
            $table->string('location');
            $table->text('description');
            $table->string('urgency')->default('medium'); // low, medium, high, critical
            $table->string('reporter_name')->nullable();
            $table->string('reporter_email')->nullable();
            $table->string('reporter_phone')->nullable();
            $table->string('status')->default('reported'); // reported, investigating, action_taken, resolved
            $table->text('investigation_notes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('incident_reports');
    }
};
