import React from "react";
import styles from "./Footer.module.css"

const Footer = () => {
    return(
    <footer className={styles.footer}>
        <p>
           <span> Buscador de CEP</span> @<a target="_blank" href="https://www.sp.senai.br/">SENAI</a>
        </p>
        </footer>
        );
    }
export default Footer;