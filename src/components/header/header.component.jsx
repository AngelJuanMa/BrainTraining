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

class Header extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    menu: false,
  };
  clicked = (e) => {
    var value = this.state.menu === false ? true : false;
    this.setState({
      menu: value,
    });
  };

  render(props) {
    
    let user = false;
    var dirr = window.location.href;
    dirr = dirr.split("/");
    dirr = dirr[3];
    
    if(dirr === "login" || dirr === "registro") var LogOrReg = true
    console.log(LogOrReg === true)
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
          <img src={logo} id="logo" alt="" />
          {LogOrReg !== true &&(
            <React.Fragment>
              {user ? (
                <React.Fragment>
                  <FontAwesomeIcon
                    className="icons visible"
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
      </React.Fragment>
    );
  }
}

export default Header;
