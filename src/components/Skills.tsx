"use client";

import { motion } from "framer-motion";
import { Layers, PenTool, Layout, Box, Languages } from "lucide-react";

const skillCategories = [
  {
    title: "产品设计",
    icon: <Box className="w-6 h-6 text-primary" />,
    items: ["需求拆解", "业务建模", "产品策略", "场景分析"],
  },
  {
    title: "交互设计",
    icon: <Layers className="w-6 h-6 text-primary" />,
    items: ["用户旅程", "信息架构", "流程设计", "状态设计"],
  },
  {
    title: "Design System",
    icon: <Layout className="w-6 h-6 text-primary" />,
    items: ["组件构建", "组件拓展", "多端/多场景适配", "跨团队协同"],
  },
  {
    title: "工具 & 执行",
    icon: <PenTool className="w-6 h-6 text-primary" />,
    items: ["Figma / Sketch", "AI工具辅助", "跨团队协同", "用户反馈闭环"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="mt-6 flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-primary">
            <Languages className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <h3 className="mb-2 text-lg font-bold text-gray-900">英语能力</h3>
            <p className="text-sm leading-7 text-gray-600">可阅读并理解设计、开发相关内容，文字沟通顺畅；口语交流尚不流利。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
