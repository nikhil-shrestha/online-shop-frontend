import React, { Component } from "react";

class NavDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
  }
  showDropdown(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    const classDropdownMenu =
      "dropdown-menu" +
      (this.props.credentials ? " credentials" : "") +
      (this.state.isToggleOn ? " show" : "");
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={e => {
            this.showDropdown(e);
          }}
        >
          {this.props.image ? (
            <img src={this.props.image} className="float-right menuicon" />
          ) : null}

          {this.props.name}
          <br />
          {this.props.subName ? <small>Login</small> : "NOW"}
        </a>
        <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
          {this.props.children}
        </div>
      </li>
    );
  }
}

export default NavDropdown;
