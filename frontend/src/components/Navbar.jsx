import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import {Link} from 'react-router-dom'

import Logo from '../images/Logo.png';


const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/">
      <div> <img src={Logo} alt="Logo" /> </div> </Link>
      <div style={styles.rightSection}>
        <ul style={styles.navLinks}>
          <li style={styles.navItem}>
            <a href="/loja" style={styles.link}>Loja</a>
          </li>
          <li style={styles.navItem}>
            <a href="/login"  style={styles.link}>Login</a>
          </li>
          <li style={styles.navItem}>
            <a href="/registo" style={styles.link}>Registo</a>
          </li>
        </ul>
        <div style={styles.icons}>
          <FaSearch style={styles.icon} />
          <FaShoppingCart style={styles.icon} />
        </div>
      </div>
    </nav>
  );
};

const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#333",
      padding: "10px 20px",
      color: "white",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      zIndex: 1000,
      boxSizing: "border-box",
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
    },
    img:{
        height:"10px"
        

    },
    logo: {
      height: "10px", 
      marginRight: "10px",
      objectFit: "contain", // Mantém as proporções
    },
    rightSection: {
      display: "flex",
      alignItems: "center",
    },
    navLinks: {
      display: "flex",
      listStyleType: "none",
      margin: 0,
      padding: 0,
    },
    navItem: {
      margin: "0 15px",
    },
    link: {
      color: "white",
      textDecoration: "none",
      fontSize: "1em",
    },
    icons: {
      display: "flex",
      alignItems: "center",
      marginLeft: "20px",
    },
    icon: {
      marginLeft: "15px",
      fontSize: "1.2em",
      cursor: "pointer",
    },
};

export default Navbar;


