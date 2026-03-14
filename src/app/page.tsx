import WhatDoWeDo from '@/components/home/WhatDoWeDo';
import Feature from '@/components/home/Feature';
import Hero from '@/components/home/Hero';
import ServicesWeOffer from '@/components/home/ServicesWeOffer';
import Work from '@/components/home/Work';
import VideoModal from '@/components/shared/VideoModal';
import { ModalProvider } from '@/context/ModalContext';
import { Metadata } from 'next';
import ScrollingAppsShowcase from '@/components/main/Technologies';
import Compare from '@/components/Compare';
import FaqTab from './faq/FaqTab';

export const metadata: Metadata = {
  title: "Worksbot Talent | Hire Indian Tech Talent, EOR, Payroll & RPO Services",
  description: "Worksbot Talent helps Indian and global companies hire, manage, and scale tech teams with recruitment, Employer of Record (EOR), payroll, and RPO services.",
  keywords:[
        "hire indian developers",
        "employer of record india",
        "global payroll india",
        "RPO services india",
        "hire remote developers india",
        "tech recruitment india",
        "offshore development team india",
        "hire software engineers ",
        "workforce management india",
  ],
};


const page = () => {
  return (
    <ModalProvider>
      <main>
        <Hero />
        <WhatDoWeDo/>
        <Work />
        <Feature />
        <ServicesWeOffer />
         <FaqTab/>
          <Compare/>
        <ScrollingAppsShowcase/>
        <VideoModal />
      </main>
    </ModalProvider>
  );
};
export default page;
