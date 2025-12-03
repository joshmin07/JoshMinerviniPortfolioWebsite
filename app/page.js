'use client';
import { useState } from 'react';
import styles from "./page.module.css";

export default function Home() {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Moonveil Studios, Beastbound",
      description: "A collaborative project focused on the development of an immersive 2D Top-down rogue-like game using the Unity 2D Engine.",
      technologies: ["C#", "Unity 2D", "GitHub", "C# Unity DOTS", "Sprite and Pixel Art Design"],
      discordLink: "https://discord.com/invite/k6YFMyvG9C",
      githubLink: "https://github.com/joshmin07",
      images: [
        "/project-placeholder-1.jpg",
        "/project-placeholder-2.jpg",
        "/project-placeholder-3.jpg"
      ]
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      description: "A modern portfolio website to showcase my projects and skills. Using Next.js for server-side rendering and optimized performance.",
      technologies: ["Next.js", "HTML", "CSS", "JavaScript", "GitHub"],
      link: "https://github.com/joshmin07/JoshMinerviniPortfolioWebsite"
    },
    {
      id: 3,
      title: "C, C++, Python, Java, JavaScript projects.",
      description: "Multiple projects and assignments completed during my coursework in various programming languages including C, C++, Python, Java, and scripting languages.",
      technologies: ["C", "C++", "Python", "Java", "JavaScript"],
      link: "https://github.com/joshmin07"
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "B.S. Undergraduate in Computer Science, University of Central Florida",
      description: "Currently seeking a B.S. in Computer Science at The University of Central Florida. Notable course work: Introduction to C Programming, Introduction to Python Programming, Introduction to C++ programming, Calculus I and II, Discrete Mathematics, Physics with Calculus I.",
      year: "2025-Present, Expected Graduation date: 2027"
    },
    {
      id: 2,
      title: "Adobe Certified Professional",
      description: "Achieved certification in Adobe Photoshop, Illustrator, Premiere Pro, and Dreamweaver.",
      year: "2023"
    },
    {
      id: 3,
      title: "Ronald W. Reagan Doral Senior Highschool Diploma",
      description: "Relevant coursework: 3D and VR Game Development using Unity Engine, Web Design using HTML, CSS, JavaScript with Adobe Dreamweaver, Graphic Design I,II using Adobe Photoshop and Illustrator.",
      year: "2023"
    }
  ];

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Josh Minervini</h1>
          <p className={styles.heroSubtitle}>Game/Web Developer & Designer</p>
          <p className={styles.heroDescription}>
            Welcome to my portfolio! I'm Josh Minervini, a passionate developer specializing in Game Development and Web Development. Explore my projects and get in touch!
          </p>
          <div className={styles.heroButtons}>
            <a href="#projects" className={styles.primaryButton}>View Projects</a>
            <a href="#contact" className={styles.secondaryButton}>Contact Me</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.section} id="about">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.aboutText}>
            Hello there! My name is Josh Minervini, 
            and I am currently seeking a B.S. in Computer Science at The University of Central Florida.
            I have a passion for Game and Web development and I aspire to become a full-stack developer, specializing in both fields.
            My main goals are to refine my skills with projects or internships where I can learn from senior developers.
            I am eager to contribute to innovative projects and collaborate with like-minded professionals in the tech industry. 
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.section} id="projects">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <div className={styles.grid}>
            {projects.map((project) => (
              <div key={project.id} className={`${styles.card} ${expandedProject === project.id ? styles.cardExpanded : ''}`}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.tech}>{tech}</span>
                  ))}
                </div>
                
                {expandedProject === project.id && project.images && (
                  <div className={styles.projectDetails}>
                    <div className={styles.projectImages}>
                      {project.images.map((image, index) => (
                        <div key={index} className={styles.imageWrapper}>
                          <img src={image} alt={`${project.title} screenshot ${index + 1}`} className={styles.projectImage} />
                        </div>
                      ))}
                    </div>
                    {(project.discordLink || project.githubLink) && (
                      <div className={styles.projectLinks}>
                        {project.discordLink && (
                          <a href={project.discordLink} target="_blank" rel="noopener noreferrer" className={styles.projectLinkButton}>
                            <svg className={styles.linkIcon} viewBox="0 0 127.14 96.36" fill="currentColor">
                              <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
                            </svg>
                            Discord Server
                          </a>
                        )}
                        {project.githubLink && (
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.projectLinkButton}>
                            <svg className={styles.linkIcon} viewBox="0 0 16 16" fill="currentColor">
                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                            GitHub Page
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                )}
                
                <button 
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                  className={styles.cardLink}
                >
                  {expandedProject === project.id ? 'Hide Details ↑' : 'View Project →'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className={styles.section} id="achievements">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Achievements</h2>
          <div className={styles.achievementsList}>
            {achievements.map((achievement) => (
              <div key={achievement.id} className={styles.achievementCard}>
                <div className={styles.achievementYear}>{achievement.year}</div>
                <div className={styles.achievementContent}>
                  <h3 className={styles.achievementTitle}>{achievement.title}</h3>
                  <p className={styles.achievementDescription}>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.section} id="contact">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <p className={styles.contactText}>
            I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
          <div className={styles.contactLinks}>
            <a href="mailto:moonveilstudiosbusiness@gmail.com" className={styles.contactButton}>Email Me</a>
            <a href="https://github.com/joshmin07" target="_blank" rel="noopener noreferrer" className={styles.contactButton}>GitHub</a>
            <a href="https://www.linkedin.com/in/joshua-minervini-5711641b9/" target="_blank" rel="noopener noreferrer" className={styles.contactButton}>LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2025 Josh Minervini. All rights reserved.</p>
      </footer>
    </div>
  );
}
