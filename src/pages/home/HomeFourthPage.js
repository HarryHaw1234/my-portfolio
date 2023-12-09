import { Autoplay, A11y, EffectCreative } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-creative";
import "swiper/css/autoplay";
import { useEffect, useState } from "react";

export default function HomeFourthPage(props) {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function watchWidth() {
      console.log("Setting up...")
      setWidth(window.innerWidth)
  }
  
  window.addEventListener("resize", watchWidth)
  }, [window.innerWidth])
 
  const slidesPerView = width < 950 ? width <560 ? 1: 2 : 3;
  const reviewCards = props.reviews.map((review, index) => {
    return (
      <SwiperSlide className="py-10 px-2" key={index}>
        <div
          key={index}
          className="h-48 overflow-auto rounded-md shadow-lg bg-white/30"
        >
          <div className="h-1/3 py-4 flex justify-around rounded-t-md items-center bg-gradient-to-r from-cyan-300 to-blue-200">
            <img
              src={review.image}
              alt="Reviewer"
              className="w-10 h-10 rounded-full"
            />  
            <div>
              <span className="block">{review.reviewer}</span>
              <span>From {review.company}</span>
            </div>
          </div>
          <p className="h-2/3 flex items-center justify-center">
            {review.review}
          </p>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <div className="w-[90vw] lg:w-3/4 max-h-[75vh] flex flex-col justify-evenly mx-auto py-20">
      <h1 className="text-3xl font-title ">Reviews</h1>
      <div className="w-full flex justify-center align-center">
        <Swiper
          modules={[Autoplay, A11y]}
          spaceBetween={30}
          slidesPerView={slidesPerView}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="w-full px-5 py-3"
        >
          {reviewCards}
        </Swiper>
      </div>
    </div>
  );
}
