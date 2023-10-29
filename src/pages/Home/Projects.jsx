import React from 'react';

const projects = [
  {
    title: "SpamGuard-ML",
    image: "images/projectOne.png", 
    link: "https://example.com/project1",
    githubLink: "https://github.com/muzammilz7/SpamGuard-ML",
  },
  {
    title: "ProFile-LL",
    image: "images/projectTwoImg.png",
    link: "https://example.com/project3",
    githubLink: "https://github.com/muzammilz7/ProFile-LL",
  },
  {
    title: "PassGenerator",
    image: "images/passwordgenimg.png", 
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


  const githubProfileLink = "https://github.com/muzammilz7";

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
              <img src="images/GithubLogo.png" alt="GitHub" /> 
            </a>
          </div>
        ))}
      </div>

   
      <div className="show-more-button">
        <a href={githubProfileLink} target="_blank" rel="noopener noreferrer">
          Show More 
        </a>
      </div>
    </section>
  );
}