# 📝 Quick Reference - Adding Projects

This is a quick guide for adding new projects to your portfolio.

---

## 🎯 Where to Add Projects

**File**: `src/content_option.js`

**Section**: `dataportfolio` array (around line 150)

---

## 📋 Project Template

Copy and paste this template for each new project:

```javascript
{
    img: "PROJECT_IMAGE_URL",
    title: "Project Title",
    description: "Brief description of what the project does and technologies used.",
    link: "https://github.com/yourusername/project-repo",
}
```

---

## 🖼️ Finding Project Images

### Option 1: Unsplash (Free Stock Photos)
- Visit [unsplash.com](https://unsplash.com/)
- Search for relevant tech images (e.g., "coding", "data", "AI", "web development")
- Right-click image → Copy image address
- Use the URL in the `img` field

**Example Unsplash URLs:**
```javascript
// AI/ML Projects
img: "https://images.unsplash.com/photo-1677442136019-21780ecad995"

// Web Development
img: "https://images.unsplash.com/photo-1547658719-da2b51169166"

// Data Science
img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"

// Mobile Apps
img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
```

### Option 2: Your Own Screenshots
1. Take a screenshot of your project
2. Upload to GitHub repository (in `public/images/`)
3. Use relative path: `img: "/images/project-screenshot.png"`

---

## 📝 Example: Adding a New Project

### Before (Current projects array):
```javascript
const dataportfolio = [
    {
        img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
        title: "MediScan",
        description: "Medical data extraction using FastAPI, Streamlit, OpenCV, and Tesseract OCR.",
        link: "https://github.com/MahinR0GG/MediScan",
    },
    // ... other projects
];
```

### After (With new project added):
```javascript
const dataportfolio = [
    {
        img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
        title: "MediScan",
        description: "Medical data extraction using FastAPI, Streamlit, OpenCV, and Tesseract OCR.",
        link: "https://github.com/MahinR0GG/MediScan",
    },
    {
        img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce site with React, Node.js, MongoDB, and Stripe payment integration.",
        link: "https://github.com/MahinR0GG/ecommerce-platform",
    },
    // ... other projects
];
```

---

## ✅ Best Practices

### Title
- Keep it concise (2-5 words)
- Use proper capitalization
- Make it descriptive

### Description
- 1-2 sentences max
- Mention key technologies
- Highlight main features
- Keep under 100 characters for best display

### Link
- Use GitHub repository URL
- Or live demo URL if available
- Ensure the link is accessible

### Image
- Use high-quality images (min 800x600px)
- Choose relevant tech-related images
- Maintain consistent aspect ratios
- Test image URLs before committing

---

## 🔄 After Adding Projects

1. **Save** `src/content_option.js`
2. **Refresh** your browser (if dev server is running)
3. **Navigate** to Portfolio page
4. **Verify** new projects appear correctly
5. **Test** project links work
6. **Check** images load properly

---

## 🎨 Project Categories

Organize your projects by category for better presentation:

### AI/ML Projects
```javascript
{
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    title: "Your AI Project",
    description: "Machine learning model using TensorFlow/PyTorch...",
    link: "https://github.com/...",
}
```

### Web Development
```javascript
{
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166",
    title: "Your Web App",
    description: "Full-stack application built with React and Node.js...",
    link: "https://github.com/...",
}
```

### Data Science
```javascript
{
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    title: "Your Data Project",
    description: "Data analysis and visualization using Python and Pandas...",
    link: "https://github.com/...",
}
```

### Mobile Apps
```javascript
{
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    title: "Your Mobile App",
    description: "Cross-platform mobile app built with React Native...",
    link: "https://github.com/...",
}
```

---

## 🚀 Quick Add Workflow

1. Open `src/content_option.js`
2. Scroll to `dataportfolio` array
3. Copy the template above
4. Fill in your project details
5. Add comma after previous project
6. Paste your new project
7. Save file
8. Check browser for changes

---

## 💡 Tips

- **Order matters**: Projects appear in the order listed
- **Featured first**: Put your best projects at the top
- **Keep it updated**: Remove outdated projects
- **Test links**: Ensure all GitHub links work
- **Consistent style**: Match description format with existing projects

---

**Ready to add your projects? Open `src/content_option.js` and start adding!** 🎉
