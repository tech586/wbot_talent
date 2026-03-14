import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const HeroContent = () => {
  return (
    <div className="main-container z-10 flex flex-col items-center text-center">
      <RevealAnimation delay={0.1}>
        <span className="px-3 py-1.5 text-[11px] sm:px-4 sm:py-2 sm:text-sm md:px-5 md:py-2 rounded-full font-medium tracking-wide bg-primary-50 text-primary-600 border border-primary-600 text-center mb-5">Build and Manage High Performing Tech Teams Globally</span>
      </RevealAnimation>
      <RevealAnimation delay={0.2}>
        <h1 className="max-[426px]:text-heading-5 max-sm:text-heading-4 mb-4 font-medium max-[426px]:mb-2.5 max-sm:max-w-[450px]">
          Global Tech Hiring and 
          <br className="hidden md:block" />
         <span className='text-red-500'>Workforce Management</span> 
        </h1>
      </RevealAnimation>
      <RevealAnimation delay={0.3}>
        <p className="mb-10 max-w-[625px] max-sm:max-w-[420px] sm:mb-14">
       Worksbot Talent helps Indian and global companies hire, onboard, and manage skilled technology professionals with end-to-end recruitment, Employer of Record (EOR), payroll management, and workforce support.
       Whether you want to hire Indian tech talent or scale your team quickly, Worksbot Talent simplifies global hiring and workforce management.

        </p>
      </RevealAnimation>
      <ul className="mb-7 flex flex-col gap-4 max-md:w-full md:mb-14 md:flex-row">
        <RevealAnimation delay={0.3} direction="left" offset={50}>
          <li>
            <LinkButton
              href="/login"
              className="btn max-md:btn-md btn-xl dark:btn-accent btn-secondary hover:btn-white dark:hover:btn-transparent w-full max-md:mx-auto md:w-auto">
              Start Hiring Talent
            </LinkButton>
          </li>
        </RevealAnimation>
        <RevealAnimation delay={0.5} direction="left" offset={50}>
          <li>
            <LinkButton
              href="/signup"
              className="btn btn-white max-md:btn-md btn-xl hover:btn-secondary dark:btn-transparent dark:hover:btn-accent w-full max-md:mx-auto md:w-auto">
              Book a Consultation
            </LinkButton>
          </li>
        </RevealAnimation>
      </ul>
    </div>
  );
};

HeroContent.displayName = 'HeroContent';
export default HeroContent;
