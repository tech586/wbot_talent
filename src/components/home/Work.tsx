import workBg from '@public/images/ns-img-27.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

// Work steps data
const workStepsData = [
  {
    id: 1,
    step: '1',
    badgeColor: 'bg-ns-cyan',
    title: 'Share Your Hiring Needs',
    description: 'Tell us about the roles, skills, and experience levels you need for your team.',
  },
  {
    id: 2,
    step: '2',
    badgeColor: 'bg-ns-green',
    title: 'Talent Discovery',
    description: 'Our recruitment specialists identify qualified candidates through sourcing, screening, and technical evaluation.',
  },
  {
    id: 3,
    step: '3',
    badgeColor: 'bg-ns-cyan',
    title: 'Interview and Selection',
    description: 'You interview shortlisted candidates and choose the professionals that best fit your team.',
  },
   {
    id: 4,
    step: '4',
    badgeColor: 'bg-ns-yellow',
    title: 'Employment & Onboarding',
    description: 'Worksbot Talent manages employment contracts, onboarding, and compliance through our Employer of Record (EOR) framework.',
  },
   {
    id: 5,
    step: '5',
    badgeColor: 'bg-ns-green',
    title: 'Payroll & Workforce Management',
    description: 'We handle payroll, taxes, benefits, and HR support while your employees work seamlessly with your team.',
  },
];

const Work = () => {
  return (
    <section className="dark:bg-background-6 bg-white pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="bg-secondary dark:text-ns-yellow relative z-0 mx-auto w-[95%] overflow-hidden rounded-4xl p-5 max-lg:w-[90%] max-lg:rounded-2xl max-lg:px-5 max-lg:py-12 sm:p-10 2xl:max-w-[1440px] 2xl:px-[100px] 2xl:py-[176px]">
        <div className="absolute inset-0 -z-10 h-full w-full">
          <Image quality={100} src={workBg} alt=" about bg" className="h-full w-full object-cover" />
        </div>
        <div className="mb-[112px] flex flex-col items-center space-y-5 gap-y-4 text-center max-lg:mb-12 max-lg:space-y-3">
          <RevealAnimation delay={0.1}>
            <span className="badge px-3 py-1.5 text-[11px] sm:px-4 sm:py-2 sm:text-sm md:px-5 md:py-2 rounded-full font-medium tracking-wide bg-primary-50 text-primary-600 border border-primary-600 text-center mb-5">How Worksbot Talent Works</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 className="text-accent max-lg:text-heading-6 mx-auto max-w-[750px]">
                Simplifying every step of building your tech team.
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-accent max-lg:text-tagline-2 max-w-[850px]">
                Build and manage high-performing tech teams through our seamless hiring and workforce solutions.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:gap-4 md:grid-cols-3 md:gap-8">
          {workStepsData.map((step, index) => (
            <RevealAnimation key={step.id} delay={0.4 + index * 0.1}>
              <div className="flex flex-col items-center justify-center rounded-[20px] bg-white/14 p-8 text-center backdrop-blur-[50px] md:p-4 lg:p-8">
                <h4
                  className={`text-heading-6 dark:text-secondary ${step.badgeColor} mb-6 inline-block rounded-[48px] px-10 py-1.5 max-lg:mb-3`}>
                  {step.step}
                </h4>
                <h5 className="text-accent mb-2 max-lg:text-lg">{step.title}</h5>
                <p className="text-accent/60 max-lg:text-tagline-2">{step.description}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

Work.displayName = 'Work';
export default Work;
