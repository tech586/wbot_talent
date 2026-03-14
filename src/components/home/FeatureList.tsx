import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import { Check } from 'lucide-react';
interface Feature {
  id: string;
  icon: string;
  title: string;
  ours: boolean;
  description: string;
}
const featuresData: Feature[] = [
  {
    id: '1',
    icon: 'ns-shape-35',
    title: 'India-focused technology talent',
    ours: true,
    description: 'Limited',
  },
  {
    id: '2',
    icon: 'ns-shape-11',
    title: 'Recruitment + EOR + Payroll combined',
    ours: true,
    description: 'Often separate services',
  },
  {
    id: '3',
    icon: 'ns-shape-34',
    title: 'Cost-effective hiring model',
    ours: true,
    description: 'Higher pricing',
  },
  {
    id: '4',
    icon: 'ns-shape-40',
    title: 'Dedicated recruitment support',
    ours: true,
    description: 'Mostly automated platforms',
  },
   {
    id: '5',
    icon: 'ns-shape-40',
    title: 'Easy deployment & recovery',
    ours: true,
    description: 'Enterprise focused',
  },
   {
    id: '6',
    icon: 'ns-shape-40',
    title: 'Local India compliance expertise',
    ours: true,
    description: 'Generic global coverage',
  },
];

const FeatureList = () => {
  return (
    <div className="lg:pt-[100px] pt-[50px]">
      <div className="space-y-14">
        <div className="space-y-3 text-center">
          <RevealAnimation delay={0.2}>
            <h3 className="lg:text-heading-2 md:text-heading-3 sm:text-heading-4 text-heading-5">
             Worksbot <span className='text-red-500'>Talent vs</span> Others
            </h3>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="lg:max-w-[472px] max-w-[350px] w-full mx-auto">
              Worksbot Talent is built to help companies hire and manage teams faster while reducing hiring complexity.
            </p>
          </RevealAnimation>
        </div>
        <div className="xl:max-w-[1008px] w-full mx-auto">
          <div className="grid grid-cols-12 md:gap-8 gap-y-6 items-start">
            {featuresData.map((feature, index) => (
              <RevealAnimation key={feature.id} delay={0.4 + index * 0.1}>
                <div
                  className={cn(
                    index === 0 || index === 3 ? 'xl:col-span-7' : 'xl:col-span-5',
                    'col-span-12  md:col-span-6',
                  )}>
                  <div className="bg-background-2 dark:bg-background-5 sm:p-8 p-6 rounded-[20px] sm:space-y-6 space-y-4 md:min-h-[288px] flex justify-center flex-col">
                    <div>
                      <span className={`${feature.icon} md:text-[52px] text-[40px] text-secondary dark:text-accent`} />
                    </div>
                    <div className="flex items-center gap-4">
 

                    <div className="space-y-1">
                      <h4 className="lg:text-heading-5 sm:text-heading-6 font-semibold text-xl">{feature.title}</h4>
                        <span className='text-lg'>Worksbot</span>
                    <div className="flex items-center gap-1 text-white">
                    {feature.ours && <Check size={30} className='bg-black rounded p-0.5'/>}
                  
                    </div>
                      <div>Typical Platforms</div>
                      <p className="w-full">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
        <RevealAnimation delay={0.8}>
          <div className="flex items-center justify-center">
            <LinkButton
              href="/contact-us"
              className="btn max-md:btn-md btn-xl dark:btn-accent btn-secondary hover:btn-white dark:hover:btn-transparent w-full max-md:mx-auto md:w-auto">
              Talk to an expert
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </div>
  );
};

export default FeatureList;
