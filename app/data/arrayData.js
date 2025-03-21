import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
export const socialMediaIcons = [
    { id: 1, icon: <FaTwitter className="w-6 h-6 cursor-pointer" />, link: 'https://twitter.com/shregupta89' },
    { id: 2, icon: <FaGithub className="w-6 h-6 cursor-pointer" />, link: 'https://github.com/shregupta89' },
    { id: 3, icon: <FaLinkedin className="w-6 h-6 cursor-pointer" />, link: 'https://www.linkedin.com/in/shreya-gupta-0b6821255/' },
    { id: 4, icon: <FaInstagram className="w-6 h-6 cursor-pointer" />, link: 'https://www.instagram.com/_shreyaguptaa_/' },
  ];

export const skillsData = [
  {
    category: 'Languages and Databases',
    skills: [
      { name: 'JavaScript', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
      { name: 'TypeScript', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png' },
      { name: 'C++', logo: 'https://cdn-icons-png.flaticon.com/512/6132/6132222.png' },
      { name: 'Python', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png' },
      { name: 'HTML/CSS', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968267.png' },
      { name: 'PostgreSQL', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968342.png' },
      { name: 'MySQL', logo: 'https://cdn-icons-png.flaticon.com/512/1199/1199128.png' },
      { name: 'MongoDB', logo: 'https://cdn.iconscout.com/icon/free/png-512/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-5-pack-logos-icons-2945120.png?f=webp&w=512' }
    ]
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'React.js', logo: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
      { name: 'Next.js', logo: '/nextjs.svg' },
      { name: 'Node.js', logo: 'https://cdn-icons-png.flaticon.com/512/919/919825.png' },
      { name: 'Express.js', logo: 'https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000' },
      { name: 'Tailwind', logo: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' }
    ]
  },
  {
    category: 'Development Tools',
    skills: [
      { name: 'Git', logo: 'https://cdn-icons-png.flaticon.com/512/2111/2111288.png' },
      { name: 'GitHub', logo: 'https://cdn-icons-png.flaticon.com/512/2111/2111432.png' },
      { name: 'Docker', logo: 'https://cdn-icons-png.flaticon.com/512/919/919853.png' },
      { name: 'Postman', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968371.png' },
      { name: 'Canva', logo: '/Canva-Symbol.png' },
      { name: 'Figma', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png' }
    ]
  }
];
export const projectsData = [
    {
      name: 'XSampatti',
      skills: ['React', 'Node.js', 'MongoDB'],
      description: 'A smart expense tracker that helps you manage your finances effortlessly. Visualize your spending with interactive graphs, track expenses in real time, and gain insights to improve your budgeting.',
      image: '/XSampatti.jpeg',
      githubLink: 'https://github.com/shregupta89/XSampatti',
      liveLink: 'https://XSampatti.vercel.app'
    },
    {
      name: 'MannNirvana',
      skills: ['Aptos','React', 'Node.js', 'ML'],
      description: 'Breaking Barriers, Building Bridges: Making Mental Health Care Accessible, Stigma-Free, and Compassionate for All by building judge free community space.',
      image: '/MannNirvana.png',
      githubLink: 'https://github.com/DeveloperAyushKumar/MannNirvana',
      liveLink: 'https://mann-nirvana-six.vercel.app/'
    },
    {
      name: 'ReVal',
      skills: ['Solidity','Nextjs', 'Node.js', 'MongoDB'],
      description: 'A decentralized circular marketplace on the Eth blockchain for pre-owned goods with an extension that finds similar pre-owned items by scraping products.',
      image: '/Reval.png',
      githubLink: 'https://github.com/Niketiiitd/Reval-Frontend',
      liveLink: null // No live link available
    },
    {
      name: 'Dishcovery',
      skills: ['React', 'Express','Node.js', 'MongoDB'],
      description: 'AI-powered solution for flavor-matched innovations, healthier ingredient substitutions, and personalized meal recommendations.',
      image: '/Dishcovery.png',
      githubLink: 'https://github.com/KniteenK/Dishcovery_frontend/tree/main',
      liveLink: ''
    },
    {
      name: 'ThriveAgro',
      skills: ['Typescript', 'NextJS','Tailwind','PostgreSQL'],
      description: 'Empowering farmers with a comprehensive platform for inventory management, crop trading, and voicing concerns for a thriving agricultural community.',
      image: '/ThriveAgro.png',
      githubLink: 'https://github.com/shregupta89/ThriveAgro',
      liveLink: 'https://ThriveAgro.vercel.app'
    }, {
      name: 'Portfolio',
      skills: ['Nextjs','Framer motion'],
      description: ' An interactive, animated portfolio built with Framer Motion, featuring projects, skills, experiences, and achievements — all in one smooth scroll!',
      image: '/Profile.png',
      githubLink: 'https://github.com/shregupta89/shreya-portfolio',
      liveLink: 'https://shregupta.xyz' // No live link available
    },
  ];

export const experiences = [
  {
    year: 'May 2025 - July 2025',
    role: ' SWE Intern @ Microsoft',
    description: 'Upcoming Intern'
  },
  {
    year: 'Dec 2024 - Present ',
    role: 'Research Intern @ CosyLabs IIITD',
    description: 'Contributing to the development of a mobile application focused on health and nutrition, aiming to promote wellness through personalized insights and user-friendly features.'
  },
  {
    year: 'May 2024 - Present ',
    role: 'President @ Assetmerkle',
    description: 'Leading the Web3 Society of IGDTUW, I actively engaged in cutting-edge Web3 projects, driving community growth in the decentralized ecosystem and  successfully organizing various events across multiple ecosystems.'
  },
  // {
  //   year: 'June 2023 - July 2023',
  //   role: 'Web Development Intern @Anveshan Foundation IGDTUW',
  //   description: ' Developed ”StayUpdated,” a news website  enabling users to search for news by genre and access the latest updates on their chosen topics.'
  // }
];
export const achievements = [
  {
    year: '2024',
    title: 'Second Runner-Up - Innovate2.0 Hackathon',
    description: 'Achieved 2nd runner-up position in Innovate2.0 Hackathon at Jaypee Institute of Technology.',
    link: 'https://drive.google.com/file/d/1lZkV67pnA7cstfaUlIXfaUQW8QNDWrjI/view'
  },
  {
    year: '2024',
    title: 'Second Position - Fork IT Hackathon at IIITD',
    description: 'Secured 2nd position in Computational Gastronomy Hackathon at IIITD organized by CoSy Labs, IIITD.',
    link: 'https://drive.google.com/file/d/169Fyl2iBOh9JN5GrPLCtmwfSsNegQIR9/view'
  },
  {
    year: '2024',
    title: 'First Prize - Sustainable Development Goals Track',
    description: 'Won 1st prize in Sustainable Development Goals track at Devcation24  organized by GDSC IGDTUW.' ,
    link: 'https://drive.google.com/file/d/169Fyl2iBOh9JN5GrPLCtmwfSsNegQIR9/view'
  }
];
