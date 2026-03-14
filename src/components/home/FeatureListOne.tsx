import { CheckIcon } from '@/icons';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

// Feature list data
const featureListData = [
  {
    id: 1,

    text: 'Source, screen, and hire highly skilled technology professionals.',
  },
  {
    id: 2,

    text: 'Automated payroll processing, tax management, and statutory compliance.',
  },
  {
    id: 3,

    text: 'Scale your hiring pipeline with dedicated recruitment specialists.',
  },
  {
    id: 4,

    text: 'Manage freelancers, remote contractors, and distributed teams easily.',
  },
];

const FeatureListOne = () => {
  return (
    <div className="w-full lg:w-2/5">
      <div className="mb-8 space-y-5 text-center max-[426px]:mb-5 max-[426px]:text-left sm:text-left">
        <RevealAnimation delay={0.1}>
          <span className="badge px-3 py-1.5 text-[11px] sm:px-4 sm:py-2 sm:text-sm md:px-5 md:py-2 rounded-full font-medium tracking-wide bg-primary-50 text-primary-600 border border-primary-600 text-center mb-5">Features</span>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <h2>
            Efficient Global Talent <br className="hidden lg:block" />
            <span className='text-red-500'>Management </span>
          </h2>
        </RevealAnimation>
      </div>

      <ul className="mb-14 list-none space-y-4 max-[426px]:mb-10">
        {featureListData.map((feature, index) => (
          <RevealAnimation key={feature.id} delay={0.3 + index * 0.1}>
            <li className="flex items-center gap-2">
              <span className="bg-secondary dark:bg-accent size-[18px] rounded-full">
                <CheckIcon />
              </span>
              <span className="text-secondary dark:text-accent">{feature.text}</span>
            </li>
          </RevealAnimation>
        ))}
      </ul>
      <RevealAnimation delay={0.6}>
        <div>
          <LinkButton
            href="/signup"
            className="btn btn-white btn-lg sm:btn-xl dark:btn-transparent hover:btn-secondary dark:hover:btn-accent w-full sm:w-auto">
            Get started
          </LinkButton>
        </div>
      </RevealAnimation>
    </div>
  );
};

FeatureListOne.displayName = 'FeatureListOne';
export default FeatureListOne;
