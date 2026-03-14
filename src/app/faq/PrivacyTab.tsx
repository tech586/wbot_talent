import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqData = [
  {
    id: 1,
    question: 'What is an Employer of Record (EOR)?',
    answer:
      'An Employer of Record is a service provider that legally employs workers on behalf of another company. Worksbot Talent manages payroll, contracts, taxes, and compliance while the employee works for your organization',
  },
  {
    id: 2,
    question: 'Can global companies hire employees in India through Worksbot Talent?',
    answer:
      'Yes. Global companies can hire Indian employees through our Employer of Record service without setting up a local entity.',
  },
  {
    id: 3,
    question: 'Do you support hiring for Indian companies?',
    answer:
      'Yes. Worksbot Talent supports Indian startups and businesses with recruitment services, payroll management, and workforce support.',
  },
  {
    id: 4,
    question: 'What roles can Worksbot Talent help hire?',
    answer:
      'We primarily support hiring for technology roles including software developers, data engineers, DevOps engineers, AI specialists, and product professionals.',
  },
  {
    id: 5,
    question: 'Do you handle payroll and tax compliance?',
    answer:
      'Yes. Worksbot Talent manages payroll processing, tax deductions, statutory compliance, and employee documentation',
  },
  {
    id: 6,
    question: 'How long does the hiring process take?',
    answer:
      'Depending on the role and requirements, companies can start onboarding talent within a few weeks.',
  },
];

const PrivacyTab = () => {
  return (
    <Accordion
      className="mx-auto w-full max-w-[850px] space-y-4"
      defaultValue="1"
      enableScrollAnimation={true}
      animationDelay={0.1}>
      {faqData.map((item) => (
        <AccordionItem
          className="dark:bg-background-7 rounded-[20px] bg-white px-6 sm:px-8"
          key={item.id}
          value={item.id.toString()}>
          <AccordionTrigger
            titleClassName="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
            className="flex w-full cursor-pointer items-center justify-between pt-5 pb-5 sm:pt-8 sm:pb-8"
            value={item.id.toString()}
            iconType="arrow">
            {item.question}
          </AccordionTrigger>
          <AccordionContent value={item.id.toString()}>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default PrivacyTab;
