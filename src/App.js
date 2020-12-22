import './App.css';
import List from './components/List.js';
import React from "react";


class App extends React.Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1>SpaceX Launch Programs</h1>
          </header>
          <List />
        </div>
    )
  }
}
export default App;
