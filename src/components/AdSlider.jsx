// AdSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ad1 from "../assets/ad1.jpg";
import ad2 from "../assets/ad2.jpg";
import ad3 from "../assets/ad3.jpg";

import "./AdSlider.css";

const adData = [
  {
    id: 1,
    title: "Học ReactJS chỉ trong 30 ngày!",
    image: ad1,
    cta: "Bắt đầu ngay",
  },
  {
    id: 2,
    title: "Thành thạo Excel A-Z trong 1 tuần",
    image: ad2,
    cta: "Tìm hiểu thêm",
  },
  {
    id: 3,
    title: "Lộ trình Frontend chuẩn thực chiến",
    image: ad3,
    cta: "Xem lộ trình",
  },
];

const AdSlider = () => {
  return (
    <div className="relative px-[10px] overflow-hidden cursor-pointer">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000 }}
        loop
        className="rounded-lg"
      >
        {adData.map((ad) => (
          <SwiperSlide key={ad.id}>
            <div className="relative">
              <img
                src={ad.image}
                alt={ad.title}
                className="w-full h-52 md:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-6 text-white">
                <h2 className="text-3xl font-bold mb-2 ml-8">{ad.title}</h2>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm ml-8 cursor-pointer">
                  {ad.cta}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AdSlider;
