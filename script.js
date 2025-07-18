// Initialize with a default language (e.g., English)
let currentLang = 'en'; 

// Keep track of the last form submission status
let lastFormStatus = null; // 'success', 'error', or nul

// Language content object
const content = {
    en: {
        pageTitle: "Dip Aryal - Portfolio",
        yourNameNav: "Dip Aryal",
        navAbout: "About",
        navSkills: "Skills",
        navPortfolio: "Portfolio",
        navContact: "Contact",
        heroGreeting: "Hi, I'm Dip Aryal",
        heroDescription: "A passionate <span class=\"font-semibold text-blue-500\">Software Developer</span> dedicated to creating impactful and user-friendly solutions.",
        heroBtnViewWork: "View My Work",
        heroBtnContact: "Get In Touch",
        aboutHeading: "About Me",
        aboutPara1: "Hello! I'm <span class=\"font-semibold text-blue-600\">Dip Aryal</span>, a Software Developer with 5+ years of experience in Software Development. My journey in [Your Field] began with a fascination for [something specific, e.g., problem-solving, design, technology], and it has since evolved into a passion for crafting innovative and efficient solutions.",
        aboutPara2: "I specialize in [mention 2-3 key areas, e.g., front-end development, UX/UI design, data analysis, project management] and thrive on challenges that push me to learn and grow. I believe in the power of clean code, intuitive design, and collaborative teamwork to bring ideas to life.",
        aboutPara3: "Outside of work, you can find me [mention a hobby or two, e.g., hiking, reading, exploring new tech, cooking]. I'm always eager to connect with fellow professionals and explore new opportunities. Let's build something amazing together!",
        skillsHeading: "My Skills",
        skillWebDevTitle: "Web Development",
        skillWebDevDesc: "HTML, CSS, JavaScript, Python, Node.js",
        skillUIDesignTitle: "UI/UX Design",
        skillUIDesignDesc: "Figma, Sketch, Adobe XD, Prototyping",
        skillDataAnalysisTitle: "Data Analysis",
        skillDataAnalysisDesc: "Python, R, SQL, Tableau, Power BI",
        skillCloudTitle: "Cloud Computing",
        skillCloudDesc: "AWS, Azure, Google Cloud Platform",
        skillContentTitle: "Content Writing",
        skillContentDesc: "Technical Writing, Blogging, SEO",
        skillDevOpsTitle: "DevOps",
        skillDevOpsDesc: "Docker, Kubernetes, CI/CD",
        portfolioHeading: "My Portfolio",
        project1Title: "Project Title One: E-commerce Platform",
        project1Desc: "Developed a full-stack e-commerce platform with user authentication, product listings, and a secure checkout system. This project focused on robust backend development and a responsive frontend.",
        project2Title: "Project Title Two: Data Visualization Dashboard",
        project2Desc: "Designed and implemented an interactive dashboard to visualize complex datasets, allowing users to filter and gain insights from the data. Technologies: D3.js, Python, Flask.",
        project3Title: "Project Title Three: Mobile Recipe App",
        project3Desc: "Developed a cross-platform mobile application for recipe management, featuring user submissions, search functionality, and offline access. This project used: React Native, Firebase, Redux.",
        project4Title: "Project Title Four: AI-Powered Chatbot",
        project4Desc: "Built an intelligent chatbot leveraging natural language processing to provide customer support and answer FAQs. This project showcased machine learning integration.",
        project5Title: "Project Title Five: Portfolio Website Redesign",
        project5Desc: "Redesigned and optimized an existing portfolio website for improved user experience and responsiveness across all devices. Focused on modern web design principles.",
        project6Title: "Project Title Six: Cloud-Based File Storage",
        project6Desc: "Developed a secure and scalable cloud storage solution with features for file upload, download, and sharing, leveraging cloud services.",
        project7Title: "Project Title Seven: Game Development (Unity)",
        project7Desc: "Created a 2D platformer game using Unity, focusing on game mechanics, level design, and basic AI. This project honed my problem-solving skills in a creative environment.",
        viewProjectBtn: "View Project",
        contactHeading: "Get In Touch",
        contactIntro: "Have a project in mind or just want to say hello? Feel free to reach out!",
        contactLabelName: "Dip Aryal",
        contactLabelEmail: "Your Email",
        contactLabelMessage: "Message",
        contactBtnSend: "Send Message",
        contactFindMe: "You can also find me on:",
        footerCopyright: "&copy; 2025 Dip Aryal. All rights reserved.",
        formSuccess: "Thank you for your message! I'll get back to you soon.",
        formError: "Oops! Something went wrong. Please try again later."
    },
    de: {
        pageTitle: "Dip Aryal - Portfolio",
        yourNameNav: "Dip Aryal",
        navAbout: "Über mich",
        navSkills: "Fähigkeiten",
        navPortfolio: "Portfolio",
        navContact: "Kontakt",
        heroGreeting: "Hallo, ich bin Dip Aryal",
        heroDescription: "Ein leidenschaftlicher <span class=\"font-semibold text-blue-500\">Softwareentwickler</span>, der sich der Entwicklung wirkungsvoller und benutzerfreundlicher Lösungen widmet.",
        heroBtnViewWork: "Meine Arbeit ansehen",
        heroBtnContact: "Kontakt aufnehmen",
        aboutHeading: "Über mich",
        aboutPara1: "Hallo! Ich bin <span class=\"font-semibold text-blue-600\">Dip Aryal</span>, ein Softwareentwickler mit 5+ Jahren Erfahrung in [Ihrer Branche/Ihrem Bereich]. Meine Reise in [Ihrem Bereich] begann mit einer Faszination für [etwas Spezifisches, z.B. Problemlösung, Design, Technologie] und hat sich seitdem zu einer Leidenschaft für die Entwicklung innovativer und effizienter Lösungen entwickelt.",
        aboutPara2: "Ich bin spezialisiert auf [erwähnen Sie 2-3 Schlüsselbereiche, z.B. Frontend-Entwicklung, UX/UI-Design, Datenanalyse, Projektmanagement] und liebe Herausforderungen, die mich dazu anspornen, zu lernen und zu wachsen. Ich glaube an die Kraft von sauberem Code, intuitivem Design und kollaborativer Teamarbeit, um Ideen zum Leben zu erwecken.",
        aboutPara3: "Außerhalb der Arbeit finden Sie mich beim [erwähnen Sie ein oder zwei Hobbys, z.B. Wandern, Lesen, neue Technologien erkunden, Kochen]. Ich bin immer daran interessiert, mich mit anderen Fachleuten zu vernetzen und neue Möglichkeiten zu erkunden. Lassen Sie uns gemeinsam etwas Großartiges aufbauen!",
        skillsHeading: "Meine Fähigkeiten",
        skillWebDevTitle: "Webentwicklung",
        skillWebDevDesc: "HTML, CSS, JavaScript, Python, Node.js",
        skillUIDesignTitle: "UI/UX Design",
        skillUIDesignDesc: "Figma, Sketch, Adobe XD, Prototyping",
        skillDataAnalysisTitle: "Datenanalyse",
        skillDataAnalysisDesc: "Python, R, SQL, Tableau, Power BI",
        skillCloudTitle: "Cloud Computing",
        skillCloudDesc: "AWS, Azure, Google Cloud Platform",
        skillContentTitle: "Content-Erstellung",
        skillContentDesc: "Technisches Schreiben, Bloggen, SEO",
        skillDevOpsTitle: "DevOps",
        skillDevOpsDesc: "Docker, Kubernetes, CI/CD",
        portfolioHeading: "Mein Portfolio",
        project1Title: "Projekt Titel Eins: E-Commerce-Plattform",
        project1Desc: "Entwicklung einer Full-Stack E-Commerce-Plattform mit Benutzerauthentifizierung, Produktlisten und einem sicheren Kassensystem. Dieses Projekt konzentrierte sich auf eine robuste Backend-Entwicklung und ein reaktionsschnelles Frontend.",
        project2Title: "Projekt Titel Zwei: Datenvisualisierungs-Dashboard",
        project2Desc: "Entwurf und Implementierung eines interaktiven Dashboards zur Visualisierung komplexer Datensätze, das Benutzern das Filtern und Gewinnen von Einblicken aus den Daten ermöglicht. Technologien: D3.js, Python, Flask.",
        project3Title: "Projekt Titel Drei: Mobile Rezept-App",
        project3Desc: "Entwicklung einer plattformübergreifenden mobilen Anwendung für die Rezeptverwaltung mit Benutzerbeiträgen, Suchfunktion und Offline-Zugriff. Dieses Projekt verwendete: React Native, Firebase, Redux.",
        project4Title: "Projekt Titel Vier: KI-gesteuerter Chatbot",
        project4Desc: "Entwicklung eines intelligenten Chatbots, der natürliche Sprachverarbeitung nutzt, um Kundensupport zu bieten und häufig gestellte Fragen zu beantworten. Dieses Projekt zeigte die Integration von maschinellem Lernen.",
        project5Title: "Projekt Titel Fünf: Neugestaltung der Portfolio-Website",
        project5Desc: "Neugestaltung und Optimierung einer bestehenden Portfolio-Website für verbesserte Benutzerfreundlichkeit und Responsivität auf allen Geräten. Fokus auf moderne Webdesign-Prinzipien.",
        project6Title: "Projekt Titel Sechs: Cloud-basierter Dateispeicher",
        project6Desc: "Entwicklung einer sicheren und skalierbaren Cloud-Speicherlösung mit Funktionen zum Hochladen, Herunterladen und Freigeben von Dateien unter Nutzung von Cloud-Diensten.",
        project7Title: "Projekt Titel Sieben: Spieleentwicklung (Unity)",
        project7Desc: "Erstellung eines 2D-Plattformspiels mit Unity, wobei der Schwerpunkt auf Spielmechaniken, Leveldesign und grundlegender KI lag. Dieses Projekt schärfte meine Problemlösungsfähigkeiten in einem kreativen Umfeld.",
        viewProjectBtn: "Projekt ansehen",
        contactHeading: "Kontakt aufnehmen",
        contactIntro: "Haben Sie ein Projekt im Sinn oder möchten Sie einfach nur Hallo sagen? Melden Sie sich gerne!",
        contactLabelName: "Dip Aryal",
        contactLabelEmail: "Ihre E-Mail",
        contactLabelMessage: "Nachricht",
        contactBtnSend: "Nachricht senden",
        contactFindMe: "Sie finden mich auch auf:",
        footerCopyright: "&copy; 2025 Dip Aryal. Alle Rechte vorbehalten.",
        formSuccess: "Vielen Dank für Ihre Nachricht! Ich melde mich bald bei Ihnen.",
        formError: "Hoppla! Etwas ist schief gelaufen. Bitte versuchen Sie es später noch einmal."
    }
};

