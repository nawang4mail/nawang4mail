import React from "react";
import PropTypes from "prop-types";

import devDotToIcon from "../images/socials/devdotto.svg";
import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import mediumIcon from "../images/socials/medium.svg";
import twitterIcon from "../images/socials/twitter.svg";
import youTubeIcon from "../images/socials/youtube.svg";

const Footer = (props) => {
  const { devDotTo, email, gitHub, instagram, linkedIn, medium, name, twitter, youTube } = props;

  return (
    <div id="footer">
      <div className="footer-socials">
        {email && (
          <a href={`mailto:${email}`} aria-label="Email">
            <img src={envelopeIcon} alt="email" className="socialIcon" />
          </a>
        )}
        {devDotTo && (
          <a href={`https://dev.to/${devDotTo}`} target="_blank" rel="noopener noreferrer" aria-label="Dev.to">
            <img src={devDotToIcon} alt="Dev.to" className="socialIcon" />
          </a>
        )}
        {gitHub && (
          <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
          </a>
        )}
        {instagram && (
          <a href={`https://www.instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src={instagramIcon} alt="Instagram" className="socialIcon" />
          </a>
        )}
        {linkedIn && (
          <a href={`https://www.linkedin.com/in/${linkedIn}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
          </a>
        )}
        {medium && (
          <a href={`https://medium.com/@${medium}`} target="_blank" rel="noopener noreferrer" aria-label="Medium">
            <img src={mediumIcon} alt="Medium" className="socialIcon" />
          </a>
        )}
        {twitter && (
          <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <img src={twitterIcon} alt="Twitter" className="socialIcon" />
          </a>
        )}
        {youTube && (
          <a href={`https://www.youtube.com/c/${youTube}`} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <img src={youTubeIcon} alt="YouTube" className="socialIcon" />
          </a>
        )}
      </div>
      <p className="footer-credit">Built by {name}</p>
    </div>
  );
};

Footer.defaultProps = { name: "" };

Footer.propTypes = {
  devDotTo: PropTypes.string,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  medium: PropTypes.string,
  name: PropTypes.string.isRequired,
  twitter: PropTypes.string,
  youTube: PropTypes.string,
};

export default Footer;
