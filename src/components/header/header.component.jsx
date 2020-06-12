import React, { Component } from "react";
import "./header.style.sass";
import logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faShoppingCart,
  faShoppingBasket,
  faComments,
  faBars,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
//<i class="fas fa-cart-plus"></i>
class Header extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  state = {
    menu: false,
  };
  clicked = (e) => {
    var value = this.state.menu === false ? true : false
    this.setState({
      menu: value,
    });
    console.log(this.myRef)
    
    console.log(this.myRef.current)
  };
  render() {
    let user = true;

    return (
      <React.Fragment> 
        { this.state.menu &&
          <div id="menu">
            <div id="move" ref={this.myRef}>
              <FontAwesomeIcon className="iconMenu" icon={faSignOutAlt} />
              <FontAwesomeIcon className="iconMenu" icon={faShoppingCart} />
              <FontAwesomeIcon className="iconMenu" icon={faShoppingBasket} />
              <FontAwesomeIcon className="iconMenu" icon={faComments} />
            </div>
          </div>
        }

        <div id="header">
          <img src={logo} id="logo" alt="" />
          {user ? (
            <React.Fragment>
              <FontAwesomeIcon className="icons visible" icon={faSignOutAlt} />
              <FontAwesomeIcon className="icons visible" icon={faShoppingCart} />
              <FontAwesomeIcon className="icons visible" icon={faShoppingBasket} />
              <FontAwesomeIcon className="icons visible" icon={faComments} />
            </React.Fragment>
          ) : (
            <a>Ingresá</a>
          )}
          <FontAwesomeIcon
            onClick={this.clicked}
            className="icons menu"
            icon={faBars}
          />
          
          <input type="text" placeholder="Buscar productos" name="" id="" />
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
