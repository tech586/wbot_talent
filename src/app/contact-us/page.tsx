import ContactInfo from '@/components/contact-page/ContactInfo';
import ContactMap from '@/components/contact-page/ContactMap';
import CTAV1 from '@/components/shared/cta/CTAV_services';
import { Metadata } from 'next';

export const metadata: Metadata = {
  
  title: "Contact Worksbot | Get in Touch for AI, Software, Cloud & Digital Solutions",
  description:
    "Contact Worksbot to discuss your needs in AI, Software Engineering, Cloud Transformation, Automation, Data Analytics, and Digital Innovation. Our team is ready to assist with consultations, project inquiries, and support.",
  keywords: [
    "worksbot contact",
    "contact worksbot team",
    "worksbot support",
    "worksbot inquiry",
    "tech services contact",
    "ai solutions contact",
    "cloud services contact",
    "software development inquiry",
    "digital transformation contact",
  ],
};

const ContactUs = () => {
  return (
    <>
      <main className="bg-background-3 dark:bg-background-7">
       
        <ContactInfo />
        <ContactMap />
      </main>
    </>
  );
};
ContactUs.displayName = 'AboutPage03';
export default ContactUs;
