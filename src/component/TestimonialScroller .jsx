import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import backgroundImg from "../assets/testimonial/testimonial.svg";
import useIsLargeScreen from "../hooks/trackScreen";

const slideHeight = 200;
const slidesPerView = 3.5;
const testimonials = [
  "Proxima’s design team nailed the perfect balance between aesthetics and functionality...",
  "The Proxima team is fantastic! They quickly understood our needs...",
  "Proxima transformed our vision into a reality...",
  "Their innovative approach to design has given us a competitive edge...",
  "They delivered beyond our wildest expectations...",
  "Proxima took our outdated website and completely transformed it...",
];

export default function TestimonialScroller() {
  const isLarge = useIsLargeScreen();

  return (
    <section className="w-full py-20 text-white">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold">What our users are saying</h2>
        <p className="mx-auto mt-2 max-w-2xl text-lg text-[#9893B8]">
          Hear from our satisfied customers about how our platform has
          transformed their SEO strategies and delivered outstanding results.
        </p>
      </div>

      <div
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="lg:mx mx-4 flex justify-center rounded-xl">
          <div
            className={`flex ${isLarge ? "flex-row" : "flex-col"} max-w-md justify-center gap-6`}
          >
            {[0, 1, 2].map((colIndex) => (
              <div
                key={colIndex}
                className="mx-auto w-full max-w-md"
                style={{
                  height: isLarge ? `${slideHeight * slidesPerView}px` : "auto",
                  width: isLarge ? "auto" : "100%",
                }}
              >
                <Swiper
                  direction={isLarge ? "vertical" : "horizontal"}
                  slidesPerView={isLarge ? slidesPerView : 1.2}
                  spaceBetween={36}
                  loop={true}
                  autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                    reverseDirection: isLarge && colIndex === 1,
                  }}
                  speed={3000}
                  modules={[Autoplay]}
                  className={isLarge ? "h-full" : "w-full"}
                >
                  {testimonials.map((text, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className="flex h-64 w-64 items-center rounded-2xl border border-white border-opacity-10 bg-[radial-gradient(circle_at_top_left,_rgba(64,41,89,0.3)_0%,_rgba(20,15,30,0.9)_40%,_#0b0712_100%)] p-6 text-[#c0b8ff] shadow-lg"
                        style={{ height: `${slideHeight}px` }}
                      >
                        <p className="text-base font-medium leading-relaxed">
                          {text}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
