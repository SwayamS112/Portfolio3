const projects = [
  {
    id: "CampusConnect",
    title: "CampusConnect",
    shortDescription:
      "AI-powered mock interviews with real-time feedback and natural conversations.",

    longDescription:
      `CampusConnect is a web-based platform designed to keep students informed about upcoming and 
      ongoing campus events in one place. It allows event organizers to post event details while enabling 
      students to easily discover, track, and participate in activities. The platform improves communication 
      between students and organizers and reduces missed event opportunities. Built with a modern tech stack, 
      CampusConnect focuses on simplicity, accessibility, and real-time updates for campus life.`,
    image: "/images/campusConnect.png",
    live: "_blank",
    github: "https://github.com/SwayamS112/Event_Stalker-Project",
    technologies: ["HTML", "CSS", "JavaScript", "MongoDB", "ExpressJS", "NodeJS"],
    features: [
      "Centralized platform to view upcoming and ongoing campus events",
      "Event creation and management for organizers with detailed information",
      "Real-time event updates and notifications for students",
      "User-friendly interface for easy event discovery and navigation",
    ],
  },
  {
    id: "YumList",
    title: "YumList",
    shortDescription:
      "AI-powered mock interviews with real-time feedback and natural conversations.",

    longDescription: `YumList is a full-stack recipe sharing platform that allows users to 
    discover, create, and manage their favorite recipes in one place. Users can upload 
    recipes with images, ingredients, and step-by-step instructions. The platform supports 
    user authentication and personalized dashboards for managing posts. YumList focuses on a clean, 
    responsive UI and a smooth user experience for food enthusiasts.`,
    image: "/images/recipe.png",
    live: "_blank",
    github: "https://github.com/SwayamS112/recipe_planner_project",
    technologies: ["React", "Node.js", "ExpressJS", "MongoDB", "Cloudnary", "TailwindCSS", "JWT", "JavaScript"],
    features: [
      "User authentication with secure login and registration",
      "Create, edit, and delete recipes with images",
      "Like and comment system for user engagement",
      "Personalized user dashboard to manage uploaded recipes",
      "Ingredient lists with step-by-step cooking instructions",
      "Role-ready architecture for future admin features (user & post management)",
      "Fully responsive design for mobile and desktop users"
    ],
  },
];

export default projects;
