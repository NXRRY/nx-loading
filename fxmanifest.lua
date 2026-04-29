-- ============================================================
-- NX Loading Screen - fxmanifest.lua
-- ใช้งานกับ FiveM (cfx-server)
-- ============================================================

fx_version 'cerulean'
game 'gta5'

description 'NX LoadingScreen - Minimal Red Dark Theme'
version '1.0.0'
author 'NX Development'

-- กำหนดไฟล์ HTML หลักสำหรับ Loading Screen
loadscreen 'html/index.html'

-- เปิดใช้งาน Manual Shutdown (Loading Screen จะปิดเองเมื่อโหลดเสร็จ)
loadscreen_manual_shutdown 'yes'

-- ระบุไฟล์ทั้งหมดที่ต้องใช้งาน
files {
    'html/index.html',
    'html/css/style.css',
    'html/js/main.js',

    -- รูปภาพ Slideshow หลัก + cover เพลง
    'html/images/*.jpg',
    'html/images/*.jpeg',
    'html/images/*.png',
    'html/images/*.webp',

    -- รูป Avatar ทีมงาน
    'html/images/avata/*.jpg',
    'html/images/avata/*.jpeg',
    'html/images/avata/*.png',
    'html/images/avata/*.webp',

    -- รูปแกลเลอรี่ (แบ่งตามหมวดหมู่)
    'html/images/gallery/events/*',
    'html/images/gallery/screenshots/*',
    'html/images/gallery/showcase/*',

    -- เพลงพื้นหลัง (ใส่ไฟล์ .mp3 / .ogg ในโฟลเดอร์ html/music/)
    'html/music/*.mp3',
    'html/music/*.ogg',
    'html/music/*.wav',
}
