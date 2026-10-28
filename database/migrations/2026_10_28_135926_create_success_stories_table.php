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
        Schema::create('success_stories', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('category')->default('Road Safety');
            $table->string('transit_mode')->default('road'); // road, air, train, water, multi-modal
            $table->string('impact_stat')->nullable();
            $table->string('impact_label')->nullable();
            $table->text('summary');
            $table->longText('content');
            $table->text('image_url')->nullable();
            $table->string('location')->nullable();
            $table->date('story_date')->nullable();
            $table->boolean('is_featured')->default(true);
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('success_stories');
    }
};
