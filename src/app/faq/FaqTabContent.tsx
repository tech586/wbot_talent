import TabContent from '@/components/ui/tab/TabContent';
import PrivacyTab from './PrivacyTab';


const data = [

  {
    id: 1,
    tabTitle: 'Privacy',
    tabContent: <PrivacyTab />,
  },
];

const FaqTabContent = () => {
  return (
    <>
      {data.map((item, index) => (
        <TabContent key={item.id} index={index}>
          {item.tabContent}
        </TabContent>
      ))}
    </>
  );
};

export default FaqTabContent;
