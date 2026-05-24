"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Heart, Users, Award } from "lucide-react";

export default function AboutPage() {
  const coreValues = [
    {
      icon: Heart,
      title: "Customer-First Approach",
      description: "We prioritize your satisfaction above all else and ensure every service exceeds expectations.",
    },
    {
      icon: Zap,
      title: "Eco-Innovation",
      description: "We use modern hospitality processes and reliable service practices for your home.",
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "Our rigorously vetted professionals are trained, certified, and passionate about quality.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Excellence drives everything we do, from training to execution and customer service.",
    },
  ];

  const timeline = [
    {
      year: "2010",
      title: "Founded",
      description: "BB HOSPITALITY was founded with a simple mission: to make professional home and hospitality staffing accessible to everyone.",
    },
    {
      year: "2015",
      title: "Rapid Growth",
      description: "Expanded to 5 cities and reached 10,000+ satisfied customers.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched our mobile app for seamless booking and real-time tracking.",
    },
    {
      year: "2024",
      title: "Industry Leader",
      description: "Recognized as a trusted hospitality and home-service staffing provider.",
    },
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "500+", label: "Professional Cleaners" },
    { number: "100%", label: "Satisfaction Guaranteed" },
    { number: "10+", label: "Years of Excellence" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <main className="min-h-screen w-full bg-white">
      
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full bg-gradient-to-br from-blue-50 to-sky-100 pt-20 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-medium text-[#111827] mb-6 leading-[1.15] tracking-tight">
              About <span className="text-blue-600">BB HOSPITALITY</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
              Connecting homes and businesses with verified maids, cooks, caregivers, housekeeping teams, and hospitality staff.
            </p>
            <div className="h-1 w-24 bg-[#fbbf24] rounded-full mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* ===== STORY SECTION ===== */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/GettyImages-1226346559-1.webp"
                  alt="Our Story"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold">
                    OUR STORY
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-medium text-[#111827] mb-6 leading-[1.15]">
                  From a Simple Idea to Industry Leader
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-4">
                What started as a small team of passionate cleaners has evolved into a trusted platform serving over 50,000 customers. We believed that professional cleaning should be accessible, reliable, and truly exceptional.
              </p>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Today, we continue our mission by connecting customers with vetted, professional cleaners who care about their work and your home as much as we do.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Trusted by 50,000+ families</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">500+ professionally trained cleaners</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">100% satisfaction guarantee on every service</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES SECTION ===== */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-6">
              OUR VALUES
            </span>
            <h2 className="text-4xl md:text-5xl font-medium text-[#111827]">What We Stand For</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-50">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-16 px-4 bg-blue-600">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, idx) => (
              <motion.div key={idx} variants={itemVariants} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== TIMELINE SECTION ===== */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-6">
              MILESTONE
            </span>
            <h2 className="text-4xl md:text-5xl font-medium text-[#111827]">Our Journey</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {timeline.map((item, idx) => (
              <motion.div key={idx} variants={itemVariants} className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-blue-600 mb-4"></div>
                  {idx < timeline.length - 1 && (
                    <div className="w-1 h-24 bg-blue-100"></div>
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">
                    {item.year}
                  </h3>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 max-w-lg">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== TEAM SECTION ===== */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-6">
              MEET OUR TEAM
            </span>
            <h2 className="text-4xl md:text-5xl font-medium text-[#111827] mb-4">Meet the People Behind BB HOSPITALITY</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our team of 500+ professional cleaners are trained, certified, and dedicated to making your home sparkle.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-80 rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src="/GettyImages-1350786822-1.webp"
              alt="Our Team"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-medium text-[#111827] mb-6 leading-[1.15]">
              Ready to Experience the BB HOSPITALITY Difference?
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
              Join thousands of happy customers who trust us with their homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 rounded-full text-base transition-transform hover:scale-105">
                Get Your Free Quote Today
              </Button>
              <Button className="bg-white hover:bg-gray-100 text-blue-600 font-semibold px-8 py-6 rounded-full text-base border-2 border-blue-600 transition-transform hover:scale-105">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
