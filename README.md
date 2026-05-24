# HR Haven Consultancy Website

A professional single-page website for **HR Haven Consultancy** — Human Resource Solutions for Impactful Businesses.

## Preview locally

Open `index.html` in your browser, or run a simple server:

```bash
# Python
python -m http.server 8080

# Node (if npx is available)
npx serve .
```

Then visit `http://localhost:8080`.

## Project structure

```
hr-haven-consultancy/
├── index.html          # Main page (Home, About, Mission, Services, Contact)
├── css/styles.css      # Styles and brand colors
├── js/main.js          # Navigation, form, scroll highlighting
├── assets/logo.png         # Official logo (header, hero, footer)
├── assets/logo-mark.png    # Swoosh extract (favicon & background)
└── README.md
```

## Customization

- **Logo:** Replace `assets/logo.png` with an updated file (keep the same filename).
- **Facebook:** Update the Facebook link in `index.html` with your page URL.
- **Services:** Edit the services section if you have a specific service list from your profile.

## Live site (GitHub Pages)

After pushing to `main`, enable **GitHub Pages** in the repo:

1. Open https://github.com/venontn/hr-haven-consultancy/settings/pages  
2. Under **Build and deployment**, set **Source** to **GitHub Actions**  
3. Wait for the workflow to finish (Actions tab), then visit:

**https://venontn.github.io/hr-haven-consultancy/**

## Custom domain: www.hrhavenconsultancy.com

The repo includes a `CNAME` file for **www.hrhavenconsultancy.com**.

### 1. DNS at your domain registrar

Add this record (replace nothing — use exactly these values):

| Type  | Name / Host | Value              | TTL  |
|-------|-------------|--------------------|------|
| CNAME | `www`       | `venontn.github.io` | 3600 |

Do **not** add a CNAME for the bare domain (`hrhavenconsultancy.com`) if you only want `www` — visitors must use **https://www.hrhavenconsultancy.com**.

### 2. GitHub Pages settings

1. Open [Pages settings](https://github.com/venontn/hr-haven-consultancy/settings/pages)
2. Under **Custom domain**, enter: `www.hrhavenconsultancy.com`
3. Click **Save**
4. Wait for DNS check, then enable **Enforce HTTPS**

### 3. When it’s live

After DNS propagates (often 15 minutes–48 hours):

**https://www.hrhavenconsultancy.com**

Check DNS: [https://www.whatsmydns.net/#CNAME/www.hrhavenconsultancy.com](https://www.whatsmydns.net/#CNAME/www.hrhavenconsultancy.com)

## Other hosting

Upload all files to any static host (Netlify, Vercel, etc.). No build step required.
