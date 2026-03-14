import { cn } from '@/utils/cn';
import compare from '@public/images/comparison/comparison.jpg';
import Gradient42 from '@public/images/ns-img-530.png';
import Image from 'next/image';
import RevealAnimation from './animation/RevealAnimation';
import FeatureList from './home/FeatureList';

const featureList = [
  {
    id: '1',
    title: 'Technology & SaaS',
    icon: '/images/comparison/saas.avif',
    description: 'Startups and software companies building engineering and product teams.',
  },
  {
    id: '2',
    title: 'Artificial Intelligence',
    icon: '/images/comparison/AI.jpg',
    description: 'Companies developing AI models, machine learning platforms, and automation solutions.',
  },
    {
    id: '3',
    title: 'Fintech',
    icon: '/images/comparison/fintech.jpg',
    description: 'Financial technology organizations building digital payment systems, banking platforms, and fintech applications.',
  },
  {
    id: '4',
    title: 'E-commerce',
    icon: '/images/comparison/ecommerce.jpg',
    description: 'Online businesses developing scalable platforms and customer experiance solutions.',
  },
  {
    id: '5',
    title: 'Healthcare Technology',
    icon: '/images/comparison/healthcare.jpg',
    description: 'Health Tech companies building digital healthcare systems and telemedicine platforms.',
  },
  {
    id: '6',
    title: 'edutech',
    icon: '/images/comparison/edutech.jpg',
    description: 'Education technology companies developing learning management systems and digital education platforms.',
  },
];

const Compare = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-[100px] xl:py-[200px] dark:bg-black" aria-label="Hero section">
      <div className="main-container">
        <div className="sm:bg-background-2 sm:dark:bg-background-5 relative mb-16 w-full overflow-hidden rounded-4xl px-4 pt-[50px] md:mb-20 md:px-8 lg:mb-[90px] lg:px-14 lg:pt-[100px] xl:mb-[100px]">
          <RevealAnimation delay={0.4} direction="up" start="top top" offset={200}>
            <figure className="pointer-events-none absolute top-[-510px] right-[-579px] size-[850px] rotate-[-3deg] overflow-hidden select-none sm:top-[-486px] sm:right-[-532px]">
              <Image src={Gradient42} alt="feature-bg-gradient" className="size-full object-cover" />
            </figure>
          </RevealAnimation>
          <div className="mb-14 space-y-3 md:mb-[70px]">
            <RevealAnimation delay={0.2}>
              <h2>Industries <span className='text-red-500'>We Serve</span></h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>Worksbot Talent supports organizations across multiple industries that rely heavily on technology talent</p>
            </RevealAnimation>
          </div>
          <div className="grid grid-cols-12 gap-y-8 lg:items-center lg:gap-4 xl:gap-8">
            <div className="order-1 col-span-12 space-y-8 last:mb-[50px] sm:col-span-6 lg:order-1 lg:col-span-3">
              {featureList.slice(0, 3).map((item, index) => (
                <RevealAnimation key={item.id} delay={0.4 + index * 0.1} direction="left">
                  <div className="space-y-3">
                   <div className="inline-block">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-secondary dark:text-accent max-sm:text-heading-6 sm:sm:font-medium">
                        {item.title}
                      </p>
                      <p className="text-tagline-2 w-full max-w-[294px]">{item.description}</p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
            <RevealAnimation delay={0.5}>
              <div className="order-3 col-span-12 lg:order-2 lg:col-span-6">
                <figure className="mx-auto h-auto w-full max-w-[390px] lg:h-[670px] lg:max-w-[590px]">
                  <Image src={compare} alt="compare" className=" rounded-xl border-red-400 border-4" />
                </figure>
              </div>
            </RevealAnimation>
            <div className="order-2 col-span-12 space-y-8 last:mb-[50px] sm:col-span-6 lg:order-3 lg:col-span-3">
              {featureList.slice(3).map((item, index) => (
                <RevealAnimation key={item.id} delay={0.4 + index * 0.1} direction="right">
                  <div className="space-y-3">
                   <div className="inline-block">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-secondary dark:text-accent max-sm:text-heading-6 sm:sm:font-medium">
                        {item.title}
                      </p>
                      <p className="text-tagline-2 w-full max-w-[294px]">{item.description}</p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
        <FeatureList />
      </div>
    </section>
  );
};

export default Compare;
