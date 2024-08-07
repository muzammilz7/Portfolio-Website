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
  { skill: "Kali Linux" },
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
            <h1 className="about_content">About </h1>
            <p className="about_par">
            I'm a dedicated Software Developer with a strong passion for web development and 
            cybersecurity. I thrive on crafting user-friendly web applications and enhancing
            digital security. My journey involves continuous learning and exploration to
            make the digital world safer and more accessible. <br></br><br></br>In my free time, I enjoy delving
            into the latest web development frameworks and security technologies. This curiosity
            has driven me to tackle various challenges, from building responsive and dynamic
            websites to analyzing and strengthening cybersecurity measures.
            </p>
            <h2 className="about_interests">Interests:</h2>
            <ul className="about_skills">
              {skills.map((skill, index) => (
                <li key={index}>{skill.skill}</li>
              ))}
            </ul>
          </div>
          <div className="about_pic">
            <img src="/images/imagemeeting.png" alt="logoimage" />
          </div>
        </div>
      </section>
    </>
  );
}