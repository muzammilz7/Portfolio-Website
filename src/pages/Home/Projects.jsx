import React from 'react';

const projects = [
  {
    title: "SpamGuard-ML",
    image: "projectOne.png", // Replace with the actual image URL
    link: "https://example.com/project1",
    githubLink: "https://github.com/muzammilz7/SpamGuard-ML",
  },
  {
    title: "ProFile-LL",
    image: "projectTwoImg.png", // Replace with the actual image URL
    link: "https://example.com/project3",
    githubLink: "https://github.com/muzammilz7/ProFile-LL",
  },
  {
    title: "React-PasswordGenerator",
    image: "passwordgenimg.png", // Replace with the actual image URL
    link: "https://example.com/project2",
    githubLink: "https://github.com/muzammilz7/React-PasswordGenerator",
  },
];

export default function Project() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank');
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  return (
    <section className="projects_sec">
    <h2 className="experience-title">Projects</h2>
      <div className="project_info">
        {projects.map((project, index) => (
          <div className="project_box" key={index}>
            <p className="project_message">{project.title}</p>
            <img
              src={project.image}
              alt={project.title}
              onClick={() => openInNewTab(project.githubLink)} 
            />
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <img src="GithubLogo.png" alt="GitHub" /> 
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}