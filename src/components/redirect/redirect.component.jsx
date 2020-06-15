import React, { Component } from "react";
import Header from "../header/header.component.jsx";
import pageNotFound from "../../assets/404.svg";
import "./redirect.style.sass"

class Redirect extends Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <div id="redirect">
          <h1>404</h1>
          <h2>No se ha encontrado la pagina</h2>
          <img src={pageNotFound} id="pageNotFound" alt="pageNotFound" />
        </div>
      </React.Fragment>
    );
  }
}

export default Redirect;
