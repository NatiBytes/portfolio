import type { NextPage } from "next";
import Head from "next/head";
import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { IoMenu, IoLogoGithub } from "react-icons/io5";
import Image from "next/image";
import profile from "../public/images/profile.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experiance, projects, SocialLinks } from "../data/data";
import { motion, AnimatePresence } from "framer-motion";

const Home: NextPage = () => {
  const [isActive, setIsActive] = useState(false);

  // Function to handle the download link click
  const handleDownloadClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent the default link behavior

    const downloadUrl =
      "https://raw.githubusercontent.com/NatnaelGebremichael/NatnaelGebremichael/4f593c03653f847fe20177b15527f6a13c664826/CV_Place_Holder_document.pdf"; // Provide the actual download URL
    const fileName = "Natnael_Gebremichael_CV.pdf"; // Specify the filename for the download

    // Ensure downloadUrl is not null before assigning it
    if (downloadUrl) {
      const downloadLink = document.createElement("a");
      downloadLink.href = downloadUrl;
      downloadLink.download = fileName; // Use the specified filename
      downloadLink.target = "_blank"; // Open in a new tab
      downloadLink.click();
    }
  };

  return (
    <AnimatePresence initial={false}>
      <div id="root">
        <div className="flex min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
          <Head>
            <meta
              name="google-site-verification"
              content="TIUrkchOlm9fPiQ_hEfy-3--R5cBqUlVtCsHjhS6tkI"
            />

            <title>Nati Web</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/icon.ico" />
          </Head>

          {/* Navigation Bar*/}
          <nav className="w-full px-6 z-50 fixed insert-x-0 top-2 flex justify-center items-center">
            <div className="w-full md:w-880 p-4 rounded-2xl flex items-center bg-navBar">
              <p className="text-lg text-slate-200 font-medium">
                Natnael Gebremichael
              </p>
              <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
                <a
                  href="#home"
                  className="tetxt-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                >
                  {" "}
                  Home
                </a>
                <a
                  href="#about"
                  className="tetxt-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                >
                  {" "}
                  About
                </a>
                <a
                  href="#project"
                  className="tetxt-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                >
                  {" "}
                  Projects
                </a>
                <a
                  href="#contact"
                  className="tetxt-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                >
                  {" "}
                  Contacts
                </a>
                <a
                  href="https://raw.githubusercontent.com/NatnaelGebremichael/NatnaelGebremichael/4f593c03653f847fe20177b15527f6a13c664826/CV_Place_Holder_document.pdf"
                  className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1
              rounded-xl hover:border-gray-100 duration-100 ease-in-out"
                  onClick={handleDownloadClick} // Attach the click handler
                  download="Natnael_Gebremichael_CV.pdf" // Add the download attribute
                >
                  Download
                </a>
              </div>
              <motion.div
                whileTap={{ scale: 0.5 }}
                className="block md:hidden ml-auto cursor-pointer"
                onClick={() => setIsActive(!isActive)}
              >
                <IoMenu className="text-2xl text-textBase" />
              </motion.div>

              {isActive && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1.1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ type: "spring", delay: 0.1 }}
                  className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center 
                  justify-evenly gap-6"
                >
                  <a
                    href="#home"
                    className="tetxt-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                    onClick={() => setIsActive(false)}
                  >
                    {" "}
                    Home
                  </a>
                  <a
                    href="#about"
                    className="tetxt-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                    onClick={() => setIsActive(false)}
                  >
                    {" "}
                    About
                  </a>
                  <a
                    href="#project"
                    className="tetxt-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                    onClick={() => setIsActive(false)}
                  >
                    {" "}
                    Projects
                  </a>
                  <a
                    href="#contact"
                    className="tetxt-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                    onClick={() => setIsActive(false)}
                  >
                    {" "}
                    Contacts
                  </a>
                  <motion.a
                    whileTap={{ scale: 0.8 }}
                    href="#"
                    className="
                onClick={() => setIsActive(false)}text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1
              rounded-xl hover:border-gray-100 duration-100 ease-in-out"
                    onClick={() => setIsActive(false)}
                  >
                    Download
                  </motion.a>
                </motion.div>
              )}
            </div>
          </nav>

          <div
            className="flex w-screen h-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20"
            id="home"
          >
            <Spline scene="https://prod.spline.design/0zePFgYYBpN7GtSq/scene.splinecode" />

            <div className="absolute bottom-10 w-full justify-center items-center flex">
              <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl">
                <p className="text-white "> Press and drag to orbit </p>
              </div>
            </div>
          </div>

          {/* main Sections*/}
          <main className="w-[80%] mt-5">
            {/** About Section */}
            <section
              className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
              id="about"
            >
              {/**Image Box */}
              <div className="w-full h-42 flex items-center justify-center">
                <div className="w-275 h-340 bg-emerald-200 rounded-md relative">
                  <Image
                    className="w-full h-full absolute -right-4 top-4 object-cover
                  rounded-lg shadow-lg"
                    src={profile}
                    alt="profilePic"
                  ></Image>
                </div>
              </div>

              {/**Content Box */}
              <div className="w-full h-420 flex flex-col items-center justify-center">
                <p className="text-lg text-textBase text-center">
                  Results-driven professional with over 2 years of experience in
                  DevOps, community engagement, and technical leadership roles.
                  Adept at collaborating in cross-functional teams,
                  communicating technical concepts to non-technical
                  stakeholders, and continuously learning to stay up-to-date
                  with industry trends. Strong collaborator with excellent
                  communication and organizational skills.
                </p>

                <motion.button
                  whileTap={{ scale: 0.8 }}
                  className="w-full md:w-auto relative mt-6 inline-flex items-center 
              justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium
               text-gray-900 rounded-lg group bg-gradient-to-br from-green-400
                to-blue-600 group-hover:from-green-400 group-hover:to-blue-600
                 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200
                  dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50
                   hover:dark:shadow-lg hover:dark:shadow-teal-800/80"
                >
                  <span
                    className="w-full md:w-auto relative px-5 py-2.5 transition-all 
                    ease-in duration-75 bg-white dark:bg-gray-900 rounded-md 
                    group-hover:bg-opacity-0"
                  >
                    Download
                  </span>
                </motion.button>
              </div>
            </section>

            {/** Time Line */}
            <section className="w-full flex items-center justify-center">
              <VerticalTimeline className="">
                {Experiance &&
                  Experiance.map((n) => (
                    <VerticalTimelineElement
                      key={n.id}
                      className="vertical-timeline-element--work"
                      contentStyle={{
                        background: "rgb(21,24,31)",
                        color: "#888",
                      }}
                      contentArrowStyle={{
                        borderRight: "7px solid  rgb(21,24,31)",
                      }}
                      date={n.date}
                      iconStyle={{ background: "rgb(21,24,31)", color: "#888" }}
                      icon={n.iconSrc}
                    >
                      <h3 className="vertical-timeline-element-title">
                        {n.title}
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle">
                        {n.location}
                      </h4>
                      <p>{n.description}</p>
                    </VerticalTimelineElement>
                  ))}
              </VerticalTimeline>
            </section>

            {/** Project Section */}
            <section
              className="flex flex-wrap items-center justify-evenly my-24 gap-4"
              id="project"
            >
              {projects &&
                projects.map((p) => (
                  <div
                    key={p.id}
                    className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out"
                  >
                    <p className="text-lg text-textBase font-medium uppercase">
                      {p.name.length > 25
                        ? `${p.name.slice(0, 25)}...`
                        : p.name}
                    </p>

                    <Image
                      src={p.images}
                      alt="Project Pic"
                      className="w-full h-full object-cover rounded-md my-4"
                    ></Image>
                    <div className="flex flex-1 items-center justify-between">
                      <p className="text-lg text-gray-300">
                        {" "}
                        Technologies
                        <span className="block text-sm text-gray-500">
                          {p.techs}
                        </span>
                      </p>
                      <a href={p.githublink}>
                        <motion.div whileTap={{ scale: 0.8 }}>
                          <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                        </motion.div>
                      </a>
                    </div>
                  </div>
                ))}
            </section>

            {/**  contacts */}
            <section
              id="contact"
              className="flex flex-col items-center justify-center w-full my-24"
            >
              <p className="text-2xl text-gray-400 capitalize"> Follow me on</p>

              <div className="flex items-center justify-center w-full my-4 flex-wrap gap-4">
                {SocialLinks &&
                  SocialLinks.map((s) => (
                    <motion.a
                      whileTap={{ scale: 0.8 }}
                      key={s.id}
                      href={s.link}
                      className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 
                    rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
                    >
                      {s.iconSrc}
                      <p className="text-lg text-textBase"> {s.name}</p>
                    </motion.a>
                  ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Home;
