import React, { Component } from "react";
import "./header.style.sass";
import logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  faSignOutAlt,
  faShoppingCart,
  faShoppingBasket,
  faComments,
  faBars,
  faSearch,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import Nav from "../nav/nav.component.jsx";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: false,
      identity: false,
    };
  }

  signOut = () => {
    localStorage.removeItem("identity");
    this.setState({ identity: false });
  };

  clicked = (e) => {
    var value = this.state.menu === false ? true : false;
    this.setState({
      menu: value,
    });
  };

  componentWillMount() {
    if (localStorage.getItem("identity")) this.setState({ identity: true });
  }

  render() {
    var dirr = window.location.href;
    dirr = dirr.split("/");
    console.log(dirr)
    dirr = dirr[5];

    if (dirr === "login" || dirr === "registro") var LogOrReg = true;
    return (
      <React.Fragment>
        {this.state.menu && (
          <div id="menu">
            <div id="move">
              <FontAwesomeIcon className="iconMenu" icon={faSignOutAlt} />
              <FontAwesomeIcon className="iconMenu" icon={faShoppingCart} />
              <FontAwesomeIcon className="iconMenu" icon={faShoppingBasket} />
              <FontAwesomeIcon className="iconMenu" icon={faComments} />
            </div>
          </div>
        )}

        <div
          id="header"
          ref={this.header}
          className={dirr === "login" && "login"}
        >
          <NavLink to="/">
            <img src={logo} id="logo" alt="" />
          </NavLink>
          {LogOrReg !== true && (
            <React.Fragment>
              {this.state.identity ? (
                <React.Fragment>
                  <FontAwesomeIcon
                    className="icons visible"
                    onClick={this.signOut}
                    icon={faSignOutAlt}
                  />
                  <FontAwesomeIcon
                    className="icons visible"
                    icon={faShoppingCart}
                  />
                  <FontAwesomeIcon
                    className="icons visible"
                    icon={faShoppingBasket}
                  />
                  <FontAwesomeIcon
                    className="icons visible"
                    icon={faComments}
                  />
                  <FontAwesomeIcon
                    onClick={this.clicked}
                    className="icons menu"
                    icon={faBars}
                  />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <NavLink to="login">
                    <FontAwesomeIcon
                      className="icons iconlogIn"
                      icon={faSignInAlt}
                    />
                    <p id="logIn"> Ingresá </p>
                  </NavLink>
                </React.Fragment>
              )}

              <input type="text" placeholder="Buscar productos" name="" id="" />
            </React.Fragment>
          )}
        </div>
        {!LogOrReg && <Nav></Nav>}
      </React.Fragment>
    );
  }
}

export default Header;
