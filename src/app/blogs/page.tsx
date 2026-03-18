import BlogShowcase from '@/components/blog-01/BlogShowcase';
import FeaturedBlog from '@/components/blog-01/FeaturedBlog';
import CTAV1 from '@/components/shared/cta/CTAV_services';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Worksbot Blogs | AI, Technology, Cloud, Automation & Digital Innovation Insights",
  description:
    "Explore the latest insights from Worksbot on AI, Cloud, Automation, Software Engineering, Data Analytics, Digital Transformation, DevOps, and emerging technologies. Stay updated with expert articles, trends, and industry best practices.",
  keywords:
    "worksbot blogs, worksbot articles, tech blogs, ai blogs, cloud computing insights, automation trends, rpa blogs, software engineering articles, data engineering blogs, digital transformation insights, devops blogs, tech innovation blog",
};

const BlogPage01 = () => {
  return (
    <>
      <main className="bg-background-3 dark:bg-background-7">
        <FeaturedBlog />
        <BlogShowcase />
        
      </main>
    </>
  );
};

export default BlogPage01;
