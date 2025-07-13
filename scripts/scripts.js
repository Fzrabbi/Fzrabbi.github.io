
    // JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});
});

    // Function to open a modal
    function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

    // Function to close a modal
    function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

    // Project data with full descriptions, roles, and technologies
    const projectsData = {
    "Software": [
{ name: "ANKONA AI", role: "Backend Engineer (Microservice Development, LLM Integration, Prompt Engineering)", technologies: "FastAPI, Gemini 2.0 Flash (LLM), Python, Microservices", description: "Developed a cutting-edge AI microservice for the Tallykhata application, enabling voice-activated operations for users. This project involved integrating Gemini 2.0 Flash LLM and custom prompt engineering to train the model for direct client use, facilitating intuitive voice instructions within the app." },
{ name: "Tallykhata File Service", role: "Backend Engineer (Microservice Development, Cloud Storage)", technologies: "FastAPI, Python, AWS S3, Amazon CloudFront, MinIO, Microservices", description: "Designed and implemented a complex file storage microservice for the Tallykhata application ecosystem. This robust system efficiently handles both public and private file storage, leveraging FastAPI for high performance and integrating AWS S3, CloudFront, and MinIO for secure and scalable cloud-based storage solutions." },
{ name: "UPMS (User Portal Management System)", role: "Backend Engineer (API Development, Onboarding System)", technologies: "Django Rest Framework (DRF), Python", description: "Developed the User Portal Management System (UPMS), a core onboarding application for BANGLA QR merchant/retailer payment systems. This comprehensive system includes critical features like application review, verification (SIM NID, EKYC), and streamlines the merchant onboarding process using Django Rest Framework." },
{ name: "TALLY-CREDIT", role: "Backend Engineer (Credit Scoring System)", technologies: "Django Rest Framework (DRF), Python", description: "Built TALLY-CREDIT, a sophisticated credit scoring application using Python's Django Rest Framework. This system provides a robust loan score model for Tallykhata customers, significantly enhancing their access to and management of loan cycles within the platform." },
{ name: "E-COOK IOT SYSTEM", role: "Backend Engineer (IoT Data Management)", technologies: "Django Rest Framework (DRF), Python", description: "Developed the backend service for the E-COOK IoT System, managing a large volume of sensor output data. This project involved designing a scheduled data migration process for IoT data and implementing a dashboard to display real-time statistics and device details, ensuring efficient monitoring and analysis." },
{ name: "TRENDX", role: "Backend Developer (Microfinance Analytics)", technologies: "Laravel, PHP", description: "Contributed to TRENDX, a microfinance project for BRAC, focused on predicting financial situations and showcasing performance data. The application provides insights into future financial trends through various data points, graphs, and charts, built using the Laravel framework." },
{ name: "URL Shortener", role: "Backend Developer", technologies: "Flask, Python", description: "Created an internal URL shortener system using Flask. This microservice was seamlessly integrated and utilized across all Sheba applications, improving efficiency and link management within the ecosystem." },
{ name: "S-Manager Back-end", role: "Backend Developer", technologies: "Laravel, PHP, Django Rest Framework (DRF), Python", description: "Developed and maintained the backend for the S-Manager Application, a comprehensive bookkeeping platform. Features included top-up, wallet management, SMS buying, and wallet transfers (using Laravel). Also contributed to the accounting application's backend using Django Rest Framework." },
{ name: "LIFEPLUS BD (APP [IOS/ANDROID] BACKEND API), WEB", role: "Backend API Developer", technologies: "PHP, JavaScript (ES6), AWS (configuration & management), MVC Architecture", description: "Developed the backend APIs for LifePlus BD, an e-commerce platform supporting both Android and iOS mobile applications. This system facilitated online medicine and medical accessory purchases, doctor appointments, diagnostics, nursing, and other medical services. Also handled AWS configuration and management." },
{ name: "CHILL INSIDE", role: "Web Developer (E-commerce)", technologies: "Laravel, PHP, APIs, Payment Gateway, Cron Scripts", description: "Built an e-commerce web solution using Laravel. Key functionalities included API integrations, payment gateway processing, and automated product manipulation via cron scripts, ensuring dynamic and efficient online retail operations." },
{ name: "EXPRESS BRIGADE", role: "Web Developer (E-commerce)", technologies: "Laravel, PHP, Bootstrap, CMS", description: "Developed an e-commerce website utilizing Laravel and Bootstrap. The platform featured dynamic product and category listings, complemented by a robust CMS system and an intuitive admin panel for content management." },
{ name: "REGISTRATION TRACKING SYSTEM FOR ACTIVISION", role: "Web Developer", technologies: "Laravel, PHP, SMS Gateway Integration", description: "Designed and implemented a registration program for Activision using Laravel. The system included critical SMS gateway integration for streamlined user registration and tracking." },
{ name: "DELIVERY MANAGEMENT SYSTEM", role: "Software Developer", technologies: "ASP.NET, MSSQL Database, Crystal Report Viewer", description: "Developed a client-based Delivery Management System using ASP.NET. The application utilized an MSSQL database for data management and Crystal Report Viewer for generating comprehensive reports, optimizing delivery operations." },
{ name: "Office Automation System", role: "Software Developer", technologies: "C#, .NET, Microsoft SQL Server", description: "Developed a dynamic office automation software for Advance Technology Consortium, enhancing their internal operations. This online, Windows-accessible system efficiently manages stock, bills, and accounts, utilizing a Microsoft SQL Server database." },
{ name: "I Graphics Game (Space Shooter 2D)", role: "Game Developer", technologies: "OpenGL Engine, C++", description: "Developed a 2D space shooter game using the OpenGL engine. The game features 10 stages and a three-life aircraft system, where players must strategically destroy enemies approaching along the Y-axis to survive." },
{ name: "OpenGL 3D Jet Game", role: "Game Developer", technologies: "OpenGL Engine, C++", description: "Created a 3D jet plane game using the Code::Blocks OpenGL engine. The game focuses on agile movement within a 3D environment, challenging players to navigate and avoid collisions with walls." }
    ],
    "Hardware": [
{ name: "SMART CHARGER", role: "Hardware & Firmware Developer", technologies: "Microcontroller, Embedded Systems", description: "Developed a smart charger hardware device designed to prevent smartphone battery damage. This system features a microcontroller that intelligently detects when a smartphone's charge is full and automatically discontinues the charging process, safeguarding both the battery and the device from overcharging." },
{ name: "VR Controller", role: "Hardware & Firmware Developer, IoT/Peripheral Design", technologies: "Microcontrollers (Arduino Uno, Pro-Micro), Bluetooth (HC-05), Gyroscope (MPU-6050), Embedded C/C++", description: "Engineered a cost-effective and lightweight VR controller compatible with any computer and PC game. This innovative gadget utilizes Arduino Uno and Pro-Micro microcontrollers for communication via Bluetooth (HC-05) protocols and integrates a MPU-6050 Gyroscope to deliver immersive motion experiences, providing a feature-rich alternative to existing VR peripherals like the HTC Vive." },
{ name: "Accident Detector", role: "Hardware & Firmware Developer, IoT (Emergency Response System)", technologies: "Microcontroller, Gyroscope (MPU-6050), GSM, GPS, GSM Shield (SIM808), Embedded C/C++", description: "Designed and built an automated accident detection system capable of instantly alerting emergency services. This critical device uses a MPU-6050 Gyroscope sensor to identify unusual vehicle movements indicative of an accident. Upon detection, it automatically sends precise GPS coordinates to emergency police and hospitals via GSM/GPRS (SIM808 GSM Shield), significantly improving response times." }
    ],
    "Machine Learning": [
{ name: "Evaluate Students' Engagement and Understanding Statuses in Classroom", role: "Researcher, Machine Learning Engineer", technologies: "Machine Learning Classifiers, Facial Expression Recognition (FER), Data Analysis, Python (Implied)", description: "Conducted research to evaluate student engagement and understanding during classroom lectures using facial expression recognition (FER) techniques. The system utilizes machine learning classifiers to analyze students' real-time facial expressions, cross-matching them with training data to predict engagement levels. This allows early detection of students facing difficulties, enabling teachers to provide timely, targeted support. The system's effectiveness was validated by correlating predicted attentiveness with student performance in post-lecture quizzes." },
{ name: "BanglaMusicMooD: A Music Mood Classifier from Bangla Music Lyrics", role: "Machine Learning Engineer, Data Scientist", technologies: "Naïve Bayes Classifier, Natural Language Processing (NLP), Python (Implied), Data Collection & Preprocessing", description: "Developed BanglaMusicMooD, a classifier model designed to detect the mood of Bangla songs by analyzing their lyrics. The project involved constructing a dataset of 500 Bangla songs across various genres (Rabindra Sangeet, Nazrul Geeti, Folk, Modern) and classifying them into 'happy' and 'sad' moods. Using a Naïve Bayes Classifier, the system achieved high accuracy in predicting song moods, demonstrating proficiency in Natural Language Processing and statistical modeling." }
    ]
};

    // Populate projects dynamically and attach click listeners
    document.addEventListener('DOMContentLoaded', () => {
    const projectSections = document.querySelectorAll('#projects .grid');

    projectSections.forEach(section => {
    const categoryElement = section.previousElementSibling;
    if (categoryElement && categoryElement.textContent) {
    const category = categoryElement.textContent.trim();
    const categoryProjects = projectsData[category];

    if (categoryProjects) {
    section.innerHTML = ''; // Clear existing static content if any

    categoryProjects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer project-card';

    // Truncate description for card view
    const truncatedDescription = project.description.length > 100 ?
    project.description.substring(0, 100) + '...' :
    project.description;

    projectCard.innerHTML = `
                                <h5 class="text-xl font-medium text-gray-100 mb-2">${project.name}</h5>
                                <p class="text-gray-300 text-sm">${truncatedDescription}</p>
                            `;
    projectCard.addEventListener('click', () => {
    document.getElementById('modalProjectTitle').textContent = project.name;
    document.getElementById('modalProjectRole').textContent = project.role || 'N/A';
    document.getElementById('modalProjectTechnologies').textContent = project.technologies || 'N/A';
    document.getElementById('modalProjectDescription').textContent = project.description;
    openModal('projectModal');
});
    section.appendChild(projectCard);
});
}
}
});

    // Event listener for the Resume button
    document.getElementById('openResumeModalBtn').addEventListener('click', () => {
    openModal('resumeModal');
});

    // Close modals when clicking outside (on overlay)
    document.getElementById('projectModal').addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') {
    closeModal('projectModal');
}
});
    document.getElementById('resumeModal').addEventListener('click', (e) => {
    if (e.target.id === 'resumeModal') {
    closeModal('resumeModal');
}
});
});