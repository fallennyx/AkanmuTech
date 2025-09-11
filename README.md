# AkanmuTech Website

Lead capture, booking & reviews for NYC businesses. White-glove automation with 48-hour setup.

## Deployment

This site is configured for automatic deployment to GitHub Pages.

### GitHub Pages Setup

1. Push code to your GitHub repository
2. Go to Settings > Pages in your GitHub repository  
3. Select "GitHub Actions" as the source
4. The workflow will automatically deploy on pushes to main/master branch

### Custom Domain Setup (Optional)

If using a custom domain:

1. Add your domain in Settings > Pages > Custom domain
2. Update the following files with your domain:
   - `index.html`: Update all `https://akanmutech.com` references
   - `robots.txt`: Update sitemap URL
   - `sitemap.xml`: Update site URL

### GitHub Pages URLs

For GitHub Pages deployment, the site will be available at:
- `https://USERNAME.github.io/AkanmuTech/`

Replace `USERNAME` with your GitHub username.

## Files Structure

- `index.html` - Main landing page
- `main.js` - JavaScript for navigation and interactions  
- `assets/` - Images and media files
- `robots.txt` - Search engine instructions
- `sitemap.xml` - Site structure for search engines
- `.github/workflows/deploy.yml` - GitHub Actions deployment workflow

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
- GitHub Pages ready deployment