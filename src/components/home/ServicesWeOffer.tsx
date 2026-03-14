import { ArrowIcon } from '@/icons';
import { cn } from '@/utils/cn';
import Service4 from '@public/images/services/service4.avif';
import Service3 from '@public/images/services/service3.avif';
import Service5 from '@public/images/services/service5.avif';
import Service2 from '@public/images/services/service3.avif';
import Service6 from '@public/images/services/service6.avif';
import Service1 from '@public/images/services/service1.avif';
import integrationBg from '@public/images/ns-img-24.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

// Integration data
const integrationData = [
  {
    id: 1,
    name: 'Talent Recruitment',
    category: 'skilled professionals',
    icon: Service1,
    href: '/signup',
  },
  {
    id: 2,
    name: 'Employer of Record (EOR)',
    category: 'Companies can hire employees',
    icon: Service2,
    href: '/signup',
  },
  {
    id: 3,
    name: 'Global Payroll Management',
    category: 'manage international payroll',
    icon: Service3,
    href: '/signup',
  },
  {
    id: 4,
    name: 'Recruitment Process Outsourcing (RPO)',
    category: 'entire hiring process',
    icon: Service4,
    href: '/signup',
  },
  {
    id: 5,
    name: 'Contractor Management',
    category: 'structured contractor engagement',
    icon: Service5,
    href: '/signup',
  },
  {
    id: 6,
    name: 'HR & Compliance Support',
    category: 'Video Tool',
    icon:Service6,
    href: '/signup',
  },
];

const ServicesWeOffer = () => {
  return (
    <section className="dark:bg-background-6 py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <div className="bg-secondary relative z-0 mx-auto w-[95%] overflow-hidden rounded-4xl p-5 max-[426px]:w-[90%] max-[426px]:rounded-2xl max-[426px]:px-5 max-[426px]:py-8 sm:p-10 2xl:max-w-[1440px] 2xl:px-[100px] 2xl:py-[100px]">
        <div className="absolute inset-0 -z-10 h-full w-full">
          <Image quality={100} src={integrationBg} alt="integration bd bg" className="h-full w-full object-cover" />
        </div>
        <div className="mx-auto max-w-[850px]">
          <div className="mb-[112px] flex flex-col items-center gap-y-4 text-center max-[426px]:mb-10">
            <RevealAnimation delay={0.1}>
              <span className="badge px-3 py-1.5 text-[11px] sm:px-4 sm:py-2 sm:text-sm md:px-5 md:py-2 rounded-full font-medium tracking-wide bg-primary-50 text-primary-600 border border-primary-600 text-center mb-5">Services We offer</span>
            </RevealAnimation>
          </div>
          <div className="mb-14 grid grid-cols-1 gap-8 max-[426px]:mb-10 max-[426px]:gap-4 sm:gap-4 md:grid-cols-2 md:gap-8">
            {integrationData.map((integration, index) => (
              <RevealAnimation key={integration.id} delay={0.1 + index * 0.1}>
                <div className="group">
                  <Link
                    href={integration.href}
                    className="group-hover:shadow-1 flex justify-between rounded-[20px] bg-white/14 p-4 transition-all duration-500 ease-in-out group-hover:scale-[102%] max-[426px]:rounded-xl max-[426px]:p-3.5 md:p-4 lg:p-8">
                    <div className="flex items-center gap-4">
                      <div className="shrink-0 grow-0 transition-transform duration-500 group-hover:scale-[103%] group-hover:rotate-12">
                        <span className="size-14 overflow-hidden">
                          <Image
                            src={integration.icon}
                            alt={`${integration.name} icon`}
                            className={cn(
                              'size-full rounded-lg bg-white object-cover',
                              integration.name === 'Figma' && 'size-14',
                            )}
                          />
                        </span>
                      </div>
                      <div className="transform transition-transform duration-500 group-hover:translate-x-1.5">
                        <h5 className="text-accent max-[426px]:text-heading-6">{integration.name}</h5>
                        <p className="text-accent/60 max-[426px]:text-tagline-2">{integration.category}</p>
                      </div>
                    </div>
                    <div className="btn btn-white max-md:btn-md btn-xl hover:btn-secondary dark:btn-transparent dark:hover:btn-accent relative flex size-14 items-center justify-center overflow-hidden rounded-full transition-all duration-[600ms] ease-in-out max-[426px]:size-12">
                      <ArrowIcon className="absolute size-6 -translate-x-11 stroke-black opacity-0 transition-all duration-[600ms] ease-in-out group-hover:translate-x-0 group-hover:opacity-100" />
                      <ArrowIcon className="absolute size-6 translate-x-0 stroke-black opacity-100 transition-all duration-[600ms] ease-in-out group-hover:translate-x-10 group-hover:opacity-0" />
                    </div>
                  </Link>
                </div>
              </RevealAnimation>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

ServicesWeOffer.displayName = 'Integration';
export default ServicesWeOffer;
