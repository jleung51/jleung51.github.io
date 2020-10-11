import React from 'react';

// Usage:
//
// <LinkIcon image={Image} link={Hyperlink} />
//
export default class LinkIcon extends React.Component {

    render() {
      const styling = {

        image: {
          height: "auto",
          maxWidth: "40px",

          marginLeft: ".7em",
          marginRight: ".7em",
        },

      };

      const Image = this.props.image;
      const Link = this.props.link;

      return (
        <a href={Link} target="_blank noopener noreferrer">
            <Image style={styling.image}/>
        </a>
      );
    }
  }