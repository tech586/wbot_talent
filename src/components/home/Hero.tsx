'use client';

import { useParallaxEffect } from '@/hooks/useParallaxEffect';
import HeroContent from './HeroContent';
import DotDistortionBackground from './BackgroundHover';

const Hero = () => {
  const sceneRef = useParallaxEffect();

  return (
    <section
      ref={sceneRef}
      className="dark:bg-background-8 relative z-0 overflow-hidden bg-white min-h-screen flex justify-center items-center"
      id="scene">

      {/* DotDistortionBackground - Top Half */}
      <div className="absolute top-0 left-0 w-full h-1/2 z-0 pointer-events-none">
        <DotDistortionBackground />
      </div>

      <div className="relative z-10">
        {/* <HeroShapes /> */}

        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:gap-12 items-center">
            {/* Left: Hero Content */}
            <div className="relative z-10">
              <HeroContent />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
Hero.displayName = 'Hero';
export default Hero;
