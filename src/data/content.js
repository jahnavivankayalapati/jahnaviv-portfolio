export const overview = {
  image: "/src/assets/profile.png",
  about:
    "I’m a Generative AI and Data Engineer with over 4 years of experience building scalable data pipelines, AI-driven automation, and cloud-based analytics solutions across healthcare, fintech, and enterprise domains. My work blends creativity and engineering — integrating tools like OpenAI, Azure Cognitive Services, Airflow, and AWS Glue to transform complex data into intelligent, actionable insights. I’m fluent in Python, SQL, Azure, AWS, Snowflake, Power BI, and Tableau, with a passion for designing data systems that make decisions smarter and workflows faster. Previously, I worked as a SQL Developer at MTSU, where I automated financial reports using SQL, Argos, Banner, and Python to streamline departmental operations and deliver real-time analytics. I thrive in agile, collaborative environments that value innovation, data integrity, and measurable impact.",
  highlights: [
    { title: "Years of Experience", value: "4+ years" },
    { title: "Key Skills", value: "AI • Data Engineering • Cloud Analytics" },
    { title: "Current Role", value: "Generative AI Dev, SBS Corp" },
  ],
  socials: {
    github: "https://github.com/jahnavivankayalapati",
    email: "mailto:jahnavivch@gmail.com",
    // linkedin: "https://www.linkedin.com/in/your-handle"
  },
};

export const projects = [
  {
    name: "Bill.ai",
    desc: "AI-powered web app that summarizes U.S. Congressional bills using a fine-tuned T5-Small model with a React.js frontend. Deployed on GCP with Kubernetes for scalable, secure performance and includes a map-based UI for state-wise bill exploration.",
    tag: "Python • TensorFlow • Hugging Face • React • GCP • Kubernetes • Flask/FastAPI",
    link: "https://github.com/cheaptrix2/MTSUSpring2025SoftwareEngineering",
  },
  {
    name: "LangGraph Chat Bot",
    desc: "AI chatbot using LangGraph integrating LLM-based responses with tools like web search, stock lookup, and calculator. Features persistent state via SQLite and a Streamlit frontend for real-time chat and thread navigation.",
    tag: "Python • Streamlit • LangGraph • LangChain • OpenAI API • SQLite • APIs",
    link: "https://github.com/jahnavivankayalapati/chat_bot_langgraph",
  },
  {
    name: "React Agentic AI",
    desc: "ReAct (Reason + Act) agent built using LangChain and Streamlit, allowing reasoning and external tool use in real-time interactions. Demonstrates modular agent design for reasoning and tool invocation.",
    tag: "Python • LangChain • OpenAI API • Streamlit • Requests API",
    link: "https://github.com/jahnavivankayalapati/react_agentic_ai",
  },
  {
    name: "Document Query Assistant",
    desc: "Multi-PDF Q&A system using LangChain and Streamlit. Extracts and embeds text with OpenAI embeddings, stores in FAISS vector DB, and retrieves contextually relevant answers from PDFs.",
    tag: "Python • LangChain • Streamlit • OpenAI API • FAISS • PyPDF",
    link: "https://github.com/jahnavivankayalapati/react_agentic_ai_PDFs",
  },
  {
    name: "Parallel Processing COVID Data",
    desc: "Performance comparison of Multiprocessing vs MPI for training Random Forest classifiers on COVID-19 datasets. Analyzes scalability, accuracy, and training efficiency improvements.",
    tag: "Python • Scikit-learn • Pandas • NumPy • mpi4py • Multiprocessing • BigQuery • Matplotlib",
    link: "https://github.com/jahnavivankayalapati/Parallel_Processing_Covid_Data",
  },
  {
    name: "Nimbus",
    desc: "Cloud-native React.js application hosted on AWS S3 & CloudFront with Cognito authentication and API Gateway integration. Uses DynamoDB for data storage and AWS Bedrock for AI-powered automation.",
    tag: "React • AWS S3 • CloudFront • Cognito • API Gateway • DynamoDB • AWS Bedrock • Python",
    link: "https://github.com/SdAkhil/Nimbus",
  },
];

