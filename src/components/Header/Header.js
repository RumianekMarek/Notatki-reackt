import React from 'react';
import {settings} from '../../data/dataStore';
import {NavLink, Link} from 'react-router-dom';
import style from './Header.scss';
import Container from'../Container/Container';
import Icon from '../Icon/Icon';

class Header extends React.Component{

  render(){
    return(
      <header className={style.component} >
        <Container>
          <div className={style.wrapper}>
            <Link className={style.logo} to='/' ><Icon name={settings.header.icon} /></Link>
            <nav>
              <NavLink exact to='/' activeClassName='active' >Home</NavLink>
              <NavLink exact to='/info' activeClassName='active' >Info</NavLink>
              <NavLink exact to='/faq' activeClassName='active' >Faq</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;