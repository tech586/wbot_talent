export interface MegaMenuItems {
  id: string;
  label: string;
  href: string;
  description: string;
  newPage?: boolean;
}


// Services Menu Data
export const servicesMenuItems: MegaMenuItems[] = [
  // Main Service Items
  {
    id: 'service-1',
    label: 'AI Consulting & Digital Strategy',
    href: '/services/AI-consulting-and-digital-strategy',
    description: 'Build AI-driven strategies for business growth'
  },
  {
    id: 'service-2',
    label: 'AI-Powered Application Development',
    href: '/services/AI-powered-application-development',
    description: 'Develop intelligent apps using modern AI models'
  },
  {
    id: 'service-3',
    label: 'Automation & RPA Solutions',
    href: '/services/automation-and-RPA-solutions',
    description: 'Automate workflows and increase efficiency'
  },
  {
    id: 'service-4',
    label: 'Cloud Transformation & DevOps',
    href: '/services/cloud-transformation-and-DevOps',
    description: 'Modernize infrastructure with cloud & DevOps'
  },
  {
    id: 'service-5',
    label: 'Custom Software Engineering',
    href: '/services/custom-software-engineering',
    description: 'Tailored software solutions for your business'
  },
  {
    id: 'service-6',
    label: 'Data Engineering & Analytics',
    href: '/services/data-engineering-and-analytics',
    description: 'Transform raw data into actionable insights'
  },
  {
    id: 'service-7',
    label: 'Embedded Systems Development',
    href: '/services/embedded-systems-development',
    description: 'Build embedded solutions for modern devices'
  },
  {
    id: 'service-8',
    label: 'Product Engineering & Prototyping',
    href: '/services/product-engineering-and-prototyping',
    description: 'From concept to prototype with speed and precision'
  },
  {
    id: 'service-9',
    label: 'Quality Assurance & Testing',
    href: '/services/quality-assurance-and-testing',
    description: 'Ensure product reliability and performance'
  },
  {
    id: 'service-10',
    label: 'Semiconductor Design & Verification',
    href: '/services/semiconductor-design-and-verification',
    description: 'Advanced chip design and verification services'
  },
];