// Function to update content based on language
function updateContent(lang) {
    // Update document title
    document.querySelector('title').textContent = content[lang].pageTitle;

    // Update elements with data-lang-key attribute
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (content[lang][key]) {
            // For heroDescription and aboutPara1, we need to handle inner HTML
            if (key === 'heroDescription' || key === 'aboutPara1') {
                element.innerHTML = content[lang][key];
            } else {
                element.textContent = content[lang][key];
            }
        }
    });

    // Update active language button styling
    document.querySelectorAll('.lang-button').forEach(button => {
        button.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');
    document.getElementById(`lang-${lang}-desktop`).classList.add('active');
    currentLang = lang; // This ensures currentLang always reflects the active language

    // NEW: Update form status message if it's currently visible
    const formStatusMessage = document.getElementById('form-status-message');
    if (!formStatusMessage.classList.contains('hidden') && lastFormStatus) {
        if (lastFormStatus === 'success') {
            formStatusMessage.textContent = content[currentLang].formSuccess;
        } else if (lastFormStatus === 'error') {
            formStatusMessage.textContent = content[currentLang].formError;
        }
    }
}


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu after clicking a link (if open)
        const mobileNavMenuContent = document.getElementById('mobile-nav-menu-content');
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        if (!mobileNavMenuContent.classList.contains('hidden') && window.innerWidth < 768) { // md: breakpoint is 768px
            mobileNavMenuContent.classList.add('hidden');
            mobileMenuButton.querySelector('.hamburger-icon').classList.remove('open');
        }
    });
});

