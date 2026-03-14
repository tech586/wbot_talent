import { Metadata } from 'next';
import { Fragment } from 'react';
import FutureOfWorkArticle from "@/components/blogcontant/blog1"



export const metadata: Metadata = {
  title: 'The Future of Work Automation: How Worksbot Is Redefining AI-Powered Productivity',
  description:
    'Discover how Worksbot is transforming the future of work through advanced AI-powered automation, intelligent agents, and next-gen machine learning capabilities.',
  keywords:
    'Worksbot, AI automation, machine learning, future of work, AI agents, workflow automation, productivity tools',
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
