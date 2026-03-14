import { Metadata } from 'next';
import { Fragment } from 'react';
import FutureOfWorkArticle from "@/components/blogcontant/blog10"



export const metadata: Metadata = {
  title: "The AI-First Workplace: Trends Worksbot Is Building for the Future of Digital Employees",
  description:
    "Explore the emerging AI-first workplace trends that Worksbot is creating—from digital employees to autonomous workflows and next-gen productivity ecosystems.",
  keywords:
    "AI-first workplace, digital employees, Worksbot automation, future of work, autonomous AI, workplace trends",
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
