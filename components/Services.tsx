"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { FiCpu, FiZap, FiFileText, FiCode, FiArrowRight } from "react-icons/fi";

export default function Services() {
  const { ref, isInView } = useInView();

  const services = [
    {
      icon: FiCpu,
      title: "AI Consulting",
      description:
        "Strategic AI consulting to help you identify opportunities, develop roadmaps, and implement AI solutions that align with your business goals.",
      features: ["AI Strategy Development", "Technology Assessment", "ROI Analysis", "Implementation Planning"],
    },
    {
      icon: FiZap,
      title: "AI Agents",
      description:
        "Custom intelligent agents that automate complex tasks, interact with users, and make data-driven decisions to enhance your operations.",
      features: ["Conversational AI", "Task Automation", "Decision Support", "24/7 Availability"],
    },
    {
      icon: FiZap,
      title: "Automations",
      description:
        "End-to-end automation solutions that streamline workflows, reduce manual effort, and increase efficiency across your organization.",
      features: ["Workflow Automation", "Process Optimization", "Integration Services", "Performance Monitoring"],
    },
    {
      icon: FiFileText,
      title: "AI Content",
      description:
        "AI-powered content generation and optimization services that help you create engaging, SEO-friendly content at scale.",
      features: ["Content Generation", "SEO Optimization", "Content Strategy", "Multilingual Support"],
    },
    {
      icon: FiCode,
      title: "AI Web Development",
      description:
        "Modern, AI-enhanced web applications that deliver exceptional user experiences and leverage machine learning capabilities.",
      features: ["Custom Web Apps", "AI Integration", "Responsive Design", "Performance Optimization"],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-slate-50 dark:bg-slate-800"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Comprehensive AI solutions tailored to your unique business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-all">
                {service.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-slate-700 dark:text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 bg-primary dark:bg-primary-light rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="flex items-center text-primary dark:text-primary-light font-semibold group-hover:gap-2 transition-all">
                Learn More
                <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
