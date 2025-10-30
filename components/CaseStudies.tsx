"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { FiTrendingUp, FiClock, FiDollarSign } from "react-icons/fi";

export default function CaseStudies() {
  const { ref, isInView } = useInView();

  const caseStudies = [
    {
      title: "E-Commerce Automation",
      client: "Global Retail Chain",
      description:
        "Implemented AI-powered inventory management and customer service automation, reducing operational costs by 40% and improving customer satisfaction.",
      results: [
        { icon: FiDollarSign, label: "Cost Reduction", value: "40%" },
        { icon: FiClock, label: "Time Saved", value: "200hrs/week" },
        { icon: FiTrendingUp, label: "Satisfaction", value: "+35%" },
      ],
      tags: ["AI Agents", "Automation"],
    },
    {
      title: "Content Generation Platform",
      client: "Digital Marketing Agency",
      description:
        "Built a custom AI content generation platform that produces SEO-optimized articles, social media posts, and ad copy at scale.",
      results: [
        { icon: FiTrendingUp, label: "Content Output", value: "10x" },
        { icon: FiClock, label: "Time to Market", value: "-60%" },
        { icon: FiDollarSign, label: "Cost per Piece", value: "-75%" },
      ],
      tags: ["AI Content", "Web Development"],
    },
    {
      title: "Predictive Analytics Dashboard",
      client: "Financial Services Firm",
      description:
        "Developed an AI-enhanced analytics dashboard that provides real-time insights and predictive modeling for investment decisions.",
      results: [
        { icon: FiTrendingUp, label: "Accuracy", value: "92%" },
        { icon: FiDollarSign, label: "ROI", value: "+180%" },
        { icon: FiClock, label: "Analysis Time", value: "-80%" },
      ],
      tags: ["AI Consulting", "Web Development"],
    },
  ];

  return (
    <section id="case-studies" className="py-20 bg-white dark:bg-slate-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Real results from real clients
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 md:p-12 hover:shadow-xl transition-shadow"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light rounded-full text-sm font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{study.title}</h3>
                  <p className="text-primary dark:text-primary-light font-semibold mb-4">
                    {study.client}
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 text-lg">
                    {study.description}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {study.results.map((result, idx) => (
                    <div
                      key={idx}
                      className="bg-white dark:bg-slate-900 rounded-xl p-4 text-center"
                    >
                      <result.icon className="w-8 h-8 text-primary dark:text-primary-light mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gradient mb-1">
                        {result.value}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
