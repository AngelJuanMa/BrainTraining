import React, { Component } from "react";
import Header from "../header/header.component.jsx";

class Main extends Component {
  render() {
    return ( 
        <React.Fragment>
            <Header></Header>
            <div id="main">
                
                <p>MAIN</p>
            </div>
           
        </React.Fragment>
     );
  }
}

export default Main;