export const experience = [
  {
    role: "Generative AI / OpenAI Developer",
    company: "SBS Corp, Texas",
    duration: "Oct 2023 – Oct 2025",
    bullets: [
      "Architected and deployed a scalable Azure-based data processing system, improving data availability and cutting manual effort by 40%.",
      "Developed and maintained ETL pipelines for unstructured data, achieving 95% accuracy for downstream AI models.",
      "Integrated Azure Speech Services and GPT-3.5 to automate transcription-to-content workflows, boosting efficiency by 30%.",
      "Built a React web app enabling seamless audio uploads and automated content generation via Azure Functions.",
    ],
    stack: [
      "Azure Cognitive Services",
      "Azure OpenAI",
      "Azure Functions",
      "Azure Speech Services",
      "React.js",
      "Python",
    ],
  },
  {
    role: "Data Engineer",
    company: "Accenture, India",
    duration: "Jan 2022 – Aug 2023",
    bullets: [
      "Built Power BI dashboards across 50+ healthcare facilities, enhancing operational insights and reducing reporting delays.",
      "Optimized ETL pipelines in SQL (Snowflake) and Python (Pandas, NumPy), reducing data load time by 30%.",
      "Automated data ingestion using Airflow, AWS Glue, and dbt, achieving 40% faster reporting cycles.",
      "Integrated Apache Kafka and MongoDB for real-time feedback streaming and analytics performance tracking.",
    ],
    stack: [
      "SQL (Snowflake)",
      "Python (Pandas, NumPy, Scikit-learn)",
      "Apache Spark",
      "Apache Airflow",
      "AWS Glue",
      "dbt",
      "Apache Kafka",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "Power BI",
      "Excel",
      "Git",
      "HIPAA-Compliant Cloud Infrastructure",
    ],
  },
  {
    role: "Data Analyst",
    company: "Wipro, India",
    duration: "Jul 2021 – Dec 2021",
    bullets: [
      "Designed Tableau dashboards and Excel reports integrating multiple data sources for real-time decision support.",
      "Optimized SQL queries for performance tracking, improving data retrieval speed and report accuracy.",
      "Automated KPI reporting pipelines, combining Excel, Tableau, and SQL insights for executive-level analytics.",
      "Led Jira-based task tracking and prioritization to streamline workflow management.",
    ],
    stack: [
      "SQL",
      "Oracle PL/SQL",
      "Python (Basics)",
      "Tableau",
      "Excel",
      "JIRA",
      "Power BI",
      "Client Reporting Tools",
      "Data Pipelines",
    ],
  },
];


export const skills = {
  Languages: ["Python", "SQL", "Java (Basics)", "Shell Scripting"],
  DevOps_and_Tools: [
    "Git",
    "JIRA",
    "Confluence",
    "Agile/Scrum",
    "Client Reporting Tools",
  ],
  
  AI_and_ML: [
    "Large Language Models (LLMs)",
    "OpenAI API",
    "Azure OpenAI",
    "Azure Cognitive Services",
    "Azure Speech Services",
    "Google T5-Small",
    "Machine Learning",
    "Natural Language Processing (NLP)",
    "RAG Pipelines",
    "FAISS Vector DB",
  ],

  Cloud_and_Infrastructure: [
    "Azure (Functions, Cognitive Services, OpenAI)",
    "AWS (S3, Glue, Bedrock, CloudFront, Cognito, API Gateway, DynamoDB)",
    "Google Cloud Platform (BigQuery)",
    "Kubernetes",
    "Docker",
  ],
  Big_Data_and_Processing: [
    "MPI",
    "Multiprocessing",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Data Modeling",
    "ETL Pipelines",
  ],
  Databases_and_Warehousing: [
    "Snowflake",
    "Google BigQuery",
    "MongoDB",
    "MySQL",
    "Oracle PL/SQL",
    "SQL (Snowflake)",
    "Data Warehousing (Star & Snowflake Schemas)",
  ],
  Data_Visualization_Analytics_Tools: [
    "Power BI",
    "Tableau",
    "Excel (Power Query, PivotTables)",
  ],
  Security_and_Compliance: [
    "IAM",
    "HIPAA Compliance",
    "Cloud Security",
  ],
  Frameworks_and_Libraries: [
    "Apache Spark",
    "Apache Airflow",
    "AWS Glue",
    "dbt",
    "LangChain",
    "LangGraph",
    "Streamlit",
    "React.js",
    "TensorFlow",
    "Scikit-learn",
    "Hugging Face Transformers",
    "Flask",
    "FastAPI",
  ],
  
  
};


export const volunteering = [
  {
    title: "Guest Speaker (AI)",
    org: "Central Magnet School, TN",
    desc: "Delivered a session on AI concepts like A* pathfinding to high school students.",
  },
  {
    title: "Mentor",
    org: "MTSU LEGO Robotics, TN",
    desc: "Mentored students in Python and robotics to promote hands-on STEM learning for women.",
  },
  {
    title: "Volunteer Lead",
    org: "Nashville Tech Council Summit 2024, TN",
    desc: "Coordinated volunteers and managed event operations, collaborating with AI and data leaders.",
  },
];
