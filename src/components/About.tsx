"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Section Title */}
          <div className="md:w-1/4">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary">
              About Me
            </h2>
          </div>

          {/* Content */}
          <div className="md:w-3/4 space-y-8 text-lg text-gray-600 leading-relaxed">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap gap-2 mb-6">
                {["用户研究", "交互设计", "信息架构", "B端产品体验优化", "Design System", "可用性测试", "Figma", "数据驱动设计", "AI 工作流", "知识库", "Skill 设计"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="mb-6">
                7.5 年交互设计经验，擅长复杂交互与体验系统化，具备 AI 能力产品化与跨团队协作能力。主导多个高复杂度系统级产品的体验重构，熟悉从需求调研、体验诊断、设计策略、方案设计到落地验证的完整流程。
              </p>
              <p className="mb-6">
                具备产品逻辑思维与系统建模能力，能够结合业务目标、用户诉求与技术约束，提出兼顾体验价值和开发可落地性的解决方案。
              </p>
              <p className="mb-6">
                熟悉 B 端及中后台设计模式，善于通过用户旅程、流程分析和 Design System 建立统一设计标准，具备推动产品协作与协调多角色落地的能力。
              </p>
              <p>
                近年来持续探索 AI 与体验设计的结合，将设计规范沉淀为知识库，并封装为需求、设计、开发阶段的轻量化 AI Skill，推动设计经验从个人能力转化为可复用的组织能力。
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
