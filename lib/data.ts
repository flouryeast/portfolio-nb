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
    title: "Sales Planning for 200 boutiques",
    description:
      "Developed a comprehensive sales planning tool using Power BI and Excel to enhance forecasting accuracy and efficiency.",
    tags: ["Power BI", "Excel", "Sales Strategy"],
    imageUrl: salesPlanningImg , // Replace with actual image URL
  },
  {
    title: "One-Click Dashboarding Solutions",
    description:
      "Created a streamlined dashboarding solution utilizing BigQuery template queries and an App Script web app for efficient data visualization and reporting.",
    tags: ["BigQuery", "App Script", "Looker Studio"],
    imageUrl: oneClickImg, // Replace with actual image URL
  },
  {
    title: "Partner Customer Service App",
    description:
      "Designed a Twilio WhatsApp bot to improve partner customer service, significantly reducing response times and enhancing user satisfaction.",
    tags: ["Twilio", "WhatsApp", "Slack"],
    imageUrl: whatAppImg, // Replace with actual image URL
  },
  {
    title: "Head Hunting Performance Dashboard",
    description:
      "Developed an end-to-end data pipeline and application for tracking head-hunting performance, enabling data-driven decision-making and enhanced operational efficiency.",
    tags: ["App Script","dbt","BigQuery","Looker Studio"],
    imageUrl: headHuntingImg, // Replace with actual image URL
  },
  {
    title: "KPIs Cockpit design for ScaleUp",
    description:
      "Implemented a KPIs cockpit using Metabase and dbt, providing stakeholders with actionable insights through dynamic reporting.",
    tags: ["Metabase", "dbt", "KPIs", "Reporting"],
    imageUrl: buildingImg, // Replace with actual image URL
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
