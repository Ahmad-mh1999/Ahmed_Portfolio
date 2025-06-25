import './SliderImage.css'
import Slider from "react-slick";
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
function SliderImage() {
  const heroSliders = [
    
      {
        item: "HTML",
        image: htmlimg,
      },
      {
        item: "CSS",
        image: cssimg,
      },
      {
        item: "JavaScript",
        image: jsimg,
      },
      {
        item: "TypeScript",
        image: tsimg,
      },
      {
        item: "PHP",
        image: phpimg,
      },
      {
        item: "Laravel",
        image: laravelimg,
      },
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
      {
        item: "MySQL",
        image: mySqlimg,
      },
      {
        item: "Git",
        image: gitimg,
      },
      {
        item: "Github",
        image: githubimg,
      },
  ]
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000

  };



  return (
    <div>
      <div className="slider" style={{ width: '300px', height: '300px' }}>
        <Slider {...settings}>
          {heroSliders?.map((heroSlider , index) => (
            <div key={index} className='slider-img'  >
              <img src={heroSlider.image} alt={heroSlider.item} loading="lazy"/>
              <p className='skill-name'>{heroSlider.item}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default SliderImage