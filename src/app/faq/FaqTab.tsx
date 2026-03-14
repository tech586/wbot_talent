import { TabProvider } from '@/context/TabContext';
import RevealAnimation from '@/components/animation/RevealAnimation';
import FaqTabContent from './FaqTabContent';
import FaqTabList from './FaqTabList';
import PrivacyTab from './PrivacyTab';

const FaqTab = () => {
  return (
    <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container">
        <div className="space-y-5 text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge px-3 py-1.5 text-[11px] sm:px-4 sm:py-2 sm:text-sm md:px-5 md:py-2 rounded-full font-medium tracking-wide bg-primary-50 text-primary-600 border border-primary-600 text-center mb-5">FAQ</span>
          </RevealAnimation>
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.3}>
              <h2>Commonly asked questions</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="mx-auto max-w-[600px]">
                By offering concise and informative responses, this section helps users find solutions without the need
                to contact customer support, saving time
              </p>
            </RevealAnimation>
          </div>
        </div>
        <RevealAnimation delay={0.5}>
          <div className="py-[70px]">
            <TabProvider defaultValue={0}>
              <PrivacyTab/>
            </TabProvider>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default FaqTab;
