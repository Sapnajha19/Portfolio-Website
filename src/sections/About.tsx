import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
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
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Bonjour! My name is Sapna, and I am passionate about creating
            digital content for the web. Being a frontend developer feels amazing; it&apos;s my canvas for turning visions into visual masterpieces. As I embarked on this creative journey, I found my inspiration in the art of user interfaces. Crafting elegant designs and interactive experiences has become my daily ritual.
          </p>
          <p className="about-grid-info-text">
            Fast-forward to today, I specialize in designing and developing
            high-quality frontend solutions that delight our clients and exceed their
            expectations at{" "}
            <Link href="https://rapidops.com" className="link" target="_blank">
              Codseg.
            </Link>
          </p>

          <p className="about-grid-info-text">
          Additionally, I love contributing to open-source projects, enriching my skills while collaborating with fellow developers from around the globe. The sense of community and shared knowledge in the open-source world has not only sharpened my abilities but also widened my horizons, making each contribution an invaluable part of my journey.
          </p>
          <p className="about-grid-info-text">
            I am also getting my hands on backend&nbsp;
            {/* <Link
              className="link"
              target="_blank"
              href="https://frontendvita.com"
            >
              FrontendVita,
            </Link> */}
            &nbsp;aiming to become a full stack developer.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Python</li>
            <li className="about-grid-info-list-item">Git & Github</li>
            <li className="about-grid-info-list-item">Javascript</li>
            <li className="about-grid-info-list-item">CSS</li>
            <li className="about-grid-info-list-item">HTML</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/sapna.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
