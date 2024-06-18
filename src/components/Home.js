import React, { useEffect, useRef } from 'react';
import { ReactTyped as Typed } from 'react-typed';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Home() {
  const buttonsRef = useRef(null);
  const socialLinksRef = useRef(null);

  useEffect(() => {
    const buttons = buttonsRef.current.querySelectorAll('.btn');
    const socialLinks = socialLinksRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          buttons.forEach(button => button.classList.add('show'));
          socialLinks.classList.add('show-icons');
        } else {
          buttons.forEach(button => button.classList.remove('show'));
          socialLinks.classList.remove('show-icons');
        }
      });
    }, { threshold: 0.5 });

    observer.observe(buttonsRef.current);

    return () => {
      if (buttonsRef.current) {
        observer.unobserve(buttonsRef.current);
      }
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content" ref={buttonsRef}>
        <h1>Carl John Zamudio</h1>
        <h2>
  <Typed
    strings={[
      '<span class="web-developer">Web Developer</span>',
      '<span class="front-end-developer">Front-End Developer</span>',
      '<span class="javascript-enthusiast">JavaScript Enthusiast</span>',
      '<span class="react-developer">React Developer</span>'
    ]}
    typeSpeed={40}
    backSpeed={50}
    loop
    smartBackspace
    shuffle={false}
  />
</h2>

        <p>Welcome to my portfolio! I'm a web developer with a passion for creating beautiful and functional websites.</p>
        <a href="#projects" className="btn btn-work">View My Work</a>
        <a href="/resume.pdf" className="btn btn-resume" download>Download Resume</a>
        <div className="social-links" ref={socialLinksRef}>
      <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="social-link">
        <FontAwesomeIcon icon={faLinkedin} style={{ color: '#0077B5' }} />
      </a>
      <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="social-link">
        <FontAwesomeIcon icon={faGithub} style={{ color: '#ffffff' }} />
      </a>
      <a href="https://www.facebook.com/johndoe" target="_blank" rel="noopener noreferrer" className="social-link">
        <FontAwesomeIcon icon={faFacebook} style={{ color: '#1877F2' }} />
      </a>
    </div>
      </div>
    </section>
  );
}

export default Home;
