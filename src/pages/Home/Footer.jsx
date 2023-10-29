import React from "react";

function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/muzammil-zaman-9a8769263/" target="_blank" rel="noopener noreferrer">
          <img src="/images/wLinkedinImg.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/muzammilz7" target="_blank" rel="noopener noreferrer">
          <img src="images/wGithubImg.png" alt="GitHub" />
        </a>
      </div>
      <p>&copy; 2023 Muzammil Zaman</p>
    </footer>
  );
}

export default Footer;