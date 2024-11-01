import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import buildingImg from "@/public/building.jpg";
import headHuntingImg from '@/public/headhunting.jpg';
import oneClickImg from '@/public/onclick.jpg';
import salesPlanningImg from '@/public/salesplanning.jpg';
import whatAppImg from '@/public/whatsapp.jpg';
import seoImg from '@/public/SEO_illustration.png'

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
    resultImage: "",
    link:"",
  },
  {
    title: "One-Click Dashboarding Solutions",
    description:
      "Created a streamlined dashboarding solution utilizing BigQuery template queries and an App Script web app for efficient data visualization and reporting.",
    tags: ["BigQuery", "App Script", "Looker Studio"],
    imageUrl: oneClickImg, // Replace with actual image URL
    slug: "one-click-dashboarding",
    concept: "I collaborated with an external financial controller whose role is to assist various entrepreneurs with financial planning and visualization. To facilitate this, he provides his clients with dashboards. However, he faced challenges due to a time-consuming process of modeling and updating data through a slow Google Sheets system. The primary objective of this project was to streamline the process while maintaining his flexibility to update and modify workflows.",
    tools: ['BigQuery', 'App Script', 'Looker Studio', 'DaisyUI'],
    results: "To achieve this, I opted against using APIs to minimize maintenance and enable him to onboard more clients efficiently. The process involves the following steps: the financial controller downloads exports from the clients' accounting tools and uploads them to a custom-built Apps Script web app. The data is then cleaned, imported, and modeled using BigQuery. After this, he simply needs to refresh the dashboard to access the latest data. Some data, such as categorization, still comes from his side, which is managed through a connected Google Sheet. Additionally, the data is made available for more in-depth financial analysis in Excel format.<br>I implemented template queries, allowing him to deploy new clients in less than 15 minutes.",
    resultImage: "",
    link:"",
  },
  {
    title: "Partner Customer Service App",
    description:
      "Designed a Twilio WhatsApp bot to improve partner customer service, significantly reducing response times and enhancing user satisfaction.",
    tags: ["Twilio", "WhatsApp", "Slack"],
    imageUrl: whatAppImg, // Replace with actual image URL
    slug: "customer-service-app",
    concept: "I worked with a pizza ghost kitchen brand in Berlin that operates over 35 restaurants across Germany. The startup manages the entire supply chain and collaborates with more than 60 partners, including both restaurants and suppliers. To effectively address complaints and product issues, they required a streamlined process that could accommodate multiple languages—German, English, and Turkish. The solution needed to be easily accessible from mobile devices and user-friendly enough to discourage partners from directly calling.",
    tools: ['Twilio', "Python", 'WhatsApp API', 'Slack API'],
    results: "The decision was made to use WhatsApp, as it is widely used in Germany and always accessible. I deployed a customer service bot that allows partners to report wasted products or logistical issues. All conversations are then transformed into tickets, which are routed to the appropriate team members based on the nature of the problem. Additionally, this system can initiate a claims process with the relevant suppliers.",
    resultImage: "",
    link:"",
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
    resultImage: "",
    link:"",
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
    resultImage: "",
    link:"",
  },
  {
    title: "Building Website & SEO Strategy",
    description:
      "On the side of Data Analysis and Finance, I like to work on SEO topics with SMBs",
    tags: ["SEO", "Wordpress"],
    imageUrl: seoImg, // Replace with actual image URL
    slug: "seo-projects",
    concept: "Building the SEO strategy and Wordpress structure for differents websites. Working on keywords selections and on-page SEO to rank higher.",
    tools: ['Semrush', 'Wordpress', 'Ahrefs', 'YoastSEO', "Google Search Console"],
    results: "Building local and search for a solar panel company in Marseille, and for a independant consulting engineer in Lyon",
    resultImage: "",
    link:"https://esquali.fr/",
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
