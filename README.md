# Abiding Light Studio

A warm, natural-light photography portfolio website inspired by wildflowers, mountain landscapes, and the quiet beauty of North Carolina's Blue Ridge Parkway.

## Design Philosophy

- **Earthy, warm palette**: Tans, warm creams, soft taupes, muted sage greens, dusty olive, clay, and wildflower-inspired accents
- **Editorial photography feel**: Spacious layouts, natural textures, gentle shadows, and organic shapes
- **Typography**: Refined serif (Cormorant Garamond) for headings, clean sans-serif (Inter) for body text
- **Interactions**: Subtle animations, smooth scrolling, gentle fade-ins, and soft hover effects

## Project Structure

```
photog-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All site styles
├── js/
│   └── main.js         # Navigation, scroll, reveal animations
├── images/             # Photography and SVG placeholders
└── README.md           # This file
```

## Getting Started

### Local Development

1. Open `index.html` directly in your browser, or
2. Use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

3. Visit `http://localhost:8000`

## Replacing Placeholder Images

The site currently uses SVG placeholders. To add your own photography:

1. Add your image files to the `images/` folder
2. Update the `src` attributes in `index.html` and `url()` references in `css/style.css`
3. Recommended image formats: JPG for photos, PNG for transparency, WebP for optimization

### Image Reference Guide

| Placeholder | Description | Recommended Size |
|-------------|-------------|------------------|
| `hero-blue-ridge-overlook.svg` | Hero section background | 1920x1080px |
| `about-wildflower-portrait.svg` | About section image | 600x750px |
| `gallery-*.svg` | Portfolio grid images | 400-800px varying |
| `category-*.svg` | Service category cards | 400x430px |
| `story-*.svg` | Storytelling section | 500x430px, 400x280px |

## Contact Form

The contact form is a visual demo. To make it functional, connect it to a form service:

- **Formspree**: `action="https://formspree.io/f/your-form-id"`
- **Netlify Forms**: Add `netlify` attribute to the form tag
- **Basin**: `action="https://usebasin.com/f/your-form-id"`
- **Custom Backend**: Update the form handler in `js/main.js`

## Customization

### Colors

Edit the CSS custom properties in `css/style.css`:

```css
:root {
  --cream: #f3ecdf;
  --warm-cream: #eadfcd;
  --sage: #a1a98d;
  /* ... modify as needed */
}
```

### Typography

The site uses Google Fonts (Cormorant Garamond + Inter). To use different fonts:

1. Update the `<link>` in `index.html`
2. Change `--serif` and `--sans` in `css/style.css`

### Content

All copy is in `index.html`. Edit the text to reflect your voice, services, and contact information.

## Deployment

### GitHub Pages

1. Push to GitHub
2. Go to Settings > Pages
3. Select your branch and save
4. Your site will be live at `https://yourusername.github.io/photog-website`

### Other Hosting

- **Netlify**: Drag and drop the folder or connect your Git repo
- **Vercel**: Import your Git repo
- **Traditional hosting**: Upload all files via FTP

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is for personal/commercial use. Modify and deploy as needed for your photography business.

---

Built with warm tones, natural light inspiration, and love for the Blue Ridge Mountains. Rooted in faith — "Abide in me" (John 15:4).
