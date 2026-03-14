import { Metadata } from 'next';
import { Fragment } from 'react';
import FutureOfWorkArticle from "@/components/blogcontant/blog4"



export const metadata: Metadata = {

  title: "From Data to Decisions: The Advanced ML Models Powering Worksbot’s Automation Engine",
  description:
    "Discover the powerful machine learning models driving Worksbot’s automation engine—from predictive analytics to adaptive intelligence and real-time decision-making.",
  keywords:
    "Worksbot machine learning, automation engine, predictive analytics, ML models, decision intelligence, AI automation",
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
