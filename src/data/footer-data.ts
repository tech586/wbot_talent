interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}


export const footerLinks: FooterSection[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Career', href: '/career' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    title: 'Services',
    links: [
      {
        label: 'AI Consulting & Digital Strategy',
        href: '/services/AI-consulting-and-digital-strategy', 
      },
      {
        label: 'AI-Powered Application Development',
        href: '/services/AI-powered-application-development',
      },
      {
        label: 'Automation & RPA Solutions',
        href: '/services/automation-and-RPA-solutions',
      },
      { 
        label: 'Cloud Transformation & DevOps',
        href: '/services/cloud-transformation-and-DevOps',
      },
      {
     
      label: 'Custom Software Engineering',
      href: '/services/custom-software-engineering',
      },
      {
    
      label: 'Data Engineering & Analytics',
      href: '/services/data-engineering-and-analytics',
      },
      {
    
      label: 'Embedded Systems Development',
      href: '/services/embedded-systems-development',
      },
      {
     
      label: 'Product Engineering & Prototyping',
      href: '/services/product-engineering-and-prototyping',    
      },
      {
   
      label: 'Quality Assurance & Testing',
      href: '/services/quality-assurance-and-testing',
      },
      {
   
      label: 'Semiconductor Design & Verification',
      href: '/services/semiconductor-design-and-verification',
      },

    ],
  },
  {
    title: 'Legal Policies',
    links: [
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
];
