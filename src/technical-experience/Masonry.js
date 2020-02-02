import React from 'react';

import Masonry from 'react-masonry-component';

export class MasonryGallery extends React.Component {
    render() {
      const imagesLoadedOptions = {
        // background: ''
      };
    
      const childElements = this.props.elements.map(
        function(element){
          return (
            <li className={'image-element-class'} key={element.src}>
              <img src={element.src}  alt={element.alt} />
            </li>
          );
        }
      );
  
      return (
        <div style={this.props.style}>
          <Masonry
            columnWidth='75vw'
            elementType={'ul'} // Default: 'div'
            disableImagesLoaded={false} // Default: false
            updateOnEachImageLoad={false} // Default: false and works only if disableImagesLoaded is false
            imagesLoadedOptions={imagesLoadedOptions}
          >
            {childElements}
          </Masonry>
        </div>
      );
    }
  }