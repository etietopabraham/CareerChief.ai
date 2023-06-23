import CheckIcon from "@/public/svgs/CheckIcon";
import ShareIcon from "@/public/svgs/ShareIcon";
import SmallMessageIcon from "@/public/svgs/SmallMessageIcon";
import TimesIcon from "@/public/svgs/TimesIcon";
import { TableItem } from "@/styles/jobs.styles";
import { truncateText } from "@/utils/libs";

export const SORT_ITEMS = [
  "Date of Post",
  "Number of Candidates",
  "Salary",
  "Experience",
];

export const FILTER_ITEMS = [
  {
    name: "Job Type",
    sub: ["All", "Full-time", "Part-time", "Remote", "On Site", "Hybrid"],
  },
  {
    name: "Location",
    sub: ["St Petersburg", "Moscow", "Rostov"],
  },
  {
    name: "Source",
    sub: [
      "LinkedIn",
      "Careers",
      "Indeed",
      "HeadHunters",
      "Recruiter",
      "Referral",
      "IJP",
    ],
  },
];

export const JOBS = [
  {
    jobType: ["Full-time", "remote"],
    location: "St Petersburg, Russia",
    created: "2",
    team: "Marketing Team",
    role: "SQL Engineer / Data Engineer",
    salary: "150,000",
    experience: "3 Yrs in Data Analysis",
    source: "LinkedIn",
    numberOfCandidates: "100",
    content:
      "The job is primarily about the product development of services for the transformation of marketing data",
    details: {
      applicants: Array.from({ length: 100 }).map((_, index) => ({
        id: index + 1,
        name: `${truncateText(`John Doe ${index + 1}`, 13)}`,
        source:
          FILTER_ITEMS[2].sub[
            Math.floor(Math.random() * FILTER_ITEMS[2].sub.length)
          ],
        resumeRank: `4.${Math.floor(Math.random() * 9) + 1}`,
        aiAssessment: `4.${Math.floor(Math.random() * 9) + 1}`,
        aiInterview: `4.${Math.floor(Math.random() * 9) + 1}`,
        workStyle: `4.${Math.floor(Math.random() * 9) + 1}`,
        action: (
          <TableItem>
            <TimesIcon
              style={{ cursor: "pointer", height: "15px", width: "15px" }}
            />
            <CheckIcon
              style={{ cursor: "pointer", height: "15px", width: "15px" }}
            />
            <SmallMessageIcon
              style={{ cursor: "pointer", height: "15px", width: "15px" }}
            />
            <ShareIcon
              style={{ cursor: "pointer", height: "15px", width: "15px" }}
            />
          </TableItem>
        ),
      })),
    },
  },
  {
    jobType: ["Full-time", "remote"],
    location: "Moscow, Russia",
    created: "2",
    team: "Marketing Team",
    role: "SQL Engineer / Data Engineer",
    salary: "180,000",
    experience: "3 Yrs in Data Analysis",
    source: "Careers",
    numberOfCandidates: "140",
    content:
      "The job is primarily about the product development of services for the transformation of marketing data",
    details: {
      applicants: Array.from({ length: 140 }).map((_, index) => ({
        id: index + 1,
        name: `${truncateText(`John Doe ${index + 1}`, 13)}`,
        source:
          FILTER_ITEMS[2].sub[
            Math.floor(Math.random() * FILTER_ITEMS[2].sub.length)
          ],
        resumeRank: `4.${Math.floor(Math.random() * 9) + 1}`,
        aiAssessment: `4.${Math.floor(Math.random() * 9) + 1}`,
        aiInterview: `4.${Math.floor(Math.random() * 9) + 1}`,
        workStyle: `4.${Math.floor(Math.random() * 9) + 1}`,
        action: (
          <TableItem>
            <TimesIcon
              style={{ cursor: "pointer", height: "15px", width: "15px" }}
            />
            <CheckIcon
              style={{ cursor: "pointer", height: "15px", width: "15px" }}
            />
            <SmallMessageIcon
              style={{ cursor: "pointer", height: "15px", width: "15px" }}
            />
            <ShareIcon
              style={{ cursor: "pointer", height: "15px", width: "15px" }}
            />
          </TableItem>
        ),
      })),
    },
  },
  {
    jobType: ["Full-time", "Hybrid"],
    location: "St Petersburg, Russia",
    created: "2",
    team: "Marketing Team",
    role: "SQL Engineer / Data Engineer",
    salary: "150,000",
    experience: "3 Yrs in Data Analysis",
    source: "Indeed",
    numberOfCandidates: "102",
    content:
      "The job is primarily about the product development of services for the transformation of marketing data",
    details: {
      applicants: Array.from({ length: 102 }).map((_, index) => ({
        id: index + 1,
        name: `${truncateText(`John Doe ${index + 1}`, 13)}`,
        source:
          FILTER_ITEMS[2].sub[
            Math.floor(Math.random() * FILTER_ITEMS[2].sub.length)
          ],
        resumeRank: `4.${Math.floor(Math.random() * 9) + 1}`,
        aiAssessment: `4.${Math.floor(Math.random() * 9) + 1}`,
        aiInterview: `4.${Math.floor(Math.random() * 9) + 1}`,
        workStyle: `4.${Math.floor(Math.random() * 9) + 1}`,
        action: (
          <TableItem>
            <TimesIcon
              style={{ cursor: "pointer", height: "15px", width: "15px" }}
            />
            <CheckIcon
              style={{ cursor: "pointer", height: "15px", width: "15px" }}
            />
            <SmallMessageIcon
              style={{ cursor: "pointer", height: "15px", width: "15px" }}
            />
            <ShareIcon
              style={{ cursor: "pointer", height: "15px", width: "15px" }}
            />
          </TableItem>
        ),
      })),
    },
  },
  {
    jobType: ["Full-time", "remote"],
    location: "St Petersburg, Russia",
    created: "2",
    team: "Engineering Team",
    role: "SQL Engineer / Data Engineer",
    salary: "150,000",
    experience: "3 Yrs in Data Analysis",
    source: "HeadHunters",
    numberOfCandidates: "75",
    content:
      "The job is primarily about the product development of services for the transformation of marketing data",
    details: {
      applicants: Array.from({ length: 75 }).map((_, index) => ({
        id: index + 1,
        name: `${truncateText(`John Doe ${index + 1}`, 13)}`,
        source:
          FILTER_ITEMS[2].sub[
            Math.floor(Math.random() * FILTER_ITEMS[2].sub.length)
          ],
        resumeRank: `4.${Math.floor(Math.random() * 9) + 1}`,
        aiAssessment: `4.${Math.floor(Math.random() * 9) + 1}`,
        aiInterview: `4.${Math.floor(Math.random() * 9) + 1}`,
        workStyle: `4.${Math.floor(Math.random() * 9) + 1}`,
        action: (
          <TableItem>
            <TimesIcon
              style={{ cursor: "pointer", height: "15px", width: "15px" }}
            />
            <CheckIcon
              style={{ cursor: "pointer", height: "15px", width: "15px" }}
            />
            <SmallMessageIcon
              style={{ cursor: "pointer", height: "15px", width: "15px" }}
            />
            <ShareIcon
              style={{ cursor: "pointer", height: "15px", width: "15px" }}
            />
          </TableItem>
        ),
      })),
    },
  },
  {
    jobType: ["Full-time", "remote"],
    location: "St Petersburg, Russia",
    created: "2",
    team: "Marketing Team",
    role: "SQL Engineer / Data Engineer",
    salary: "150,000",
    experience: "3 Yrs in Data Analysis",
    source: "LinkedIn",
    numberOfCandidates: "194",
    content:
      "The job is primarily about the product development of services for the transformation of marketing data",
    details: {
      applicants: Array.from({ length: 194 }).map((_, index) => ({
        id: index + 1,
        name: `${truncateText(`John Doe ${index + 1}`, 13)}`,
        source:
          FILTER_ITEMS[2].sub[
            Math.floor(Math.random() * FILTER_ITEMS[2].sub.length)
          ],
        resumeRank: `4.${Math.floor(Math.random() * 9) + 1}`,
        aiAssessment: `4.${Math.floor(Math.random() * 9) + 1}`,
        aiInterview: `4.${Math.floor(Math.random() * 9) + 1}`,
        workStyle: `4.${Math.floor(Math.random() * 9) + 1}`,
        action: (
          <TableItem>
            <TimesIcon
              style={{ cursor: "pointer", height: "15px", width: "15px" }}
            />
            <CheckIcon
              style={{ cursor: "pointer", height: "15px", width: "15px" }}
            />
            <SmallMessageIcon
              style={{ cursor: "pointer", height: "15px", width: "15px" }}
            />
            <ShareIcon
              style={{ cursor: "pointer", height: "15px", width: "15px" }}
            />
          </TableItem>
        ),
      })),
    },
  },
];

