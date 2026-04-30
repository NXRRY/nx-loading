-- ============================================================
-- NX Loading Screen - fxmanifest.lua
-- ============================================================

fx_version 'cerulean'
game 'gta5'

description 'NX LoadingScreen - Modern Glassmorphism'
version '1.0.0'
author 'NXRRY'

loadscreen 'html/index.html'
loadscreen_manual_shutdown 'yes'

files {
    -- Core
    'html/index.html',
    'html/css/style.css',
    'html/js/main.js',

    -- รูปภาพหลัก (slides, logo, ฯลฯ)
    'html/images/*.png',
    'html/images/*.jpg',
    'html/images/*.jpeg',
    'html/images/*.webp',
    'html/images/*.avif',

    -- Avatar ทีมงาน
    'html/images/avata/*.png',
    'html/images/avata/*.jpg',
    'html/images/avata/*.jpeg',
    'html/images/avata/*.webp',
    'html/images/avata/*.avif',

    -- Cover ปกเพลง
    'html/images/cover/*.png',
    'html/images/cover/*.jpg',
    'html/images/cover/*.jpeg',
    'html/images/cover/*.webp',
    'html/images/cover/*.avif',

    -- Gallery
    'html/images/gallery/events/*',
    'html/images/gallery/screenshots/*',
    'html/images/gallery/showcase/*',

    -- เพลง
    'html/music/*.mp3',
    'html/music/*.ogg',
    'html/music/*.wav',
}
