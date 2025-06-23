
import comanyLogo from "../../assets/focal_logo.jfif"
function TrainingElement() {

  const trainingData = [
    {
      training_name:"Frontend Beginners Cource",
      company_name : "Focal X Agency",
      description :"I worked in and underwent a four-month paid training program at FOCAL X. This is a comprehensive training program that focuses on backend development and provided me with valuable experience in web technologies. During the training, I got practical experience in building API interfaces, in addition to mastering Blade PHP, MySQL, Laravel, in addition to HTML, CSS, and Bootstrap.",
      certificate_link: "https://drive.google.com/file/d/1pt6l5ft2oPewdYxAeeIDH4cN7HxwZOKv/view?usp=sharing",
      recomendation_letter_link:"https://drive.google.com/file/d/1DnvVAmjtiPDRW_zKj1AdQhneQaQc9pe7/view?usp=sharing",
      company_link:"https://www.focal-x.com/",
      company_logo : comanyLogo ,
    },
    {
      training_name:"Full Stack Diploma ",
      company_name : "Focal X Agency",
      description :"Engaged in a comprehensive paid internship focused on full stack development, where I honed advanced skills in modern web technologies. Mastered front-end development with React.js and TypeScript, building responsive and dynamic user interfaces. Gained proficiency in creating and integrating RESTful APIs, enhancing front-end functionality and back-end communication. On the back-end, I developed robust applications using Laravel and PHP, ensuring efficient data handling and server-side logic. This hands-on experience has equipped me with a strong foundation in full stack engineering principles and practices",
      certificate_link: "https://drive.google.com/file/d/1pt6l5ft2oPewdYxAeeIDH4cN7HxwZOKv/view?usp=sharing",
      recomendation_letter_link:"https://drive.google.com/file/d/1DnvVAmjtiPDRW_zKj1AdQhneQaQc9pe7/view?usp=sharing",
      company_link:"https://www.focal-x.com/",
      company_logo : comanyLogo ,
    }
  ]
  return (
    <>
      {trainingData?.map((training, index) => (
        <div key={index} className="trainig-element">
          <div className="row">
            <div className="col-md-9">
              <div className="training-title">
                <h3>{training.training_name}</h3>
              </div>
              <div className="tarinig-company">
                <h4>{training.company_name}</h4>
              </div>
              <div className="trainig-description">
                <p>
                  {training.description}
                </p>
              </div>
              <div className="certificate-links">
                <h6>
                  you can see the{" "}
                  <a href={training.certificate_link}>Certificate here</a> and
                  the{" "}
                  <a href={training.recomendation_letter_link}>
                    Recomendation letter
                  </a>
                </h6>
              </div>
            </div>
            <div className="col-md-3">
              <div className="company-logo">
                <a href={training.company_link}>
                  <img src={training.company_logo} alt="company-logo" loading="lazy" />
                </a>
              </div>
            </div>

          </div>
        </div>
      ))}
    </>
  );
}

export default TrainingElement;
