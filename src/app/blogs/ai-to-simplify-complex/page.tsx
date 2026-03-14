import { Metadata } from 'next';
import { Fragment } from 'react';
import FutureOfWorkArticle from "@/components/blogcontant/blog9"



export const metadata: Metadata = {
  title: "How Worksbot Leverages Generative AI to Simplify Complex Business Processes",
  description:
    "Discover how Worksbot uses advanced generative AI to streamline, automate, and simplify even the most complex business processes across modern enterprises.",
  keywords:
    "Worksbot generative AI, process automation, AI workflow creation, business automation, intelligent systems, generative AI tools",
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
