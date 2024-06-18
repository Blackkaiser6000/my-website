import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faPhp, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        <div className="column">
          <div className="skills-item html" title="Advanced">
            <FontAwesomeIcon icon={faHtml5} size="2x" className="html-icon" />
            <h3>HTML5</h3>
            <p>Advanced</p>
          </div>
          <div className="skills-item css" title="Advanced">
            <FontAwesomeIcon icon={faCss3Alt} size="2x" className="css-icon" />
            <h3>CSS3</h3>
            <p>Advanced</p>
          </div>
          <div className="skills-item js" title="Intermediate">
            <FontAwesomeIcon icon={faJs} size="2x" className="js-icon" />
            <h3>JavaScript</h3>
            <p>Intermediate</p>
          </div>
        </div>
        <div className="column">
          <div className="skills-item react" title="Intermediate">
            <FontAwesomeIcon icon={faReact} size="2x" className="react-icon" />
            <h3>React</h3>
            <p>Intermediate</p>
          </div>
          <div className="skills-item php" title="Intermediate">
            <FontAwesomeIcon icon={faPhp} size="2x" className="php-icon" />
            <h3>PHP</h3>
            <p>Intermediate</p>
          </div>
          <div className="skills-item database" title="Intermediate">
            <FontAwesomeIcon icon={faDatabase} size="2x" className="database-icon" />
            <h3>PHPMyAdmin</h3>
            <p>Intermediate</p>
          </div>
          <div className="skills-item python" title="Intermediate">
            <FontAwesomeIcon icon={faPython} size="2x" className="python-icon" />
            <h3>Python</h3>
            <p>Intermediate</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
