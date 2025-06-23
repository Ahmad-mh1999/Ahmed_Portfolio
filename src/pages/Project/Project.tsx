import { HiCode } from "react-icons/hi";
import "./Project.css";
import { FaArrowLeft, FaArrowRight, FaLink } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { TParams, TProject } from "../../types/type";
import PreLoader from "../../components/Preloader/Preloader";
import { motion } from "framer-motion";
import ScaleAnimation from "../../components/animation/ScaleAnimation";
import SectionTitleAnimation from "../../components/animation/SectionTitleAnimation";
import homePageVS from "./../../assets/vistSirya/Home.png"
import exploreVS from "./../../assets/vistSirya/Explore.png"
import exploreVS1 from "./../../assets/vistSirya/Explore-1.png"
import exploreVS2 from "./../../assets/vistSirya/Explore-4.png"
import exploreVS3 from "./../../assets/vistSirya/Explore-3.png"
import aboutVS1 from "./../../assets/vistSirya/about (1).png"
import aboutVS2 from "./../../assets/vistSirya/about (2).png"
import aboutVS3 from "./../../assets/vistSirya/about (3).png"
import aboutVS4 from "./../../assets/vistSirya/about (4).png"
import blogVS from "./../../assets/vistSirya/blogs.png"
import blogVS1 from "./../../assets/vistSirya/blogs1.png"
import checkVS from "./../../assets/vistSirya/Check out.png"
import checkVS1 from "./../../assets/vistSirya/Check out1.png"
import recommendationVS1 from "./../../assets/vistSirya/Recommendations (1).png"
import recommendationVS2 from "./../../assets/vistSirya/Recommendations (2).png"
import recommendationVS from "./../../assets/vistSirya/Recommendations.png"
import htmlimg from "./../../assets/html.svg";
import mySqlimg from "./../../assets/MySQL.svg";
import cssimg from "./../../assets/css.svg";
import phpimg from "./../../assets/PHP.svg";
import bootstrapimg from "./../../assets/bootstrap.svg";
import jsimg from "./../../assets/js.svg";
import reactimg from "./../../assets/react.svg";
import laravelimg from "./../../assets/laravel-2.svg";
import { delay } from "framer-motion";
function Project() {

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
  ];
  const project_photos = [
    homePageVS,
    exploreVS,
    exploreVS1,
    exploreVS2,
    exploreVS3,
    aboutVS1,
    aboutVS2,
    aboutVS3,
    aboutVS4,
    recommendationVS,
    recommendationVS1,
    recommendationVS2,
    blogVS,
    blogVS1,
    checkVS,
    checkVS1
    
  ]
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
                <h3 className="project-title pt-md-3 pb-4">Visit Syria</h3>
              </SectionTitleAnimation>
              <div className="project-info pb-4 mt-4">
                <div className="project-links mb-3">
                  <ScaleAnimation delayValue={(delayValue = delayValue + 0.2)}>
                    <a href="https://github.com/Ayham-Ibrahim/visit-syria-back/" className="link">
                      <HiCode className="p-links-icon" />
                      <span className="p-link-info">GitHub</span>
                    </a>
                  </ScaleAnimation>
                  <ScaleAnimation delayValue={(delayValue = delayValue + 0.2)}>
                    <a href="https://github.com/Ayham-Ibrahim/visit-syria-back/ "className="link">
                      <FaLink className="p-links-icon" />

                      <span className="p-link-info">Demo</span>
                    </a>
                  </ScaleAnimation>
                </div>
                <div className="project-technologies">
                  {skills?.map((skill, index) => (
                    <ScaleAnimation
                      delayValue={(delayValue = delayValue + 0.2)}
                    >
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
                  As part of my Full Stack Diploma internship at Focal X, I
                  developed a comprehensive website named Visit Syria. This
                  platform is designed to showcase the beauty and hospitality of
                  Syria by providing detailed information about tourist
                  attractions, restaurants, and hotels across the country.
                   Key Features: Tourist Attractions: Discover the most captivating
                  places to visit in Syria, complete with detailed descriptions
                  and stunning images. Restaurants: Explore a variety of dining
                  options, from local eateries to fine dining, with detailed
                  information and photos. Hotels: Find and book rooms in the
                  best hotels, with comprehensive details and images to help you
                  choose the perfect stay. Recommendations: Get personalized
                  recommendations for the best restaurants, hotels, and
                  attractions based on user reviews and ratings. This project
                  was a significant part of my training at Focal X, where I
                  applied my skills in React, TypeScript, Laravel, and PHP to
                  create a user-friendly and visually appealing website. The
                  site not only serves as a guide for tourists but also provides
                  a seamless booking experience for accommodations
                </p>
              </div>
              <div className="row">
                {project_photos?.map((photo, index) => (
                  <div
                    key={index}
                    className="project-image col-lg-4 col-md-6 mb-3"
                  >
                    <div className="overview">
                      <img
                        src={photo}
                        alt="Visit Syria"
                        loading="lazy"
                      />
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

export default Project;

// تم الإرسال من قبل أنت:
// لدي كارد عند الضغط عليه يقوم بالتوجيه الى رابط صفحة تعرض تفاصيل المشروع وانا ضمن الرابط ارسل id وضمن صفحة المشروع استخدم  const id = useParams<TParams>(); لاحصل عليه حيث لدي مصفوفة اغراض كل منها مشروع وحسب ال id المستقبل اريد عرض بينات المشروع حيث انا استحدم project[id].title ولكن يعطي الخطا التالي Type 'Readonly<Partial<TParams>>' cannot be used as an index type.ts(2538)
// const id: Readonly<Partial<TParams>>
