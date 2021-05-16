import React from "react";
import { connect } from 'react-redux';
import { setSearchText } from '../actions';
import '../assets/style/components/Search.scss';

import classNames from 'classnames';

const Search = ({ isHome, setSearchText}) => {
  const inputStyle = classNames('input', {
    isHome
  })
  const handleInput = (event) => {
    setSearchText(event.target.value);
  }
  return (
    <section className='main'>
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input
        type="text"
        className={inputStyle}
        placeholder="Buscar..."
        onChange={handleInput}
        />
    </section>
  )
};
const mapDispatchToProps = {
  setSearchText,
}
export default connect(null,mapDispatchToProps) (Search);