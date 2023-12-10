import { Autoplay, Pagination, A11y, EffectCreative } from "swiper/modules";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-creative";
import "swiper/css/autoplay";
import { useEffect, useState } from "react";

export default function HomeThirdPage(props) {
  const projects = props.projects;
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function watchWidth() {
      console.log("Setting up...")
      setWidth(window.innerWidth)
  }
  
  window.addEventListener("resize", watchWidth)
  }, [window.innerWidth])
 
  const slidesPerView = width < 950 ? width <560 ? 1: 2 : 3;
  const projectCards = projects.map((project, index) => {
    return (
      <SwiperSlide>
        <div
          key={index}
          className="h-fit rounded-md bg-white overflow-hidden pb-4 hover:animate-[wiggle_1s_ease-in-out_infinite]"
        >
          <img className="w-full h-fit rounded-t-md mb-3" src={project.image} />
          <div className="px-2">
            <h3 className="text-lg md:text-2xl my-3">{project.name}</h3>
            <span className="[display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] overflow-hidden">
              <strong>Languages:</strong> {project.languages}
            </span>
            <p className="[display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] overflow-hidden mt-2">
              {project.description}
            </p>
            <Link to={`/projects/${index}`}>
              <button className="mt-3 mb-4 rounded-md bg-sky-400 px-3 py-1 text-white">
                Go to project
              </button>
            </Link>
          </div>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <div className="min-w-screen max-h-screen flex justify-center items-center bg-green-50 py-20">
      <div className="w-full flex flex-col items-center justify-evenly gap-10">
        <h1 className="text-xl font-title md:text-3xl font-bold">Testinomals</h1>
        <Swiper
          modules={[Autoplay, Pagination, A11y, EffectCreative]}
          spaceBetween={30}
          slidesPerView={slidesPerView}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="w-[90%] px-5"
        >
          {projectCards}
        </Swiper>
      </div>
    </div>
  );
}
