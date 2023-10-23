import React from "react";

function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-links">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedinLogo.png" alt="LinkedIn" />
        </a>
        <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
          <img src="/GithubLogo.png" alt="GitHub" />
        </a>
      </div>
      <p>&copy; 2023 Muzammil Zaman</p>
    </footer>
  );
}

export default Footer;