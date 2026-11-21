# gallery studio space

```
gallery-studio-space/
├── index.html                  home page (video background)
├── style.css                   global stylesheet, used by every page
├── script.js                   picks the desktop or mobile video
├── media/
│   ├── bg-desktop.mp4          replace with your desktop video
│   ├── bg-mobile.mp4           replace with your mobile (vertical) video
│   ├── poster-desktop.jpg      still frame shown while the video loads
│   └── poster-mobile.jpg
└── coming-up/
    └── shart-market/
        └── index.html          SHART MARKET page (black background)
```

## Swap in your videos
Compress your videos with the ffmpeg commands, then save them over the files in `media/` using the same names.
Phones (screens narrower than 768px) get the mobile video.

## Add a show
1. Copy the `coming-up/shart-market/` folder and rename it, e.g. `coming-up/new-show/`.
2. Edit the text in its `index.html`.
3. Add a `<li>` link under the right menu in **every** page's menu (`index.html` and each show page).
   For "coming down", put past shows in a `coming-down/` folder the same way.

## Put it on GitHub Pages
1. Create a repository on GitHub and upload everything in this folder (not the folder itself).
2. Settings → Pages → Source: "Deploy from a branch" → branch `main`, folder `/ (root)` → Save.
3. The site appears at `https://YOUR-NAME.github.io/REPO-NAME/` within a minute or two.

All links are relative, so they work in that subfolder address and with a custom domain later.

## Preview on your computer
Links like `coming-up/shart-market/` need a small local server (double-clicking the file won't follow them):
`python3 -m http.server` in this folder, then open http://localhost:8000
