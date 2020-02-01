import React from 'react';

// Fonts must be imported before other components
import './Fonts.css';

import {textStyles} from './TextStyles.js';
import {colors} from './Colors.js';

class Panes extends React.Component {
  render() {
    const paneStyling = {
      height: "100vh",
      
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      
      overflow: "hidden",
    };

    return (
      <div style={paneStyling}>
        <PaneLeft />
        <PaneRight />
      </div>
    );
  }
}

class PaneLeft extends React.Component {
  render() {
    const styling = {
      pane: {
        height: "100vh",
        width: "35vw",
        display: "flex",
        
        backgroundColor: colors.primaryBackground,

        float: "left",

        alignItems: "center",
        justifyContent: "center",
      }
    };

    return (
      <div style={styling.pane}>
        <div style={textStyles.title}>
          <p text>Jeffrey Leung</p>
        </div>
      </div>
    );
  }
}

class PaneRight extends React.Component {
  render() {
    const paneStyling = {
      display: "flex",
      float: "center",

      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "33vh",
      
      overflowY: "always",
    };

    return (
      <div style={paneStyling}>
        <p style={textStyles.p}>Content</p>
      </div>
    );
  }
}

function App() {
  const pageStyling = {
    minHeight: "100vh",

    backgroundColor: colors.offWhite,

  };

  return (
    <div style={pageStyling}>
      <Panes />
    </div>
  );
}

export default App;
