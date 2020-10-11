import React from 'react';

import {MasonryGallery} from './Masonry.js';

// Images
// import cradle from './cradle.jpg';

export class TechnicalExperience extends React.Component {

  render() {
    const styling = {
      flexDirection: "column"
    };

    const projects = [
      // {
      //   src: cradle,
      //   alt: 'Cradle'
      // },
    ];

    return (
      <div>
        <h1 style={styling}>Technical Experience</h1>
        <MasonryGallery elements={projects} />
      </div>
    );
  }
}