const proprietaryNote =
  "Patient information, claim numbers, credentials, production URLs, and proprietary source code are not shown. Rule examples are simplified. Actual production rules stay with the business.";

export const projectFilters = [
  "All",
  "Python",
  "Automation",
  "Healthcare",
  "Backend",
  "Web Scraping",
  "API",
  "Data Processing",
];

export const projects = [
  {
    id: "eob-data-scraping",
    title: "EOB Data Scraping",
    category: "PDF Scraping · Healthcare Data",
    filters: ["Python", "Automation", "Healthcare", "Data Processing"],
    summary:
      "Scrapes EOB PDFs into structured payment rows so posting workflows can use the data instead of reading each document by hand.",
    problem:
      "Explanation of Benefit PDFs hold the payment lines operations needs, but the files are multi-page and the fields are not already in Excel.",
    solution:
      "A Python scraper reads the PDF, pulls the payment fields, and writes a clean sheet the posting rules and CMD workflow can consume.",
    role: [
      "Built EOB PDF scraping for payment, allowed amount, adjustment, and patient-responsibility fields.",
      "Handled PR1, PR2, and PR3 plus co-insurance where the document included them.",
      "Processed multi-page PDFs and multi-line claims.",
      "Wrote the extract to Excel with Pandas and OpenPyXL.",
      "Debugged rows where the PDF and the portal did not match.",
    ],
    stack: ["Python", "PDF Scraping", "Pandas", "OpenPyXL", "Excel"],
    features: [
      "EOB PDF in, structured payment rows out.",
      "Payment, allowed, adjustment, and PR fields.",
      "Multi-page and multi-line claim handling.",
      "Excel output for the posting workflow.",
    ],
    workflow: ["EOB PDF", "PDF Scraping", "Field Extraction", "Validation", "Excel Rows", "Posting Workflow"],
    impact: [
      "Payment lines come from the document as data, not as a manual read.",
      "The same extract feeds Excel tracking and the posting automation.",
    ],
    challenges: [
      "Multi-page EOBs and multi-line claims do not map to one row.",
      "A scraped figure that disagrees with the portal has to be flagged, not forced through.",
    ],
    note: proprietaryNote,
  },
  {
    id: "payment-posting-rules-engine",
    title: "MDS Payment Posting Rules Engine",
    category: "Healthcare Automation · Rule Engine · Backend Automation",
    filters: ["Python", "Automation", "Healthcare", "Backend", "API", "Data Processing"],
    summary:
      "A Python rules engine that applies payment-posting and claim-processing decisions, then hands statuses and alerts to the posting workflow.",
    problem:
      "Payment posting depended on people checking amounts, payer rules, and claim scenarios by hand. The same case could be handled differently, and the volume was hard to scale.",
    solution:
      "A Python rules engine validates payment data, applies configured business rules, and returns statuses and alerts that the posting automation can use.",
    role: [
      "Developed rule-based payment posting logic.",
      "Implemented payment, allowed amount, patient responsibility, and adjustment calculations.",
      "Implemented insurance-specific business rules and multiple payment scenarios, including first-payment and second-payment cases.",
      "Implemented third-party pricing and GCS-related rules.",
      "Implemented Wrongly Processed and Denied claim scenarios.",
      "Added validation for duplicate columns and required payment fields.",
      "Worked with Patient Control Number, Check Number, Check Deposit Date, date of service, and payment information. Real values are not published here.",
      "Developed SQL Server integration with pyodbc and stored procedures that retrieve account and practice-specific rule data.",
      "Developed FastAPI-based API integration so the rule engine can be executed as a service.",
      "Worked with Azure Key Vault, Azure Blob Storage, SFTP, Google Sheets, and Excel-based workflows.",
      "Implemented logging, validation, debugging, and exception handling.",
      "Tested scenarios for payers including Cigna, Aetna, UHC/Optum, and BCBS.",
    ],
    stack: [
      "Python",
      "Pandas",
      "OpenPyXL",
      "SQL Server",
      "pyodbc",
      "FastAPI",
      "Azure Key Vault",
      "Azure Blob Storage",
      "SFTP",
      "Google Sheets",
      "Excel",
    ],
    features: [
      "Validates incoming payment data before rules run.",
      "Applies payer and scenario rules, including denied and wrongly processed claims.",
      "Calculates allowed amount, adjustment, and patient responsibility.",
      "Returns alerts and statuses for the posting workflow.",
      "Reads rule data from SQL Server and exposes execution through FastAPI.",
    ],
    workflow: [
      "Input Data",
      "Data Validation",
      "Pre-Processing",
      "Rules Engine",
      "Business Rule Evaluation",
      "Alerts / Status",
      "Output Data",
      "Payment Posting Automation",
    ],
    rules: [
      { title: "Allowed amount", text: "Payment + Patient Responsibility = Allowed Amount" },
      { title: "Adjustment", text: "Charge − Allowed Amount = Adjustment" },
      {
        title: "Denied",
        text: "If payment, allowed amount, and patient responsibility are zero, the claim may be classified as denied according to the configured business rules.",
      },
      { title: "Patient responsibility", text: "PR1 + PR2 + PR3" },
    ],
    impact: [
      "Rule-based decisions run the same way each time instead of depending on a manual check.",
      "Less manual review of repetitive payment calculations.",
      "Posting workflows can take a status or alert instead of rebuilding the logic in the spreadsheet.",
    ],
    challenges: [
      "Multiple payment scenarios, including first and second payments, needed separate rule paths.",
      "Duplicate columns and missing payment fields had to fail validation instead of posting quietly.",
      "Denied and wrongly processed claims had to be classified from the amounts, not guessed.",
    ],
    note: proprietaryNote,
  },
  {
    id: "cmd-payment-posting",
    title: "CMD Payment Posting Automation",
    category: "Healthcare Automation · Payment Posting · Browser Automation",
    filters: ["Python", "Automation", "Healthcare", "Data Processing"],
    summary:
      "An automation workflow that takes healthcare payment and EOB information through tracking, PDF extraction, business rules, and CMD browser steps.",
    problem:
      "Posting from remittance and EOB documents meant opening files, finding claim lines, calculating amounts, and updating CMD by hand. Multi-page PDFs and multi-line claims made that slow and easy to mismatch.",
    solution:
      "Python tracks posting status in Excel, reads EOB PDFs, applies the posting rules, and uses Selenium for the CMD browser steps, notes, and alerts.",
    role: [
      "Processed CMD payment data and tracked posting status in Excel.",
      "Handled statuses such as Posted, Pending, Already Posted, Marked as Posted, and Future Date.",
      "Processed EOB PDFs and extracted claim and payment information.",
      "Handled multiple patients and claims in one run, without publishing any of that data here.",
      "Processed PR1, PR2, and PR3, plus payment, allowed, adjustment, and co-insurance information.",
      "Generated alerts and notes from the business rules.",
      "Automated CMD browser interactions with Selenium.",
      "Handled multiple-row claim scenarios, and divided amounts only when multiple web rows were present.",
      "Debugged mismatches between EOB data and what the portal showed.",
    ],
    stack: ["Python", "Selenium", "Pandas", "OpenPyXL", "Excel", "PDF Processing"],
    features: [
      "Excel tracking for posting status.",
      "EOB PDF processing and claim/payment extraction.",
      "Business-rule alerts and notes.",
      "Selenium automation inside CMD.",
      "Guards for multi-row claims so amounts are split only when the portal actually has multiple rows.",
    ],
    workflow: [
      "ERA/CMD Data",
      "Excel Tracking",
      "Status Validation",
      "Remittance/EOB Verification",
      "EOB PDF Processing",
      "Patient / Claim Data Extraction",
      "Business Rule Processing",
      "CMD Automation",
      "Posting / Notes / Alerts",
    ],
    impact: [
      "Reduces repetitive manual payment posting work.",
      "Improves consistency of posting-related calculations.",
      "Speeds up the path from EOB to posting.",
      "Helps operational teams process larger payment volumes.",
    ],
    challenges: [
      "Multi-page PDFs and multi-line claims did not map one-to-one onto portal rows.",
      "EOB figures and portal figures sometimes disagreed and had to be debugged rather than forced through.",
      "Amount splitting was limited to cases where multiple web rows were actually present.",
    ],
    note: proprietaryNote,
  },
  {
    id: "practice-fusion-automation",
    title: "Practice Fusion Automation",
    category: "Healthcare Automation · Browser Automation",
    filters: ["Python", "Automation", "Healthcare", "Data Processing"],
    summary:
      "Browser automation for operational work in Practice Fusion: search, profile navigation, data extraction, and Excel input and output.",
    problem:
      "Operational steps in Practice Fusion were repetitive browser work: find the right record, open the profile, and move data to or from Excel.",
    solution:
      "Selenium workflows run those steps from Excel input, with validation and a desktop window for launching the job where the team needed one.",
    role: [
      "Built automated browser-based workflows.",
      "Automated patient search and profile navigation. No patient records are shown here.",
      "Extracted and processed data into Excel input and output files.",
      "Added error handling and validation around the run.",
      "Added a Tkinter GUI so the workflow can be started without opening a code editor.",
    ],
    stack: ["Python", "Selenium", "Pandas", "OpenPyXL", "Excel", "Tkinter"],
    features: [
      "Browser automation for search and profile navigation.",
      "Excel-based input and output.",
      "Validation and error handling.",
      "GUI-based execution where the team used it.",
    ],
    workflow: ["Excel Input", "Browser Login", "Patient Search", "Profile Navigation", "Data Extraction", "Excel Output"],
    impact: [
      "Repetitive portal navigation runs as a workflow instead of a manual click-path.",
      "Excel stays the handoff format the operations team already uses.",
    ],
    challenges: [
      "Portal timing and page changes had to be handled so a failed search did not write a bad row.",
    ],
    note: proprietaryNote,
  },
  {
    id: "practice-fusion-insurance-capture",
    title: "Practice Fusion Insurance Capture Automation",
    category: "Healthcare Automation · Data Capture",
    filters: ["Python", "Automation", "Healthcare", "Data Processing"],
    summary:
      "Captures insurance-related information from Practice Fusion and turns it into structured Excel output.",
    problem:
      "Insurance details had to be opened patient by patient and copied out by hand.",
    solution:
      "The workflow navigates to the patient, extracts insurance information, validates it, and writes a structured Excel report.",
    role: [
      "Automated patient navigation in the portal.",
      "Extracted insurance-related information.",
      "Processed the extract into a structured Excel report.",
      "Added validation and exception handling for rows that could not be read cleanly.",
    ],
    stack: ["Python", "Selenium", "Excel"],
    features: [
      "Automated patient navigation.",
      "Insurance information extraction.",
      "Structured data processing and Excel reporting.",
      "Validation and exception handling.",
    ],
    workflow: ["Work List", "Patient Navigation", "Insurance Capture", "Validation", "Excel Report"],
    impact: ["Reduced manual data-entry for insurance capture.", "Gave the team a consistent Excel extract instead of scattered notes."],
    challenges: ["Incomplete or unexpected insurance layouts had to be flagged instead of written as a complete row."],
    note: proprietaryNote,
  },
  {
    id: "practice-fusion-record-maintenance",
    title: "Practice Fusion Medical Record Maintenance",
    category: "Healthcare Automation",
    filters: ["Python", "Automation", "Healthcare"],
    summary:
      "Browser automation for maintaining medical-record-related information in Practice Fusion.",
    problem:
      "Record maintenance meant repeating the same search, open, and update steps across many patients.",
    solution:
      "A Selenium workflow searches, opens the relevant record flow, applies the maintenance steps, and validates the result.",
    role: [
      "Automated browser steps for record maintenance.",
      "Implemented patient search and workflow navigation.",
      "Processed the working data for each record.",
      "Added validation and error handling so a failed record is visible.",
    ],
    stack: ["Python", "Selenium"],
    features: ["Browser automation", "Patient search", "Data processing", "Workflow automation", "Validation", "Error handling"],
    workflow: ["Input List", "Patient Search", "Open Record", "Maintenance Steps", "Validation"],
    impact: ["Maintenance steps that were repeated by hand can run as a checked workflow."],
    challenges: ["A failed search or a missing record had to stop that item and continue with a clear error, not a silent skip."],
    note: proprietaryNote,
  },
  {
    id: "ev-note-pasting",
    title: "EV Note Pasting Automation",
    category: "Healthcare Automation · Note Automation",
    filters: ["Python", "Automation", "Healthcare"],
    summary: "Pastes structured notes into the healthcare system after identifying the patient and the right workflow.",
    problem:
      "Notes were prepared outside the system and then pasted by hand, patient by patient, into the correct appointment workflow.",
    solution:
      "The automation identifies the patient, opens the workflow, and inserts the structured note, with checks around each step.",
    role: [
      "Automated patient identification and navigation.",
      "Processed notes before insertion.",
      "Pasted notes into the target workflow.",
      "Supported appointment-based processing.",
      "Added validation and error handling.",
    ],
    stack: ["Python", "Selenium"],
    features: [
      "Patient identification.",
      "Automated navigation.",
      "Note processing and insertion.",
      "Appointment and workflow-based processing.",
      "Validation and error handling.",
    ],
    workflow: ["Note Source", "Patient Identification", "Open Workflow", "Paste Note", "Validation"],
    impact: ["Note entry follows the same path each time, with a visible failure when the patient or workflow does not match."],
    challenges: ["The note had to land in the correct appointment workflow, not merely in the first open screen."],
    note: proprietaryNote,
  },
  {
    id: "tebra-note-pasting",
    title: "Tebra Note Pasting — United Spine and Pain",
    category: "Healthcare Automation · EHR Automation",
    filters: ["Python", "Automation", "Healthcare"],
    summary:
      "Note-pasting automation for Tebra. The workflow finds the patient, picks the relevant appointment, and pastes the note. This project was completed successfully.",
    problem:
      "Notes for United Spine and Pain had to be matched to the right patient and appointment in Tebra before they could be pasted.",
    solution:
      "A Selenium executable searches by patient name and date of birth, identifies the relevant appointment, opens the workflow, pastes the note, and validates the step.",
    role: [
      "Built patient search using name and date of birth.",
      "Used appointment data to identify the relevant appointment.",
      "Automated note pasting in the patient workflow.",
      "Validated the workflow after insertion.",
      "Delivered and tested the automation as a Windows executable.",
    ],
    stack: ["Python", "Selenium"],
    features: [
      "Patient search by name and date of birth.",
      "Appointment-based identification.",
      "Automated note pasting.",
      "Selenium browser automation.",
      "Workflow validation.",
      "Packaged and tested as an executable.",
    ],
    workflow: [
      "Patient Name + Date of Birth",
      "Patient Search",
      "Appointment Data",
      "Identify Relevant Appointment",
      "Open Patient Workflow",
      "Paste Note",
      "Validation",
    ],
    impact: [
      "The note-pasting path was completed and tested as an application the team can run.",
      "Appointment matching keeps the note on the relevant visit instead of an arbitrary chart.",
    ],
    challenges: [
      "Search results and appointments had to be distinguished so the note was pasted on the relevant visit.",
    ],
    note: "Completed successfully. No patient names, dates of birth, or note contents are shown.",
  },
  {
    id: "tebra-api-rd",
    title: "Tebra API Research",
    category: "API Integration · Healthcare Technology",
    filters: ["Python", "Healthcare", "Backend", "API"],
    summary:
      "Research into Tebra and Kareo APIs as a way to support existing automation. This was R&D, not a claim that a full API replacement is in production.",
    problem:
      "Existing Tebra workflows depended on the browser. An API path might remove some of that dependency, but the available endpoints had to be checked first.",
    solution:
      "I studied the Tebra/Kareo API documentation, compared it with the Selenium workflows, and planned where patient search and appointments could move toward an API-driven design.",
    role: [
      "Studied Tebra/Kareo API documentation.",
      "Investigated available API endpoints.",
      "Compared existing Selenium workflows with API-based approaches.",
      "Evaluated patient search and appointment-related API capabilities.",
      "Researched how API integration could reduce browser dependency.",
      "Planned a possible migration of existing automation toward an API-driven architecture.",
    ],
    stack: ["Python", "REST APIs", "Tebra/Kareo API research"],
    features: [
      "Documentation and endpoint review.",
      "Comparison of browser workflows and API options.",
      "Focus on patient search and appointment data.",
      "A migration plan, not a finished production cutover.",
    ],
    workflow: ["Current Selenium Workflow", "API Documentation", "Endpoint Review", "Gap Comparison", "Migration Plan"],
    impact: [
      "The team has a researched view of which Tebra steps could leave the browser and which still need it.",
    ],
    challenges: [
      "Not every browser step had a matching API capability, so the plan had to stay honest about the gaps.",
    ],
    note: "This was research and planning. A full production API implementation is not claimed.",
  },
  {
    id: "ips-billing-file-tracking",
    title: "IPS Billing File Tracking Automation",
    category: "Process Automation · File Automation",
    filters: ["Python", "Automation", "Healthcare", "Data Processing"],
    summary:
      "Downloads billing files across accounts, renames them, and tracks counts and execution status in Excel.",
    problem:
      "Billing files had to be selected per account, downloaded, renamed, and tracked. Doing that manually made it easy to miss an account or lose the run status.",
    solution:
      "Selenium selects each account and downloads the file. Python renames it and writes account, count, and execution status to Excel, including exceptions.",
    role: [
      "Automated account selection and billing file downloads.",
      "Renamed files as part of the run.",
      "Tracked accounts, counts, and execution status in Excel.",
      "Added exception handling so a failed account is recorded instead of disappearing.",
    ],
    stack: ["Python", "Selenium", "Pandas", "Excel"],
    features: [
      "Automated account selection.",
      "Automated billing file downloads.",
      "File renaming.",
      "Account-wise status, counts, and execution monitoring.",
      "Exception handling.",
    ],
    workflow: ["Account List", "Account Selection", "File Download", "Rename", "Excel Tracking", "Exception Log"],
    impact: [
      "Account-by-account downloads and their status sit in one tracking sheet.",
      "A failed account stays visible instead of being skipped quietly.",
    ],
    challenges: ["Each account had to keep its own status so one failure did not hide the rest of the run."],
    note: "Account identifiers and file contents are not published.",
  },
  {
    id: "web-scraping",
    title: "Web Scraping and Data Extraction",
    category: "Web Scraping · Data Processing",
    company: "X-Byte Enterprise Crawling",
    roleLabel: "Python Developer",
    filters: ["Python", "Automation", "Web Scraping", "Data Processing"],
    summary:
      "Scraping and cleanup of publicly available web data, with Excel reports and tracking for requests, token usage, and extracted records.",
    problem:
      "Public reviews, profiles, and job data were needed in a structured file, but the source pages were not a clean export.",
    solution:
      "Selenium and BeautifulSoup workflows collect the public data, Pandas cleans it, and Excel reports plus tracking sheets show what was requested and extracted.",
    role: [
      "Developed Selenium-based scraping workflows and BeautifulSoup extraction.",
      "Worked with Google Maps reviews, public social media profiles, job data, food delivery platform reviews, and other public web information.",
      "Cleaned and transformed the scraped data.",
      "Generated Excel reports.",
      "Debugged and optimized existing scraping scripts.",
      "Created tracking reports for requests, token usage, and extracted data.",
    ],
    stack: ["Python", "Selenium", "BeautifulSoup", "Pandas", "Excel"],
    features: [
      "Public data extraction.",
      "Cleaning and transformation.",
      "Excel reporting.",
      "Request, token, and output tracking.",
    ],
    workflow: ["Target Pages", "Scrape / Extract", "Clean", "Excel Report", "Tracking Report"],
    impact: [
      "Public source data arrived as cleaned Excel instead of raw page dumps.",
      "Tracking reports made request volume, token usage, and extract counts visible.",
    ],
    challenges: [
      "Existing scripts needed debugging and workflow changes when pages or volumes shifted.",
    ],
    note: "Only publicly available web data was in scope. No private accounts or credentials are described here.",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Website",
    category: "Backend · Web Development",
    company: "Xipra Technology",
    roleLabel: "Software Intern",
    filters: ["Python", "Backend"],
    summary:
      "Internship work on an e-commerce site: Django backend, MySQL, and the product and shopping flows.",
    problem:
      "The site needed a working backend for products and shopping, connected to a real database rather than static pages.",
    solution:
      "I contributed Django views and models, MySQL integration, and the HTML, CSS, and JavaScript around product and shopping workflows.",
    role: [
      "Backend development with Django.",
      "Database integration with MySQL.",
      "Product-related workflows and shopping functionality.",
      "HTML, CSS, and JavaScript on the frontend.",
      "Backend debugging during development.",
    ],
    stack: ["Python", "Django", "HTML", "CSS", "JavaScript", "MySQL"],
    features: [
      "Django backend.",
      "MySQL database integration.",
      "Product and shopping workflows.",
      "HTML, CSS, and JavaScript frontend.",
    ],
    workflow: ["Browser", "Django", "MySQL", "Product & Cart Flows"],
    impact: ["The internship covered a full slice of a web app: pages, backend, and database, not only isolated scripts."],
    challenges: ["Wiring the shopping flow to MySQL meant debugging both the request path and the data, not just the template."],
    note: "",
  },
];
