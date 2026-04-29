/* ============================================================
   NX Loading Screen — main.js (Modern UI)
   ============================================================ */

/* ============================================================
   CONFIG — แก้ไขข้อมูลเซิร์ฟเวอร์ตรงนี้
   ============================================================ */
const CONFIG = {

    serverName:    'North Valley University',
    serverTagline: 'ประสบการณ์การเล่นที่ดีที่สุด',

    slideshowImages: [
        'images/slide5.png',
        'images/slide2.png',
        'images/slide3.png',
        'images/slide4.png',
    ],

    slideshowInterval: 6500,

    /* อัพเดทเซิร์ฟเวอร์ */
    updates: [
        {
            title: 'Wellcome Back To NORTH VALLEY UNIVERSITY',
            desc:  'เปิดตัวอย่างเป็นทางการ พร้อมระบบใหม่มากมาย',
            image: 'images/gallery/showcase/1.png',
            date:  '27 เม.ย. 2026',
        },
        {
            title: 'Server Event See your Bate TEST',
            desc:  'งานกิจอำลา และ ขอบคุณผู้เล่นทุกคนที่สนับสนุนเซิร์ฟเวอร์มาตลอด แล้วพบกันใหม่ในเร็วๆนี้',
            image: 'images/gallery/showcase/2.png',
            date:  '20 เม.ย. 2026',
        },
        {
            title: 'Server Event BETA TEST',
            desc:  'เปิดทดสอบ close beta สำหรับผู้เล่นกลุ่มเล็กๆ เพื่อปรับปรุงและแก้ไขก่อนเปิดจริง',
            image: 'images/gallery/showcase/3.png',
            date:  '12 เม.ย. 2026',
        },
        {
            title: 'Server Event ALPHA TEST',
            desc:  'เปิดทดสอบ alpha สำหรับผู้เล่นกลุ่มเล็กๆ เพื่อทดสอบระบบพื้นฐานและแก้ไขบั๊กใหญ่ๆ',
            image: 'images/gallery/showcase/4.png',
            date:  '10 เม.ย. 2026',
        },
    ],

    /* กฎเซิร์ฟเวอร์ */
    rules: [
        'ห้ามใช้คำหยาบคาย ดูถูก หรือคุกคามผู้เล่นคนอื่นในทุกช่องทาง',
        'ห้ามใช้ Bug หรือช่องโหว่ในเกม หากพบให้แจ้ง Admin ทันที',
        'ห้ามใช้ Hack, Cheat หรือโปรแกรมที่ช่วยให้ได้เปรียบ',
        'เคารพผู้เล่นคนอื่นและปฏิบัติต่อกันอย่างสุภาพเสมอ',
        'ห้ามโฆษณาเซิร์ฟเวอร์อื่นในทุกช่องทาง',
        'ต้อง Roleplay ตลอดเวลา ห้ามออกนอก Character โดยไม่มีเหตุผล',
        'ห้าม RDM (Random Deathmatch) — ฆ่าผู้เล่นโดยไม่มีเหตุผลทาง RP',
        'ห้าม VDM (Vehicle Deathmatch) — ใช้ยานพาหนะพุ่งชนหรือฆ่าผู้เล่น',
        'ห้าม Metagaming — นำข้อมูลนอกเกม (Discord, สตรีม) มาใช้ใน RP',
        'ห้าม Combat Logging — ออกจากเกมเพื่อหลีกเลี่ยงสถานการณ์',
        'ใช้คำสั่งที่ถูกต้อง: /me, /do, /radio ตามบริบทของ RP',
        'ติดต่อ Admin ผ่านระบบ /report เท่านั้น ห้ามพูดในช่อง OOC',
    ],

    /* ทีมงาน */
    staff: [
        { name: 'Nat',         role: 'support', emoji: null, avatar: 'images/avata/benjamin.jpg', desc: 'ผู้สนับสนุนเงินแบบไม่หวังผลกำไร' },
        { name: 'P',           role: 'owner',   emoji: null, avatar: 'images/avata/benjamin.jpg', desc: 'ผู้ก่อตั้งเซิร์ฟเวอร์ และ ดูแลด้าน gameplay' },
        { name: 'Benjamin_1X', role: 'dev',     emoji: null, avatar: 'images/avata/benjamin.jpg', desc: 'นักพัฒนาระบบหลักของเซิร์ฟเวอร์' },
        { name: 'Dodo',        role: 'dev',     emoji: null, avatar: 'images/avata/benjamin.jpg', desc: 'พัฒนา เสื้อผ้า' },
        { name: 'perny',       role: 'admin',   emoji: null, avatar: 'images/avata/benjamin.jpg', desc: 'ผู้ดูแลระบบและช่วยเหลือผู้เล่น' },
        { name: 'Linlian',     role: 'admin',   emoji: null, avatar: 'images/avata/benjamin.jpg', desc: 'ผู้ดูแลระบบและช่วยเหลือผู้เล่น' },
    ],

    roleNames: {
        owner:   'Developer Of Founder',
        admin:   'Administrator',
        dev:     'Developer Of Founder',
        mod:     'Moderator',
        support: 'Support Team',
    },

    roleBadge: {
        owner:   'badge-owner',
        admin:   'badge-admin',
        dev:     'badge-dev',
        mod:     'badge-mod',
        support: 'badge-support',
    },

    /* แกลเลอรี่ */
    gallery: {
        events: [
            'images/gallery/events/1.png',
            'images/gallery/events/2.png',
            'images/gallery/events/3.png',
            'images/gallery/events/4.png',
        ],
        screenshots: [
            'images/gallery/screenshots/1.png',
            'images/gallery/screenshots/2.png',
            'images/gallery/screenshots/3.png',
            'images/gallery/screenshots/4.png',
            'images/gallery/screenshots/5.png',
            'images/gallery/screenshots/6.png',
            'images/gallery/screenshots/7.png',
        ],
        showcase: [
            'images/gallery/showcase/1.png',
            'images/gallery/showcase/2.png',
            'images/gallery/showcase/3.png',
        ],
    },

    galleryLabels: {
        events:      'กิจกรรม',
        screenshots: 'ภาพหน้าจอ',
        showcase:    'ไฮไลต์',
    },

    /* เพลง — เพิ่ม cover: 'path/to/image' หากต้องการ Album Art */
    music: [
        { src: 'music/track2.mp3', label: 'Esme Emerson - Yard',                cover: 'images/cover/1.avif' },
        { src: 'music/track1.mp3', label: 'My Chemical Romance - Na Na Na',      cover: 'images/cover/2.jpg' },
        { src: 'music/track3.mp3', label: 'One More Light - Linkin Park',      cover: 'images/cover/3.jpg' },

    ],

    musicVolume: 10,
    musicLoop:   true,

    loadingMessages: [
        'กำลังเตรียมระบบ...',
        'กำลังโหลดทรัพยากร...',
        'กำลังเชื่อมต่อเซิร์ฟเวอร์...',
        'กำลังโหลดแผนที่...',
        'กำลังเตรียมตัวละคร...',
        'เกือบเสร็จแล้ว...',
        'กำลังเข้าสู่โลก Roleplay...',
    ],

    /* Social links — ใส่ URL จริงหรือ '' เพื่อซ่อน */
    social: {
        discord:   'https://discord.gg/fzCTkVb93N',
        twitter:   '',
        instagram: '',
        youtube:   '',
    },
};

