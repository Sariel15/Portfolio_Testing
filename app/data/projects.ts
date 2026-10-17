export interface Project {
  slug: string;
  title: string;
  description: string;
  overview: string;
  stack: string[];
  role: string;
  year: string;
  featured: boolean;
  screenshots?: {
    src: string;
    alt: string;
  }[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    slug: "er-concierge",
    title: "ER Concierge",
    description: "A web-based system supporting emergency room workflows.",
    overview:
      "A healthcare information system designed to support " +
      "clinical workflows, patient documentation, and " +
      "information management. ",
    stack: ["Vue 3", "Laravel", "SQL Server", "MariaDB", "Bootstrap 4"],
    role: "Information Systems Analyst / Developer",
    year: "2025–2026",
    featured: true,
    screenshots: [
      {
        src: "/images/projects/er-concierge/dashboard.jpg",
        alt: "ER Concierge dashboard",
      },
      {
        src: "/images/projects/er-concierge/dashboard2.jpg",
        alt: "ER Concierge dashboard2",
      },
    ],
  },
  {
    slug: "histopath",
    title: "HISTOPATH",
    description: "A web-based system supporting histopathology workflows.",
    overview:
      "An application project focused on organizing information " +
      "and supporting laboratory-related workflows.",
    stack: ["Vue 3", "Laravel", "SQL", "MariaDB", "Tailwind CSS"],
    role: "Developer",
    year: "2025–2026",
    featured: true,
  },
  {
    slug: "ehwc-appointment",
    title: "EHWC Appointment",
    description: "A web-based system for managing appointments at EHWC.",
    overview:
      "EHWC Appointment is a web application" +
      "focused on streamlining the appointment process.",
    stack: ["Vue 3", "Laravel", "Tailwind CSS", "SQL Server"],
    role: "Designer and Developer",
    year: "2026",
    featured: true,
  },
];
