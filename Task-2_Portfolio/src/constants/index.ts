import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import newsapp from "../assets/newsapp.png";
import dsatracker from "../assets/dsatracker.png";
import recipeapp from "..//assets/recipeapp.png";
import image from "..//assets/imagesearch.png";
import moodify from "..//assets/Moodify.png";
import movies from "..//assets/moviesapp.png";
import netflix from "..//assets/op2.jpg";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: web, 
  },
  {
    title: "API Specialist",
    icon: backend, 
  },
  {
    title: "Database Engineer",
    icon: mobile, 
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences: TExperience[] = [
  {
    title: "Web Developer",
    companyName: "Code Alpha",
    icon: starbucks,
    iconBg: "#383E56",
    date: "November 2023 - December 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
  {
    title: "Web Developer",
    companyName: "InternPe",
    icon: shopify,
    iconBg: "#383E56",
    date: "October 2023 - November 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    companyName: "Slash Mark IT Solutions",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials: TTestimonial[] = [
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
];

const projects: TProject[] = [
  {
    name: "Recipe-App",
    description:
      "Discover a wide range of delicious recipes, from popular items to various cuisines like Italian, Chinese, Thai, and American. Easily search for your favorite recipes.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "react router", color: "pink-text-gradient" },
      { name: "material-ui", color: "green-text-gradient" },
      { name: "vite", color: "blue-text-gradient" },
    ],
    image: recipeapp,
    sourceCodeLink: "https://harirecipe.netlify.app",
  },
  {
    name: "DSA Tracker",
    description:
      "A comprehensive list of 450+ topic-wise DSA questions to build confidence and prepare for placements. Track your progress effectively.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
      { name: "Chakra-ui", color: "pink-text-gradient" },
    ],
    image: dsatracker,
    sourceCodeLink: "https://hariprasadbdsaguide.netlify.app/",
  },
  {
    name: "News-App",
    description:
      "Stay updated with real-time news articles from across the globe using the GNews public API. Organized into categories for easy navigation.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "newsapi", color: "green-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: newsapp,
    sourceCodeLink: "https://hariprasadbnews.netlify.app/",
  },
  {
    name: "Music Recommendation Using Facial Emotions",
    description:
      "Provides a personalized music experience by recommending playlists aligned with detected facial emotions. Supports multiple languages.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
      { name: "Python", color: "blue-text-gradient" },
      { name: "DeepFace", color: "pink-text-gradient" },
    ],
    image: moodify,
    sourceCodeLink: "https://github.com/HpKing360/Music-Recommendations-Using-Emotions.git",
  },
  {
    name: "Image Search Engine App",
    description:
      "A web app that fetches and displays images from Unsplash API based on user queries. Responsive grid format for better viewing experience.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "Headless UI", color: "pink-text-gradient" },
      { name: "Unsplash API", color: "blue-text-gradient" },
    ],
    image: image,
    sourceCodeLink: "https://github.com/HpKing360/Image-Search-App.git",
  },
  {
    name: "Movies-App",
    description:
      "A movie app built with React, Typescript, and Tailwind CSS. Users can search and view trailers of movies and TV series with detailed information.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "Tailwind-css", color: "pink-text-gradient" },
    ],
    image: movies,
    sourceCodeLink: "https://harimovies.netlify.app/",
  },
  {
    name: "Netflix Clone",
    description:
      "A streaming platform clone using React, Redux, Node.js, and MongoDB. Features user authentication with Firebase and data fetching from TMDb API.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "Redux Toolkit", color: "green-text-gradient" },
      { name: "MongoDB", color: "blue-text-gradient" },
      { name: "Express", color: "pink-text-gradient" },
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "Firebase", color: "pink-text-gradient" },
      { name: "Styled Components", color: "green-text-gradient" },
      { name: "TMDB API", color: "blue-text-gradient" },
    ],
    image: netflix,
    sourceCodeLink: "https://github.com/HpKing360/Netflix-Clone.git",
  },
];


export { services, technologies, experiences, testimonials, projects };
