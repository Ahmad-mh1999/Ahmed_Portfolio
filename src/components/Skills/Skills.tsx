import OneSkill from "../OneSkill/OneSkill";
import SectionTitleAnimation from "../animation/SectionTitleAnimation";
import htmlimg from "./../../assets/html.svg";
import mySqlimg from "./../../assets/MySQL.svg";
import cssimg from "./../../assets/css.svg";
import phpimg from "./../../assets/php-1.svg";
import bootstrapimg from "./../../assets/bootstrap.svg";
import jsimg from "./../../assets/js.svg";
import tsimg from "./../../assets/typescript.svg";
import reactimg from "./../../assets/react.svg";
import laravelimg from "./../../assets/laravel-2.svg";
import reduximg from "./../../assets/redux.svg";
import gitimg from "./../../assets/git.svg";
import githubimg from "./../../assets/github.svg";
export default function Skills() {
  const arrayImages = [
    {
      skill_name: "Programming Languages",
      skill_item: [
        {
          item: "JavaScript",
          image: jsimg,
        },
        {
          item: "TypeScript",
          image: tsimg,
        },
        
      ],
    },
    {
      skill_name: "Framework",
      skill_item: [
        {
          item: "Laravel",
          image: laravelimg,
        },
      ],
    },
    {
      skill_name: "Markup Languages",
      skill_item: [
        {
          item: "HTML",
          image: htmlimg,
        },
        {
          item: "CSS",
          image: cssimg,
        },
      ],
    },
    {
        skill_name: "HyperText Languages",
        skill_item: [
            {
                item: "PHP",
                image: phpimg,
              },
        ],
      },
    {
      skill_name: "Libraries",
      skill_item: [
        {
          item: "React JS",
          image: reactimg,
        },
        {
          item: "Bootstrap",
          image: bootstrapimg,
        },
        {
          item: "Redux",
          image: reduximg,
        },
      ],
    },
    {
      skill_name: "Database Management System",
      skill_item: [
        {
          item: "MySQL",
          image: mySqlimg,
        },
      ],
    },
    {
      skill_name: "Additional Skills",
      skill_item: [
        {
          item: "Git",
          image: gitimg,
        },
        {
          item: "Github",
          image: githubimg,
        },
      ],
    },
  ];
  return (
    <>
      <div className="container">
        <div className="section-title mb-5">
          <SectionTitleAnimation>
            <h1>Skills</h1>
          </SectionTitleAnimation>
        </div>

        {arrayImages?.map((skill, index) => {
          return (
            <div key={index} className="skills-tag">
              <div className="title-with-line">
                <div className="before-line"></div>
                <h2>{skill.skill_name}</h2>
                <div className="after-line"></div>
              </div>
              <div className="row">
                {skill.skill_item?.map((item, index) => (
                  <div className="col-lg-4 col-md-11 col-sm-11" key={index}>
                    <OneSkill id={index} item={item.item} image={item.image} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
