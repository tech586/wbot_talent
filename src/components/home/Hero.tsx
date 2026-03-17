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
      <div className="relative z-10 pt-[160px] pb-[140px] max-[641px]:pb-16 max-[426px]:pb-10 sm:pt-[280px]">
        {/* <HeroShapes /> */}
         {/*  RIPPLE GRID BACKGROUND */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <BackgroundRippleEffect />
      </div>

        <HeroContent />
      </div>
    </section>
  );
};
Hero.displayName = 'Hero';
export default Hero;
