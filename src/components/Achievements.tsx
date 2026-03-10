"use client";

import { motion } from "framer-motion";
import { Trophy, Award, TrendingUp } from "lucide-react";

const achievements = [
  {
    title: "小鹅圈子增长优化",
    metric: "DAU +90%",
    description: "推动产品体验优化与功能迭代",
    icon: <TrendingUp className="w-6 h-6 text-green-500" />,
  },
  {
    title: "极飞维修系统设计",
    metric: "效率 +1300%",
    description: "重构维修流程，工单处理效率提升13倍",
    icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "设计组件库建设",
    metric: "效率 +50%",
    description: "建立统一设计规范，提升设计效率",
    icon: <TrendingUp className="w-6 h-6 text-purple-500" />,
  },
];

const awards = [
  "Coursera UI/UX Design & Data Analysis 认证",
  "新世界地产 K11 企业家挑战赛 全国亚军 (2018)",
  "人人都是产品经理 黑客马拉松 全国第一名 (2018)",
  "广东省“省长杯”工业设计大赛 珠海赛区三等奖",
  "软件设计师 / 软件开发工程师 / 平面设计师 认证",
  "AIDA 二星自由潜水 / AOW 进阶潜水员 / 红十字救护员",
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Key Achievements */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
              Key Achievements
            </h2>
            <div className="space-y-6">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary/30 transition-colors"
                >
                  <div className="mr-4 p-3 bg-white rounded-lg shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <div className="text-2xl font-black text-primary my-1">{item.metric}</div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Awards & Certs */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
              Awards & Certifications
            </h2>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
              
              <ul className="space-y-4 relative z-10">
                {awards.map((award, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <Award className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200 font-light text-sm md:text-base">{award}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
