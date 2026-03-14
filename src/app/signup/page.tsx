import SignupHero from '@/components/authentication/SignupHero';
import CTAV1 from '@/components/shared/cta/CTAV_services';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';


export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Signup Page - NextSaaS',
};

const SignUpPage01 = () => {
  return (
    <Fragment>

      <main className="bg-background-3 dark:bg-background-7">
        <SignupHero />
      </main>
   
    </Fragment>
  );
};
export default SignUpPage01;
