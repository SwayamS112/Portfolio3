# 🚀 Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS, featuring smooth animations and beautiful UI components.

![Portfolio Website](https://img.shields.io/badge/Portfolio-Live-brightgreen)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.0.4-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.11-blue)

## ✨ Features

- **Modern Design**: Clean and professional portfolio layout
- **Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Beautiful transitions powered by Framer Motion
- **Fast Performance**: Built with Vite for lightning-fast development and optimized builds
- **Icon Library**: Rich set of icons from React Icons
- **SEO Friendly**: Optimized for search engines

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://reactjs.org/) 19.1.0
- **Build Tool**: [Vite](https://vitejs.dev/) 7.0.4
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4.1.11
- **Animations**: [Framer Motion](https://www.framer.com/motion/) 12.23.9
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) 5.5.0
- **Language**: JavaScript (ES6+)

## 📂 Project Structure

```
portfolio3/
├── public/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio3.git
   cd portfolio3
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the portfolio

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🎨 Tailwind CSS Setup

This project uses the latest Tailwind CSS v4 with Vite integration:

### Configuration

**vite.config.js**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

**src/index.css**
```css
@import 'tailwindcss';
```

### Key Dependencies

```json
{
  "@tailwindcss/vite": "^4.1.11",
  "tailwindcss": "^4.1.11"
}
```

## 🎭 Components Overview

- **Hero**: Landing section with introduction and call-to-action
- **About**: Personal information and background
- **Skills**: Technical skills and expertise showcase
- **Projects**: Portfolio of completed projects
- **Contact**: Contact form and social links
- **Navbar**: Navigation component with smooth scrolling
- **Footer**: Footer with additional links and information

## 🌟 Key Features Implementation

### Framer Motion Animations
Smooth page transitions and component animations for enhanced user experience.

### React Icons Integration
Comprehensive icon library for consistent visual elements throughout the site.

### Responsive Design
Mobile-first approach ensuring perfect display across all device sizes.

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

### Recommended Hosting Platforms

- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [Firebase Hosting](https://firebase.google.com/products/hosting)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/portfolio3](https://github.com/yourusername/portfolio3)

---

⭐ If you found this project helpful, please give it a star!

**Made with ❤️ and React**

