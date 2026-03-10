"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "招商银行",
    role: "体验设计师",
    period: "2022 - 至今",
    description: "聚焦假勤管理等高复杂度功能，主导需求分析、旅程拆解与多端体验方案输出。积极挖掘用户与运营反馈，推动落地多轮方案优化。",
  },
  {
    company: "小鹅通",
    role: "交互设计师",
    period: "2021 - 2022",
    description: "从0到1的UX方案设计，快速完成整体信息架构与交互流程。聚焦内容沉淀与社群互动，重构产品框架。",
  },
  {
    company: "极飞科技",
    role: "交互设计师",
    period: "2018 - 2020",
    description: "负责系统规划、页面交互与线下流程对接，推动信息化建设。采用用户旅程梳理、田野调查等方法明确产品结构。",
  },
  {
    company: "货宝宝",
    role: "产品设计实习",
    period: "2016 - 2018",
    description: "协助产品经理进行需求分析与功能设计，负责部分模块的原型设计与文档编写。",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">
          Work Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />
              
              <div className={`md:flex items-center justify-between gap-8 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                <div className="md:w-1/2 mb-4 md:mb-0">
                  <div className={`p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${index % 2 === 0 ? "text-left" : "md:text-right"}`}>
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-blue-50 rounded-full mb-3">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                    <p className="text-lg font-medium text-gray-600 mb-2">{exp.role}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-sm -translate-x-[5px] md:-translate-x-1/2 mt-6 md:mt-0" />
                
                <div className="md:w-1/2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
