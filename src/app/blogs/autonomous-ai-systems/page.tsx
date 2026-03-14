import { Metadata } from 'next';
import { Fragment } from 'react';
import FutureOfWorkArticle from "@/components/blogcontant/blog5"



export const metadata: Metadata = {
  title: "Why Autonomous AI Systems Are the Future — And How Worksbot Leads the Revolution",
  description:
    "Explore why autonomous AI systems are becoming the foundation of future enterprises and how Worksbot is pioneering this revolution with intelligent, self-operating automation.",
  keywords:
    "autonomous AI, Worksbot automation, AI revolution, future of AI, intelligent systems, autonomous workflows",
};

export default function Service1Page() {
  return (
    <Fragment>
      <main className="bg-background-1 dark:bg-background-6">
        <FutureOfWorkArticle/>
      </main>
    </Fragment>
  );
}
