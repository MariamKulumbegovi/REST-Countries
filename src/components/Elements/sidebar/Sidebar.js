import React from "react";
import { slide as Menu } from "react-burger-menu";
import styles from '../../layout/Header.module.css'
export default props => {
  return (
 
    <Menu {...props}>
      <a className={styles.bmitem} href="/">
        Home
      </a>

      <a className={styles.bmitem} >
        Burgers
      </a>

      <a className={styles.bmitem} >
        Pizzas
      </a>

      <a className={styles.bmitem} >
        Desserts
      </a>
    </Menu>
  );
};
