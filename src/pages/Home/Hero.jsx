import React from "react";

export default function Hero() {
  return (
    <section id="hero_sec" className="hero_sec_class">
      <div className="hero_content">
        <div className="hero_content_two">
          <div className="hero_title">Hey, I'm Muzammil</div>
          <h1 className="hero_title_sec">
            <span className="hero_message">Software Developer</span>
            <br />
          </h1>
          <p className="hero_info">
            I am a second-year Computer Science student, deeply committed to
            academic excellence and technological innovation. With a relentless
            pursuit of knowledge, I am prepared to explore the transformative
            potential of technology in shaping our daily lives.
            <br />
          </p>
          <div className="hero_buttons">
            <a
              href="https://github.com/muzammilz7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/wGithubImg.png" alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/muzammil-zaman-9a8769263/"
              target="_blank"
              rel="noopener noreferrer"
            >

              
              <img src="images/wLinkedinImg.png" alt="LinkedIn" />
              
            </a>
          </div>
        </div>
      </div>
      <div className="hero_image">
        <img src="images/myPic.png" alt="" />
      </div>
    </section>
  );
}