import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";
import dojo from "../public/images/dojo.jpg";
import tigraynz from "../public/images/tigraynz.jpg";

export const Experiance = [
  {
    id: 1,
    date: "NOVEMBER 2021 - PRESENT",
    iconSrc: <IoCodeWorking />,
    title: "Developer",
    location: "Datacom, Wellington",
    description:
      "Drupal Updates, ArcGIS Deployment, SendGrid Issue Resolution, Change Management, Monitoring, Hackathon Participation, Inmate Supplies Startup Initiative",
  },
  {
    id: 2,
    date: "JANUARY 2021 - JANUARY 2022",
    iconSrc: <IoCodeWorking />,
    title: "Vic Without Barriers Club Board Member",
    location: "Victoria university, Wellington",
    description:
      "Refugee Advocacy, Admin Management, Event Coordination, University Representation, Student Support",
  },
  {
    id: 3,
    date: "JANUARY 2021 - JANUARY 2022",
    iconSrc: <IoCodeWorking />,
    title: "Victoria African Student Association",
    location: "Victoria university, Wellington",
    description:
      "Cultural Events, Admin & Communication, University Engagement, Community Building, Student Representation",
  },
  {
    id: 4,
    date: "JANUARY 2021 - JANUARY 2022",
    iconSrc: <IoCodeWorking />,
    title: "Student Ambassador",
    location: "Victoria university, Wellington",
    description:
      "Orientation Activities, Campus Tours, Media Involvement, Public Speaking Skills, University Representation",
  },
  {
    id: 5,
    date: "JANUARY 2019 - MAY 2019",
    iconSrc: <IoCodeWorking />,
    title: "IT Technician",
    location: "GediTech, Ethiopia",
    description:
      "Fast-Paced Environment, Technical Troubleshooting, Equipment Repairs, Record Keeping, Student Training",
  },
  {
    id: 6,
    date: "DECEMBER 2018 - JAN 2019",
    iconSrc: <IoCodeWorking />,
    title: "Programme Coordinator",
    location: "Admas University, Ethiopia",
    description:
      "Fast-Paced Environment, Technical Troubleshooting, Equipment Repairs, Record Keeping, Student Training",
  },
];

export const projects = [
  {
    id: 1,
    name: "NzTigray",
    images: tigraynz,
    techs: "TYPESCRIPT, JAVASCRIPT, CSS",
    githublink: "#",
  },
  {
    id: 2,
    name: "dojo-blog",
    images: dojo,
    techs: "JAVASCRIPT, CSS, HTML",
    githublink: "#",
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "#",
  },
  {
    id: 2,
    iconSrc: <IoLogoYoutube className="text-red-500 text-3xl cursor-pointer" />,
    name: "YouTube",
    link: "#",
  },
  {
    id: 3,
    iconSrc: (
      <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
    ),
    name: "Twitter",
    link: "#",
  },
  {
    id: 4,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://linkedin.com/in/natnael-gebremichael-401796190",
  },
  {
    id: 5,
    iconSrc: (
      <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
    ),
    name: "Whatsapp",
    link: "#",
  },
];
