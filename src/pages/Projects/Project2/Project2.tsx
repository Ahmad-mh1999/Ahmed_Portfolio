import { HiCode } from "react-icons/hi";
import "./Project2.css";
import { FaArrowRight, FaLink } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import ScaleAnimation from "../../../components/animation/ScaleAnimation";
import SectionTitleAnimation from "../../../components/animation/SectionTitleAnimation";
import htmlimg from "./../../../assets/html.svg";
import cssimg from "./../../../assets/css.svg";
import bootstrapimg from "./../../../assets/bootstrap.svg";
import jsimg from "./../../../assets/js.svg";
import reactimg from "./../../../assets/react.svg";
import home1img from "../../../assets/villa/home1.png";
import home2img from "../../../assets/villa/home2.png";
import propertiesimg from "../../../assets/villa/properties.png";
import propertyDetailsimg from "../../../assets/villa/propertyDetails.png";
import contactimg from "../../../assets/villa/contact.png";

function Project2() {
  const skills = [
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
      name: "React",
      image: reactimg,
    },
  ];
  const project_photos = [
    home1img,
    home2img,
    propertiesimg,
    propertyDetailsimg,
    contactimg,
  ];
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
              <h3 className="project-title pt-md-3 pb-4">Villa</h3>
            </SectionTitleAnimation>
            <div className="project-info pb-4 mt-4">
              <div className="project-links mb-3">
                <ScaleAnimation delayValue={(delayValue = delayValue + 0.2)}>
                  <a
                    href="https://github.com/Ahmad1999/Villa/"
                    className="link"
                  >
                    <HiCode className="p-links-icon" />
                    <span className="p-link-info">GitHub</span>
                  </a>
                </ScaleAnimation>
                <ScaleAnimation delayValue={(delayValue = delayValue + 0.2)}>
                  <a
                    href="https://Ahmad1999.github.io/Villa/"
                    className="link"
                  >
                    <FaLink className="p-links-icon" />

                    <span className="p-link-info">Demo</span>
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
                A specialized website for selling villas.It is characterized by
                containing many villas with different specifications that meet
                everyone s desires in addition to competitive prices.
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

export default Project2;
