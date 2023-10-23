import React from 'react';

const skills = [
  { skill: "Python" },
  { skill: "C" },
  { skill: "Java" },
  { skill: "JavaScript" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "MySQL" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Networking" },
  { skill: "Assembly" },
  { skill: "Docker" },
  { skill: "Linux" },
  { skill: "NMap" },
  { skill: "Kali" },
  { skill: "WireShark" },
  { skill: "React" },
  { skill: "Pandas" },
  { skill: "Numpy" },
  { skill: "Scikit-Learn" },
];

export default function About() {
  return (
    <>
      <section id="about_sec" className="about_class">
        <div className="about_sec_info">
          <div className="about_hero">
            <h1 className="about_content">About Me</h1>
            <p className="about_par">
              About content
            </p>
            <h2 className="about_interests">Interests:</h2>
            <ul className="about_skills">
              {skills.map((skill, index) => (
                <li key={index}>{skill.skill}</li>
              ))}
            </ul>
          </div>
          <div className="about_pic">
            <img src="/imagemeeting.png" alt="logoimage" />
          </div>
        </div>
      </section>
    </>
  );
}