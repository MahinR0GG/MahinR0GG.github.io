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

const worktimeline = [
    {
        jobtitle: "Master of Computer Application (MCA)",
        where: "TKM College of Engineering, Kollam",
        date: "2023 – 2025",
        details: [
            "Focused on Machine Learning, Data Analytics, and Full-Stack Development",
            "Built real-world projects including an Intrusion Detection System and OCR-based applications",
            "CGPA: 8.4"
        ]
    },
    {
        jobtitle: "Bachelor of Computer Application (BCA)",
        where: "Bharathamatha College of Arts & Science, Palakkad",
        date: "2020 – 2023",
        details: [
            "Strong foundation in programming, databases, and web development",
            "Developed academic and personal projects using PHP, JavaScript, and MySQL",
            "CGPA: 7.2"
        ]
    },
    {
        jobtitle: "Higher Secondary Education (Science)",
        where: "Chinmaya Vidyalaya, Palakkad",
        date: "2019 – 2020",
        details: [
            "Built strong fundamentals in Science and Mathematics",
            "Developed logical thinking and problem-solving skills",
            "Percentage: 78%"
        ]
    },
];

const skills = [
    {
        name: "Python",
        description: "Data analysis, machine learning models, FastAPI backends, automation scripts"
    },
    {
        name: "Machine Learning",
        description: "Classification, clustering, ensemble models, intrusion detection systems"
    },
    {
        name: "HTML / CSS",
        description: "Responsive layouts, modern UI components, portfolio and dashboard design"
    },
    {
        name: "JavaScript",
        description: "Frontend interactivity, form handling, dynamic UI behavior"
    },
    {
        name: "Streamlit",
        description: "Interactive ML dashboards, OCR tools, data-driven web apps"
    },
    {
        name: "Git",
        description: "Version control, collaborative workflows, branch management"
    },
    {
        name: "Java",
        description: "Object-oriented programming, problem solving, academic projects"
    },
    {
        name: "C",
        description: "Programming fundamentals, memory concepts, structured logic"
    },
];

const experience = [
    {
        role: "Data Science Intern",
        company: "Luminar Technolab",
        period: "Jul 2025 – Present",
        description: "Focus on data preprocessing, exploratory data analysis, and machine learning models using real-world datasets.",
        current: true
    },
    {
        role: "L1 Support Trainee",
        company: "Cymonic.ai",
        period: "Nov 2025 – Present",
        description: "Involved in Level 1 support operations, incident handling, and ITSM workflows within production environments.",
        current: true
    },
    {
        role: "AI–ML Intern",
        company: "CSRBOX & IBM",
        period: "2024",
        description: "Hands-on experience with machine learning pipelines, data preprocessing, and model evaluation.",
        current: false
    },
];

const certifications = [
    {
        title: "AI–ML Skills-Build Internship",
        issuer: "CSRBOX & IBM",
        year: "2024",
        link: "https://drive.google.com/file/d/1GAhCEPqZSYRfnACHLW40Fe6MhlB6EppM/view?usp=sharing"
    },
    {
        title: "Artificial Intelligence Certification",
        issuer: "TEACHNOOK × Wissenaire",
        year: "2024",
        link: "https://drive.google.com/file/d/1iu7pwmgTezMGd0CnDQVEG4S-CizpUIDS/view?usp=sharing"
    },
    {
        title: "Cybersecurity & Ethical Hacking Workshop",
        issuer: "CSI Dept, TKM College of Engineering",
        year: "2024",
        link: "https://drive.google.com/file/d/1XxJPSxuAOQ0QdTsyTZuA0x2smcutPofp/view?usp=sharing"
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
    description: "Medical data extraction using FastAPI, Streamlit, OpenCV, and Tesseract OCR.",
    link: "https://github.com/MahinR0GG/MediScan",
},
{
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    title: "Student Management System",
    description: "Full-stack student management platform built with Django REST APIs and Angular frontend.",
    link: "https://github.com/MahinR0GG/Student-Management-System",
},
{
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    title: "AQI Prediction System",
    description: "ML-based air quality prediction system for Indian cities with Streamlit interface.",
    link: "https://github.com/MahinR0GG/AQI-Prediction-System",
},
{
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    title: "Decision Based IDS",
    description: "Dynamic IDS using ensemble learning to select optimal models for different attack types.",
    link: "https://github.com/MahinR0GG/Decision-Based-IDS-Using-Machine-Learning",
},
{
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    title: "Customer Segmentation",
    description: "Customer segmentation using K-Means and DBSCAN clustering with Streamlit GUI.",
    link: "https://github.com/MahinR0GG/Customer-Segmentation",
},
{
    img: "https://images.unsplash.com/photo-1615461066841-6116e61058f4",
    title: "Bridging Lives",
    description: "Blood donation platform connecting donors and recipients in local communities.",
    link: "https://github.com/MahinR0GG/BridgingLives-Blood-Donation-Website-",
},
{
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b",
    title: "FitHub",
    description: "Fitness tracking web app with personalized workout plans and BMI calculator.",
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
    experience,
    certifications,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};