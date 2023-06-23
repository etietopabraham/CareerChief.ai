import Image from "next/image";

export const NavData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Assessments",
    path: "/assessments",
  },
  {
    title: "Challenges",
    path: "/challenges",
  },
  {
    title: "Jobs",
    path: "/jobs",
  },
  {
    title: "AI Interview",
    path: "/ai-interview",
  },
  {
    title: "Schedule",
    path: "/schedule",
  },
];

export const RECOMMENDATION_CARDS = [
    {
        logo: <Image src={"/images/zero-logo.png"} alt="" height={63} width={63} />,
        title: "Senior/Staff NLP Engineer",
        companyName: "ZERO",
        location: "Yerevan, Armenia",
        description: "We are looking for a skilled and highly driven NLP Engineer with expertise in Large Language Models (LLMs) to join our team. The perfect candidate will possess a hackathon mindset…",
        jobType: ["Full-time", "Armenia, Erevan or Remote"],
        salary: "$5-8k",
        deadline: "Deadline: 16 July 2023",
    },
    {
        logo: <Image src={"/images/zero-logo.png"} alt="" height={63} width={63} />,
        title: "Senior/Staff NLP Engineer",
        companyName: "IMPROVADO",
        location: "Yerevan, Armenia",
        description: "Research the technology stack related to data work, including Python and SQL. Conduct a deep dive into the modern data analytics stack and metric layer…",
        jobType: ["Full-time", "Armenia, Erevan or Remote"],
        salary: "$5-8k net / month",
    },
]