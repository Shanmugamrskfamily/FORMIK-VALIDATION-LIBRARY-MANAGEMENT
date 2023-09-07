import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p className="mb-0">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://www.linkedin.com/in/shanmugamrskfamily/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            SHANMUGAM R <FaLinkedin size={30} />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
