export interface Project {
  id: string;
  title: string;
  company: string;
  period: string;
  role: string;
  description: string;
  summary: string;
  cardResult: string;
  result: string;
  tags: string[];
  highlight: string;
  skills: string[];
  image?: string;
  pdfPath?: string;
  pdfPreview?: { src: string; width: number; height: number };
  slogan?: string;
  projectName?: string;
  caseStudy?: {
    problem: string;
    contribution: string[];
    decisions: { title: string; description: string }[];
    metrics: { value: string; label: string }[];
    validation: { scope: string; method: string };
  };
}

export const projects: Project[] = [
  {
    id: "ai-error-ux",
    projectName: "AI驱动报错体验优化",
    title: "AI驱动报错体验优化",
    slogan: "从人工经验，到 AI 工作流节点",
    company: "个人项目",
    period: "2025.6～至今",
    role: "梳理报错规则与知识库，设计并封装轻量化 AI Skill",
    description: "基于需求、设计、开发阶段的报错体验痛点，梳理报错规则，沉淀为统一知识库。封装 3 个轻量化 AI Skill，分别用于需求阶段遗漏场景识别、设计阶段方案评审、开发阶段规范一致性检查。将原本依赖人工经验的事后评审，前置为嵌入研发流程的 AI 自动审查节点，提升问题发现效率与设计一致性。",
    summary: "将报错知识库封装为 3 个 AI Skill，嵌入需求、设计与开发流程。",
    cardResult: "识别准确率 91.4% · 建议采纳率 60.6%",
    result: "报错问题识别准确率 91.4%，建议采纳率 60.6%，支持多团队快速接入与复用",
    tags: ["AI工作流", "体验规范", "Skill设计"],
    highlight: "🚩从人工经验，到 AI 工作流节点",
    skills: ["AI工作流/知识库", "Skill设计"],
    image: "/images/ai-error-ux.png",
    pdfPath: "/file/AI驱动的报错体验设计体系.pdf",
    pdfPreview: { src: "/images/ai-error-ux-detail.png", width: 2560, height: 1440 },
    caseStudy: {
      problem: "报错场景的识别依赖个人经验：需求阶段容易遗漏异常场景，设计阶段缺少统一规范，开发实现又可能与设计产生偏差。问题往往在事后评审或上线后才暴露，增加重复沟通与修正成本。",
      contribution: [
        "梳理需求、设计、开发三个阶段的报错体验痛点与审查对象。",
        "将报错规则与设计规范沉淀为统一知识库。",
        "设计并封装 3 个轻量化 AI Skill，分别支持场景识别、方案评审与规范一致性检查。",
      ],
      decisions: [
        { title: "共用知识库，按阶段拆分能力", description: "三个 Skill 使用统一的报错知识，只调整分析对象：需求看遗漏场景，设计看时机、样式和文案，开发看实现与规范是否一致。让各阶段围绕同一套标准协作。" },
        { title: "嵌入既有流程，前置问题发现", description: "围绕单一报错场景提供轻量工具，将审查节点嵌入需求、设计与开发工作流，减少对事后人工经验评审的依赖。" },
        { title: "知识与 Skill 解耦，支持多团队复用", description: "将通用报错知识与执行能力分开组织，团队接入时补充平台特有规范，减少重复维护，支持快速推广。" },
      ],
      metrics: [
        { value: "91.4%", label: "报错问题识别准确率" },
        { value: "60.6%", label: "建议采纳率" },
      ],
      validation: {
        scope: "选取 3 个一级菜单进行测试。",
        method: "通过人工核查，判断 AI 识别的问题是否准确，并记录建议是否采纳。以上指标为该测试范围内的统计结果。",
      },
    },
  },
  {
    id: "after-sales-management",
    projectName: "极飞售后系统",
    title: "企业级售后管理系统体验设计与流程重构",
    slogan: "覆盖全国售后流程，助力服务提效60%",
    company: "广州极飞科技有限公司",
    period: "2019.10～2020.10",
    role: "负责系统规划、页面交互与线下流程对接，推动信息化建设",
    description: "采用用户旅程梳理、模块梳理、田野调查设计分析手段等方法明确产品结构到UI页面落地和整体需求/项目管理",
    summary: "重构售后与维修流程，打通线上系统与线下服务。",
    cardResult: "维修用时减少超 50% · 工单效率提升 13 倍",
    result: "系统上线后处理时效提升显著，维修流程平均用时减少超50%，单据处理效率提升13倍",
    tags: ["B端系统", "流程重构", "体验设计"],
    highlight: "🚩从支持片区场景，到企业平台级产品",
    skills: ["AI嵌入业务流程的抽象能力", "流程型业务拆解能力", "B端系统交互规划"],
    pdfPath: "/file/企业级售后管理系统体验设计与流程重构.pdf",
    image: "/images/极飞售后系统.png"
  },
  {
    id: "knowledge-community",
    projectName: "鹅圈子",
    title: "知识商家社群工具体验设计",
    slogan: "0到1搭建的社群工具小程序",
    company: "深圳小鹅网络技术有限公司",
    period: "2021.5～2021.9",
    role: "从0到1的UX方案设计，快速完成整体信息架构与交互流程",
    description: "聚焦内容沉淀与社群互动，重构产品框架、提升活跃路径转化",
    summary: "从 0 到 1 搭建社群工具，优化内容沉淀与用户活跃路径。",
    cardResult: "日活跃用户数提升 90%",
    result: "日活跃用户数提升90%，有效推动课程转化率增长",
    tags: ["C端重构", "用户增长", "UX设计"],
    highlight: "🚩从B端强逻辑，到C端微体验",
    skills: ["用户增长路径设计"],
    pdfPath: "/file/知识商家社群工具体验设计 : C 端产品重构.pdf",
    image: "/images/鹅圈子.png"
  },
  {
    id: "complex-b-system",
    projectName: "移动打卡全链路优化",
    title: "复杂 B 端系统的全流程体验设计",
    slogan: "设计驱动流程优化、异常处理与协同落地",
    company: "招商银行",
    period: "2022.5～至今",
    role: "聚焦假勤管理等高复杂度功能，主导需求分析、旅程拆解与多端体验方案输出",
    description: "积极挖掘用户与运营反馈，梳理行业场景痛点，推动落地多轮方案优化",
    summary: "梳理假勤与打卡复杂场景，完善全链路流程和异常兜底。",
    cardResult: "流程清晰化 · 异常场景兜底",
    result: "实现流程清晰化与异常兜底机制，优化打卡体验，助力企业用户增长与金融转化",
    tags: ["金融科技", "B端复杂系统", "数据驱动"],
    highlight: "🚩从靠感觉，到数据驱动",
    skills: ["数据驱动设计", "运营数据挖掘"],
    pdfPath: "/file/复杂 B 端系统的全流程体验设计.pdf",
    image: "/images/移动打卡全链路优化.png"
  }
];
