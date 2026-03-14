import React from "react";
import Marquee from "react-fast-marquee";
import RevealAnimation from "../animation/RevealAnimation";
import Image from "next/image";

const ScrollingAppsShowcase: React.FC = () => {
  const row1Apps = [
    { img: "/images/technologies/programming languages/python.png", alt: "python" },
    { img: "/images/technologies/programming languages/java.png", alt: "java" },
    { img: "/images/technologies/programming languages/javascript.png", alt: "javascript" },
    { img: "/images/technologies/programming languages/typescript.png", alt: "typescript" },
    { img: "/images/technologies/programming languages/c++.png", alt: "c++" },
    { img: "/images/technologies/programming languages/go.png", alt: "go" },
    { img: "/images/technologies/programming languages/php.png", alt: "php" },
 
  ];

  const row2Apps = [
    { img: "/images/technologies/frontend/angular.png", alt: "angualr" },
    { img: "/images/technologies/frontend/next.png", alt: "next" },
    { img: "/images/technologies/frontend/react.png", alt: "react" },
    { img: "/images/technologies/frontend/vue.png", alt: "vue" },
  ];

  const row3Apps = [
    { img: "/images/technologies/backend/node.png", alt: "node" },
    { img: "/images/technologies/backend/spring.png", alt: "spring" },
    { img: "/images/technologies/backend/django.png", alt: "django" },
    { img: "/images/technologies/backend/laravel.png", alt: "laravel" },
 
  ];
  
  const row4Apps = [
    { img: "/images/technologies/cloud platforms/aws.png", alt: "aws" },
    { img: "/images/technologies/cloud platforms/azure.png", alt: "azure" },
    { img: "/images/technologies/cloud platforms/google cloud.png", alt: "google cloud" },
 
  ];

    
  const row5Apps = [
    { img: "/images/technologies/data and artificial intelligence/dataanalisys.jpeg", alt: "dataanalysis" },
    { img: "/images/technologies/data and artificial intelligence/dataengineering.jpeg", alt: "dataengineering" },
    { img: "/images/technologies/data and artificial intelligence/deeplearning.jpg", alt: "deeplearning" },
    { img: "/images/technologies/data and artificial intelligence/machinelearning.webp", alt: "machinelearning" },
 
  ];

      
  const row6Apps = [
    { img: "/images/technologies/devopsandinfra/terraform.png", alt: "terraform" },
    { img: "/images/technologies/devopsandinfra/docker.png", alt: "docker" },
    { img: "/images/technologies/devopsandinfra/kubernetes.png", alt: "kubernetes" },
    { img: "/images/technologies/devopsandinfra/cicd.png", alt: "cicd" },
    
 
  ];

  // ✅ RESPONSIVE PERFECT CIRCLE TILE
  const AppTile: React.FC<{ img: string; alt: string; large?: boolean }> = ({
    img,
    alt,
    large,
  }) => {
    const isJenkins = img.includes("Jenkins");

    return (
      <li
        className={`
          rounded-t-full overflow-hidden bg-amber-100
          flex items-center justify-center
          
          min-w-[85px] w-[85px] h-[85px]     /* ✅ Mobile */
          md:min-w-[110px] md:w-[110px] md:h-[110px]  /* ✅ Tablet */
          lg:min-w-[130px] lg:w-[130px] lg:h-[130px]  /* ✅ Desktop */

          ${large ? "mx-2 md:mx-3 lg:mx-4" : "mx-2 md:mx-4"}
        `}
      >
        <div
          className={`
            relative
            w-[38px] h-[38px]     /* ✅ Mobile */
            md:w-[50px] md:h-[50px]   /* ✅ Tablet */
            lg:w-[60px] lg:h-[60px]   /* ✅ Desktop */

            ${isJenkins ? "lg:w-[70px] lg:h-[70px]" : ""}
          `}
        >
          <Image src={img} alt={alt} fill className="object-contain" />
        </div>
      </li>
    );
  };

  const renderTiles = (apps: any[], large = false) => (
    <ul className="flex items-center">
      {apps.map((app, idx) => (
        <AppTile key={idx} img={app.img} alt={app.alt} large={large} />
      ))}
    </ul>
  );

  return (
    <section className="py-16 bg-white mt-10 md:mt-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-5">
          <RevealAnimation delay={0.1}>
            <span className="px-3 py-1.5 text-[11px] sm:px-4 sm:py-2 sm:text-sm md:px-5 md:py-2 rounded-full font-medium tracking-wide bg-primary-50 text-primary-600 border border-primary-600 text-center mb-5">Technologies We Work With</span>
          </RevealAnimation>
        </div>

        <div className="text-center mb-12">
          <RevealAnimation delay={0.3}>
            <p>
              Our talent network includes professionals experienced in modern software development and technology platforms.
            </p>
          </RevealAnimation>
        </div>

        {/* ROW 1 */}
        <div className="px-1 md:px-2 lg:px-20">
           <span className="block text-center text-lg font-medium">Programming Languages</span>
          <Marquee direction="right" speed={40} pauseOnHover gradient={false}>
            {renderTiles(row1Apps)}
            {renderTiles(row1Apps)}
          </Marquee>
        </div>

        {/* ROW 2 */}
        <div className="px-1 md:px-2 lg:px-20 mt-6">
          <span className="block text-center text-lg font-medium">Frontend Development</span>
          <Marquee direction="left" speed={40} pauseOnHover gradient={false}>
            {renderTiles(row2Apps)}
            {renderTiles(row2Apps)}
          </Marquee>
        </div>

        {/* ROW 3 */}
        <div className="px-1 md:px-2 lg:px-20 mt-6">
             <span className="block text-center text-lg font-medium">Backend Development</span>
          <Marquee direction="right" speed={40} pauseOnHover gradient={false}>
            {renderTiles(row3Apps, true)}
            {renderTiles(row3Apps, true)}
          </Marquee>
        </div>

           {/* ROW 4 */}
        <div className="px-1 md:px-2 lg:px-20 mt-6">
          <span className="block text-center text-lg font-medium">Cloud Platforms</span>
          <Marquee direction="left" speed={40} pauseOnHover gradient={false}>
            {renderTiles(row4Apps)}
            {renderTiles(row4Apps)}
          </Marquee>
        </div>
        
        {/* ROW 5 */}
        <div className="px-1 md:px-2 lg:px-20 mt-6">
           <span className="block text-center text-lg font-medium">Data and Artificial intelligence</span>
          <Marquee direction="right" speed={40} pauseOnHover gradient={false}>
            {renderTiles(row5Apps)}
            {renderTiles(row5Apps)}
          </Marquee>
        </div>
          <div className="px-1 md:px-2 lg:px-20 mt-6">
          <span className="block text-center text-lg font-medium">Devops and Infrastructure</span>
          <Marquee direction="left" speed={40} pauseOnHover gradient={false}>
            {renderTiles(row6Apps)}
            {renderTiles(row6Apps)}
          </Marquee>
        </div>
      </div>


        
    </section>
  );
};

export default ScrollingAppsShowcase;
