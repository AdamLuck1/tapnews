import './AboutMe.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import React from 'react';


class AboutMe extends React.Component {
  render() {
    return (
      <div className='container-fluid aboutme_container card'>
        <div className='avatar'>
          <img src={avatar_url} alt='avatar' />
        </div>
        <h2>Syed Adnan</h2>
        <div className='intro'>
        Student of computer science and gaming.
        An unranked LOL player.
        Into Python, Javascript, Unity, and a lot.
        FB SDE Intern for Summer 2019.
        </div>
        <div className='contact'>
          <a href='https://github.com/syedadnandev'>
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href='https://www.linkedin.com/in/syedadnan-dev/'>
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </div>
      </div>
    );
  }
}

export default AboutMe;
