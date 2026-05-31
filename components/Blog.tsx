"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Blog() {
  const posts = [
    {
      category: "ORGANIZING",
      title: "The Deep Cleaning and Organizing",
      image: "/images/🧹 Housekeeping Staff.jpeg" 
    },
    {
      category: "CLEANING",
      title: "Eco Friendly Products for Cleaning",
      image: "/images/Maid Service.jpeg"
    },
    {
      category: "TIPS",
      title: "House Cleaning Services Before Moving In",
      image: "/images/📦 Delivery Boy.jpeg"
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold tracking-widest text-gray-800 uppercase">FROM OUR BLOG</span>
            <span className="text-blue-600 text-lg font-light leading-none -mt-1">{"//"}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-[#111827]">
            Cleaning Tips From Pros
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden bg-slate-50 mb-6 shadow-sm">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="flex flex-col px-2">
                <span className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">
                  {post.category}
                </span>
                <h3 className="text-2xl font-medium text-gray-900 leading-snug group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-16 flex justify-center">
          <Button variant="outline" className="border-blue-600 text-gray-900 hover:bg-blue-50 font-medium px-10 py-6 rounded-full text-base transition-colors bg-transparent">
            More Tips
          </Button>
        </div>

      </div>
    </section>
  );
}
