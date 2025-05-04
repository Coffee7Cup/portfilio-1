import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  kendriya,
  gprec,
  mittal,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Globe",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "NodeJs Developer",
    icon: backend,
  },
  {
    title: "Javascript Developer",
    icon: creator,
  },
];

const technologies = [
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
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Mittel Alliyance",
    company_website: "https://www.mittelalliyance.com/", // Replace with actual if different
    icon: mittal, // You should define this icon
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Present",
    points: [
      "Contributed to the development of scalable web solutions for client-facing platforms.",
      "Collaborated closely with cross-functional teams to deliver robust product features.",
      "Improved frontend performance and integrated third-party services for better user experience.",
      "Wrote clean, maintainable code and participated in peer reviews to ensure code quality.",
    ],
  },
  {
    title: "Student Developer",
    company_name: "G. Pulla Reddy Engineering College",
    company_website: "https://www.gprec.ac.in/",
    icon: gprec, // Define this icon
    iconBg: "#E6DEDD",
    date: "Aug 2019 - May 2023",
    points: [
      "Built multiple mini-projects and a final-year capstone project using React.js and Node.js.",
      "Participated in coding contests and technical fests, honing problem-solving skills.",
      "Actively collaborated in project teams and contributed to Git-based development workflows.",
      "Learned and applied software engineering principles through academic and extracurricular projects.",
    ],
  },
  {
    title: "Student",
    company_name: "Kendriya Vidyalaya",
    company_website: "https://kvsangathan.nic.in/",
    icon: kendriya, // Define this icon
    iconBg: "#E6DEDD",
    date: "Until 2019",
    points: [
      "Built a strong academic foundation in mathematics, computer science, and communication skills.",
      "Participated in inter-school coding and quiz competitions.",
      "Laid the groundwork for future programming and logical thinking abilities.",
      "Maintained consistent academic performance while exploring tech interests.",
    ],
  },
];

const projects = [
  {
    name: "Aptihealth Web",
    description:
      "Revolutionizing mental healthcare in New York State with a user-friendly platform for personalized therapy and progress tracking. Provides the digital gateway to comprehensive behavioral healthcare.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthWeb,
    hosted_link: "https://www.aptihealth.com/",
  },
  
];

const personalInfo = {
  name: "YASH",
  fullName: "Yashwanth sai",
  email: "maddysai9848@gmail.com",
  role: "Software Developer",
  about: `I'm a skilled software developer with experience in TypeScript and
  JavaScript, and expertise in frameworks like React.Js, React-naitve,
  Node.js etc. I'm a quick learner and collaborate closely with clients to
  create efficient, scalable, and user-friendly solutions that solve
  real-world problems. Let's work together to bring your ideas to life!`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
};
