import React from "react";
import { Link } from 'react-router-dom';

import '../assets/style/App.scss';
import '../assets/style/components/Header.scss';
// media 
import userIcon from '../assets/static/user-icon.png';
import logo from '../assets/static/logo-platzi-video-BW2.png'


const Header = () => (

  <header className="header">
    <Link to='/'>

    <img className="header__img" src={logo} alt="Platzi Video"/>
    </Link>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt=""/>
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li>
          <Link to='/login'>Cerrar Sesión</Link></li>
      </ul>
    </div>
  </header>
);

export default Header;