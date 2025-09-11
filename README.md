# AkanmuTech Website

Lead capture, booking & reviews for NYC businesses. White-glove automation with 48-hour setup.

## Deployment

This site is configured for automatic deployment to Netlify.

### Netlify Setup (Recommended)

1. **Connect Repository:**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Select your AkanmuTech repository

2. **Deploy Settings:**
   - Build command: Leave empty (static site)
   - Publish directory: `.` (root directory)
   - Netlify will automatically detect the `netlify.toml` configuration

3. **Your site will be live at:**
   - `https://RANDOM-NAME.netlify.app`
   - You can customize the subdomain in Site settings

### Custom Domain Setup

To use `akanmutech.com`:

1. **In Netlify Dashboard:**
   - Go to Site settings > Domain management
   - Add custom domain: `akanmutech.com`
   - Follow DNS setup instructions

2. **DNS Configuration:**
   - Add CNAME record: `www` → `YOURSITE.netlify.app`
   - Add A record: `@` → Netlify's IP (or use Netlify DNS)

3. **SSL Certificate:**
   - Netlify automatically provisions Let's Encrypt SSL
   - Force HTTPS redirect is already configured

### Alternative: GitHub Pages

GitHub Pages setup is also included for flexibility:
- Use `.github/workflows/deploy.yml` 
- Available at `https://USERNAME.github.io/AkanmuTech/`

## Files Structure

- `index.html` - Main landing page
- `main.js` - JavaScript for navigation and interactions  
- `assets/` - Images and media files
- `netlify.toml` - Netlify configuration and redirects
- `_redirects` - Netlify redirects file
- `_headers` - Security and cache headers
- `robots.txt` - Search engine instructions
- `sitemap.xml` - Site structure for search engines
- `.github/workflows/deploy.yml` - GitHub Actions deployment workflow (alternative)

## Local Development

Serve the files with any static server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js serve
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Features

- Mobile-first responsive design
- Fast loading with optimized assets
- SEO optimized with meta tags and structured data
- Accessibility compliant
- Netlify optimized with security headers and caching
- Automatic HTTPS redirect and SSL
- Both Netlify and GitHub Pages deployment ready

## Netlify Optimizations

- **Security:** XSS protection, content type sniffing protection, frame options
- **Performance:** Aggressive caching for static assets (1 year cache)
- **SEO:** HTTPS redirects, canonical URL enforcement
- **Monitoring:** Built-in analytics and form handling available