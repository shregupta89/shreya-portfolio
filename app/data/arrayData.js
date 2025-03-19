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
      { name: 'MongoDB', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968342.png' }
    ]
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'React.js', logo: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
      { name: 'Next.js', logo: 'https://cdn-icons-png.flaticon.com/512/282/282385.png' },
      { name: 'Node.js', logo: 'https://cdn-icons-png.flaticon.com/512/919/919825.png' },
      { name: 'Express.js', logo: 'https://cdn-icons-png.flaticon.com/512/919/919825.png' },
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
      { name: 'Canva', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968567.png' },
      { name: 'Figma', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png' }
    ]
  }
];
export const projectsData = [
    {
      name: 'XSampatti',
      skills: ['React', 'Node.js', 'MongoDB'],
      description: 'A platform empowering farmers with AI-driven crop insights.',
      image: 'https://cdn-icons-png.flaticon.com/512/1704/1704342.png',
      githubLink: 'https://github.com/yourusername/thriveagro',
      liveLink: 'https://thriveagro.vercel.app'
    },
    {
      name: 'MannNirvana',
      skills: ['Next.js', 'Tailwind', 'AI'],
      description: 'An AI-powered recipe discovery tool.',
      image: 'https://cdn-icons-png.flaticon.com/512/1046/1046856.png',
      githubLink: 'https://github.com/yourusername/dishcovery',
      liveLink: 'https://dishcovery.vercel.app'
    },
    {
      name: 'ReVal',
      skills: ['TypeScript', 'Express', 'PostgreSQL'],
      description: 'A smart expense management application.',
      image: 'https://cdn-icons-png.flaticon.com/512/2169/2169769.png',
      githubLink: 'https://github.com/yourusername/xpense',
      liveLink: null // No live link available
    },
    {
      name: 'Dishcovery',
      skills: ['Python', 'Flask', 'NLP'],
      description: 'A mental wellness platform with personalized AI recommendations.',
      image: 'https://cdn-icons-png.flaticon.com/512/1077/1077063.png',
      githubLink: 'https://github.com/yourusername/mann-nirvana',
      liveLink: 'https://mann-nirvana.vercel.app'
    },
    {
      name: 'ThriveAgro',
      skills: ['Python', 'Flask', 'NLP'],
      description: 'A mental wellness platform with personalized AI recommendations.',
      image: 'https://cdn-icons-png.flaticon.com/512/1077/1077063.png',
      githubLink: 'https://github.com/yourusername/mann-nirvana',
      liveLink: 'https://mann-nirvana.vercel.app'
    }
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
  {
    year: 'June 2023 - July 2023',
    role: 'Web Development Intern @Anveshan Foundation IGDTUW',
    description: ' Developed ”StayUpdated,” a news website  enabling users to search for news by genre and access the latest updates on their chosen topics.'
  }
];



