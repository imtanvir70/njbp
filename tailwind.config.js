import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['"Hind Siliguri"', '"Noto Sans Bengali"', '"Plus Jakarta Sans"', 'Inter', ...defaultTheme.fontFamily.sans],
                bengali: ['"Hind Siliguri"', '"Noto Sans Bengali"', 'sans-serif'],
            },
            colors: {
                nj: {
                    navy: '#0b1329',
                    dark: '#070d1e',
                    card: '#111b33',
                    border: '#1e2c4f',
                    primary: '#0ea5e9',
                    emerald: '#10b981',
                    accent: '#38bdf8',
                    warning: '#f59e0b',
                    danger: '#ef4444',
                }
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },

    plugins: [forms],
};
