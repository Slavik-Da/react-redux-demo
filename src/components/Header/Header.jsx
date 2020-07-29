import React from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsotqNRv3LmLBG2TXDJOKf7uL3wrBKLAeIIg&usqp=CAU" alt=""/>
      <div className={styles.loginBlock}>
        {props.isAuth
          ? <div>{props.login} - <button onClick={props.logout}>logout</button></div>
          : <NavLink to={'/login'}>Login</NavLink> }

      </div>
    </header>
  )
}

export default Header;
