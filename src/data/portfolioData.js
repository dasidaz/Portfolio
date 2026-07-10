export const menuItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
];

export const personalInfo = {
  name: "Luke Hyungi Lee",
  role: "Software Developer",
  description: "I am a Software Development student at Seneca Polytechnic, expecting to graduate in Decgi 2026. I specialize in full-stack web development using React and Node.js, with a strong focus on building real-time interactive applications using Socket.io. I am highly motivated to write clean, scalable, and maintainable code."
};

export const projectsData = [
  {
    id: 1,
    title: "Blood on the Clocktower Web Interface",
    description: "A real-time digital interface for the social deduction board game. Leveraged Socket.io to seamlessly integrate server-side logic for real-time player tracking and role distribution with the client interface.",
    techStack: ["React", "Node.js", "Socket.io", "JavaScript"],
    imageUrl: "/images/botc.png", 
    githubUrl: "https://github.com/dasidaz/botc-web"
  },
  {
    id: 2,
    title: "Computer Vision - Motion Detecting",
    description: "Developed a computer vision application for the Computer Vision course. This project implements a system for detecting motion in sports videos and visualizes a viewport that follows the action. It is useful for automating analysis or focusing on the most interesting parts (ROI) of sport videos.",
    techStack: ["Python", "OpenCV", "Machine Learning"],
    imageUrl: "/images/vision.png",
    githubUrl: "https://github.com/dasidaz/DPS920-Final-Project"
  }
];