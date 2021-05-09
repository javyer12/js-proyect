import React from "react";
import { connect } from 'react-redux'
//connect provee el estado a el componnete
import { Link } from 'react-router-dom';
import { logoutRequest } from "../actions/index";
import '../assets/style/App.scss';
import '../assets/style/components/Header.scss';
// media 
import { gravatar } from '../utils/gravatar';
import userIcon from '../assets/static/user-icon.png';
import logo from '../assets/static/logo-platzi-video-BW2.png'
import { PropTypes } from "prop-types";



const Header = props => {
  const { user } = props;
  const hastUser = Object.keys(user).length > 0;
  
  const handleLogout = () => {
    props.logoutRequest({})
  }
  
  return (
    <header className="header">
      <Link to='/'>
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
        <div className="header__menu">
        <div className="header__menu--profile">
          {hastUser ?
            <img
              className="gravatar"
              src={gravatar(user.email)}
              alt={user.email}
              /> :
          <img src={userIcon} alt="" />
          }
          
        <p>Perfil</p>
        </div>
        
        <div className="hover-header">
        <ul className="hover-header" >
          {hastUser ? 
            <li><a href="/">{user.name}</a></li>
           : null 
          }
          {hastUser ?
           <li><a href='#logout' onClick={handleLogout}>Logout</a></li>
            :
           <li>
          <Link to='/login'>Log in</Link>
           </li>
          }
        </ul>
        </div>
      </div>
    </header>
  )
};
Header.prototype = {
  email: PropTypes.string,
  password: PropTypes.string,
}
const mapStateToProps = state => {
  return {
    user: state.user
  }
}
const mapDispatchToProps = {
  logoutRequest,
}
export default connect(mapStateToProps,mapDispatchToProps )(Header);