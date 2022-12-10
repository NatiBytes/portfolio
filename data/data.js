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
    date: "2020 - present",
    iconSrc: <IoCodeWorking />,
    title: "Developer",
    location: "Wellington",
    description: "Lorem Ipsum",
  },
  {
    id: 2,
    date: "2019 - present",
    iconSrc: <IoCodeWorking />,
    title: "Developer",
    location: "Wellington",
    description: "Lorem Ipsum",
  },
  {
    id: 3,
    date: "2018 - present",
    iconSrc: <IoCodeWorking />,
    title: "Developer",
    location: "Wellington",
    description: "Lorem Ipsum",
  },
  {
    id: 4,
    date: "2017 - present",
    iconSrc: <IoCodeWorking />,
    title: "Developer",
    location: "Wellington",
    description: "Lorem Ipsum",
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
