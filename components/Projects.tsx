import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href="https://staging.bornali.sscl.tech/login"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/prime.png"
                height={150}
                width={150}
                alt="Ashiqur Rahman - Software Engineer"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Prime-Shonjog</p>
                <p className="text-gray-500 text-[10px]">
                  working on the dynamic report system, which provides real-time
                  insights into sales, inventory, and customer behavior.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://axbdtransport.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/augmedix-logo.png"
                height={150}
                width={150}
                alt="Ashiqur Rahman - Software Engineer"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Augmedix Transport Management System</p>
                <p className="text-gray-500 text-[10px]">
                  Developed a web application on Next.js that allows users to
                  apply for jobs, create job posts, and manage their company
                  profiles.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="https://www.vergesystems.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/chat.png"
                height={150}
                width={150}
                alt="Ashiqur Rahman - Software Engineer"
              />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                  ChatInstant
                </p>
                <p className="text-gray-500 text-[10px]">
                  Developed the Verge Systems website using React.js.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://devtalkapp.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/devtalk.png"
                height={150}
                width={150}
                alt="Ash - UX Design Project"
              />
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl">DevTalk</p>
                <p className="text-gray-500 text-[10px]">
                  Designed the modern UI for a banking website utilizing Gatsby.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
