import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project1.png",
      projectName: "Google clone",
      projectLink: "https://googleclonewebsite.netlify.app/",
      projectDescription:
        "Developed a Google clone project using React JS. Created a responsive and user-friendly search engine interface that accurately retrieves and displays relevant search results.",
      projectTech: [
        "React",
        "Material UI",
        "Javascript",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://googleclonewebsite.netlify.app/",
      },
    },
    {
      image: "/project2.png",
      projectName: "Opensauced browser extension",
      projectLink: "",
      projectDescription:
        "Developed an extension that connects Github users to their open-sauced profile page if they are a signed-up user at open-sauced. Designed and implemented the extension to seamlessly integrate with users’ GitHub profiles, providing convenient access to their OpenSauced profiles directly from GitHub.",
      projectTech: [
        "React",
        "Vite",
        "Javascript",
        "Styled Components",
      ],
      projectExternalLinks: {
        github: "https://github.com/open-sauced-craftwork/open_sauced_craftwork_browser_extension-Sapnajha19",
        externalLink: "",
      },
    },
    {
      image: "/project3.png",
      projectName: "Emoji search app",
      projectLink: "https://emojimatcher.netlify.app/",
      projectDescription:
        "Developed a dynamic emoji search application using JavaScript and ReactJS. Implemented real-time filtering of emojis based on the user’s input, enhancing search accuracy. Integrated a clipboard copy feature, allowing users to effortlessly copy selected emojis for use in various applications and websites.",
      projectTech: [
        "React",
        "Javascript"
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://emojimatcher.netlify.app/",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
