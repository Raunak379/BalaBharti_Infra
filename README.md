# Vikings Infra Solution Pvt. Ltd. — Website

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
- `assets/img/` — `logo.svg` (in use), plus photo slots `about-company.jpg` and `rs-wall.jpg` (missing = grey placeholder box, site still works).

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
3. **Photos** — add `assets/img/about-company.jpg` and `assets/img/rs-wall.jpg` (landscape, ~1200px, JPG, < ~300 KB). Tell me when you have real project photos and I'll add more image slots (a projects/case-studies page needs them).
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
