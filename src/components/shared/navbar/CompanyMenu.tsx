'use client';
import {
  AboutIcon,
  CareerIcon,
  CaseStudyICon,
  CustomersIcon,
  ManifestoIcon,
  ServiceIcon,
  TeamIcon,
  TestimonialIcon,
  UseCaseIcon,
  WhyChooseUsIcon,
} from '@/icons/menu-icon';

import {
  Brain,
  Smartphone,
  Bot,
  Cloud,
  Code,
  BarChartBig,
  Cpu,
  Package,
  ShieldCheck,
  CircuitBoard,
  Clock
} from "lucide-react";

interface ServicesMenuProps {
  className?: string;
}

// Icon mapping
const iconMap: Record<string, any> = {
  "service-1": Brain,
  "service-2": Smartphone,
  "service-3": Bot,
  "service-4": Cloud,
  "service-5": Code,
  "service-6": BarChartBig,
  "service-7": Cpu,
  "service-8": Package,
  "service-9": ShieldCheck,
  "service-10": CircuitBoard,
};

import { cn } from '@/utils/cn';
import newArrowWhite from '@public/images/icons/new-arrow-white.svg';
import nsImg422 from '@public/images/ns-img-422.jpg';
import Image from 'next/image';
import Link from 'next/link';
import CompanyMenuLink, { type CompanyMenuLinkProps } from './CompanyMenuLink';
import { servicesMenuItems } from "@/data/header";


type CompanyLink = Omit<CompanyMenuLinkProps, 'onClose'>;

const aboutLinks: CompanyLink[] = [
  {
    title: 'About Us',
    description: 'See how others are using NextSaaS',
    href: '/about',
    icon: AboutIcon,
  },
  {
    title: 'Our Team',
    description: 'Dynamic content solutions',
    href: '/team',
    icon: TeamIcon,
  },
  {
    title: 'Career',
    description: 'Join our team',
    href: '/career',
    icon: CareerIcon,
  },
  {
    title: 'Why Choose Us',
    description: 'Our unique selling points and competitive advantages',
    href: '/why-choose-us',
    icon: WhyChooseUsIcon,
  },
];

const cultureLinks: CompanyLink[] = [
  {
    title: 'Our Manifesto',
    description: 'Our values and principles',
    href: '/our-manifesto',
    icon: ManifestoIcon,
  },
  {
    title: 'Customers',
    description: 'Success stories and testimonials',
    href: '/customer',
    icon: CustomersIcon,
  },
  {
    title: 'Testimonials',
    description: 'What our customers say about us',
    href: '/testimonial',
    icon: TestimonialIcon,
  },
  {
    title: 'Case Studies',
    description: 'Real-world examples of our solutions',
    href: '/case-study',
    icon: CaseStudyICon,
  },
];

const solutionLinks: CompanyLink[] = [
  {
    title: 'Services',
    description: 'Our services and offerings',
    href: '/services',
    icon: ServiceIcon,
  },
  {
    title: 'Use Cases',
    description: 'Real-world examples of our solutions',
    href: '/use-case',
    icon: UseCaseIcon,
  },
];

