import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";

import { Highlights } from "../../interfaces/data";
import HighlightCard from "./HighlighCard";

const SwiperCard = ({ highlights }: { highlights: Highlights[] }) => {
  return (
    <div className="overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {highlights &&
          highlights.map((item) => (
            <SwiperSlide key={item.id}>
              <HighlightCard highlight={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SwiperCard;
