import rebustImg from "../assets/rebust/rebustImg.png";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";
import logo1 from "../assets/logo/logo1.svg";
import logo2 from "../assets/logo/logo2.svg";
import logo3 from "../assets/logo/logo3.svg";
import logo4 from "../assets/logo/logo4.svg";
import logo5 from "../assets/logo/logo5.svg";
import logo6 from "../assets/logo/logo6.svg";

export default function RebustSection() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
  return (
    <div className="px-6 py-20 font-sans text-white">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h1 className="mb-4 text-5xl font-extrabold leading-tight">
          Robust Security for <br />
          Complete Peace of Mind
        </h1>
        <p className="text-sm text-[#9893B8]">
          Your data is protected with advanced security measures, ensuring
          privacy and <br />
          reliability at every step.
        </p>
      </div>
      <section className="relative flex w-full items-center justify-center">
        <img src={rebustImg} />
      </section>
      <section className="relative mx-auto flex w-3/5 items-center justify-center">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={4000}
          allowTouchMove={false}
          style={{ width: "100%" }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                style={{ width: "100%", height: "auto" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