const CompanyMenu = ({
  menuDropdownId,
  setMenuDropdownId,
}: {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}) => {
  const handleClose = () => setMenuDropdownId(null);

  return (
    <div>
      <div
        className={cn(
          '0.3 ease ease fixed top-full left-1/2 z-40 h-3 w-[946px] -translate-x-1/2 bg-transparent transition-opacity duration-300',
          menuDropdownId === 'company-mega-menu' ? '!pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="company-mega-menu"
        className={cn(
          'dark:bg-background-6 border-stroke-1 ease fixed top-full left-1/2 z-50 mt-2 hidden w-full -translate-x-1/2 items-start gap-y-6 rounded-[20px] border bg-white p-4 transition-all duration-300 md:w-[946px] md:gap-x-6 xl:flex dark:border-white/10',
          // when hover show the menu
          menuDropdownId === 'company-mega-menu'
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
      
        {/* <div className="flex-1 space-y-3">
          <ul className="space-y-2">
            {aboutLinks.map((link) => (
              <CompanyMenuLink key={link.title} {...link} onClose={handleClose} />
            ))}
          </ul>
        </div> */}
        {/* <div className="flex-1 space-y-3">
          <ul className="space-y-2">
            {cultureLinks.map((link) => (
              <CompanyMenuLink key={link.title} {...link} onClose={handleClose} />
            ))}
          </ul>
        </div> */}
        <div className="flex-1">
          {/* <div className="space-y-3">
            <ul className="space-y-2">
              {solutionLinks.map((link) => (
                <CompanyMenuLink key={link.title} {...link} onClose={handleClose} />
              ))}
            </ul>
          </div> */}
         {/* <div
                 className="
                   hidden group-hover/nav:block mt-4
                   w-[850px] bg-white rounded-3xl shadow-2xl 
                   border border-slate-200 overflow-hidden
                   transition-all duration-300
                 "
               > */}
                 {/* Inner Grid */}
                 <div className="grid grid-cols-2 gap-2 p-6">
                   {servicesMenuItems.map((item) => {
                     const IconComponent = iconMap[item.id] || Clock;
         
                     return (
                       <a
                         key={item.id}
                         href={item.href}
                         className="
                           group relative p-4 rounded-2xl cursor-pointer overflow-hidden 
                           transition-all duration-300 hover:bg-slate-50
                         "
                       >
                         <div className="flex gap-4 relative z-10">
         
                           {/* Icon Box */}
                           <div className="flex-shrink-0 relative z-20">
                             <div className="
                               w-12 h-12 rounded-lg border-2 border-slate-200 
                               flex items-center justify-center bg-white
                             ">
                               <IconComponent
                                 size={20}
                                 strokeWidth={1.5}
                                 className="text-slate-700 transition-colors"
                               />
                             </div>
                           </div>
         
                           {/* Text with Hover Gradient */}
                           <div className="flex-1 min-w-0 relative">
                             {/* Background Hover Gradient only behind text */}
                             <div className="
                               absolute top-0 right-0 bottom-0 left-[4rem] /* starts after icon box + gap */
                               rounded-2xl 
                               bg-gradient-to-r from-transparent to-blue-50/30 
                               opacity-0 group-hover:opacity-100
                               transition-opacity duration-300 -z-10
                             "></div>
         
                             <h3 className="text-base font-semibold text-slate-900 group-hover:text-slate-950 transition-colors">
                               {item.label}
                             </h3>
         
                             <p className="text-sm text-slate-500 mt-1 group-hover:text-slate-600 transition-colors line-clamp-1">
                               {item.description}
                             </p>
                           </div>
                         </div>
         
                       </a>
                     );
                   })}
                 </div>
          {/* <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 p-3 font-medium">What’s new</p>
          <div>
            <figure className="group relative h-[166px] w-full max-w-full overflow-hidden rounded-[14px]">
              <Image src={nsImg422} alt="What’s new" className="h-full w-full rounded-[14px] object-cover" />
              <div className="absolute top-3 bottom-3 left-3 w-full space-y-5 p-2">
                <div>
                  <p className="text-tagline-1 text-secondary font-normal">Product updates</p>
                  <p className="text-tagline-2 text-secondary/60 w-full max-w-[169px] font-normal">
                    Stay ahead with the latest features and improvements.
                  </p>
                </div>
                <Link
                  onClick={handleClose}
                  href="/documentation"
                  className="group-hover:bg-primary-500 group bg-secondary relative flex h-9.5 w-16 items-center justify-center space-y-5 overflow-hidden rounded-[40px] px-5 py-2 ring-[6px] ring-white transition-all duration-500 ease-in-out">
                  <figure className="relative size-6 items-center justify-center overflow-hidden">
                    <Image
                      src={newArrowWhite}
                      alt="new-arrow"
                      className="absolute inset-0 size-full -translate-x-6 object-cover transition-transform duration-400 ease-in-out group-hover:translate-x-1"
                    />
                    <Image
                      src={newArrowWhite}
                      alt="new-arrow"
                      className="size-full object-cover transition-transform duration-400 ease-in-out group-hover:translate-x-6"
                    />
                  </figure>
                </Link>
              </div>
            </figure>
          </div> */}
        </div>
      </div>
    </div>
  );
};

CompanyMenu.displayName = 'CompanyMenu';
export default CompanyMenu;
