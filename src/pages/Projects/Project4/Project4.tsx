import { HiCode } from "react-icons/hi";
import "./Project4.css";
import { FaArrowRight, FaLink } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import ScaleAnimation from "../../../components/animation/ScaleAnimation";
import SectionTitleAnimation from "../../../components/animation/SectionTitleAnimation";
import laravelimg from "./../../../assets/laravel-2.svg";
import mySqlimg from "./../../../assets/MySQL.svg";
import phpimg from "./../../../assets/PHP.svg";
import img1 from "../../../assets/EMS/1.png";
import img2 from "../../../assets/EMS/2.png";
import img3 from "../../../assets/EMS/3.png";
import img4 from "../../../assets/EMS/4.png";
import img5 from "../../../assets/EMS/5.png";
import img6 from "../../../assets/EMS/6.png";

function Project4() {
  const skills = [
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
    
  ];
  const project_photos = [img1, img2, img3, img4, img5, img2 , img6];
  var delayValue: number = 0;

  return (
    <div className="project">
      <div id="ys-container" className="container">
        <section className="project-section">
          <div id="ys-container" className="container">
            <Link to="/">
              <div className="back-button">
                <FaArrowRight />
              </div>
            </Link>
            <SectionTitleAnimation>
              <h3 className="project-title pt-md-3 pb-4">
                Employee Management System
              </h3>
            </SectionTitleAnimation>
            <div className="project-info pb-4 mt-4">
              <div className="project-links mb-3">
                <ScaleAnimation delayValue={(delayValue = delayValue + 0.2)}>
                  <a
                    href="https://github.com/Ahmad-mh1999/EMS-Task-Back8"
                    className="link"
                  >
                    <HiCode className="p-links-icon" />
                    <span className="p-link-info">GitHub</span>
                  </a>
                </ScaleAnimation>
                <ScaleAnimation delayValue={(delayValue = delayValue + 0.2)}>
                  <a
                    href=" https://documenter.getpostman.com/view/34410873/2sA3BuV8nh"
                    className="link"
                  >
                    <FaLink className="p-links-icon" />

                    <span className="p-link-info">
                      Documentation via Postman
                    </span>
                  </a>
                </ScaleAnimation>
              </div>
              <div className="project-technologies">
                {skills?.map((skill, index) => (
                  <ScaleAnimation delayValue={(delayValue = delayValue + 0.2)}>
                    <a href="#" className="technology" key={index}>
                      <div className="technology-info">
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="technology-image"
                          loading="lazy"
                        />
                        <span className="technology-name">{skill.name}</span>
                      </div>
                    </a>
                  </ScaleAnimation>
                ))}
              </div>
            </div>
            <div className="project-desc">
              <p>
                Employee Management System (EMS) that allows for managing
                departments and employees within those departments. The system
                feature a user authentication mechanism, CRUD operations for
                managing departments and employees, relationships between
                departments and employees, soft deletion of records, and an API
                to interact with the system.
              </p>
            </div>
            <div className="row">
              {project_photos?.map((photo, index) => (
                <div
                  key={index}
                  className="project-image col-lg-4 col-md-6 mb-3"
                >
                  <div className="overview">
                    <img src={photo} alt="Visit Syria" loading="lazy" />
                    <div className="overview-layer">
                      <FaEye />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Project4;