/* ============================================================
   STATE
   ============================================================ */
let currentSlide    = 0;
let slideshowTimer  = null;
let currentProgress = 0;

/* Page Navigation */
const PAGES = ['home', 'updates', 'rules', 'staff', 'gallery'];
let currentPageIndex = 0;

/* Music */
let musicAudio         = null;
let musicIndex         = 0;
let musicPlaying       = false;
let musicMuted         = false;
let musicProgressTimer = null;

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    applyServerInfo();
    initEntranceAnimations();
    initSlideshow();
    initParallax();
    initCustomCursor();
    initClock();
    initTypingAnimation();
    initUpdates();
    initRules();
    initStaff();
    initGallery();
    initMusicPlayer();
    initPageNav();
    initSocialLinks();
    listenFiveMEvents();
    simulateProgressDev();
});

/* ============================================================
   SERVER INFO
   ============================================================ */
function applyServerInfo() {
    const nameEl    = document.getElementById('server-name');
    const taglineEl = document.getElementById('server-tagline');
    if (nameEl)    nameEl.textContent    = CONFIG.serverName;
    if (taglineEl) taglineEl.textContent = CONFIG.serverTagline;
}

/* ============================================================
   SLIDESHOW
   ============================================================ */
function initSlideshow() {
    const container = document.getElementById('slideshow');
    if (!container) return;

    if (!CONFIG.slideshowImages.length) {
        container.style.background = 'linear-gradient(135deg, #0d0d0d 0%, #1a1a2e 100%)';
        return;
    }

    CONFIG.slideshowImages.forEach((src, i) => {
        const slide = document.createElement('div');
        slide.className = 'slide' + (i === 0 ? ' active' : '');
        slide.style.backgroundImage = `url('${src}')`;
        container.appendChild(slide);
    });

    if (CONFIG.slideshowImages.length > 1) {
        slideshowTimer = setInterval(nextSlide, CONFIG.slideshowInterval);
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % CONFIG.slideshowImages.length;
    updateActiveSlide();
}

function updateActiveSlide() {
    document.querySelectorAll('.slide').forEach((s, i) =>
        s.classList.toggle('active', i === currentSlide)
    );
}

/* ============================================================
   PAGE NAVIGATION
   ============================================================ */
function initPageNav() {
    updatePageNavButtons();
}

function changePage(dir) {
    const next = currentPageIndex + dir;
    if (next < 0 || next >= PAGES.length) return;
    goToPage(next);
}

function goToPage(index) {
    /* Hide current */
    const oldPage = document.getElementById('page-' + PAGES[currentPageIndex]);
    if (oldPage) oldPage.classList.remove('active');

    currentPageIndex = index;

    /* Show new */
    const newPage = document.getElementById('page-' + PAGES[currentPageIndex]);
    if (newPage) newPage.classList.add('active');

    updatePageNavButtons();
}

function updatePageNavButtons() {
    const prevBtn = document.getElementById('page-prev');
    const nextBtn = document.getElementById('page-next');

    if (prevBtn) {
        if (currentPageIndex > 0) {
            prevBtn.classList.add('visible');
        } else {
            prevBtn.classList.remove('visible');
        }
    }

    if (nextBtn) {
        if (currentPageIndex < PAGES.length - 1) {
            nextBtn.classList.add('visible');
        } else {
            nextBtn.classList.remove('visible');
        }
    }
}

/* ============================================================
   SERVER UPDATES
   ============================================================ */
function initUpdates() {
    const container = document.getElementById('updates-container');
    if (!container) return;

    CONFIG.updates.forEach(({ title, desc, image, date }) => {
        const card = document.createElement('div');
        card.className = 'update-card';
        card.innerHTML = `
            <div class="update-card-thumb">
                <img src="${image || ''}" alt="${title}" loading="lazy"
                     onerror="this.parentElement.style.display='none'">
            </div>
            <div class="update-card-body">
                <p class="update-card-date">${date || ''}</p>
                <h3 class="update-card-title">${title}</h3>
                <p class="update-card-desc">${desc}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

/* ============================================================
   SERVER RULES
   ============================================================ */
function initRules() {
    const container = document.getElementById('rules-container');
    if (!container) return;

    CONFIG.rules.forEach((text, i) => {
        const row = document.createElement('div');
        row.className = 'rule-row';
        row.innerHTML = `
            <span class="rule-row-num">${i + 1}</span>
            <p class="rule-row-text">${text}</p>
        `;
        container.appendChild(row);
    });
}

/* ============================================================
   SERVER STAFF
   ============================================================ */
function initStaff() {
    const container = document.getElementById('staff-container');
    if (!container) return;

    CONFIG.staff.forEach(({ name, role, emoji, avatar, desc }) => {
        const roleName = CONFIG.roleNames[role]  || role;
        const badgeCls = CONFIG.roleBadge[role]  || 'badge-support';

        const avatarHTML = avatar
            ? `<img src="${avatar}" alt="${name}" onerror="this.replaceWith(document.createTextNode('${emoji || '👤'}'))">`
            : `<span>${emoji || '👤'}</span>`;

        const card = document.createElement('div');
        card.className = 'staff-card';
        card.innerHTML = `
            <div class="staff-avatar">${avatarHTML}</div>
            <p class="staff-name">${name}</p>
            <span class="staff-role-badge ${badgeCls}">${roleName}</span>
            ${desc ? `<p class="staff-desc">${desc}</p>` : ''}
        `;
        container.appendChild(card);
    });
}

/* ============================================================
   GALLERY
   ============================================================ */
function initGallery() {
    renderGallery('all');
}

function renderGallery(category) {
    const container = document.getElementById('gallery-container');
    if (!container) return;

    container.innerHTML = '';
    let images = [];

    if (category === 'all') {
        Object.entries(CONFIG.gallery).forEach(([cat, paths]) =>
            paths.forEach(src => images.push({ src, cat }))
        );
    } else {
        (CONFIG.gallery[category] || []).forEach(src =>
            images.push({ src, cat: category })
        );
    }

    if (!images.length) {
        const empty = document.createElement('div');
        empty.className = 'gallery-empty';
        empty.textContent = 'ยังไม่มีรูปภาพในหมวดนี้';
        container.appendChild(empty);
        return;
    }

    images.forEach(({ src, cat }) => {
        const label = CONFIG.galleryLabels[cat] || cat;
        const item  = document.createElement('div');
        item.className = 'gallery-item';
        item.setAttribute('data-category', cat);
        item.setAttribute('data-label', label);

        const img   = document.createElement('img');
        img.src     = src;
        img.alt     = label;
        img.loading = 'lazy';

        item.appendChild(img);
        item.addEventListener('click', () => openLightbox(src));
        container.appendChild(item);
    });
}

function filterGallery(category) {
    document.querySelectorAll('.cat-btn').forEach(btn =>
        btn.classList.toggle('active', btn.dataset.category === category)
    );
    renderGallery(category);
}

/* ============================================================
   LIGHTBOX
   ============================================================ */
function openLightbox(src) {
    const lb  = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    if (!lb || !img) return;
    img.src = src;
    lb.classList.add('active');
}

function closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (!lb) return;
    lb.classList.remove('active');
    setTimeout(() => {
        const img = document.getElementById('lightbox-img');
        if (img) img.src = '';
    }, 350);
}

/* ============================================================
   SOCIAL LINKS
   ============================================================ */
function initSocialLinks() {
    const btns = document.querySelectorAll('.social-btn');
    const keys = ['discord', 'twitter', 'instagram', 'youtube'];
    btns.forEach((btn, i) => {
        const url = CONFIG.social[keys[i]];
        if (url) {
            btn.onclick = () => window.open(url, '_blank');
        }
    });
}

/* ============================================================
   PROGRESS
   ============================================================ */
function updateProgress(percent) {
    percent = Math.min(100, Math.max(0, percent));
    currentProgress = percent;

    const bar       = document.getElementById('progress-bar');
    const percentEl = document.getElementById('loading-percent');
    const statusEl  = document.getElementById('loading-status');

    if (bar)       bar.style.width = `${percent}%`;
    if (percentEl) percentEl.textContent = `${Math.round(percent)}%`;

    if (statusEl) {
        const msgs  = CONFIG.loadingMessages;
        const index = Math.min(
            Math.floor((percent / 100) * msgs.length),
            msgs.length - 1
        );
        statusEl.textContent = msgs[index];
    }
}

/* ============================================================
   FIVEM NUI EVENTS
   ============================================================ */
function listenFiveMEvents() {
    window.addEventListener('message', (event) => {
        const data = event.data;
        if (!data) return;
        if (data.eventName === 'loadProgress') {
            updateProgress((parseFloat(data.loadFraction) || 0) * 100);
        }
        if (data.eventName === 'startLoad') {
            updateProgress(0);
        }
    });

    const resourceName = (typeof GetParentResourceName === 'function')
        ? GetParentResourceName()
        : 'nx-loadingscreen';

    setInterval(() => {
        fetch(`https://${resourceName}/loadingScreenKeepAlive`, {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify({}),
        }).catch(() => {});
    }, 1000);
}