export const APPLICANTS = Array.from({ length: 140 }).map((_, index) => ({
  id: index + 1,
  name: `${truncateText(`John Doe ${index + 1}`, 13)}`,
  source:
    FILTER_ITEMS[2].sub[Math.floor(Math.random() * FILTER_ITEMS[2].sub.length)],
  resumeRank: `4.${Math.floor(Math.random() * 9) + 1}`,
  aiAssessment: `4.${Math.floor(Math.random() * 9) + 1}`,
  aiInterview: `4.${Math.floor(Math.random() * 9) + 1}`,
  workStyle: `4.${Math.floor(Math.random() * 9) + 1}`,
  action: (
    <TableItem>
      <TimesIcon style={{ cursor: "pointer", height: "15px", width: "15px" }} />
      <CheckIcon style={{ cursor: "pointer", height: "15px", width: "15px" }} />
      <SmallMessageIcon
        style={{ cursor: "pointer", height: "15px", width: "15px" }}
      />
      <ShareIcon style={{ cursor: "pointer", height: "15px", width: "15px" }} />
    </TableItem>
  ),
}));

export const COLUMNS = [
  {
    key: "name",
    label: `Applicants(140) `,
  },
  {
    key: "source",
    label: `Source`,
  },
  {
    key: "resumeRank",
    label: `Resume Rank `,
  },
  {
    key: "aiAssessment",
    label: `AI Assessment`,
  },
  {
    key: "aiInterview",
    label: `AI Interview`,
  },
  {
    key: "workStyle",
    label: `Work Style`,
  },
  {
    key: "action",
    label: `Reject/Shortlist/ Engage`,
  },
];
