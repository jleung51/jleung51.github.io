import React from 'react';

// Fonts must be imported before other components
import './App.css';
import './Fonts.css';

import {colors} from './Colors.js';

// Components
import {Sidebar} from './sidebar/Sidebar.js';
import {TechnicalExperience} from './technical-experience/TechnicalExperience.js';

class Panes extends React.Component {
  render() {
    const styling = {
      height: "100vh",

      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      textAlign: "center",

      overflow: "hidden",
    };

    return (
      <div style={styling}>
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
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: colors.primaryBackground,
      },
    };

    return (
      <div style={styling.pane}>
        <Sidebar />
      </div>
    );
  }
}

class PaneRight extends React.Component {
  render() {
    const paneStyling = {
      display: "flex",

      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",

      marginLeft: "5vw",

      overflowY: "always",
    };

    return (
      <div style={paneStyling}>
        <TechnicalExperience />
        <p>Content</p>
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
