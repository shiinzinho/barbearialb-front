import React from "react";
import styles from "./Footer.module.css"

const FooterCliente = () => {
    return(
    <footer className={styles.footer}>
        <p>
           <span> Cadastro de Clientes </span> @<a target="_blank" href="https://www.sp.senai.br/">SENAI</a>
        </p>
        </footer>
        );
    }
export default FooterCliente;