/* ============================================================
   VISUAL EFFECTS
   ============================================================ */
function initEntranceAnimations() {
    setTimeout(() => document.querySelector('.header')?.classList.add('visible'),        80);
    setTimeout(() => document.querySelector('.footer')?.classList.add('visible'),        180);
    setTimeout(() => {
        document.getElementById('page-prev')?.classList.add('visible');
        document.getElementById('page-next')?.classList.add('visible');
        /* Re-evaluate which arrows are actually shown */
        updatePageNavButtons();
    }, 320);
}

function initParallax() {
    const slideshow = document.getElementById('slideshow');
    if (!slideshow) return;

    let targetX = 0, targetY = 0, currentX = 0, currentY = 0;

    document.addEventListener('mousemove', (e) => {
        targetX = ((e.clientX / window.innerWidth)  - 0.5) * 18;
        targetY = ((e.clientY / window.innerHeight) - 0.5) * 10;
    });

    (function tick() {
        currentX += (targetX - currentX) * 0.05;
        currentY += (targetY - currentY) * 0.05;
        slideshow.style.transform = `scale(1.06) translate(${-currentX}px, ${-currentY}px)`;
        requestAnimationFrame(tick);
    })();
}

function initCustomCursor() {
    const dot  = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0, visible = false;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = mouseX + 'px';
        dot.style.top  = mouseY + 'px';
        if (!visible) {
            visible = true;
            dot.classList.add('visible');
            ring.classList.add('visible');
            document.body.classList.add('custom-cursor-active');
        }
    });

    (function animateRing() {
        ringX += (mouseX - ringX) * 0.14;
        ringY += (mouseY - ringY) * 0.14;
        ring.style.left = ringX + 'px';
        ring.style.top  = ringY + 'px';
        requestAnimationFrame(animateRing);
    })();

    const CLICKABLE =
        'button, a, [onclick], input, .gallery-item, .cat-btn, .mp-ctrl, ' +
        '.mp-play-btn, .mp-mute-btn, .mp-volume, .mp-bar-track, ' +
        '.staff-card, .update-card, .page-nav, .social-btn, .lightbox-close';

    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(CLICKABLE)) document.body.classList.add('cursor-hover');
    });
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(CLICKABLE)) document.body.classList.remove('cursor-hover');
    });
    document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
    document.addEventListener('mouseup',   () => document.body.classList.remove('cursor-click'));
}

