import RevealAnimation from '@/components/animation/RevealAnimation';
import { footerLinks } from '@/data/footer-data';
import { cn } from '@/utils/cn';
import { Facebook,Instagram,Linkedin,Twitter } from 'lucide-react';
import gradientImg from '@public/images/ns-img-532.png';
import logoDark from '@public/images/shared/main-logo.png';
import logo from '@public/images/shared/main-logo.png';
import Image from 'next/image';
import Link from 'next/link';
import FooterDivider from './FooterDivider';





const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={cn('relative z-0 overflow-hidden', className)}>
      <RevealAnimation delay={0.3} offset={50} direction="up">
        <figure className="pointer-events-none absolute -top-[1220px] left-1/2 -z-1 size-[1635px] -translate-x-1/2 select-none">
          <Image src={gradientImg} alt="footer-four-gradient" className="size-full object-cover" />
        </figure>
      </RevealAnimation>
      <div className="main-container px-5">
        <div className="grid grid-cols-12 justify-between gap-x-0 gap-y-16 pt-16 pb-12 xl:pt-[90px]">
          <RevealAnimation delay={0.1}>
            <div className="col-span-12 xl:col-span-4">
              <div className="max-w-[306px]">
                <figure>
                   <Image src={logo} alt="NextSaaS" className="block w-full dark:hidden" />
                  <Image src={logoDark} alt="NextSaaS" className="hidden w-full dark:block" />
                </figure>
                <p className="text-black dark:text-accent  mt-4 mb-7 font-normal">
                 <strong className='text-2xl'>Build Your Global Technology Team with Worksbot Talent </strong><br />
                 Access top talent, simplify hiring, and manage your workforce with confidence.
                Worksbot Talent helps companies recruit, onboard, and manage technology professionals while handling payroll and compliance.

                </p>
                <div className="flex items-center gap-3">
                  <Link target="_blank" href="https://www.facebook.com">
                    <span className="sr-only">Facebook</span>
                    <Facebook/>
                  </Link>
                  <Link target="_blank" href="https://www.instagram.com/worksbot/">
                    <span className="sr-only">Instagram</span>
                    <Instagram/>
                  </Link>
                  <Link target="_blank" href="https://www.linkedin.com">
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin/>
                  </Link>
                  <Link target="_blank" href="https://www.dribbble.com">
                    <span className="sr-only">Dribbble</span>
                    <Twitter/>
                  </Link>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <div className="col-span-12 grid grid-cols-12 gap-x-0 gap-y-8 xl:col-span-8 text-black dark:text-accent">
            {footerLinks.map(({ title, links }, index) => (
              <div className="col-span-12 md:col-span-4" key={title}>
                <RevealAnimation delay={0.2 + index * 0.1}>
                  <div className="space-y-8">
                    <p className="sm:text-heading-6  text-black dark:text-accent font-normal">{title}</p>
                    <ul className="space-y-5">
                      {links.map(({ label, href }) => (
                        <li key={label}>
                          <Link href={href}>
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealAnimation>
              </div>
            ))}
          </div>
        </div>
        <div className="relative pt-[26px] pb-[42px] text-center">
          <FooterDivider className="bg-accent/10 dark:bg-stroke-6" />
          <RevealAnimation delay={0.7} offset={10} start="top 105%">
            <p className=" text-black font-normal">
              Copyright ©Worksbot – Build Your Global Technology Team with Worksbot Talent
            </p>
          </RevealAnimation>
        </div>
      </div>
    </footer>
  );
};
Footer.displayName = 'Footer';
export default Footer;
