/**
 * Personal profile, contact, and the short sections around them.
 * Email, LinkedIn, GitHub, photo, and resume are the real values already added.
 */

export const profile = {
  name: "Jeel Suthar",
  firstName: "Jeel",
  lastName: "Suthar",
  title: "Python Developer | Automation Engineer | Backend Developer | Data Scientist",
  location: "Ahmedabad, Gujarat, India",
  experienceLabel: "2.0+ years",
  currentRole: "Python Developer — Integrity Healthcare Solutions Pvt. Ltd.",
  portrait: "/portrait.jpeg", 
  tagline:
    "Python automation for healthcare operations — payment posting, rule engines, EOB data scraping, and browser workflows.",
  supporting:
    "I have expertise in Python, backend development, automation, API integration, data processing, and problem-solving skills to build reliable software and automation solutions. I turn manual RCM steps into Python workflows: scrape EOB PDFs, apply posting rules, drive portals with Selenium, and write the result to Excel and SQL Server.",
  objective:
    "Looking for opportunities where I can use Python, backend development, automation, API integration, data processing, and problem-solving skills to build reliable software and automation solutions.",
};

export const about = [
  "Python developer in Ahmedabad with 2.0+ years on healthcare automation. I scrape EOB PDFs into structured payment rows, run rule engines for posting decisions, and automate portal work with Selenium.",
  "At Integrity Healthcare Solutions I independently take automation processes from development through testing and delivery. That includes rule engines, EOB and ERA data handling, Selenium portal workflows, and executable tools for operational teams.",
  "Before this I built web scraping and data-cleaning workflows at X-Byte Enterprise Crawling, and I started in software as an intern at Xipra Technology, contributing to an e-commerce site with Django and MySQL.",
  "I spend a lot of time on edge cases, validation, and debugging. The goal is practical automation that stays understandable and can be maintained when the business rule changes.",
];

export const strengths = [
  "Python Development",
  "Business Process Automation",
  "Healthcare Automation",
  "Rule Engine Development",
  "Payment Posting Automation",
  "Browser Automation",
  "API Integration",
  "Data Processing & Excel Automation",
  "EOB Data Scraping",
  "Backend Development",
  "Debugging & Problem Solving",
  "Automation Workflow Design",
];

export const careerStory = [
  "Python Developer",
  "Web Scraping & Data Processing",
  "Software / Backend Development",
  "Healthcare Automation",
  "Business Process Automation",
  "Rule Engine Development",
  "Payment Posting Automation",
  "API & Backend Integration",
];

export const approach = [
  "Understand Business Process",
  "Analyze Existing Manual Workflow",
  "Design Automation Flow",
  "Develop Python Solution",
  "Implement Business Rules",
  "Integrate APIs / Database / Browser",
  "Validate Data",
  "Test Edge Cases",
  "Debug & Optimize",
  "Deploy / Deliver",
  "Monitor & Maintain",
];

export const resume = {
  href: "/Jeel-Suthar-Resume.pdf",
  available: true,
  fileName: "Jeel-Suthar-Resume.pdf",
};

export const contact = {
  email: "jeelsuthar100@gmail.com",
  linkedin: "https://linkedin.com/in/jeel-suthar-js0005",
  github: "https://github.com/Jeel-Suthar-05",
  formEndpoint: "",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Stack" },
  { href: "#education", label: "Research" },
];

export const achievements = [
  {
    title: "End-to-end automation",
    text: "Independently developed and managed multiple automation workflows, from the business process through testing and delivery.",
    icon: "layers",
  },
  {
    title: "Healthcare automation",
    text: "Hands-on experience automating real-world healthcare operational processes, including portal workflows and operational data handling.",
    icon: "pulse",
  },
  {
    title: "Rule engine development",
    text: "Developed configurable business-rule automation for payment posting and claim-processing decisions.",
    icon: "workflow",
  },
  {
    title: "Payment posting automation",
    text: "Worked on payment posting, EOB, claim, allowed amount, adjustment, and patient-responsibility workflows.",
    icon: "receipt",
  },
  {
    title: "API and backend",
    text: "Experience with REST APIs, FastAPI, SQL Server, stored procedures, and backend-oriented automation.",
    icon: "server",
  },
  {
    title: "Problem solving",
    text: "Worked through edge cases, validation, debugging, and issues that show up when a workflow runs on real operational data.",
    icon: "bug",
  },
];

export const moreWork = [
  {
    title: "BotVita automation conversions",
    text: "Converted existing automation workflows as part of BotVita-related automation work.",
  },
  {
    title: "Healthcare data download automation",
    text: "Automated retrieval of operational healthcare data so teams spend less time pulling files by hand.",
  },
  {
    title: "Ledger automation",
    text: "Built automation around ledger-related processing and the checks that keep those records consistent.",
  },
  {
    title: "File download and tracking",
    text: "Automated file downloads with renaming, status tracking, and exception handling across accounts.",
  },
  {
    title: "Excel report automation",
    text: "Turned process output into Excel reports and tracking sheets with Pandas and OpenPyXL.",
  },
  {
    title: "PDF and EOB data extraction",
    text: "Extracted claim and payment information from EOB PDFs, including multi-page documents.",
  },
  {
    title: "API research and integration",
    text: "Researched healthcare APIs and where they could replace or support browser-based steps.",
  },
  {
    title: "Multi-threaded execution",
    text: "Ran suitable automation work concurrently so larger batches finish with less waiting.",
  },
  {
    title: "Windows executable applications",
    text: "Packaged automation as Windows executables that operational teams can run without a developer setup.",
  },
  {
    title: "Selenium debugging",
    text: "Debugged browser automation when page structure, timing, or multi-row screens did not match the expected flow.",
  },
  {
    title: "Validation and exception handling",
    text: "Added checks for required fields, duplicate columns, and failures so a bad row does not silently pass.",
  },
  {
    title: "Rule library development",
    text: "Organized business rules so payment and claim scenarios can be applied consistently.",
  },
  {
    title: "SQL-based data retrieval",
    text: "Retrieved account and practice-specific rule data from SQL Server, including stored procedures.",
  },
  {
    title: "Azure storage and configuration",
    text: "Used Azure Blob Storage and Azure Key Vault in automation workflows that need files and configuration.",
  },
];

export const education = [
  {
    kind: "Degree",
    title: "M.Sc. in Mathematics",
    org: "Gujarat University",
    dates: "",
    detail: "Master of Science, completed in 2023.",
  },
  {
    kind: "Degree",
    title: "B.Sc. in Mathematics",
    org: "Government Science College, Gandhinagar",
    dates: "",
    detail: "Bachelor of Science, completed in 2021.",
  },
];

export const courses = [
  {
    kind: "Course",
    title: "Master Programming and Development with Projects",
    org: "Udemy",
    dates: "",
    detail: "Python, Data Science, Visualization, Machine Learning",
  },
  {
    kind: "Course",
    title: "Python in Practice: Projects to Master Python",
    org: "Udemy",
    dates: "",
    detail: "Django, Tkinter, Data Science & Machine Learning",
  },
];