function initClock() {
    const el = document.getElementById('server-clock');
    if (!el) return;
    function tick() {
        const now = new Date();
        el.textContent = [now.getHours(), now.getMinutes(), now.getSeconds()]
            .map(n => String(n).padStart(2, '0')).join(':');
    }
    tick();
    setInterval(tick, 1000);
}

function initTypingAnimation() {
    const el = document.getElementById('server-tagline');
    if (!el) return;
    const fullText = el.textContent.trim();
    el.textContent = '';
    el.classList.add('typing');
    let i = 0;
    function typeChar() {
        if (i < fullText.length) {
            el.textContent += fullText[i++];
            setTimeout(typeChar, 50 + Math.random() * 35);
        } else {
            setTimeout(() => el.classList.remove('typing'), 1500);
        }
    }
    setTimeout(typeChar, 600);
}

/* ============================================================
   MUSIC PLAYER
   ============================================================ */
function initMusicPlayer() {
    if (!CONFIG.music || !CONFIG.music.length) {
        return;
    }

    document.getElementById('mp-toggle')?.addEventListener('click', togglePlay);
    document.getElementById('mp-prev')?.addEventListener('click', playPrev);
    document.getElementById('mp-next')?.addEventListener('click', playNext);
    document.getElementById('mp-mute')?.addEventListener('click', toggleMute);

    const volSlider = document.getElementById('mp-volume');
    if (volSlider) {
        volSlider.value = CONFIG.musicVolume;
        volSlider.addEventListener('input', () => {
            if (musicAudio) musicAudio.volume = volSlider.value / 100;
            if (volSlider.value > 0 && musicMuted) toggleMute();
        });
    }

    document.getElementById('mp-bar-track')?.addEventListener('click', (e) => {
        if (!musicAudio || !musicAudio.duration) return;
        const rect  = e.currentTarget.getBoundingClientRect();
        const ratio = (e.clientX - rect.left) / rect.width;
        musicAudio.currentTime = ratio * musicAudio.duration;
    });

    loadTrack(0, false);
    attemptAutoplay();
}

