# Futuristic Portfolio Website - Vintih Prabhu

A cyberpunk-themed, futuristic portfolio website built with modern web technologies.

## Features

- Stunning 3D particle background using Three.js
- Cyberpunk/futuristic design with RGB effects and glitch animations
- Fully responsive layout for all device sizes
- Animated page transitions and scroll effects using GSAP
- Interactive UI elements with hover effects
- Dynamic skill level visualization
- Contact form with validation
- Showcase of 8 impressive futuristic projects

## Technology Stack

- HTML5 & CSS3
- JavaScript (ES6+)
- Three.js for 3D graphics
- GSAP for smooth animations
- ScrollTrigger for scroll-based animations
- Font Awesome for icons

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Main CSS with futuristic styling
├── js/
│   └── main.js         # JavaScript for animations and 3D effects
├── assets/
│   ├── fonts/          # Custom fonts
│   ├── generate-placeholders.html  # Tool to get placeholder images
│   ├── placeholder-urls.txt        # Direct links to images
│   ├── noise.png       # Noise texture
│   ├── grid-bg.png     # Grid background
│   ├── profile.jpg     # Profile image
│   └── project*.jpg    # Project screenshots
└── README.md           # This file
```

## Setup Instructions

1. Clone this repository
2. Open `index.html` in your browser to view the site
3. For development, it's recommended to use a local server:
   - If you have Python installed, run `python -m http.server` in the project directory
   - If you have Node.js installed, you can use `npx serve`

## Adding Project Images

Before using the portfolio, you'll need to add images for the projects:

1. Navigate to `assets/generate-placeholders.html` in your browser
2. Click on each link to get relevant project images and save them to your assets folder
3. Alternatively, use the direct image URLs in `assets/placeholder-urls.txt`
4. Save each image with the corresponding filename (project1.jpg, project2.jpg, etc.)
5. Get a profile image from https://thispersondoesnotexist.com/ and save as profile.jpg

## Project Showcase

The portfolio includes the following impressive projects:

1. **Neural Interface Visualization** - 3D visualization of brain activity data
2. **Quantum Encryption Messenger** - Secure messaging with quantum encryption
3. **AR Code Architect** - Visualizing code architecture in augmented reality
4. **Cyber Threat Visualizer** - Real-time network security monitoring
5. **Neurosynth Music Engine** - AI-powered generative music system
6. **Nexus Identity Protocol** - Blockchain-based identity management
7. **Urban Neural Network** - Smart city management with predictive analytics
8. **Neural Home OS** - Voice-controlled home automation system

## Customization

To personalize this portfolio:

1. Replace profile image (`assets/profile.jpg`)
2. Update project screenshots (`assets/project*.jpg`)
3. Modify personal information in `index.html`
4. Adjust skills and percentages in both HTML and CSS
5. Update contact information and social media links

## Browser Compatibility

Tested and working in:
- Chrome 85+
- Firefox 80+
- Safari 14+
- Edge 85+

## Credits

- Fonts: Google Fonts (Orbitron, Rajdhani)
- Icons: Font Awesome
- 3D Engine: Three.js
- Animation Library: GSAP by GreenSock
- Stock Photos: Unsplash.com

## License

MIT License 