'use client';

import { useParallaxEffect } from '@/hooks/useParallaxEffect';
import HeroContent from './HeroContent';
// import HeroShapes from './HeroShapes';
import { BackgroundRippleEffect } from '../main/background';
import Image from 'next/image';
import DotDistortionBackground from './BackgroundHover';

const Hero = () => {
  const sceneRef = useParallaxEffect();

  return (
    <section
      ref={sceneRef}
      className="dark:bg-background-8 relative z-0 overflow-hidden bg-white pb-14 sm:pb-0 md:-mb-10 lg:-mb-12"
      id="scene">
         {/* <video
          className="absolute top-0 left-0 size-full min-h-[100%] scale-[1.1] object-cover object-center"
          autoPlay={true}
          muted={true}
          loop={true}>
          <source src="/video/getty-watch.mp4" type="video/mp4" />
          <track src="subtitles/lawyer-hero-video-en.vtt" kind="subtitles" srcLang="en" label="English" />
          <track
            src="descriptions/lawyer-hero-video-desc.vtt"
            kind="descriptions"
            srcLang="en"
            label="English Descriptions"
          />
          Your browser does not support the video tag.
        </video> */}
      {/* Background Image */}
      {/* <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero/pin17.jpg)',
         
        }}
      /> */}
      {/* Overlay for text readability */}
      {/* <div className="absolute inset-0 z-1 bg-gradient-to-b from-white via-white/30 to-white/20 dark:from-black/50 dark:via-black/40 dark:to-black/30" />
      <div className="absolute inset-0 z-1 bg-black/12 dark:bg-black/50" /> */}

      <div className="relative z-10 pt-[60px] pb-[140px] max-[641px]:pt-[100px] max-[641px]:pb-20 max-[426px]:pb-15 sm:pt-[120px]">
        {/* <HeroShapes /> */}

        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Hero Content with Ripple Effect */}
            <div className="relative">
              <div className="absolute inset-0 z-0 pointer-events-none">
                <DotDistortionBackground />
              </div>
              <div className="relative z-10">
                <HeroContent />
              </div>
            </div>
            
            {/* Right: Hero Images with Scrolling Animation */}
            <div className="w-full">
              <div className="relative h-[250px] md:h-[400px] lg:h-[600px] overflow-hidden rounded-lg">
                <div className="flex flex-col gap-4 animate-scroll-up">
                  {/* First set of images */}
                  <Image
                    src="/images/hero1/g1.png"
                    alt="Hero image 1"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow flex-shrink-0 border-2 border-gray-500"
                  />
                  <Image
                    src="/images/hero1/g2.png"
                    alt="Hero image 2"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow flex-shrink-0 border-2 border-gray-500"
                  />
                  <Image
                    src="/images/hero1/g3.png"
                    alt="Hero image 3"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow flex-shrink-0 border-2 border-gray-500"
                  />
                  <Image
                    src="/images/hero1/g4.png"
                    alt="Hero image 4"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow flex-shrink-0 border-2 border-gray-500"
                  />
                  <Image
                    src="/images/hero1/g5.png"
                    alt="Hero image 5"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow flex-shrink-0 border-2 border-gray-500"
                  />
                  <Image
                    src="/images/hero1/g6.png"
                    alt="Hero image 6"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow flex-shrink-0 border-2 border-gray-500"
                  />
                  <Image
                    src="/images/hero1/g7.png"
                    alt="Hero image 7"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow flex-shrink-0 border-2 border-gray-500"
                  />
                  
                  {/* Duplicate set for seamless loop */}
                  <Image
                    src="/images/hero1/g1.png"
                    alt="Hero image 1"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow flex-shrink-0 border-2 border-gray-500"
                  />
                  <Image
                    src="/images/hero1/g2.png"
                    alt="Hero image 2"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow flex-shrink-0 border-2 border-gray-500"
                  />
                  <Image
                    src="/images/hero1/g3.png"
                    alt="Hero image 3"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow flex-shrink-0 border-2 border-gray-500"
                  />
                  <Image
                    src="/images/hero1/g4.png"
                    alt="Hero image 4"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow flex-shrink-0 border-2 border-gray-500"
                  />
                  <Image
                    src="/images/hero1/g5.png"
                    alt="Hero image 5"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow flex-shrink-0 border-2 border-gray-500"
                  />
                  <Image
                    src="/images/hero1/g6.png"
                    alt="Hero image 6"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow flex-shrink-0 border-2 border-gray-500"
                  />
                  <Image
                    src="/images/hero1/g7.png"
                    alt="Hero image 7"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow flex-shrink-0 border-2 border-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
Hero.displayName = 'Hero';
export default Hero;
