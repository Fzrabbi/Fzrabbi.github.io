
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

        // Event listener for the CV Matcher button in the navigation bar
        document.getElementById('openCvMatcherModalBtnNav').addEventListener('click', () => {
            openModal('cvMatcherModal');
        });

        // Event listener for the CV Matcher button in the new section at the bottom
        document.getElementById('openCvMatcherModalBtnSection').addEventListener('click', () => {
            openModal('cvMatcherModal');
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
        document.getElementById('cvMatcherModal').addEventListener('click', (e) => {
            if (e.target.id === 'cvMatcherModal') {
                closeModal('cvMatcherModal');
            }
        });

        // CV Matcher Logic
        const resumeText = `
            FAZLEY RABBI
            Dhaka, Bangladesh | +880-16812-31269 | fazleybiswas143@gmail.com | LinkedIn | GitHub | Leetcode | Portfolio
            SENIOR SOFTWARE ENGINEER
            Senior Software Engineer with over 5 years of experience in designing, developing, and deploying robust web and AI applications. Proven ability to optimize system performance, streamline development workflows, and implement scalable solutions. Expertise includes Python, Django, FastAPI, React.js, microservices architecture, and prompt engineering with advanced AI models like Gemini Flash 2.0. Skilled in implementing best practices such as Factory and Builder design patterns to enhance code quality and maintainability. Seeking to leverage a strong track record of delivering measurable improvements in efficiency and speed to contribute significantly to a forward-thinking company.
            EXPERIENCE
            Tally-khata, Dhaka, Bangladesh
            Senior Software Engineer- Sep 2024 - Present
            Software Engineer - Dec 2022-Sep 2024
            • Designed and implemented a new micro-service architecture (File service) using Fast API to improve application performance by 20%.
            • Developed and optimized the Ankona AI service, leveraging the Gemini Flash 2.0 model for Bangla text recognition and classification, significantly enhancing user instruction processing.
            • Performed prompt engineering, including model training and rigorous accuracy testing, to refine the Ankona AI's classification capabilities.
            • Built API's for onboarding services using Django Rest Framework and RabbitMQ to make the system more reliable.
            • Implemented Factory and Builder design patterns within the onboarding application to enhance modularity, flexibility, and maintainability of features.
            • Important migration script (Celery, Celery-beat, multiprocessing) that made the migration process 25% faster.
            • Implemented CDN using Amazon CloudFront to serve files that made the process 80% faster.
            • Write test cases using pytest which improved the testing process 40%.
            • Refactor React.js front-end code base from axios to RTK query to achieve caching mechanism and gain 20% faster response time.
            Riseup Labs, Dhaka, Bangladesh
            Python Developer (Freelance Project)- May 2024-July 2024
            • Developed a Django-based backend system integrating with AWS IoT service for physical device usage analytics and reporting.
            • Engineered a robust data pipeline to process and migrate over 1,000,000 daily IoT entries from MongoDB to PostgreSQL for analytical purposes.
            • Implemented Celery Beat for automated, scheduled data aggregation and transfer, managing device data from three different countries and timezones.
            BRAC IT, Dhaka, Bangladesh
            Software Engineer - July 2022-Dec 2022
            • Develop web based Micro finance applications for BRAC.
            • Integrate new features (ex: Keycloak) on existing Legacy Application.
            • Important migration script that made the migration process 25% faster.
            • Framework & tools - Laravel, CodeIgniter, Yii.
            Sheba Platform Limited (sheba.xyz/ Now Polygon Technology), Dhaka, Bangladesh
            Software Engineer - Feb 2022-July 2022
            • Develop APIs for sManager mobile app on different projects and Platform ex- Accounting (FastAPI Python), API Project (PHP Laravel), Partner Project (PHP Laravel).
            • URL shortener (Flask python) that makes the application 25% efficient.
            • Work With Repository, Service Design pattern and deployment of Project in Cloud Server.
            • REDIS and other Service integration
            LABAID (LifePlusBD) - Dhaka, Bangladesh - Software Engineer
            Feb 2021-Feb 2022
            • Develop the POC(Proof Of Concept) for a successful new approach and pattern to improve development 20% faster.
            • Design features System Architectures, Develop API to integrate with mobile app.
            • Develop web server side solution With MVC Architecture with PHP, ES6. And configure & Management of AWS Services.
            Asiatic Optimum Services Ltd, Dhaka, Bangladesh - JR Software Engineer
            Sep 2020-Jan 2021
            • Develop Web applications Using MVC with PHP, Laravel Framework. Deploy project on VPS server..
            Advance Technology Consortium Ltd(ATCL), Dhaka, Bangladesh- Support Engineer
            June 2018-Aug 2020
            • Provide full automation of Windows Form Application(c#, .net) support. Develop and automate the inventory, accounts, bill controlling into a compact
            SKILLS & TECH STACK
            Programming Languages & Frameworks: Python, PHP, React js, Django, FastApi, Laraavel, Flask
            Services: Redis, Celery, Swagger, RabbitMq
            Server: AWS, Bitbucket, S3, Minlo, CloudFront, Nginx
            Database: MySql, Postgres, MongoDB
            Tools: Git, Jira, Docker, Slack
            EDUCATION
            United International University (UIU), COMPUTER SCIENCE AND ENGINEERING, Dhaka, Bangladesh - BSc 2015-2019
            BAF Shaheen College, Dhaka - HSC 2012-2014
            `; // THIS IS A PLACEHOLDER. REPLACE WITH ACTUAL RESUME TEXT.

        document.getElementById('compareCVBtn').addEventListener('click', async () => {
            const jobDescription = document.getElementById('jobDescriptionInput').value;
            const loadingIndicator = document.getElementById('loadingIndicator');
            const cvMatchResults = document.getElementById('cvMatchResults');
            const matchPercentageSpan = document.getElementById('matchPercentage');
            const aiExpressionSpan = document.getElementById('aiExpression');
            const aiConvincingMessageSpan = document.getElementById('aiConvincingMessage');

            if (!jobDescription.trim()) {
                alert('Please paste a job description to compare.'); // Using alert for simplicity, consider a custom modal
                return;
            }

            loadingIndicator.classList.remove('hidden');
            cvMatchResults.classList.add('hidden'); // Hide previous results

            try {
                let chatHistory = [];
                const prompt = `Compare the following resume with the job description. Provide a match percentage (0-100), a short, cool and punchy expression based on the percentage, and if the percentage is 70 or higher, a short(150-200 words) convincing message to the recruiter on why this candidate should be hired. Lastly add some punchline ending.

                    Resume:
                    ${resumeText}

                    Job Description:
                    ${jobDescription}

                    Output in JSON format with keys: "matchPercentage", "expression", "convincingMessage".`;

                chatHistory.push({ role: "user", parts: [{ text: prompt }] });
                const payload = {
                    contents: chatHistory,
                    generationConfig: {
                        responseMimeType: "application/json",
                        responseSchema: {
                            type: "OBJECT",
                            properties: {
                                "matchPercentage": { "type": "NUMBER" },
                                "expression": { "type": "STRING" },
                                "convincingMessage": { "type": "STRING" }
                            },
                            "propertyOrdering": ["matchPercentage", "expression", "convincingMessage"]
                        }
                    }
                };
                const apiKey = "AIzaSyBO1_ryl3pfGqMRsbDAqX3NfYmSJrN5j4g"; // Use gemini api key of your own
                const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                const result = await response.json();

                if (result.candidates && result.candidates.length > 0 &&
                    result.candidates[0].content && result.candidates[0].content.parts &&
                    result.candidates[0].content.parts.length > 0) {
                    const jsonText = result.candidates[0].content.parts[0].text;
                    const parsedJson = JSON.parse(jsonText);

                    matchPercentageSpan.textContent = `${parsedJson.matchPercentage}%`;
                    aiExpressionSpan.textContent = parsedJson.expression;
                    aiConvincingMessageSpan.textContent = parsedJson.convincingMessage;
                    cvMatchResults.classList.remove('hidden');

                    // Adjust color based on percentage
                    if (parsedJson.matchPercentage >= 70) {
                        matchPercentageSpan.classList.remove('text-red-400', 'text-yellow-400');
                        matchPercentageSpan.classList.add('text-green-400');
                    } else if (parsedJson.matchPercentage >= 40) {
                        matchPercentageSpan.classList.remove('text-green-400', 'text-red-400');
                        matchPercentageSpan.classList.add('text-yellow-400');
                    } else {
                        matchPercentageSpan.classList.remove('text-green-400', 'text-yellow-400');
                        matchPercentageSpan.classList.add('text-red-400');
                    }

                } else {
                    console.error("Unexpected API response structure:", result);
                    aiExpressionSpan.textContent = "Error: Could not get a response.";
                    aiConvincingMessageSpan.textContent = "Please try again.";
                    cvMatchResults.classList.remove('hidden');
                    matchPercentageSpan.textContent = "N/A";
                    matchPercentageSpan.classList.add('text-red-400');
                }

            } catch (error) {
                console.error("Error comparing CV:", error);
                aiExpressionSpan.textContent = "Error: Something went wrong.";
                aiConvincingMessageSpan.textContent = "Please check your network connection or try again later.";
                cvMatchResults.classList.remove('hidden');
                matchPercentageSpan.textContent = "N/A";
                matchPercentageSpan.classList.add('text-red-400');
            } finally {
                loadingIndicator.classList.add('hidden');
            }
        });
});