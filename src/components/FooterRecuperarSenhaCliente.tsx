import React from "react";
import styles from "./Footer.module.css"

const FooterRecuperarSenhaCliente = () => {
    return(
    <footer className={styles.footer}>
        <p>
           <span> Recuperar Senha do Cliente</span> @<a target="_blank" href="https://www.sp.senai.br/">SENAI</a>
        </p>
        </footer>
        );
    }
export default FooterRecuperarSenhaCliente;