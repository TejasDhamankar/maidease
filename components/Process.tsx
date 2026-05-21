"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Track scroll position for the subtle leaf parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Create smooth scroll movements
  const leafMoveUp = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const leafMoveDown = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  const steps = [
    {
      id: 1,
      title: "Free Quote",
      desc: "Tell us about your home and choose the date you want.",
      icon: "/Book.png",
      delay: 0.2,
      // Cluster for Step 1 (Top-Left)
      leaves: [
        { src: "/footer-leafs-1.webp", pos: "-top-6 left-8", size: 36, rotate: "-rotate-12" },
        { src: "/footer-leafs-2.webp", pos: "-top-2 left-2", size: 24, rotate: "-rotate-45" }
      ],
      parallax: leafMoveUp
    },
    {
      id: 2,
      title: "Clean",
      desc: "Our seasoned team of full-time cleaners will transform your home.",
      icon: "/Clean.png",
      delay: 0.4,
      // Cluster for Step 2 (Top-Right)
      leaves: [
        { src: "/footer-leafs-1.webp", pos: "-top-5 -right-2", size: 36, rotate: "rotate-45" },
        { src: "/footer-leafs-2.webp", pos: "-top-1 right-8", size: 24, rotate: "rotate-12" }
      ],
      parallax: leafMoveDown
    },
    {
      id: 3,
      title: "Relax",
      desc: "Sit back and enjoy how amazing your home or business looks now.",
      icon: "/Relax.png",
      delay: 0.6,
      // Cluster for Step 3 (Middle-Right)
      leaves: [
        { src: "/footer-leafs-1.webp", pos: "top-8 -right-6", size: 36, rotate: "rotate-90" },
        { src: "/footer-leafs-2.webp", pos: "top-2 -right-2", size: 24, rotate: "rotate-45" }
      ],
      parallax: leafMoveUp
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 flex flex-col items-center"
        >
          <div className="flex items-center gap-1 mb-3">
            <span className="text-xs font-bold tracking-widest text-gray-800 uppercase">HOW IT WORKS</span>
            <span className="text-[#7ed321] text-lg font-light leading-none -mt-1">//</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-[#111827]">Quick and Easy</h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          
          {/* Animated Broad Connecting Pipe (Desktop Only) */}
          <div className="hidden md:block absolute top-20 left-[16.66%] right-[16.66%] h-2 bg-[#f0fdf4] rounded-full z-0 overflow-hidden shadow-inner">
            <motion.div 
              className="h-full bg-[#7ed321] rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative z-10">
            
            {steps.map((step) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: step.delay }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Icon Circle */}
                <div className="relative w-40 h-40 bg-[#f8fcf3] rounded-full border border-[#86d833] flex items-center justify-center mb-6 mx-auto z-10 transition-transform hover:scale-105 duration-300">
                  
                  {/* Clustered Floating Parallax Leaves */}
                  <motion.div 
                    style={{ y: step.parallax }}
                    className="absolute inset-0 z-20 pointer-events-none"
                  >
                    {step.leaves.map((leaf, index) => (
                      <div key={index} className={`absolute drop-shadow-sm ${leaf.pos} ${leaf.rotate}`}>
                        <Image 
                          src={leaf.src} 
                          alt="leaf decoration" 
                          width={leaf.size} 
                          height={leaf.size} 
                          className="object-contain" 
                        />
                      </div>
                    ))}
                  </motion.div>

                  <Image 
                    src={step.icon} 
                    alt={step.title} 
                    width={80} 
                    height={80} 
                    className="object-contain relative z-10" 
                  />
                </div>
                
                <h3 className="text-2xl font-medium text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 text-base max-w-[260px] mx-auto leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
        
      </div>
    </section>
  );
}