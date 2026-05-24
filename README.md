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

## Custom domain (www + bare domain)

Both of these will work:

- **https://www.hrhavenconsultancy.com** (primary)
- **https://hrhavenconsultancy.com** (redirects to www)

The repo `CNAME` file is set to `www.hrhavenconsultancy.com`.

### 1. DNS at your domain registrar

Add **all** of these records:

| Type  | Name / Host | Value                 |
|-------|-------------|------------------------|
| CNAME | `www`       | `venontn.github.io`    |
| A     | `@`         | `185.199.108.153`      |
| A     | `@`         | `185.199.109.153`      |
| A     | `@`         | `185.199.110.153`      |
| A     | `@`         | `185.199.111.153`      |

- `@` means the bare domain (`hrhavenconsultancy.com`). Some registrars use `@`, others use blank or `hrhavenconsultancy.com` for the host name.
- Do **not** use a CNAME on `@` — only A records for the bare domain.
- Remove any old A/CNAME records for `@` or `www` that point elsewhere.

Optional IPv6 (if your registrar supports AAAA for `@`):

| Type | Name / Host | Value              |
|------|-------------|---------------------|
| AAAA | `@`         | `2606:50c0:8000::153` |
| AAAA | `@`         | `2606:50c0:8001::153` |
| AAAA | `@`         | `2606:50c0:8002::153` |
| AAAA | `@`         | `2606:50c0:8003::153` |

### 2. GitHub Pages settings

1. Open [Pages settings](https://github.com/venontn/hr-haven-consultancy/settings/pages)
2. Under **Custom domain**, enter: `www.hrhavenconsultancy.com`
3. Click **Save**
4. Wait until DNS shows as valid, then enable **Enforce HTTPS**

GitHub will redirect `hrhavenconsultancy.com` → `www.hrhavenconsultancy.com` automatically.

### 3. When it’s live

After DNS propagates (often 15 minutes–48 hours), both URLs should open the site:

- https://www.hrhavenconsultancy.com  
- https://hrhavenconsultancy.com  

Check DNS:

- [CNAME for www](https://www.whatsmydns.net/#CNAME/www.hrhavenconsultancy.com)  
- [A for apex](https://www.whatsmydns.net/#A/hrhavenconsultancy.com)

## Other hosting

Upload all files to any static host (Netlify, Vercel, etc.). No build step required.
