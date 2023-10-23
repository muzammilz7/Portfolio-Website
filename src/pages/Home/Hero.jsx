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
          I'm a dedicated Software Developer with a strong passion for web development and cybersecurity. I thrive on crafting user-friendly web applications and enhancing digital security. 
          My journey involves continuous learning and exploration to make the digital world safer and more accessible. 
            <br /> 
          </p>
          <div className="hero_buttons">
            <a
              href="https://github.com/muzammilz7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="GithubLogo.png" alt="GitHub" />
              
            </a>
            <a
              href="https://www.linkedin.com/in/muzammil-zaman-9a8769263/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="linkedinLogo.png" alt="LinkedIn" />
              
            </a>
          </div>
        </div>
      </div>
      <div className="hero_image">
        <img src="myPic.png" alt="" />
      </div>
    </section>
  );
}