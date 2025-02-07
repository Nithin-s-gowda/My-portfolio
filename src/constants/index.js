import {
  mobile,
  backend,
  creator,
  web,
  html,
  css,
  mongodb,
  git,
  docker,
  python,
  vote,
  smart_voting,
  
smart_kich,
  
  chatapp,
  threejs,
  java,
  cplus,
  linux,
  mysql,
  php,
  sql,
  flutter,
  course_enroll,
  weather_app,
  eswara,
  game_aws
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Application Developer",
    icon: mobile,
  },
  {
    title: "Cyber Security",
    icon: backend,
  },
  {
    title: "Cloud",
    icon: creator,
  },
];

const technologies = [
  {
    name: "python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "c++",
    icon: cplus,
  },
  
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "My SQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  
  {
    name: "git",
    icon: git,
  },
  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "docker",
    icon: docker,
  },
  
   {
     name: "linux",
     icon: linux,
   },

   
   
  

];

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "e-Swara Technologies",
    icon: eswara,
    iconBg: "#383E56",
    date: "October 2023 - November 2023",
    points: [
      "Gained hands-on experience in frontend and backend development using HTML, CSS, JavaScript, PHP, and SQL.",
      "Designed and managed MySQL databases for efficient data storage and retrieval.",
      "Developed project: Coffee Management System to apply full-stack development skills.",
      "Integrated frontend and backend functionalities to create seamless and dynamic web applications.",
    ],
  },
  /*{
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },*/
];

/*const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];*/

const projects = [
  {
    name: "Course Enrollment Website",
    description:
      "Welcome to our course enrollment website, where I crafted a responsive platform to Explore and enroll in courses ranging from cybersecurity to web development and beyond. We also offer free downloadable books on various subjects to enhance your learning experience. Join us on your learning journey today!",
    tags: [
      {
        name: "HTML",
        color: "text-blue-500",
      },
      {
        name: "CSS",
        color: "text-green-500",
      },
      {
        name: "JavaScript",
        color: "text-pink-500",
      },
      {
        name: "PHP",
        color: "text-purple-500",
      },
      {
        name: "SQL",
        color: "text-red-500",
      }
    ],
    image: course_enroll,
    source_code_link: "https://github.com/Nithin-s-gowda/course_enrollment_website.git",
  },

  {
    name: "Blockchain-Based E-Voting System",
    description:
      "The Blockchain-Based E-Voting System ensures secure, transparent, and tamper-proof elections using Solidity smart contracts and a React & Next.js frontend. It integrates MetaMask for authentication, IPFS for decentralized storage, and Hardhat for deployment and testing. Hosted on AWS Cloud, the system guarantees accessibility, reliability, and fraud prevention in digital voting.",
    tags: [
      { name: "Solidity", color: "blue-text-gradient" },
  { name: "Node.js", color: "green-text-gradient" },
  { name: "Hardhat", color: "pink-text-gradient" },
  { name: "MetaMask", color: "orange-text-gradient" },
  { name: "IPFS", color: "blue-text-gradient" },
  { name: "React", color: "pink-text-gradient" },
  { name: "Next.js", color: "orange-text-gradient" },
  { name: "Web3.js", color: "green-text-gradient" },
  { name: "Three js", color: "blue-text-gradient" },
  { name: "AWS", color: "pink-text-gradient" },
    ],
    image: smart_voting,
    source_code_link: "https://github.com/Nithin-s-gowda/Blockchain-Based_E-Voting_System.git",
    
  },


  {
    name: "Kitchen Automation Using Arduino Uno",
    description:
      "Developed a smart kitchen automation system using Arduino Uno & C++. Automated lights and exhaust fans based on light intensity and smoke detection. Integrated motion sensors to detect insects and trigger a buzzer system. Designed a smart trash bin that opens automatically when an object is detected nearby.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Arduino Uno",
        color: "green-text-gradient",
      },
      {
        name: "Sensors",
        color: "pink-text-gradient",
      },
    ],
    image: smart_kich,
    source_code_link: "https://github.com/Nithin-s-gowda/Kitchen_Automation_Using_Arduino_Uno.git",
    
  },
  
  
  {
    name: "Real-Time Weather App",
    description:
      "Developed a Flutter-based Real-Time Weather Application to deliver up-to-date weather information with a user-friendly interface. The app integrates OpenWeatherMap API to fetch live weather data, ensuring users have access to accurate temperature, sunrise, sunset, humidity details.",
      tags : [
        {
          name: "Flutter",
          color: "text-blue-500",
        },
        {
          name: "Weather API",
          color: "text-green-500",
        },
        {
          name: "Dart",
          color: "text-pink-500",
        },
        {
          name: "Android Studio",
          color: "text-purple-500",
        }
      ],
      
    image: weather_app,
    source_code_link: "https://github.com/Nithin-s-gowda/Weather_app_using_flutter.git",
  },
  {
    name: "Developed and deployed a 2D game on AWS",
    description:
      "Developed and deployed a 2D web game using JavaScript and HTML5 Canvas, hosted on AWS EC2 for global accessibility. Implemented DevOps practices by integrating Git for version control and Jenkins for continuous integration and deployment, ensuring smooth updates and scalability.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "AWS Cloud",
        color: "green-text-gradient",
      },
      {
        name: "HTML 5",
        color: "pink-text-gradient",
      },
    ],
    image: game_aws,
    source_code_link: "https://github.com/Nithin-s-gowda/Fifteen_puzzle_maker_ns.git",
  },
  {
    name: "Real-Time Chat App",
    description:
      "Built a real-time chat application using AngularJS with Supabase & Google Cloud Authentication for secure user login. The app enables users to send and delete messages, with all updates reflecting in real-time. Additionally, users can log out securely, ensuring data privacy and seamless communication.",
    tags: [
      {
        name: "angularjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "Google Cloud",
        color: "pink-text-gradient",
      },
    ],
    image: chatapp,
    source_code_link: "https://github.com/Nithin-s-gowda/NS_Chat.git",
  },
  
  {
    name: "Smart Voting System with Face Recognition",
    description:
      "Built a face recognition-based voting system using Python & OpenCV (cv2). Users verify identity via Aadhaar ID and enroll with a face scan. The system ensures one vote per user, preventing duplicate voting attempts.",
    tags: [
      {
        name: "CV2",
        color: "blue-text-gradient",
      },
      {
        name: "Numpy",
        color: "green-text-gradient",
      },
      {
        name: "Pickle",
        color: "pink-text-gradient",
      },
    ],
    image: vote,
    source_code_link: "https://github.com/Nithin-s-gowda/smartElectionGfg-main.git",
  },
 
];

export { services, technologies, experiences,  projects };
