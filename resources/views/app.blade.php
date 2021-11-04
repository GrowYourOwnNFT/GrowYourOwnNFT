<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Grow Your Own NFT') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"/>
        
        <!-- Styles -->
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">

        <!-- Scripts -->
        @routes
        <script src="{{ mix('js/app.js') }}" defer></script>

        <!-- Temporary NAV scroller, using it in React soon -->
        <script src="{{ asset('js/nav-throttle.js') }}" defer></script>
        <style>
            nav {                
                transition: all .3s ease-out;
            }
            nav.scroll-up,
            nav:focus-within {
                top: 0; 
            }
            .padded-link {
                padding: 0.375rem 0.75rem;
            }
            nav.scroll-down {
                top: -100%;
            }  
        </style>
    </head>
    <body class="font-sans antialiased">
        @inertia

        @env ('local')
            <!-- <script src="http://localhost:8000/browser-sync/browser-sync-client.js"></script> -->
        @endenv
    </body>
</html>
