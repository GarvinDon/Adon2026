export interface Project {
  id: string;
  title: string;
  company: string;
  period: string;
  role: string;
  description: string;
  result: string;
  tags: string[];
  highlight: string;
  skills: string[];
  image?: string;
  pdfPath?: string;
  slogan?: string;
  projectName?: string;
}

export const projects: Project[] = [
  {
    id: "after-sales-management",
    projectName: "极飞售后系统",
    title: "企业级售后管理系统体验设计与流程重构",
    slogan: "覆盖全国售后流程，助力服务提效60%",
    company: "广州极飞科技有限公司",
    period: "2019.10～2020.10",
    role: "负责系统规划、页面交互与线下流程对接，推动信息化建设",
    description: "采用用户旅程梳理、模块梳理、田野调查设计分析手段等方法明确产品结构到UI页面落地和整体需求/项目管理",
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
    result: "实现流程清晰化与异常兜底机制，优化打卡体验，助力企业用户增长与金融转化",
    tags: ["金融科技", "B端复杂系统", "数据驱动"],
    highlight: "🚩从靠感觉，到数据驱动",
    skills: ["数据驱动设计", "运营数据挖掘"],
    pdfPath: "/file/复杂 B 端系统的全流程体验设计.pdf",
    image: "/images/移动打卡全链路优化.png"
  }
];
