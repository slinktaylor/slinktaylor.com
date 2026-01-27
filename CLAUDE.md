# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a musician website for artist Slink Taylor. The site features a minimalist black and white design with:
- Home page: Logo at top, "Listen" link, "Follow" link below
- Listen page: Links to music EP on streaming platforms
- Follow page: Instagram and Facebook links with stylized icons
- Design: Black background, white elements that glow and enlarge on hover
- Navigation: Logo always visible at top, clicking returns to homepage with smooth animations

## Architecture

This is a simple static website that can be built with:
- HTML/CSS/JavaScript for basic functionality
- CSS animations for hover effects and page transitions
- Responsive design for mobile/desktop compatibility

## Development Commands

Since this is a new project, common setups would include:

### Static Site Option
```bash
# Serve locally
python -m http.server 8000
# or
npx serve .
```

### Modern Build Tool Option (Vite/Parcel)
```bash
npm install
npm run dev        # Development server
npm run build      # Production build
npm run preview    # Preview production build
```

## Project Structure

Recommended structure:
```
/
├── index.html          # Homepage
├── listen.html         # Streaming links page
├── follow.html         # Social media links page
├── css/
│   └── styles.css      # Main styles with animations
├── js/
│   └── main.js         # Navigation and animations
├── images/
│   └── logo.svg        # Slink Taylor logo
└── assets/             # Additional assets
```

## Design Requirements

- **Color Scheme**: Black background (#000), white text/elements (#fff)
- **Hover Effects**: Subtle glow and scale transformation on interactive elements
- **Typography**: Clean, readable fonts that fit the minimalist aesthetic
- **Logo**: Should be prominent and clickable for homepage navigation
- **Animations**: Smooth transitions between pages, hover states
- **Mobile**: Responsive design that works on all screen sizes

## Key Features to Implement

1. **Homepage Navigation**: Logo always returns to home with smooth transition
2. **Hover Animations**: CSS transforms and glow effects for interactive elements
3. **Page Transitions**: Smooth animations when navigating between pages
4. **Streaming Links**: Multiple platform links (Spotify, Apple Music, etc.)
5. **Social Icons**: Styled Instagram and Facebook icons matching theme

## Development Notes

- Keep design minimal and focus on user experience
- Ensure fast loading times for music fans
- Test hover effects across different devices
- Optimize images and logo for web performance
- Consider SEO for artist discoverability