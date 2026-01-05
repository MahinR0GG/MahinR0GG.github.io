const logotext = "MAHIN";
const meta = {
    title: "Mahin S | MCA Graduate & Developer",
    description: "I'm Mahin S, a Master of Computer Application graduate specializing in AI/ML, Web Development, and Data Science. Passionate about building innovative solutions.",
};

const introdata = {
    title: "I'm Mahin S",
    animated: {
        first: "I build intelligent systems",
        second: "I develop web applications",
        third: "I solve complex problems",
    },
    description: "Energetic and proficient MCA graduate with expertise in AI/ML, web development, and data science. Passionate about creating innovative solutions and contributing to organizational growth through technical excellence.",
    your_img_url: require("./assets/images/Media.jpg"),
};

const dataabout = {
    title: "About Me",
    aboutme: "I'm a Master of Computer Application graduate from TKM College of Engineering with a CGPA of 8.4. Dedicated to continuous learning and adapting to new challenges, I strive to contribute innovative solutions to achieve organizational goals. My expertise spans across AI/ML, web development, and data science, with hands-on experience in building real-world applications. I'm passionate about collaborating with teams to enhance productivity and drive success through technical excellence and strategic problem-solving.",
};

const worktimeline = [{
    jobtitle: "Master of Computer Application",
    where: "TKM College of Engineering, Kollam",
    date: "2023 - 2025",
},
{
    jobtitle: "Bachelor of Computer Application",
    where: "Bharathamatha College, Palakkad",
    date: "2020 - 2023",
},
{
    jobtitle: "AI-ML Skills-Build Internship",
    where: "CSRBOX & IBM",
    date: "2024",
},
];

const skills = [{
    name: "Python",
    value: 90,
},
{
    name: "Java",
    value: 80,
},
{
    name: "C",
    value: 75,
},
{
    name: "HTML/CSS",
    value: 85,
},
{
    name: "JavaScript",
    value: 75,
},
{
    name: "Machine Learning",
    value: 85,
},
{
    name: "Git",
    value: 80,
},
{
    name: "Streamlit",
    value: 85,
},
];

const services = [{
    title: "AI & Machine Learning",
    description: "Developing intelligent systems using ensemble learning, clustering algorithms, and deep learning. Experience with intrusion detection systems and customer segmentation models.",
},
{
    title: "Web Development",
    description: "Building responsive and interactive web applications using HTML, CSS, JavaScript, PHP, and modern frameworks. Creating user-friendly interfaces with focus on functionality and design.",
},
{
    title: "Data Science & Analytics",
    description: "Extracting insights from data using Python, implementing OCR solutions, and building data-driven applications with Streamlit. Expertise in data processing and visualization.",
},
];

const dataportfolio = [{
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    title: "MediScan",
    description: "Medical data extraction system using FastAPI, Streamlit, OpenCV, and Tesseract OCR for automated patient information processing.",
    link: "https://github.com/MahinR0GG/MediScan",
},
{
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    title: "Student Management System",
    description: "Comprehensive Student Management System designed to facilitate the management of students, teachers, and administrators. Built using Django for the server-side functionality with RESTful APIs, and Angular for the frontend.",
    link: "https://github.com/MahinR0GG/Student-Management-System",
},
{
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    title: "AQI Prediction System",
    description: "A machine learning based AQI prediction system using air quality data of various cities in India, with a Streamlit web interface.",
    link: "https://github.com/MahinR0GG/AQI-Prediction-System",
},
{
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    title: "Decision Based IDS",
    description: "Dynamic Intrusion Detection System using ensemble learning that selects optimal ML models based on attack types.",
    link: "https://github.com/MahinR0GG/Decision-Based-IDS-Using-Machine-Learning",
},
{
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    title: "Customer Segmentation",
    description: "K-Means and DBSCAN clustering application with Streamlit GUI for targeted marketing and personalized recommendations.",
    link: "https://github.com/MahinR0GG/Customer-Segmentation",
},
{
    img: "https://images.unsplash.com/photo-1615461066841-6116e61058f4",
    title: "Bridging Lives",
    description: "Blood donation platform connecting donors and recipients, facilitating life-saving connections in local communities.",
    link: "https://github.com/MahinR0GG/BridgingLives-Blood-Donation-Website-",
},
{
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b",
    title: "FitHub",
    description: "Comprehensive fitness tracking web application with personalized workout plans, BMI calculator, and progress monitoring.",
    link: "https://github.com/MahinR0GG/Project-FitHub",
},
];

const contactConfig = {
    YOUR_EMAIL: "mahinmahi982002@gmail.com",
    YOUR_FONE: "+91 9526934052",
    description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out to me!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_c87hmdo",
    YOUR_TEMPLATE_ID: "template_i8pp03s",
    YOUR_USER_ID: "H0406TzMfe__UE_xP",
};

const socialprofils = {
    github: "https://github.com/MahinR0GG",
    linkedin: "https://www.linkedin.com/in/mahinmahi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    // Add your actual social media links here
    // facebook: "https://facebook.com",
    // twitter: "https://twitter.com",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};