function loadTrack(index, autoPlay = true) {
    if (musicAudio) {
        musicAudio.pause();
        musicAudio.src = '';
    }
    clearInterval(musicProgressTimer);

    const list   = CONFIG.music;
    musicIndex   = ((index % list.length) + list.length) % list.length;
    const track  = list[musicIndex];

    musicAudio        = new Audio(track.src);
    musicAudio.volume = (document.getElementById('mp-volume')?.value ?? CONFIG.musicVolume) / 100;
    musicAudio.muted  = musicMuted;

    /* Update labels: left = current, right = next */
    updateTrackLabels();

    /* Album art */
    updateAlbumArt(track.cover || null);

    musicAudio.addEventListener('ended', () => {
        if (CONFIG.musicLoop) playNext();
        else setPlayState(false);
    });

    musicAudio.addEventListener('canplay', () => {
        if (autoPlay) playAudio();
    });

    musicAudio.addEventListener('loadedmetadata', () => {
        const totalEl = document.getElementById('mp-time-total');
        if (totalEl) totalEl.textContent = formatTime(musicAudio.duration);
    });

    musicProgressTimer = setInterval(updateMusicProgress, 500);

    if (autoPlay) musicAudio.load();
}

function updateTrackLabels() {
    const list       = CONFIG.music;
    const prevIndex  = ((musicIndex - 1) + list.length) % list.length;
    const nextIndex  = (musicIndex + 1) % list.length;

    const leftEl  = document.getElementById('mp-label-left');
    const rightEl = document.getElementById('mp-label-right');

    if (leftEl)  leftEl.textContent  = list[prevIndex]?.label || '';
    if (rightEl) rightEl.textContent = list[nextIndex]?.label || '';
}

