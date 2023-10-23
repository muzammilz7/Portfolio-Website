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
          <h3 className="experience-position">----</h3>
          <p className="experience-company">----</p>
          <p className="experience-date">August 2023 - Present</p>
          <p className="experience-description">
            ---
          </p>
          <div className="experience-image">
          <img
          src={isHovered ? 'meetingImg.png' : 'guelphCSSImg.png'}
          alt="Team Meeting"
        />
          </div>
        </div>
      </div>
    </section>
  );
}