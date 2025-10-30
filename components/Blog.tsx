"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { FiCalendar, FiClock, FiArrowRight } from "react-icons/fi";

export default function Blog() {
  const { ref, isInView } = useInView();

  const posts = [
    {
      title: "The Future of AI Agents in Business",
      excerpt:
        "Explore how AI agents are revolutionizing business operations and what it means for the future of work.",
      date: "2024-10-15",
      readTime: "5 min read",
      category: "AI Trends",
      image: "🤖",
    },
    {
      title: "10 Ways to Automate Your Workflow",
      excerpt:
        "Discover practical automation strategies that can save your team hundreds of hours every month.",
      date: "2024-10-08",
      readTime: "7 min read",
      category: "Automation",
      image: "⚡",
    },
    {
      title: "AI Content Creation: Best Practices",
      excerpt:
        "Learn how to leverage AI for content creation while maintaining authenticity and brand voice.",
      date: "2024-09-30",
      readTime: "6 min read",
      category: "Content Strategy",
      image: "✍️",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-slate-50 dark:bg-slate-800" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest from Our <span className="text-gradient">Blog</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Insights, trends, and best practices in AI and automation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-video bg-gradient-purple flex items-center justify-center text-6xl">
                {post.image}
              </div>

              <div className="p-6">
                <span className="px-3 py-1 bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light rounded-full text-sm font-semibold">
                  {post.category}
                </span>

                <h3 className="text-xl font-bold mt-4 mb-2 group-hover:text-gradient transition-all">
                  {post.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <FiCalendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiClock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                <button className="flex items-center text-primary dark:text-primary-light font-semibold group-hover:gap-2 transition-all">
                  Read More
                  <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-white dark:bg-slate-900 text-primary dark:text-primary-light border-2 border-primary dark:border-primary-light rounded-full font-semibold hover:bg-primary hover:text-white dark:hover:bg-primary-light dark:hover:text-white transition-all duration-300">
            View All Posts
          </button>
        </motion.div>
      </div>
    </section>
  );
}
