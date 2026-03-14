import { CheckIcon } from '@/icons';
import aboutBg from '@public/images/ns-img-14.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

// About list data
const aboutListData = [
  {
    id: 1,
    text: 'Hiring skilled developers and engineers.',
  },
  {
    id: 2,
    text: 'Managing global employment through EOR services.',
  },
  {
    id: 3,
    text: 'Processing payroll and tax compliance.',
  },
  {
    id: 4,
    text: 'Supporting large-scale hiring through recruitment outsourcing.',
  },
];

const AboutList = () => {
  return (
    <RevealAnimation delay={0.3}>
      <div className="relative z-10 col-span-12">
        <div className="absolute top-0 right-0 bottom-0 left-0 -z-10 overflow-hidden rounded-[20px]">
          <Image src={aboutBg} alt=" about bg" className="h-full w-full object-cover" />
        </div>
        <div className="grid grid-cols-2 gap-5 px-6 py-14 max-sm:grid-cols-1 max-sm:gap-10 max-sm:px-5 max-sm:py-8 md:px-11">
          <div className="about-content max-w-[500px]">
            <h5 className="text-accent max-sm:text-heading-6 mb-8">
              We support businesses at every stage of workforce expansion
            </h5>
            <LinkButton href="/signup" className="btn btn-md btn-white hover:btn-white-dark">
              Get started
            </LinkButton>
          </div>
          <div>
            <ul className="space-y-5 max-sm:space-y-3">
              {aboutListData.map((item) => (
                <li key={item.id} className="flex items-center gap-2 max-sm:gap-2.5">
                  <span className="bg-accent/17 size-5 rounded-full">
                    <CheckIcon className="dark:fill-accent" />
                  </span>
                  <span className="text-accent max-sm:text-tagline-2">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </RevealAnimation>
  );
};

AboutList.displayName = 'AboutList';
export default AboutList;
