'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import reviews from '@/data/json/testimonials/testimonials.json';
import tech from '@/data/json/testimonials/tech.json'
import Image from 'next/image';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import GradientOverlay from '../shared/reviews/GradientOverlay';

const Technologies = () => {
  return (
    <section className="dark:bg-background-6 relative pt-14 pb-24 md:pt-16 md:pb-36 lg:pt-[88px] lg:pb-44 xl:pt-[100px] xl:pb-[200px]">
      <div className="main-container flex flex-col gap-[70px] max-[426px]:gap-10">
        <div className="flex flex-col items-center text-center">
          <RevealAnimation delay={0.1}>
            <span className="px-3 py-1.5 text-[11px] sm:px-4 sm:py-2 sm:text-sm md:px-5 md:py-2 rounded-full font-medium tracking-wide bg-primary-50 text-primary-600 border border-primary-600 text-center mb-5">Technologies We Work With</span>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h2 className="mx-auto mb-4 max-w-[750px] max-[426px]:mb-3">WORKSBOT TALENT</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="max-[426px]:text-tagline-2 max-w-[490px] max-[426px]:max-w-[320px]">
             Our talent network includes professionals experienced in modern software development and technology platforms.
            </p>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.4}>
          <div className="relative">
            <Swiper
              className="swiper reviews-swiper"
              spaceBetween={30}
              slidesPerView={3}
              centeredSlides={true}
              loop={true}
              speed={1500}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              navigation={false}
              pagination={false}
              scrollbar={false}>
              <div className="swiper-wrapper">
                {tech.map((technology) => (
                  <SwiperSlide key={technology.id} className="swiper-slide">
                    <div className="bg-background-2 dark:bg-background-5 relative z-0 mx-1 flex flex-col gap-y-8 overflow-hidden rounded-[20px] p-8 sm:mx-0">
                      <GradientOverlay />
                      <div>
                        <p className="text-secondary dark:text-accent review-name text-xl leading-[1.5] p-[14px] font-bold">
                          {technology.name}
                        </p>
                        <div className="text-secondary/60 dark:text-accent/60 text-tagline-2 review-title">
                          <ul className="list-disc pl-5 p-[15px] text-lg font-semibold">
                              {technology.technologies.map((tech, index) => (
                                <li key={index} className='p-[10px]'>{tech}</li>
                              ))}
                            </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Technologies;
