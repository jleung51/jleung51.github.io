import React from 'react';
import './App.css';

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
        
        float: "left",

        alignItems: "center",
        justifyContent: "center",

      },

      name: {
        // display: "table-cell",
        // verticalAlign: "middle",
        // padding: "20vmin"
      }
    };

    return (
      <div style={styling.pane}>
        <div style={styling.name}>
          <p>Jeffrey Leung</p>
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

      alignItems: "center",
      justifyContent: "center",
      
      overflowY: "always",
    };

    return (
      <div style={paneStyling}>
        <p>Content</p>
      </div>
    );
  }
}

function App() {
  return (
    <div className="">
      <div className="App-header">

        <Panes />
        
      </div>
    </div>
  );
}

export default App;
