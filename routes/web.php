<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PublicController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Public International Website Routes
Route::get('/', [PublicController::class, 'index'])->name('home');
Route::get('/gallery', [PublicController::class, 'gallery'])->name('gallery');
Route::get('/team', [PublicController::class, 'team'])->name('team');
Route::get('/stories', [PublicController::class, 'stories'])->name('stories');
Route::get('/stories/{slug}', [PublicController::class, 'storyShow'])->name('stories.show');
Route::get('/awareness', [PublicController::class, 'awareness'])->name('awareness');

// Citizen Safety Vigilance & Incident Action
Route::post('/report-incident', [PublicController::class, 'storeIncident'])->name('incident.store');
Route::post('/track-incident', [PublicController::class, 'trackIncident'])->name('incident.track');

// Dashboard & Auth (for staff / admin)
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
