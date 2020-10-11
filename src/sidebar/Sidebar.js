import React from 'react';

// Components
import LinkIcon from './LinkIcon.js';

// Images
import logoPersonal from '../img/logo.svg';

import {ReactComponent as GitHubLogo} from '../img/link-icons/github.svg';
import {ReactComponent as LinkedInLogo} from '../img/link-icons/linkedin.svg';
import {ReactComponent as SubstackLogo} from '../img/link-icons/substack.svg';
import {ReactComponent as FacebookLogo} from '../img/link-icons/facebook.svg';
import {ReactComponent as InstagramLogo} from '../img/link-icons/instagram.svg';
import {ReactComponent as YouTubeLogo} from '../img/link-icons/youtube.svg';

export class Sidebar extends React.Component {

  render() {
    const styling = {

      sidebar: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      },

      name: {
        marginBottom: ".4em",
      },

      logoPersonal: {
        width: "8vw",

        marginBottom: "2.5em",
      },

      linksContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: "1em",
      },
      linkImg: {
        height: "auto",
        maxWidth: "40px",

        marginLeft: ".7em",
        marginRight: ".7em",
      },

    };

    return (
      <div style={styling.sidebar}>

        <p className="title" style={styling.name}>Jeffrey Leung</p>
        <img src={logoPersonal} style={styling.logoPersonal} alt="Logo" />

        <div style={styling.linksContainer}>
          <LinkIcon image={GitHubLogo} link="http://github.com/jleung51" />
          <LinkIcon image={LinkedInLogo} link="https://www.linkedin.com/in/jleung51" />
          <LinkIcon image={SubstackLogo} link="https://pennyforyourlogs.substack.com" />
        </div>

        <div style={styling.linksContainer}>
          <LinkIcon image={FacebookLogo} link="https://www.facebook.com/profile.php?id=1439766766" />
          <LinkIcon image={InstagramLogo} link="https://www.instagram.com/jleung51" />
          <LinkIcon image={YouTubeLogo} link="https://www.youtube.com/channel/UCuy5zhqsLltM39oQsBvfyZA" />
        </div>

      </div>
    );
  }
}