"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { FiAward, FiTrendingUp, FiUsers, FiZap } from "react-icons/fi";

export default function About() {
  const { ref, isInView } = useInView();

  const features = [
    {
      icon: FiZap,
      title: "Cutting-Edge Technology",
      description: "We leverage the latest AI technologies to deliver innovative solutions.",
    },
    {
      icon: FiUsers,
      title: "Expert Team",
      description: "Our team of AI specialists brings decades of combined experience.",
    },
    {
      icon: FiTrendingUp,
      title: "Proven Results",
      description: "Track record of delivering measurable ROI for our clients.",
    },
    {
      icon: FiAward,
      title: "Industry Recognition",
      description: "Award-winning solutions recognized by industry leaders.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Evo</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            We are a forward-thinking AI consulting agency dedicated to helping businesses
            harness the power of artificial intelligence to drive growth, efficiency, and
            innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gradient">
              Our Mission
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              At Evo, we believe that AI should be accessible to businesses of all sizes.
              Our mission is to democratize AI technology by providing expert consulting,
              custom AI solutions, and comprehensive support that empowers organizations
              to thrive in the digital age.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              We combine technical expertise with business acumen to deliver solutions
              that not only leverage cutting-edge AI but also align with your strategic
              objectives and deliver tangible value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-purple p-1">
              <div className="w-full h-full rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🤖</div>
                  <h4 className="text-2xl font-bold text-gradient mb-2">
                    AI-First Approach
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Building the future, one intelligent solution at a time
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl hover:shadow-lg transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-primary dark:text-primary-light mb-4" />
              <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
              <p className="text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
