# Balabharti Infrastructure Pvt. Ltd. — Website

A static website (plain HTML/CSS/JS, no build step) for a **geosynthetics /
ground-engineering** company — soil reinforcement, retaining structures, slope
protection, ground improvement and rockfall mitigation. Layout modelled on the
structure of techfabindia.com.

> All product/solution copy is original. The Terrain PDFs supplied during the
> build were used only as reference for which product categories to cover — no
> Terrain wording, product names, photos or client lists are used.

## Pages

| File             | Purpose                                                        |
|------------------|---------------------------------------------------------------|
| `index.html`     | Home — hero, what-we-do, solutions, products, sectors, why-us, standards, CTA |
| `about.html`     | Who we are, mission/vision/values, how we work, capabilities  |
| `solutions.html` | Six engineering applications (retaining, slope, ground, geohazard, pavement, drainage) |
| `products.html`  | Nine product families with anchors (`#geogrid`, `#geocell`, `#gfrp`, …) |
| `sectors.html`   | Eight infrastructure sectors served                          |
| `contact.html`   | Enquiry form + contact details + Google Map                  |

Shared assets:

- `assets/css/style.css` — all styling. **Brand colours live in the `:root` block at the top** (primary is the logo teal `#2E8C9E`).
- `assets/js/main.js` — mobile menu, sticky-header shadow, scroll reveal, footer year, contact-form mailto fallback.
- `assets/img/` — `logo.svg`, `hero-poster.jpg`, plus original SVG illustrations (`ill-*` cross-sections, `pr-*` product motifs) used across Home / About / Solutions / Products. Swap any for a real photo by dropping a JPG in and updating that `<img src>`.
- `assets/video/hero.mp4` — background video in the home hero (720p, ~8 s loop, ~6.5 MB, H.264, no audio). Source: aerial highway-interchange stock clip (`245030_medium.mp4`, transcoded from 2560×1440/54 MB).
- `assets/video/about.mp4` — background of the About page header (`.page-head__media`, ~7 MB, 8 s loop). Source: cable-stayed bridge at sunset (`231167_medium.mp4`). Poster: `about-poster.jpg`.
- `assets/video/solutions.mp4` — background of the Solutions page header (~6.4 MB, 7 s loop, 720p). Source: aerial causeway / dike highway (`370708_medium.mp4`, trimmed from 53 s / 56 MB). Poster: `solutions-poster.jpg`.
- `assets/video/products.mp4` — background of the Products page header (~7 MB, 5 s loop, 720p). Source: aerial concrete arch overpass (`276651_medium.mp4`, trimmed from 15 s / 28 MB). Poster: `products-poster.jpg`.
- `assets/video/sectors.mp4` — background of the Sectors page header (~6.6 MB, 8 s loop, 720p). Source: night city flyover / elevated highway (`19627-304735769_medium.mp4`, trimmed from 16 s / 16 MB). Poster: `sectors-poster.jpg`.
- `assets/video/contact.mp4` — background of the Contact page header (~6.9 MB, 5 s loop, 720p). Source: aerial township / residential development beside a highway (`334921_medium.mp4`, trimmed from 26 s / 70 MB). Poster: `contact-poster.jpg`.
- Every page now has a header/hero video. They use the shared `.page-head__media` block (home uses `.hero__media`) — remove that block from a page to go back to the plain navy gradient.
- All videos are hidden on screens < 700 px and for visitors who prefer reduced motion — the matching `*-poster.jpg` shows instead. Only a neutral (grey) gradient sits over each for text legibility; no colour wash.
- **Confirm both clips' licences permit commercial use** (Pexels/Pixabay/Coverr-style licences do; keep the download pages on file). To replace one, drop in a new `.mp4` and update its poster JPG to a matching frame.

## View it locally

Open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## What still needs your input

Placeholders are in `[SQUARE BRACKETS]` or an orange dashed note box. Find `[` to locate them.

1. **Logo** — `assets/img/logo.svg` is a clean recreation of the helmet mark, wired into every header/footer. Replace with the final artwork from Turbologo when you have it (keep the filename `logo.svg`, or add `logo.png` and update `src` in all 6 files).
2. **Company identifiers** — `CIN` and `GSTIN` in `contact.html` and every footer.
3. **Photos** — the site currently uses original SVG illustrations everywhere. When you have real project photos, replace individual `ill-*` / `pr-*` images (drop a JPG in `assets/img/`, update the `<img src>`), and we can add a Projects / Case Studies page.
4. **Hero stats** — `9+`, `6`, etc. on the homepage are indicative; adjust to real figures.
5. **Standards strip** — homepage lists ISO 9001 / IRC / MoRTH / IS / ASTM / BIS as *design/spec* references. Add real certificates (and any vendor approvals like NHAI) only if the company actually holds them.
6. **Social links** — LinkedIn / YouTube `href="#"` in every footer.
7. **Product data sheets** — `products.html` says "data sheets available on request"; link real PDFs when ready.

## Contact form → real email

The form currently opens the visitor's email client (zero setup). Once hosted:

- **Netlify Forms** — add `netlify` to the `<form>` tag.
- **Formspree** — set `action="https://formspree.io/f/XXXX"` and `method="POST"`, then remove the `data-contact-form` attribute so `main.js` stops intercepting.

## Deploying (all free tiers work)

**Netlify (drag & drop)** — app.netlify.com → *Add new site* → *Deploy manually* → drag this folder in → add your domain under *Domain settings*.

**GitHub Pages** — push to GitHub → repo *Settings* → *Pages* → Source: `main`, `/root`.

**Cloudflare Pages / Vercel** — connect the repo, framework preset "None", empty build command, output directory `/`.

## Notes

- Header and footer markup is duplicated in each HTML file (the no-build-step trade-off). Change a nav or footer link → change it in all 6 files.
- `style.css` pulls fonts (Sora + Inter) from Google Fonts via `@import`; offline it falls back to system fonts.
- Responsive to ~360px; works without JavaScript except the mobile menu, scroll reveal and the form helper.
