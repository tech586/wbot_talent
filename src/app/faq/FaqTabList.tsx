import { Fragment } from 'react';
import Tab from '@/components/ui/tab/Tab';
import TabList from '@/components/ui/tab/TabList';

const FaqTabList = () => {
  return (
    <Fragment>
      <TabList variant="desktop">
        <Tab index={2} variant="desktop">
          Privacy
        </Tab>
      </TabList>
      <TabList variant="mobile">
        <Tab index={2} variant="mobile">
          Privacy
        </Tab>
      </TabList>
    </Fragment>
  );
};

export default FaqTabList;
