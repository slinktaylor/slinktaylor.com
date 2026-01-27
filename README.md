# Slink Taylor - Musician Website

A minimalist black and white website for musician Slink Taylor featuring smooth animations and clean design.

## Features

- **Minimalist Design**: Black background with white elements and subtle glow effects
- **Responsive Layout**: Works seamlessly on desktop and mobile devices
- **Smooth Animations**: Page transitions and hover effects with CSS animations
- **Music Links**: Dedicated page for streaming platform links
- **Social Media**: Follow page with Instagram and Facebook links
- **Fast Performance**: Optimized static site with page preloading

## Pages

- **Homepage** (`index.html`) - Logo and navigation to Listen/Follow
- **Listen** (`listen.html`) - Links to music on streaming platforms
- **Follow** (`follow.html`) - Social media links with custom icons

## Project Structure

```
/
├── index.html          # Homepage
├── listen.html         # Streaming links page
├── follow.html         # Social media links page
├── css/
│   └── styles.css      # Main styles with animations
├── js/
│   └── main.js         # Navigation and animations
└── README.md           # This file
```

## Development

### Local Development
```bash
# Serve locally
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Deployment
This is a static website that can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## Design System

- **Colors**: Black (#000) background, White (#fff) text/elements
- **Typography**: Clean Arial font with appropriate spacing
- **Animations**: 0.3s ease transitions for smooth interactions
- **Hover Effects**: Glow and scale transformations on interactive elements

## Customization

To customize the site:
1. Update streaming platform URLs in `listen.html`
2. Add social media URLs in `follow.html`
3. Modify colors/fonts in `css/styles.css`
4. Adjust animations in `js/main.js`

## Browser Support

Works in all modern browsers with CSS3 and ES6+ support.

## TODO - Content Needed

### Dance Press Kit (dpk.html)
- [ ] Get video of Slink teaching a class
- [ ] Add more pictures of Slink to the site
- [ ] Add videos to the "In Action" gallery section (YouTube/Instagram embeds)