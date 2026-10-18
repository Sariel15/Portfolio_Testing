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
    description:
      "A healthcare information system built to support emergency room workflows and patient documentation.",
    overview:
      "ER Concierge is a web-based healthcare information system focused on the information needs of emergency room teams. It supports clinical workflows, patient documentation, and the organization of care-related information.",
    stack: ["Vue 3", "Laravel", "SQL Server", "MariaDB", "Bootstrap 4"],
    role: "Information Systems Analyst / Developer",
    year: "2025–2026",
    featured: true,
  },
  {
    slug: "histopath",
    title: "HISTOPATH",
    description:
      "A digital system that streamlines patient registration, specimen and procedure requests, result encoding, and result release for the histopathology laboratory.",
    overview:
      "HISTOPATH simplifies and digitalizes the histopathology laboratory department's workflow. Staff can register patients, render specimen and procedure requests, encode results, release completed results, and print them.",
    stack: ["Vue 3", "Laravel", "SQL", "MariaDB", "Tailwind CSS"],
    role: "Developer",
    year: "2025–2026",
    featured: true,
    screenshots: [
      {
        src: "/images/projects/histopath/HistopathLogin.png",
        alt: "HISTOPATH Login Page",
      },
      {
        src: "/images/projects/histopath/HistopathRegistration.png",
        alt: "HISTOPATH Registration Page",
      },
    ],
  },
  {
    slug: "ehwc-appointment",
    title: "EHWC Appointment",
    description:
      "A website for employees to register for and cancel appointments at the Employees Clinic.",
    overview:
      "EHWC Appointment lets employees register for appointments with the Employees Clinic and cancel an appointment when needed, bringing both actions into one simplified website.",
    stack: ["Vue 3", "Laravel", "Tailwind CSS", "SQL Server"],
    role: "Designer and Developer",
    year: "2026",
    featured: true,
    screenshots: [
      {
        src: "/images/projects/ehwc/EHWCLogin.png",
        alt: "EHWC Appointment Login Page",
      },
      {
        src: "/images/projects/ehwc/EHWCRegistration.png",
        alt: "EHWC Appointment Registration Page",
      },
      {
        src: "/images/projects/ehwc/EHWCDashboard.png",
        alt: "EHWC Appointment Dashboard Page",
      }
    ],
  },
];
