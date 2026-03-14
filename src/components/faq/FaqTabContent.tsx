import TabContent from '../ui/tab/TabContent';
import GeneralTab from './GeneralTab';
import PrivacyTab from './PrivacyTab';

const data = [
  {
    id: 1,
    tabTitle: 'General',
    tabContent: <GeneralTab />,
  },
  {
    id: 2,
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
