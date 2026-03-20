'use client';

import { useParallaxEffect } from '@/hooks/useParallaxEffect';
import HeroContent from './HeroContent';
// import HeroShapes from './HeroShapes';
import { BackgroundRippleEffect } from '../main/background';

const Hero = () => {
  const sceneRef = useParallaxEffect();

  return (
    <section
      ref={sceneRef}
      className="dark:bg-background-8 relative z-0 overflow-hidden bg-white pb-14 sm:pb-0 md:-mb-10 lg:-mb-12"
      id="scene">
         <video
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
        </video>
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

      <div className="relative z-10 pt-[100px] pb-[140px] max-[641px]:pb-20 max-[426px]:pb-15 sm:pt-[200px]">
        {/* <HeroShapes /> */}
         {/*  RIPPLE GRID BACKGROUND */}
      {/* <div className="absolute inset-0 z-1 pointer-events-none">
        <BackgroundRippleEffect />
      </div> */}

        <HeroContent />
      </div>
    </section>
  );
};
Hero.displayName = 'Hero';
export default Hero;
