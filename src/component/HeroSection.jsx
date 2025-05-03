import backgroundImage from "../assets/hero/backgroundImage.svg";
import mainImage from "../assets/hero/mainImage.png";
import logo1 from "../assets/logo/logo1.svg";
import logo2 from "../assets/logo/logo2.svg";
import logo3 from "../assets/logo/logo3.svg";
import logo4 from "../assets/logo/logo4.svg";
import logo5 from "../assets/logo/logo5.svg";
import logo6 from "../assets/logo/logo6.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";
import Button from "./common/Button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
  ];

  return (
    <>
      <section
        className="relative flex w-full items-center justify-center bg-center bg-no-repeat py-48"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <motion.div
          className="max-w-3xl px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="mb-4 inline-block rounded-full border border-[#463C54] bg-[#fff] bg-opacity-[0.07] px-4 py-[5px] text-sm text-white">
            <span className="rounded-full bg-[#4F60FA] px-1 py-px text-xs text-white">
              NEW
            </span>
            &nbsp;4.8 Beta is available to download &rsaquo;
          </div>
          <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Revolutionizing the <br className="hidden md:block" />
            Future of Data Tracking
          </h1>
          <p className="mt-6 text-sm text-[#9893B8] md:text-base">
            Discover what drives results and what doesn’t to boost your search
            traffic.
          </p>
          <div className="mt-6">
            <Button text="Take Free Trial" />
          </div>
        </motion.div>
      </section>

      <section className="relative flex w-full items-center justify-center">
        <motion.img
          src={mainImage}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </section>

      <motion.section
        className="relative mx-auto flex items-center justify-center md:w-full lg:w-full xl:w-2/3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Swiper
          modules={[Autoplay]}
          slidesPerView={6}
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
      </motion.section>
    </>
  );
}