function updateAlbumArt(coverSrc) {
    const artImg  = document.getElementById('album-art-img');
    const artIcon = document.querySelector('.album-art-icon');

    if (coverSrc && artImg) {
        artImg.src           = coverSrc;
        artImg.style.display = 'block';
        if (artIcon) artIcon.style.display = 'none';
    } else {
        if (artImg) artImg.style.display = 'none';
        if (artIcon) artIcon.style.display = 'block';
    }
}

function playAudio() {
    if (!musicAudio) return;
    musicAudio.play()
        .then(() => setPlayState(true))
        .catch(() => setPlayState(false));
}

function pauseAudio() {
    if (!musicAudio) return;
    musicAudio.pause();
    setPlayState(false);
}

function togglePlay() {
    if (!musicAudio) return;
    musicPlaying ? pauseAudio() : playAudio();
}

function playPrev() { loadTrack(musicIndex - 1, true); }
function playNext() { loadTrack(musicIndex + 1, true); }

function toggleMute() {
    musicMuted = !musicMuted;
    if (musicAudio) musicAudio.muted = musicMuted;
    const volIcon  = document.getElementById('mp-icon-vol');
    const muteIcon = document.getElementById('mp-icon-mute');
    if (volIcon)  volIcon.style.display  = musicMuted ? 'none'  : 'block';
    if (muteIcon) muteIcon.style.display = musicMuted ? 'block' : 'none';
}

function setPlayState(playing) {
    musicPlaying = playing;
    const iconPlay  = document.getElementById('mp-icon-play');
    const iconPause = document.getElementById('mp-icon-pause');
    if (iconPlay)  iconPlay.style.display  = playing ? 'none'  : 'block';
    if (iconPause) iconPause.style.display = playing ? 'block' : 'none';
}

function updateMusicProgress() {
    if (!musicAudio || !musicAudio.duration) return;
    const pct    = (musicAudio.currentTime / musicAudio.duration) * 100;
    const fill   = document.getElementById('mp-bar-fill');
    const curEl  = document.getElementById('mp-time-cur');
    if (fill)  fill.style.width = `${pct}%`;
    if (curEl) curEl.textContent = formatTime(musicAudio.currentTime);
}

function formatTime(seconds) {
    if (!isFinite(seconds)) return '00:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

function attemptAutoplay() {
    if (!musicAudio) return;
    const tryPlay = () => {
        playAudio();
        document.removeEventListener('click',   tryPlay);
        document.removeEventListener('keydown', tryPlay);
    };
    document.addEventListener('click',   tryPlay, { once: true });
    document.addEventListener('keydown', tryPlay, { once: true });
    playAudio();
}

/* ============================================================
   KEYBOARD SHORTCUTS
   ============================================================ */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const lb = document.getElementById('lightbox');
        if (lb?.classList.contains('active')) closeLightbox();
    }
    if (e.key === 'ArrowRight') changePage(1);
    if (e.key === 'ArrowLeft')  changePage(-1);
});

/* ============================================================
   DEV SIMULATE (browser only)
   ============================================================ */
function simulateProgressDev() {
    if (window.location.protocol === 'nui:') return;
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 2.5 + 0.5;
        if (progress >= 100) { progress = 100; clearInterval(interval); }
        updateProgress(progress);
    }, 180);
}