// Optional: Add active class to nav links on scroll (more advanced)
// This part remains as direct DOM manipulation for scroll spy,
// as the request was specifically for Formspree integration in plain JS.
// For a full React-idiomatic solution, IntersectionObserver would be used.
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a'); // This selects both desktop and mobile links

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) { // Adjust offset for better active state
            current = section.getAttribute('id');
        }
    });

    // Update desktop nav links
    document.querySelectorAll('ul.hidden.md\\:flex.md\\:space-x-6.md\\:mx-auto li a').forEach(link => {
        link.classList.remove('text-blue-500', 'font-bold');
        link.classList.add('text-gray-600', 'font-medium');
        if (link.getAttribute('href').includes(current)) {
            link.classList.remove('text-gray-600', 'font-medium');
            link.classList.add('text-blue-500', 'font-bold');
        }
    });

    // Update mobile nav links
    document.querySelectorAll('#mobile-nav-menu-content ul li a').forEach(link => {
        link.classList.remove('text-blue-500', 'font-bold');
        link.classList.add('text-gray-600', 'font-medium');
        if (link.getAttribute('href').includes(current)) {
            link.classList.remove('text-gray-600', 'font-medium');
            link.classList.add('text-blue-500', 'font-bold');
        }
    });
});

// Mobile menu toggle functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileNavMenuContent = document.getElementById('mobile-nav-menu-content');
const hamburgerIcon = mobileMenuButton.querySelector('.hamburger-icon');

