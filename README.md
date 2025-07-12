# Ekdeep Singh Gill - Portfolio Website

A modern, responsive single-page portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Components**: Lightbox gallery for certifications, contact form
- **Smooth Navigation**: Sticky navbar with smooth scrolling to sections
- **Performance Optimized**: Built with Vite for fast development and production builds

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel/Netlify

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── About.tsx       # About me section
│   ├── Certifications.tsx  # Certifications with lightbox
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer with social links
│   ├── Hero.tsx        # Hero/landing section
│   ├── Navbar.tsx      # Navigation bar
│   ├── Projects.tsx    # Projects showcase
│   └── Skills.tsx      # Technical skills grid
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## 🎯 Sections

1. **Hero Section**: Introduction with call-to-action buttons
2. **About Me**: Personal background and mission
3. **Technical Skills**: Categorized skill sets with icons
4. **Projects**: Featured projects with descriptions and links
5. **Certifications**: Professional certifications with lightbox gallery
6. **Contact**: Contact form for inquiries
7. **Footer**: Social links and quick navigation

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ekdeepgill22/portfolio.git
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

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📱 Responsive Design

The website is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Customization

### Colors
The website uses a blue-indigo gradient theme. To customize colors, update the Tailwind classes in the components.

### Content
Update the content in each component file:
- Personal information in `Hero.tsx` and `About.tsx`
- Skills in `Skills.tsx`
- Projects in `Projects.tsx`
- Certifications in `Certifications.tsx`

### Images
Replace placeholder images with your actual:
- Profile photo in `Hero.tsx`
- Project screenshots in `Projects.tsx`
- Certificate images in `Certifications.tsx`

## 📧 Contact Form

The contact form is ready for backend integration. Currently shows a success message on submission. To connect to a backend:

1. Update the form submission handler in `Contact.tsx`
2. Add your API endpoint
3. Handle form validation and error states

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload `dist/` folder to Netlify
3. Configure redirects for SPA

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Ekdeep Singh Gill**
- Email: mail.ekdeep@gmail.com
- GitHub: [@Ekdeepgill22](https://github.com/Ekdeepgill22)
- LinkedIn: [ekdeep-singh-gill](https://linkedin.com/in/ekdeep-singh-gill)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Ekdeepgill22/portfolio/issues).

## ⭐ Show your support

Give a ⭐️ if you like this project!