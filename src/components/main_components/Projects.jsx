import ProjectTemplate from "./ProjectTemplate";


const myProjects = [
  {
    id: 1,
    title: "Portfolio",
    description: "This app is built with Vite.js, React",
    tech: ["Vite.js", "React", "Bootstrap", "TailWind"],
    image: '/pf-page.png',
    link: "",
    repoLink: "https://github.com/annc4st/myPF",
  },
  {
    id: 2,
    title: "Flashcard mobile app",
    description: "A full-stack Flashcard revision application. The app is designed to assist students in their studies by allowing them to upload custom questions and answers for revision. (The project was developed by a team of six Northcoders Bootcamp students)",
    tech: [
      "React Native",
      "Mobile App",
      "Expo",
      "Node.JS",
      "Express.js",
      "MongoDB",
      "Jest",
      "Supertest",
      "TDD",
    ],
    image: '/cards_project.png',
    repoLink: "https://github.com/annc4st/flash-cards-fe",
  },
  {
    id: 3,
    title: "NC News",
    description: `A full-stack web application. The back-end was built using Node.js, Express, and PostgreSQL, hosted on Render. The API supports CRUD operations, pagination, filtering, sorting, comment posting and deletion, and vote increment or decrement.
    The front-end is built with React and HTML/CSS, hosted on Netlify. The web application allows users to log in, filter articles by topic, and sort them by comment count, date, or likes in ascending or descending order, adding and deleting own comments`,
    tech: [
      "Node.JS",
      "Express.js",
      "PostgreSQL",
      "Jest",
      "Supertest",
      "React",
      "CSS",
      "HTML",
      "TDD",
      "Vue.js"
    ],
    image: '/nc-news-page.png',
    link: "https://annas-nc-news.netlify.app/",
    repoLink: "https://github.com/annc4st/fe-nc-news",
  },
  //   {
  //     id: 4,
  //     title: 'Library',
  //     description: 'A full-stack application. The back-end was built using Django, PostgreSQL. The front-end is built with React and HTML/CSS.',
  //     tech: ['Django', 'PostgreSQL', 'React', 'CSS', 'HTML'],
  //     image: '../assets/project_pics/space_holder.png',
  //     link: '',
  //     repoLink: '',
  //   }
];

const Projects = () => {
  return (
    <>
      <div id="projects" className="flex flex-col justify-center items-center mb-16">
        <h2 className="text-3xl font-medium mx-auto text-center">
          My Projects
        </h2>

        <div
          className="grid grid-cols-1 gap-4 mt-10 lg:grid-cols-2"
        >
          {myProjects.map((project) => (
            <ProjectTemplate key={project.id} project={project} />
          ))}
        </div>
      </div>
     
    </>
  );
};

export default Projects;
