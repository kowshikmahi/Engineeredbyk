import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiFlutter,
  SiFigma,
  SiPostgresql,
} from "react-icons/si";

export const personalInfo = {
  name: "Kowshik Mahendran",
  title: "Mechatronics Engineer • Full Stack Web Developer",
  subtitle:
    "Engineering Mindset. IT Skillset. Ready to Innovate and Elevate.",
  email: "kowshikmahi209@gmail.com",
  phone: "+91 9489943424",
  location: "Uthangarai, Krishnagiri - 635207, Tamil Nadu, India",
  github: "https://github.com/kowshikmahi",
  linkedin: "https://www.linkedin.com/in/kowshik-mahi/",
  instagram: "https://www.instagram.com/kowshik_mahi",
  resume: "/resume.pdf",
  image: "/profile.jpeg",
};

export const stats = [
  { label: "Portfolio Projects", value: "4+" },
  { label: "Core Projects Built", value: "6+" },
  { label: "CGPA", value: "8.3" },
  { label: "Domains", value: "Web + Mechatronics" },
];

export const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React JS", icon: FaReact },
  { name: "Node JS", icon: FaNodeJs },
  { name: "Express JS", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Flutter", icon: SiFlutter },
  { name: "Figma", icon: SiFigma },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "GitHub", icon: FaGithub },
];

export const projects = [
  {
    title: "Portable Non-Contact Tonometer for IOP Monitoring",
    tag: "Healthcare + Embedded + AI",
    desc: "A smart portable device concept to monitor intraocular pressure using a non-contact approach, aimed at early risk detection and preventing vision loss.",
    tech: ["ESP32/Arduino", "Sensors", "Embedded Systems", "AI Risk Logic"],
    accent: "ironman",
  },
  {
    title: "Mental Health Monitor",
    tag: "Web + AI Support",
    desc: "A website built to monitor and support mental health through AI-based virtual assistance, check-ins, and user interaction flows.",
    tech: ["React", "Node.js", "AI Chat UX", "Web App"],
    accent: "batman",
  },
  {
    title: "Hand Gesture Control Robot",
    tag: "Robotics + Computer Vision",
    desc: "A gesture-based robot control system that responds to hand movements and navigates accordingly.",
    tech: ["Python", "Gesture Recognition", "Robotics", "Control"],
    accent: "spiderman",
  },
  {
    title: "Line Follower Robot",
    tag: "Automation + Sensors",
    desc: "An autonomous robot that follows a marked path using infrared sensors and control logic.",
    tech: ["IR Sensors", "Embedded Logic", "Automation"],
    accent: "batman",
  },
  {
    title: "Go-Kart Fabrication",
    tag: "Mechanical + Team Build",
    desc: "Designed and built a custom go-kart from chassis to aesthetics for competition, blending mechanical fabrication and team coordination.",
    tech: ["Design", "Fabrication", "Vehicle Build", "Teamwork"],
    accent: "tyler",
  },
  {
    title: "Client Portfolio Websites",
    tag: "Freelance + Personal Branding",
    desc: "Built multiple portfolio websites for clients focused on branding, design, responsiveness, and smooth user experience.",
    tech: ["React", "JavaScript", "UI/UX", "Responsive Design"],
    accent: "ironman",
  },
];

export const experiences = [
  {
    title: "SDE Intern - Bluestock Fintech",
    date: "Jan 2025 - Feb 2025",
    desc: "Worked on software development tasks, improved problem-solving skills, and gained practical experience in deployment-focused development.",
  },
  {
    title: "In-Plant Training - Ashok Leyland",
    date: "Jun 2025 - Jul 2025",
    desc: "Observed heavy vehicle engine processes, assembly workflows, and industrial quality control systems.",
  },
  {
    title: "Industrial Visit - RDL Industries, Bengaluru",
    date: "Oct 2024",
    desc: "Explored real-world industrial operations and large-scale engineering workflows.",
  },
  {
    title: "Achievements",
    date: "Highlights",
    desc: "1st place in Go-Kart event categories (Skip Pad, Aesthetics, Autocross), 1st place in Paper Presentation, and sports participation at zonal level.",
  },
];

export const movieRefs = [
  {
    title: "Batman Mode",
    quote: "Built in the dark. Shipped in the light.",
    desc: "For the nights spent debugging while the rest of the city sleeps.",
  },
  {
    title: "Iron Man Protocol",
    quote: "Engineer the suit. Then become the system.",
    desc: "A builder mindset for turning ideas into working tech.",
  },
  {
    title: "Spider Sense",
    quote: "Move fast, stay agile, catch bugs before they catch you.",
    desc: "Creative energy, quick learning, and web-first thinking.",
  },
  {
    title: "Tyler Durden Glitch",
    quote: "The first impression you build ends up building your future.",
    desc: "A rebellious reminder to make your work impossible to ignore.",
  },
];