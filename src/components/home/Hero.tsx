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
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero/puzzle3.jpg)',
         
        }}
      />
      {/* Overlay for text readability */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-white/40 via-white/30 to-white/20 dark:from-black/50 dark:via-black/40 dark:to-black/30" />
      <div className="absolute inset-0 z-1 bg-black/15 dark:bg-black/50" />

      <div className="relative z-10 pt-[100px] pb-[140px] max-[641px]:pb-16 max-[426px]:pb-10 sm:pt-[200px]">
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
