<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="নিরাপদ যাতায়াত বাস্তবায়ন পরিষদ (নিযাবাপ / NJBP) - নিরাপদ বহুমুখী যাতায়াত বাস্তবায়ন ও নাগরিক সচেতনতা পরিষদ।">
        <link rel="icon" type="image/x-icon" href="/images/fav.ico">
        <link rel="shortcut icon" href="/images/fav.ico">

        <title inertia>{{ config('app.name', 'নিরাপদ যাতায়াত বাস্তবায়ন পরিষদ') }} - NJBP</title>

        <!-- Google Fonts: Hind Siliguri, Noto Sans Bengali, Plus Jakarta Sans & Inter -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Noto+Sans+Bengali:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased bg-slate-50 text-slate-800 selection:bg-sky-500 selection:text-white">
        @inertia
    </body>
</html>
