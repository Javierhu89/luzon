import React, { Component } from "react";
import './Header.scss';


// export default Header;
class Header extends Component {
  render() {
    return <div className='cabecera'>
      <img className="logo" src={process.env.PUBLIC_URL + '/assets/img/Intro.png'} />
    </div>;
  }
}

export default Header;
