# 🚀 Mahin S - Portfolio

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.2.3-7952B3?style=for-the-badge&logo=bootstrap)

**A modern, responsive portfolio showcasing AI/ML projects, web development skills, and professional journey**

[Live Demo](https://mahinr0gg.github.io) • [Report Bug](https://github.com/MahinR0GG/MahinR0GG.github.io/issues) • [Request Feature](https://github.com/MahinR0GG/MahinR0GG.github.io/issues)

</div>

---

## ✨ About This Portfolio

Welcome to my digital space! This portfolio is more than just a collection of projects—it's a reflection of my journey as a developer, data scientist, and problem solver. Built with React and modern web technologies, this site showcases my expertise in AI/ML, full-stack development, and data science.

### 🎯 What You'll Find Here

- **🤖 AI/ML Projects**: From intrusion detection systems to customer segmentation models
- **🌐 Web Applications**: Full-stack solutions built with modern frameworks
- **📊 Data Science**: OCR tools, prediction systems, and data-driven applications
- **📜 Professional Journey**: Education, certifications, and work experience
- **💬 Contact**: Easy ways to connect and collaborate

---

## 🛠️ Tech Stack

This portfolio is built with cutting-edge technologies:

- **Frontend Framework**: React 18.2.0
- **UI Library**: React Bootstrap 5.2.3
- **Routing**: React Router DOM 6.6.2
- **Animations**: React Transition Group
- **Typewriter Effect**: Dynamic text animations
- **Email Integration**: EmailJS for contact form
- **Icons**: React Icons
- **Deployment**: GitHub Pages

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

### Installation & Setup

Follow these steps to run this portfolio template locally:

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/MahinR0GG/MahinR0GG.github.io.git
cd MahinR0GG.github.io
```

#### 2️⃣ Install Dependencies

Choose your preferred package manager:

**Using npm:**
```bash
npm install
```

**Using yarn:**
```bash
yarn install
```

This will install all the required dependencies listed in `package.json`, including:
- React and React DOM
- Bootstrap and React Bootstrap
- React Router DOM
- EmailJS
- React Icons
- Typewriter Effect
- And more...

#### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory (if not already present) and add your EmailJS credentials:

```env
REACT_APP_SERVICE_ID=your_service_id
REACT_APP_TEMPLATE_ID=your_template_id
REACT_APP_USER_ID=your_user_id
```

> **Note**: Get your EmailJS credentials by signing up at [EmailJS.com](https://www.emailjs.com/)

#### 4️⃣ Customize Your Content

Edit the `src/content_option.js` file to personalize the portfolio with your information:

- Personal details (name, title, description)
- Projects in the `dataportfolio` array
- Skills, experience, and certifications
- Contact information
- Social media links

#### 5️⃣ Run the Development Server

**Using npm:**
```bash
npm start
```

**Using yarn:**
```bash
yarn start
```

The application will open automatically in your browser at `http://localhost:3000`

#### 6️⃣ Build for Production

When you're ready to deploy:

**Using npm:**
```bash
npm run build
```

**Using yarn:**
```bash
yarn build
```

This creates an optimized production build in the `build` folder.

---

## 📁 Project Structure

```
MahinR0GG.github.io/
├── public/              # Static files
├── src/
│   ├── app/            # Main app component
│   ├── assets/         # Images and media
│   ├── components/     # Reusable components
│   ├── header/         # Header component
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   │   ├── about/      # About page
│   │   ├── contact/    # Contact page
│   │   ├── home/       # Home page
│   │   └── portfolio/  # Portfolio/Projects page
│   ├── content_option.js  # Main content configuration
│   ├── index.css       # Global styles
│   └── index.js        # Entry point
├── .env                # Environment variables
├── .gitignore          # Git ignore rules
├── package.json        # Dependencies and scripts
└── README.md           # You are here!
```

---

## 🎨 Customization Guide

### Adding New Projects

1. Open `src/content_option.js`
2. Locate the `dataportfolio` array
3. Add a new project object:

```javascript
{
    img: "https://your-image-url.com/image.jpg",
    title: "Your Project Title",
    description: "Brief description of your project",
    link: "https://github.com/yourusername/project-repo",
}
```

### Updating Personal Information

All personal content is centralized in `src/content_option.js`. Update the following sections:

- `logotext` - Your name/brand
- `meta` - SEO metadata
- `introdata` - Homepage introduction
- `dataabout` - About section
- `worktimeline` - Education timeline
- `skills` - Technical skills
- `experience` - Work experience
- `certifications` - Certificates and achievements
- `contactConfig` - Contact information
- `socialprofils` - Social media links

---

## 🌐 Deployment

### Deploy to GitHub Pages

This portfolio is configured for easy deployment to GitHub Pages:

**Using npm:**
```bash
npm run deploy
```

**Using yarn:**
```bash
yarn deploy
```

This will:
1. Build the production version
2. Create a 404.html for proper routing
3. Deploy to the `gh-pages` branch

### Deploy to Other Platforms

The production build in the `build` folder can be deployed to:
- **Vercel**: Connect your repo and deploy
- **Netlify**: Drag and drop the build folder
- **Heroku**: Use the Node.js buildpack
- **AWS S3**: Upload the build folder to an S3 bucket

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm test` | Launches the test runner |
| `npm run eject` | Ejects from Create React App (⚠️ irreversible) |
| `npm run predeploy` | Prepares build for deployment |
| `npm run deploy` | Deploys to GitHub Pages |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/MahinR0GG/MahinR0GG.github.io/issues).

### How to Contribute

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

**Mahin S**

- 📧 Email: mahinmahi982002@gmail.com
- 📱 Phone: +91 9526934052
- 💼 LinkedIn: [Mahin S](https://www.linkedin.com/in/mahinmahi)
- 🐱 GitHub: [@MahinR0GG](https://github.com/MahinR0GG)

---

## 🙏 Acknowledgments

- React community for amazing tools and libraries
- Bootstrap team for the responsive framework
- EmailJS for seamless email integration
- Unsplash for beautiful project images
- GitHub Pages for free hosting

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by [Mahin S](https://github.com/MahinR0GG)

</div>