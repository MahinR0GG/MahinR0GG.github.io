# 🔧 First-Time Setup Guide

This guide will help you set up the portfolio project from scratch after cloning the repository.

---

## 📋 Prerequisites Checklist

Before you begin, make sure you have these installed on your system:

- [ ] **Node.js** (v14.0.0 or higher)
- [ ] **npm** (comes with Node.js) or **yarn**
- [ ] **Git**
- [ ] A code editor (VS Code recommended)

### How to Check if Prerequisites are Installed

Open your terminal/command prompt and run:

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check Git version
git --version
```

If any command returns "command not found", you need to install that tool.

---

## 🚀 Step-by-Step Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/MahinR0GG/MahinR0GG.github.io.git
cd MahinR0GG.github.io
```

### Step 2: Install Node.js Dependencies

This project uses npm/yarn to manage JavaScript packages. All dependencies are listed in `package.json`.

**Option A - Using npm (recommended):**
```bash
npm install
```

**Option B - Using yarn:**
```bash
yarn install
```

This will install all required packages:
- `react` - Frontend framework
- `react-dom` - React rendering
- `react-router-dom` - Page routing
- `bootstrap` - CSS framework
- `react-bootstrap` - Bootstrap components for React
- `emailjs-com` - Email functionality
- `react-icons` - Icon library
- `typewriter-effect` - Typing animation
- And other dependencies...

**Installation time**: 2-5 minutes depending on your internet speed.

### Step 3: Set Up Environment Variables

Create a `.env` file in the root directory:

```bash
# On Windows (PowerShell)
New-Item .env

# On macOS/Linux
touch .env
```

Add the following content to `.env`:

```env
# EmailJS Configuration (for contact form)
REACT_APP_SERVICE_ID=your_service_id_here
REACT_APP_TEMPLATE_ID=your_template_id_here
REACT_APP_USER_ID=your_user_id_here
```

**To get EmailJS credentials:**
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Create a free account
3. Add an email service (Gmail, Outlook, etc.)
4. Create an email template
5. Copy your Service ID, Template ID, and User ID
6. Paste them into your `.env` file

> **Note**: The current `.env` file may already have credentials configured. You can use them for testing or replace with your own.

### Step 4: Customize Your Portfolio Content

Edit `src/content_option.js` to add your personal information:

```javascript
// Update these sections:
const logotext = "YOUR_NAME";

const introdata = {
    title: "I'm Your Name",
    animated: {
        first: "Your tagline 1",
        second: "Your tagline 2",
        third: "Your tagline 3",
    },
    description: "Your bio",
    your_img_url: require("./assets/images/your-photo.jpg"),
};

// And update other sections like:
// - dataabout (About section)
// - worktimeline (Education/Timeline)
// - skills (Your skills)
// - experience (Work experience)
// - certifications (Your certificates)
// - dataportfolio (Your projects) ← Important!
// - contactConfig (Contact details)
// - socialprofils (Social media links)
```

### Step 5: Add Your Profile Image

Replace the profile image:

1. Add your photo to `src/assets/images/`
2. Update the path in `src/content_option.js`:
   ```javascript
   your_img_url: require("./assets/images/your-photo.jpg"),
   ```

### Step 6: Run the Development Server

Start the local development server:

**Using npm:**
```bash
npm start
```

**Using yarn:**
```bash
yarn start
```

The application will automatically open in your browser at `http://localhost:3000`

**You should see:**
- Your portfolio homepage
- Navigation working
- All sections loading properly

---

## 🎨 Adding New Projects

To add projects to your portfolio:

1. Open `src/content_option.js`
2. Find the `dataportfolio` array
3. Add new project objects:

```javascript
const dataportfolio = [
    {
        img: "https://images.unsplash.com/photo-example",  // Project image URL
        title: "Project Name",                              // Project title
        description: "Brief project description",           // Short description
        link: "https://github.com/username/repo",          // GitHub link
    },
    // Add more projects here...
];
```

**Tips for project images:**
- Use Unsplash for free high-quality images: [unsplash.com](https://unsplash.com/)
- Use relevant tech/coding images
- Recommended size: 1200x800px or similar aspect ratio

---

## 🏗️ Building for Production

When you're ready to deploy:

```bash
# Build optimized production files
npm run build

# This creates a 'build' folder with optimized files
```

---

## 🌐 Deploying to GitHub Pages

### One-Time Setup

1. Make sure your repository name is `YourUsername.github.io`
2. Ensure you have `gh-pages` package installed (already in package.json)

### Deploy Command

```bash
npm run deploy
```

This will:
1. Build the production version
2. Create a 404.html for proper routing
3. Push to `gh-pages` branch
4. Your site will be live at `https://yourusername.github.io`

**Deployment time**: 1-2 minutes

---

## 🐛 Troubleshooting

### Issue: `npm install` fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Port 3000 already in use

**Solution:**
```bash
# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# On macOS/Linux
lsof -ti:3000 | xargs kill -9
```

Or run on a different port:
```bash
PORT=3001 npm start
```

### Issue: Images not loading

**Solution:**
- Check image paths are correct
- Ensure images are in `src/assets/images/`
- Use `require()` for local images
- Use direct URLs for external images

### Issue: Contact form not working

**Solution:**
- Verify EmailJS credentials in `.env`
- Check `src/content_option.js` has correct EmailJS config
- Test EmailJS service on their dashboard

---

## 📚 Useful Resources

- [React Documentation](https://react.dev/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [EmailJS Docs](https://www.emailjs.com/docs/)
- [GitHub Pages Guide](https://pages.github.com/)
- [Unsplash (Free Images)](https://unsplash.com/)

---

## ✅ Setup Verification Checklist

After completing setup, verify everything works:

- [ ] `npm install` completed without errors
- [ ] `.env` file created with EmailJS credentials
- [ ] `src/content_option.js` updated with your information
- [ ] Profile image added and displaying
- [ ] `npm start` runs successfully
- [ ] Portfolio opens at `http://localhost:3000`
- [ ] All pages navigate correctly (Home, About, Portfolio, Contact)
- [ ] Projects display properly
- [ ] Contact form works (test email)
- [ ] No console errors in browser

---

## 🎉 You're All Set!

Your portfolio is now ready for customization and deployment. Happy coding!

For questions or issues, check the [main README](README.md) or open an issue on GitHub.

---

**Last Updated**: January 2026