mobileMenuButton.addEventListener('click', () => {
    mobileNavMenuContent.classList.toggle('hidden');
    hamburgerIcon.classList.toggle('open');
});

// Event listeners for language buttons (mobile and desktop)
document.getElementById('lang-en').addEventListener('click', () => updateContent('en'));
document.getElementById('lang-de').addEventListener('click', () => updateContent('de'));
document.getElementById('lang-en-desktop').addEventListener('click', () => updateContent('en'));
document.getElementById('lang-de-desktop').addEventListener('click', () => updateContent('de'));

// Formspree Integration for Contact Form
const contactForm = document.getElementById('contact-form');
const formStatusMessage = document.getElementById('form-status-message');

contactForm.addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(contactForm);
    const object = {};
    formData.forEach((value, key) => {
        object[key] = value;
    });
    const json = JSON.stringify(object);

    try {
        // IMPORTANT: Replace with your actual Formspree endpoint URL
        const response = await fetch('https://formspree.io/f/xzzvbwgo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        });

        if (response.ok) {
            formStatusMessage.textContent = content[currentLang].formSuccess;
            formStatusMessage.className = 'mt-4 text-center text-green-600 font-semibold';
            contactForm.reset(); // Clear the form fields
            lastFormStatus = 'success'; // Set the status

        } else {
            formStatusMessage.textContent = content[currentLang].formError;
            formStatusMessage.className = 'mt-4 text-center text-red-600 font-semibold';
            lastFormStatus = 'error'; // Set the status

        }
    } catch (error) {
        console.error('Form submission error:', error);
        formStatusMessage.textContent = content[currentLang].formError;
        formStatusMessage.className = 'mt-4 text-center text-red-600 font-semibold';
        lastFormStatus = 'error'; // Set the status

    } finally {
        formStatusMessage.classList.remove('hidden'); // Make message visible
    }
});

// Set default language on page load
updateContent('en');
