import { Metadata } from 'next';
import { Fragment } from 'react';
import FutureOfWorkArticle from "@/components/blogcontant/blog6"



export const metadata: Metadata = {
  title: "Smarter Workflows with AI: Exploring Worksbot’s Cutting-Edge Automation Capabilities",
  description:
    "Dive into Worksbot’s advanced AI automation capabilities that create smarter, faster, and more adaptive workflows for modern businesses.",
  keywords:
    "Worksbot automation, AI workflows, smart automation, intelligent workflows, business AI tools, workflow optimization",
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
