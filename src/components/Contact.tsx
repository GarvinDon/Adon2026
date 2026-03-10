"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [isWeChatExpanded, setIsWeChatExpanded] = useState(false);

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Interesting project in mind? Let's build something good.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-8 items-start">
              <a href="mailto:910005803@qq.com" className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors group w-full md:w-[280px]">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">910005803@qq.com</p>
              </a>

              <div 
                className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors group cursor-pointer w-full md:w-[280px] relative"
                onClick={() => setIsWeChatExpanded(!isWeChatExpanded)}
                onMouseEnter={() => setIsWeChatExpanded(true)}
                onMouseLeave={() => setIsWeChatExpanded(false)}
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">WeChat</h3>
                
                <div className={cn(
                    "bg-white p-2 rounded-lg shadow-sm transition-all duration-300 origin-top flex items-center justify-center",
                    isWeChatExpanded ? "w-48 h-48 scale-100 absolute top-full mt-2 z-10 shadow-xl" : "w-16 h-16"
                )}>
                   <img 
                     src="/images/WechatQRcode.png" 
                     alt="WeChat QR Code" 
                     className="w-full h-full object-contain"
                   />
                </div>
                {/* Placeholder to keep layout stable when absolute positioning takes over */}
                {isWeChatExpanded && <div className="w-16 h-16 opacity-0" />}
              </div>
            </div>

            <footer className="mt-20 pt-8 border-t border-gray-100 text-gray-400 text-sm">
              © {new Date().getFullYear()} Adon. All rights reserved.
            </footer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
