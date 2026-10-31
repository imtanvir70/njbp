<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PublicController;
use App\Http\Controllers\AdminController;
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

// Admin Command Center (100% Mobile & Desktop Responsive)
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [AdminController::class, 'index'])->name('dashboard');
    
    // Incident reports triage
    Route::patch('/admin/incidents/{incident}', [AdminController::class, 'updateIncident'])->name('admin.incidents.update');
    Route::delete('/admin/incidents/{incident}', [AdminController::class, 'destroyIncident'])->name('admin.incidents.destroy');

    // Gallery Management
    Route::post('/admin/gallery', [AdminController::class, 'storeGallery'])->name('admin.gallery.store');
    Route::patch('/admin/gallery/{gallery}', [AdminController::class, 'updateGallery'])->name('admin.gallery.update');
    Route::delete('/admin/gallery/{gallery}', [AdminController::class, 'destroyGallery'])->name('admin.gallery.destroy');

    // Success Stories Management
    Route::post('/admin/stories', [AdminController::class, 'storeStory'])->name('admin.stories.store');
    Route::patch('/admin/stories/{story}', [AdminController::class, 'updateStory'])->name('admin.stories.update');
    Route::delete('/admin/stories/{story}', [AdminController::class, 'destroyStory'])->name('admin.stories.destroy');

    // Team Members Management
    Route::post('/admin/team', [AdminController::class, 'storeTeam'])->name('admin.team.store');
    Route::patch('/admin/team/{member}', [AdminController::class, 'updateTeam'])->name('admin.team.update');
    Route::delete('/admin/team/{member}', [AdminController::class, 'destroyTeam'])->name('admin.team.destroy');

    // Site Settings & Hero Counters Management
    Route::post('/admin/settings', [AdminController::class, 'updateSettings'])->name('admin.settings.update');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
