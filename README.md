# NX Loading Screen

> Modern glassmorphism FiveM loading screen — built by [NXRRY](https://github.com/NXRRY)

![Preview](html/images/slide5.png)

---

## Features

- **Glassmorphism UI** — frosted glass cards throughout
- **Page Navigation** — `«` / `»` arrows to switch between sections
- **Music Player** — frosted glass pill with album art, track labels, progress bar
- **5 Pages** — Home · Server Updates · Server Rules · Server Staff · Gallery
- **Social Icons** — Discord, X, Instagram, YouTube (configurable)
- **Slideshow Background** — auto-advance with parallax effect
- **Custom Cursor** — fixes FiveM NUI cursor issue
- **FiveM Integration** — `loadProgress` events + keep-alive heartbeat

---

## Pages

| Page | Description |
|------|-------------|
| Home | Background + music player |
| Server Updates | Grid of update cards with images |
| Server Rules | Numbered rule list |
| Server Staff | Staff cards with role badges |
| Gallery | Filterable image gallery with lightbox |

---

## Setup

1. Drop the `nx-loading` folder into your server's `resources` directory
2. Add to `server.cfg`:
   ```
   ensure nx-loading
   ```
3. Edit `html/js/main.js` → `CONFIG` section to customize content

---

## Configuration (`html/js/main.js`)

```js
const CONFIG = {
    serverName:    'Your Server Name',
    serverTagline: 'Your tagline here',

    // Slideshow background images (put files in html/images/)
    slideshowImages: ['images/slide1.png', ...],

    // Server Updates
    updates: [
        { title: 'Update 1.0', desc: '...', image: 'images/slide1.png', date: '01/01/2025' },
    ],

    // Rules — flat array of strings
    rules: [
        'No hacking or exploiting',
        ...
    ],

    // Staff
    staff: [
        { name: 'YourName', role: 'owner', emoji: '👑', avatar: 'images/avata/you.jpg', desc: '...' },
    ],

    // Music — add cover: 'images/cover.jpg' for album art
    music: [
        { src: 'music/track1.mp3', label: 'Artist - Song', cover: null },
    ],

    // Social links (set '' to hide)
    social: {
        discord:   'https://discord.gg/...',
        twitter:   '',
        instagram: '',
        youtube:   '',
    },
};
```

---

## Adding Avatar / Album Art

**Staff avatars** — place images in `html/images/avata/` and set:
```js
avatar: 'images/avata/name.jpg'
```

**Music cover art** — place images in `html/images/` and set:
```js
cover: 'images/cover1.jpg'
```

> All image paths must also be declared in `fxmanifest.lua` under `files { }` to load correctly in FiveM.

---

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `→` | Next page |
| `←` | Previous page |
| `Esc` | Close lightbox |

---

## File Structure

```
nx-loading/
├── fxmanifest.lua
└── html/
    ├── index.html
    ├── css/style.css
    ├── js/main.js
    ├── images/
    │   ├── slide1-5.png
    │   ├── logo.png
    │   ├── avata/          ← staff avatars
    │   └── gallery/
    │       ├── events/
    │       ├── screenshots/
    │       └── showcase/
    └── music/
        └── track1.mp3
```

---

## License

MIT — free to use and modify.  
Credit appreciated but not required.

---

*Built with ❤️ by NXRRY — Elite FiveM Script Architecture*
