import localFont from 'next/font/local';

export const mc_OleaOlive = localFont({
    // path is relative to this file (app/layout.js) -> go up one to project root then into public/fonts
    src: '../public/fonts/OleaOlive.otf',
    variable: '--font-OleaOlive', // Optional: defines a CSS variable name
});

export const mc_Samthing = localFont({
  src: '../public/fonts/Samthing.otf',
  variable: '--font-Samthing',
});

export const mc_Alexandria400 = localFont({
  src: '../public/fonts/Alexandria.ttf',
  variable: '--font-Samthing',
  weight: '400'
});

export const mc_Alexandria600 = localFont({
  src: '../public/fonts/Alexandria.ttf',
  variable: '--font-Samthing',
  weight: '600'
});

export const mc_Alexandria300 = localFont({
  src: '../public/fonts/Alexandria.ttf',
  variable: '--font-Samthing',
  weight: '300'
});