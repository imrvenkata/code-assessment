import logo from "./logo.svg";
import "./App.css";

import React from 'react'
import { render } from "@testing-library/react";
import Createplayers from "./Components/Createplayers";
class App extends React.Component {

  render() {
    return(
      <div className="App">
        <Createplayers></Createplayers>
      </div>
      
    )
  }
}

export default App;
