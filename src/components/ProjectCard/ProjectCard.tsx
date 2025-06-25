import "./ProjectCard.css";
import { IoIosLink } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import ProjectCardAnimation from "../animation/ProjectCardAnimation";
import htmlimg from "./../../assets/html.svg";
import mySqlimg from "./../../assets/MySQL.svg";
import cssimg from "./../../assets/css.svg";
import phpimg from "./../../assets/PHP.svg";
import bootstrapimg from "./../../assets/bootstrap.svg";
import jsimg from "./../../assets/js.svg";
import reactimg from "./../../assets/react.svg";
import reduximg from "./../../assets/redux.svg";
import laravelimg from "./../../assets/laravel-2.svg";

function ProjectCard() {
  const projects = [
    {
      id: 1,
      title: "Visit Syria",
      description:
        "Visit Syria is a comprehensive website That is designed to showcase the beauty and hospitality of Syria by providing detailed information about tourist attractions, restaurants, and hotels across the country.",
      demo_link: "https://github.com/Ayham-Ibrahim/visit-syria-back/",
      published: "Jun 2024 29",
      skills: [
        {
          id: 1,
          name: "HTML",
          image: htmlimg,
        },
        {
          id: 2,
          name: "CSS",
          image: cssimg,
        },
        {
          id: 3,
          name: "JavaScript",
          image: jsimg,
        },
        {
          id: 4,
          name: "Bootstrap",
          image: bootstrapimg,
        },
        {
          id: 5,
          name: "React JS",
          image: reactimg,
        },
        {
          id: 6,
          name: "MySQL",
          image: mySqlimg,
        },
        {
          id: 7,
          name: "PHP",
          image: phpimg,
        },
        {
          id: 8,
          name: "Laravel",
          image: laravelimg,
        },
      ],
    },
    {
      id: 2,
      title: "Villa",
      description:
        "A specialized website for selling villas.It is characterized by containing many villas with different specifications that meet everyone s desires in addition to competitive prices.",
      demo_link: "https://Ahmad1999.github.io/Villa/",
      published: "March 2024 17",
      skills: [
        {
          id: 1,
          name: "HTML",
          image: htmlimg,
        },
        {
          id: 2,
          name: "CSS",
          image: cssimg,
        },
        {
          id: 3,
          name: "JavaScript",
          image: jsimg,
        },
        {
          id: 4,
          name: "Bootstrap",
          image: bootstrapimg,
        },
        {
          id: 5,
          name: "React JS",
          image: reactimg,
        },
      ],
    },
    {
      id: 3,
      title: "Watch List",
      description:
        "Watch List a web site that connected with imbd API to get the details of films and add them to the watchlist or watched",
      demo_link: "https://ahmad-mh1999.github.io/Watchlist/",
      published: "march 2024 2",
      skills: [
        {
          id: 1,
          name: "HTML",
          image: htmlimg,
        },
        {
          id: 2,
          name: "CSS",
          image: cssimg,
        },
        {
          id: 3,
          name: "JavaScript",
          image: jsimg,
        },
        {
          id: 4,
          name: "Bootstrap",
          image: bootstrapimg,
        },
        {
          id: 5,
          name: "React JS",
          image: reactimg,
        },
        {
          id: 6,
          name: "Redux",
          image: reduximg,
        },
      ],
    },
    {
      id: 4,
      title: "Employee Management System",
      description:
        "Employee Management System (EMS) that allows for managing departments and employees within those departments. The system feature a user authentication mechanism, CRUD operations for managing departments and employees, relationships between departments and employees, soft deletion of records, and an API to interact with the system.",
      demo_link: "https://github.com/Ahmad-mh1999/EMS-Task-Back8",
      published: "April 2024 26",
      skills: [
        {
          id: 1,
          name: "MySQL",
          image: mySqlimg,
        },
        {
          id: 2,
          name: "PHP",
          image: phpimg,
        },
        {
          id: 3,
          name: "Laravel",
          image: laravelimg,
        },
        
      ],
    },
    {
      id: 5,
      title: "Library Management System",
      description:
        "An integrated library system with a service for sending emails to users upon every process of adding, borrowing, or returning a book.",
      demo_link: "https://github.com/Ahmad-mh1999/Library-Managemnet-System",
      published: "April 2024 26",
      skills: [
        {
          id: 1,
          name: "MySQL",
          image: mySqlimg,
        },
        {
          id: 2,
          name: "PHP",
          image: phpimg,
        },
        {
          id: 3,
          name: "Laravel",
          image: laravelimg,
        },
      ],
    },
    {
      id: 6,
      title: "Education Platform",
      description:
        "An Education Platform that provide courses for students and all the details about teatchers , courses and education programmes. ",
      demo_link: "https://github.com/Ahmad-mh1999/Task4-2/",
      published: "April 2023 8",
      skills: [
        {
          id: 1,
          name: "HTML",
          image: htmlimg,
        },
        {
          id: 2,
          name: "CSS",
          image: cssimg,
        },
        {
          id: 3,
          name: "JavaScript",
          image: jsimg,
        },
        {
          id: 4,
          name: "Bootstrap",
          image: bootstrapimg,
        },
      ],
    },
  ];
  
  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`/project/${id}`);
  };
  var delay: number = 0;
  return (
    <>
      {projects?.map((project, index) => (
        <div key={index} className="col-lg-4 col-md-6 col-sm-12">
          <ProjectCardAnimation delayValue={(delay = delay + 0.5)}>
            <div
              className="project-link"
              onClick={() => handleNavigate(project.id)}
            >
              <div className="project-card-component">
                <div className="card">
                  <div className="card-body">
                    <div className="row-title">
                      <h5 className="card-title">{project.title}</h5>
                      <Link className="card-link" to={project.demo_link}>
                        <IoIosLink />
                      </Link>
                    </div>
                    <div className="card-info">
                      <p className="card-text"> {project.description}</p>
                      <h1 className="card-date rounded-4 col-4 mb-3">
                        {project.published}{" "}
                      </h1>
                    </div>
                    <div className="card-footer">
                      {project.skills?.map((skill) => (
                        <Link
                          key={skill.id}
                          className="skill"
                          to="https://developer.mozilla.org/en-US/docs/Web/HTML"
                        >
                          <img
                            src={skill.image}
                            alt={skill.name}
                            title={skill.name}
                            loading="lazy"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ProjectCardAnimation>
        </div>
      ))}
    </>
  );
}

export default ProjectCard;
