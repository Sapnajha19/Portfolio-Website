import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "Codseg",
      role: "Software Engineering Intern",
      url: "https://www.codseg.com/",
      start: "June 2023",
      end: "Present",
      shortDescription: [
        "Contributed to the development of the Scholar Sprint(online learning platform) project, utilizing Python and FastAPI for the backend and React.js for the frontend.",
        "Played a key role in making the website responsive for mobile devices, optimizing the user experience across different screen sizes.",
        "Actively engaged in an agile development environment, regularly receiving feedback and implementing improvements promptly.",
        "Shipped numerous user-centric features, enhancing the application’s functionality and user experience.",
        "Collaborated effectively with the team to fix bugs, optimize the user interface, and add new functionalities to enhance the overall performance of the application.",
        "Applied data handling and manipulation techniques to display statistics and user information dynamically",
        "Participated in creating automated tests, ensuring the reliability and robustness of the application."
      ],
    },
    {
      name: "RjitGeeks",
      role: "Frontend lead",
      url: "https://www.youtube.com/@rjitgeeks6270",
      start: "April 2022",
      end: "Present",
      shortDescription: [
        "Managed RjitGeeks coding community with my fellow team members, organized a diverse range of impactful events, workshops, bootcamps, and coding competitions for fellow students.",
        "Led initiatives that fostered skill development, collaboration, and engagement within the coding community, contributing to the growth of technical proficiency among peers.",
        "Led initiatives that fostered skill development, collaboration, and engagement within the coding community, contributing to the growth of technical proficiency among peers.",
      ],
    },
    // {
    //   name: "ACES",
    //   role: "President",
    //   url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
    //   start: "November 2019",
    //   end: "November 2020",
    //   shortDescription: [
    //     "As the elected President of the ACES Departmental Club, I successfully led a team of board members and executive committee members to organize and execute multiple events throughout the year.",
    //     "Additionally, I secured sponsorships from reputable brands to support our events.",
    //     "Overall, it was a rewarding experience that allowed me to develop my leadership skills while contributing positively to the growth of the organization.",
    //   ],
    // },
    // {
    //   name: "ISTE",
    //   role: "Web Developer",
    //   url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
    //   start: "November 2019",
    //   end: "November 2020",
    //   shortDescription: [
    //     "Write modern, performant, maintainable code for a diverse array of client and internal projects",
    //     "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
    //     "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
    //   ],
    // },
    // {
    //   name: "Shashaan",
    //   role: "Founder",
    //   url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
    //   start: "November 2018",
    //   end: "November 2021",
    //   shortDescription: [
    //     "While still a student, I founded a web hosting company that offered affordable hosting services.",
    //     "With over 300 customers, the business thrived until I graduated and sold it to another company.",
    //   ],
    // },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
