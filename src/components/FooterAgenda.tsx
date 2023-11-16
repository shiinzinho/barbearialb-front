import React from "react";
import styles from "./Footer.module.css"

const FooterAgenda = () => {
    return(
    <footer className={styles.footer}>
        <p>
           <span> Cadastro de Agenda </span> @<a target="_blank" href="https://www.sp.senai.br/">SENAI</a>
        </p>
        </footer>
        );
    }
export default FooterAgenda;