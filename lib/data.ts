import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import buildingImg from "@/public/building.jpg";
import headHuntingImg from '@/public/headhunting.jpg';
import oneClickImg from '@/public/onclick.jpg';
import salesPlanningImg from '@/public/salesplanning.jpg';
import whatAppImg from '@/public/whatsapp.jpg'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Classe Préparatoire ECS",
    company: "Lycée Ampère",
    location: "Lyon, FR",
    description: 
      "Engaged in preparatory classes for business school, emphasizing Geopolitics, Mathematics, Philosophy, and Languages.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2019",
  },
  {
    title: "Master in Management",
    company: "Audencia Business School",
    location: "Nantes, FR",
    description: 
      "Graduated with a specialization in Corporate Finance, completing relevant coursework in Financial Planning, Firm Valuation, and Data Analytics.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Strategy Consultant",
    company: "OMS",
    location: "Paris, FR",
    description: "Executed strategic initiatives for clients of the firm, developed actionable green tourism strategies, facilited relations between banks and start-ups, built market analysis for fishing industry",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2021 - Dec 2021",
  },
  {
    title: "Visiting Student",
    company: "San Diego State University",
    location: "San Diego, CA",
    description: "Participated in a unique academic exchange, focusing on subjects like Data Management and Business Modelling, while experiencing diverse perspectives and methodologies in an American educational setting.",
    icon: React.createElement(FaPlane),
    date: "2022",
  },
  {
    title: "Founder Associate",
    company: "Milano Vice",
    location: "Berlin, DE",
    description: "Contributed to the strategic planning and operational execution for a virtual restaurant chain, overseeing the development of an expansion strategy for 55 locations, managing partner relationships, and co-organizing a successful €6.5M Series A fundraising campaign.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2022 - Dec 2022",
  },
  {
    title: "Data Consultant",
    company: "Project A Ventures",
    location: "Berlin, DE",
    description: "Provided data consulting services to a $1 billion venture capital fund, designing performance data pipelines for portfolio companies, setting up KPIs, and collaborating with C-level executives to tailor solutions to their specific business needs.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 - Jul 2023",
  },
  {
    title: "Strategy & Data Consultant",
    company: "Independent",
    location: "Remote",
    description: "As a freelance consultant, I assist a diverse range of companies with strategic and data-related initiatives. My work encompasses areas such as client segmentation, data pipeline automation, and financial matters, including M&A transactions. ",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2023 - Present",
  },
  
] as const;

export const projectsData = [
  {
    title: "Sales Planning for 200 Boutiques",
    description:
      "Developed a comprehensive sales planning tool using Power BI and Excel to enhance forecasting accuracy and efficiency.",
    tags: ["Power BI", "Excel", "Sales Strategy"],
    imageUrl: salesPlanningImg, // Replace with actual image URL
    slug: "sales-planning",
    concept: "The concept behind this tool was to create an adaptive forecasting system that integrates real-time data inputs, allowing sales teams to adjust their plans dynamically. Built with a focus on scalability, it accommodates both macro trends and micro-targeting at the boutique level.",
    tools: ['Power BI', 'Excel', "PowerQuery"],
    results: "Deployed a sales planning tool that enhances forecasting accuracy and efficiency, allowing sales teams to plan effectively across 200 boutiques.",
    resultImage: ""
  },
  {
    title: "One-Click Dashboarding Solutions",
    description:
      "Created a streamlined dashboarding solution utilizing BigQuery template queries and an App Script web app for efficient data visualization and reporting.",
    tags: ["BigQuery", "App Script", "Looker Studio"],
    imageUrl: oneClickImg, // Replace with actual image URL
    slug: "one-click-dashboarding",
    concept: "Developed to simplify the dashboard creation process, this solution leverages templated BigQuery queries and a customizable interface, allowing users to generate visualizations without SQL knowledge, thereby improving data accessibility across departments.",
    tools: ['BigQuery', 'App Script', 'Looker Studio', 'DaisyUI'],
    results: "Implemented a one-click dashboarding solution that facilitates efficient data visualization and reporting, reducing the time needed to create and share insights.",
    resultImage: ""
  },
  {
    title: "Partner Customer Service App",
    description:
      "Designed a Twilio WhatsApp bot to improve partner customer service, significantly reducing response times and enhancing user satisfaction.",
    tags: ["Twilio", "WhatsApp", "Slack"],
    imageUrl: whatAppImg, // Replace with actual image URL
    slug: "customer-service-app",
    concept: "The app aimed to streamline communication between partners and support teams using a WhatsApp-based bot, allowing for quick query resolutions and better engagement. Integrated Slack alerts ensured real-time team responses.",
    tools: ['Twilio', "Python", 'WhatsApp API', 'Slack API'],
    results: "Deployed a customer service app that enables partners to interact via WhatsApp, improving response times and overall user satisfaction.",
    resultImage: ""
  },
  {
    title: "Head Hunting Performance Dashboard",
    description:
      "Developed an end-to-end data pipeline and application for tracking head-hunting performance, enabling data-driven decision-making and enhanced operational efficiency.",
    tags: ["App Script", "BigQuery", "Looker Studio"],
    imageUrl: headHuntingImg, // Replace with actual image URL
    slug: "head-hunting-dashboard",
    concept: "The dashboard's concept was to centralize recruitment performance data, offering insights into candidate pipeline metrics, conversion rates, and time-to-hire across departments, making it a strategic tool for talent management.",
    tools: ['App Script', 'BigQuery', 'Looker Studio', 'DaisyUI', 'TailwindCSS'],
    results: "Implemented a performance dashboard that tracks head-hunting metrics, enabling data-driven decisions and enhanced operational efficiency.",
    resultImage: ""
  },
  {
    title: "KPIs Cockpit Design for ScaleUp",
    description:
      "Implemented a KPIs cockpit using Metabase and dbt, providing stakeholders with actionable insights through dynamic reporting.",
    tags: ["Metabase", "dbt", "KPIs", "Reporting"],
    imageUrl: buildingImg, // Replace with actual image URL
    slug: "kpis-cockpit",
    concept: "Built as a centralized analytics tool, this cockpit is designed to aggregate key business KPIs, offering real-time visibility into performance metrics across all scale-up operations.",
    tools: ['Metabase', 'dbt', 'Stripe', 'Amplitude'],
    results: "Deployed a KPIs cockpit that provides stakeholders with real-time insights and dynamic reporting capabilities for effective decision-making.",
    resultImage: ""
  },

] as const;


export const dataSkillsData = [
  "Appscript",
  "BigQuery",
  "PostgreSQL",
  "GitHub",
  "Metabase",
  "PowerBI",
  "LookerStudio",
  "SQL",
  "dbt",
  "Python",
  "GA4",
  "Google Ads",
  "GTM Server Side",
  "Facebook Ads",
  "Pinterest Ads",
  "Fivetran"

] as const;

export const stratSkillsData = [

  "Financial Modeling",
  "M&A Valuations",
  "Scenario Building",
  "Business Planning",
  "Client Relationship Management",
  "Stakeholders Management",
  "Data Analysis",
  "Data Visualisation",
 
  "Excel",
  "PowerPoint",
  "Word",
  "Google Workspace"

] as const;
