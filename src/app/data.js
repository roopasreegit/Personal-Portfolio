
export const BtnList = [
    {label: "Home", link: "/", icon: "home", newTab: false},
    {label: "About", link: "/about", icon: "user", newTab: false},
    {label: "Projects", link: "/projects", icon: "folder-open", newTab: false},
    {label: "Contact", link: "/contact", icon: "envelope", newTab: false},
    {
        label: "Resume",
        link: "https://drive.google.com/file/d/1ge869juBjqkZuDqU9mT8_tk5HE30MAMK/view?usp=sharing",
        icon: "file-alt",
        newTab: true
    },
    {
        label: "GitHub",
        link: "https://github.com/roopasreegit",
        icon: "github",
        newTab: true
    },
    {
        label: "LinkedIn",
        link: "https://www.linkedin.com/in/roopasree-b-a09b99220/",
        icon: "linkedin",
        newTab: true
    },
    {
        label: "LeetCode",
        link: "https://leetcode.com/u/roooopz/",
        icon: "code",
        newTab: true
    }

];

export const projectsData = [


    {
        id: 1,      
        name: "ArmRace",
        description: "An Multi Agent Revenue Recovery system for merchants to recover lost revenue from abandoned/failed transactions.",
        image: "/projects/armrace_img.png",
        demolink: "https://example.com/project-four-demo",
    },
    {
        id: 2,
        name: "Sliding Window Rate Limiter",
        description: "Redis based sliding window rate limiter implementation in Node.js to control API request rates effectively.",
        image: "/projects/rate-limiter-img.png",
        demolink: "https://github.com/roopasreegit/SlidingWindowRateLimiter",
    },
    {
        id: 3,
        name: "Level Up",           
        description: "A Fullstack CRUD application for tracking workout schedules built on the MERN stack.",
        image: "/projects/Levelup_img.png",
        demolink: "https://github.com/roopasreegit/LevelUp",       
    },
    {
        id: 4,      
        name: "PaperPro",
        description: "A Deep Research AI Assistant that uses RAG to provide accurate and relevant information from research papers.",
        image: "/projects/PaperPro_img.png",
        demolink: "https://github.com/roopasreegit/MLResearchRAG",
    },
    {
        id: 5,      
        name: "CNN Image Classifier",
        description: "A Cat vs Dog image classifier using TensorFlow and Keras.",
        image: "/projects/cat-vs-dog.jpg",
        demolink: "https://github.com/roopasreegit/Cat_vs_Dog_Identifier",       
    },
    {
        id: 6,      
        name: "Life Expectancy Predictor",
        description: "A comparison between different machine learning models like Linear regression, Support Vector Regression, PCA+SVR and Random Forests to predict life expectancy of a country based on various WHO health and demographic factors.",
        image: "/projects/lifeexp_img.png",
        demolink: "https://github.com/roopasreegit/life-expectancy-predictor",
    }
];