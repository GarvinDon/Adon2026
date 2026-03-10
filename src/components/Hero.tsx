"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="me" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
                Hi, I'm <span className="text-primary">Adon</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-2xl">
                8年交互设计经验 / 深圳 / 体验设计师 / 产品设计
              </p>
              <p className="text-lg text-gray-500 mt-4 font-medium">
                擅长处理 B 端高复杂交互流程优化
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-primary rounded-full hover:bg-blue-600 transition-all shadow-lg hover:shadow-primary/30"
              >
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-64 h-64 md:w-96 md:h-96 relative flex-shrink-0"
          >
            <div className="w-full h-full rounded-full bg-gray-100 border-4 border-white shadow-2xl flex items-center justify-center overflow-hidden relative">
               <img 
                 src="/images/Myprofilepicture.png" 
                 alt="Adon Profile" 
                 className="w-full h-full object-cover"
               />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
