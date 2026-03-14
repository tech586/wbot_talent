import { MobileMenuGroup } from '@/components/shared/mobile-menu/MobileMenu';
import { FooterOneData } from '../../interface';

export const mobileMenuData: MobileMenuGroup[] = [

    
    {
    id: 'company',
    title: 'Company',
    submenu: [
      { id: 'about-us', label: 'About Us', href: './about' },
      { id: 'blog', label: 'Our Team', href: './blog' },
      { id: 'career', label: 'Career', href: './career' },
    ],
  },

  // {
  //   id: 'platform',
  //   title: 'Platform',
  //   submenu: [
  //     { id: 'features', label: 'Features', href: './features' },
  //     { id: 'integrations', label: 'Integrations', href: './integration' },
  //     { id: 'process', label: 'Process', href: './process' },
  //     { id: 'analytics', label: 'Analytics', href: './analytics' },
  //     { id: 'security', label: 'Security', href: './security' },
  //     { id: 'whitepaper', label: 'Whitepaper', href: './whitepaper' },
  //     { id: 'build-overview', label: 'Build overview', href: './signup' },
  //     { id: 'brandkit', label: 'Brandkit', href: './brandkit' },
  //     { id: 'download', label: 'Download', href: './download' },
  //   ],
  // },

  {
    id: 'services',
    title: 'Services',
    submenu: [
      { id: 'service-1',
        label: 'AI Consulting & Digital Strategy',
        href: '/services/AI-consulting-and-digital-strategy', 
      },
      { id: 'service-2',
        label: 'AI-Powered Application Development',
        href: '/services/AI-powered-application-development',
      },
      { id: 'service-3',
        label: 'Automation & RPA Solutions',
        href: '/services/automation-and-RPA-solutions',
      },
      { id: 'service-4',
        label: 'Cloud Transformation & DevOps',
        href: '/services/cloud-transformation-and-DevOps',
      },
      {
      id: 'service-5',
      label: 'Custom Software Engineering',
      href: '/services/custom-software-engineering',
      },
      {
      id: 'service-6',
      label: 'Data Engineering & Analytics',
      href: '/services/data-engineering-and-analytics',
      },
      {
      id: 'service-7',
      label: 'Embedded Systems Development',
      href: '/services/embedded-systems-development',
      },
      {
      id: 'service-8',
      label: 'Product Engineering & Prototyping',
      href: '/services/product-engineering-and-prototyping',    
      },
      {
      id: 'service-9',
      label: 'Quality Assurance & Testing',
      href: '/services/quality-assurance-and-testing',
      },
      {
      id: 'service-10',
      label: 'Semiconductor Design & Verification',
      href: '/services/semiconductor-design-and-verification',
      },

    ],
  },


  

  // {
  //   id: 'plans-support',
  //   title: 'Plans & Support',
  //   submenu: [
  //     { id: 'pricing', label: 'Pricing', href: './pricing' },
  //     { id: 'login', label: 'Login', href: './login' },
  //     { id: 'create-account', label: 'Create Account', href: './signup' },
  //     { id: 'referral-program', label: 'Referral Program', href: './referral-program' },
  //     { id: 'affiliate', label: 'Affiliate', href: './affiliates' },
  //     { id: 'affiliate-policy', label: 'Affiliate Policy', href: './affiliate-policy' },
  //     { id: 'terms-conditions', label: 'Terms & Conditions', href: './terms-conditions' },
  //     { id: 'privacy-policy', label: 'Privacy Policy', href: './privacy-policy' },
  //     { id: 'refund-policy', label: 'Refund Policy', href: './refund-policy' },
  //     { id: 'gdpr', label: 'GDPR', href: './gdpr' },
  //     { id: 'legal', label: 'Legal', href: './legal' },
  //   ],
  // },


];

export const footerData: FooterOneData[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Career', href: '/career' },
      { label: 'Case Studies', href: '/case-study' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Documentation', href: '/documentation' },
      { label: 'Tutorial', href: '/tutorial' },
      { label: 'Community', href: '/community' },
    ],
  },
  {
    title: 'Legal Policies',
    links: [
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Refund Policy', href: '/refund-policy' },
      { label: 'GDPR Compliance', href: '/gdpr' },
      { label: 'Affiliate Policy', href: '/affiliate-policy' },
    ],
  },
];
