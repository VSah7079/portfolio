# Portfolio Website

A modern portfolio website built with React, TypeScript, and Tailwind CSS to showcase your skills, projects, and experience.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations using Framer Motion
- Dark theme with a professional color scheme
- Interactive components and sections
- Contact form for potential clients or employers
- Project showcase with live demos and GitHub links
- Skills visualization with progress bars
- Downloadable resume
- Social media integration

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router DOM
- Heroicons

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customization

1. Update personal information:
   - Edit the content in each page component
   - Replace placeholder images with your own
   - Update social media links and contact information

2. Modify the theme:
   - Edit the color scheme in `tailwind.config.js`
   - Customize animations in the components
   - Adjust layout and spacing as needed

3. Add your projects:
   - Update the projects array in `src/pages/Projects.tsx`
   - Add project screenshots to the `public/projects` directory
   - Update links to live demos and GitHub repositories

## Building for Production

To create a production build:

```bash
npm run build
```

The build files will be in the `dist` directory.

## Deployment

You can deploy this portfolio to various platforms:

1. Vercel (Recommended):
```bash
npm install -g vercel
vercel
```

2. Netlify:
```bash
npm install -g netlify-cli
netlify deploy
```

3. GitHub Pages:
```bash
npm run build
npm run deploy
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
