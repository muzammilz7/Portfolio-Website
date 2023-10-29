import React, { useState } from 'react';

export default function Experience() {
  const [isHovered, setIsHovered] = useState(false);

  const handleImageToggle = () => {
    setIsHovered(!isHovered);
  };

  return (
    <section className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-details">
        <div
          className="experience-entry"
          onMouseEnter={handleImageToggle}
          onMouseLeave={handleImageToggle}
        >
          <h3 className="experience-position">Vice President of Events</h3>
          <p className="experience-company">Guelph Cyber Security Society</p>
          <p className="experience-date">August 2023 - Present</p>
          <p className="experience-description">
            Ethical Hacking<br></br>Networking<br></br>Leadership<br></br>Linux

          </p>
          <div className="experience-image">
          <img
          src={isHovered ? 'images/meetingImg.png' : 'images/guelphCSSImg.png'}
          alt="Team Meeting"
        />
          </div>
        </div>
      </div>
    </section>
  );
}