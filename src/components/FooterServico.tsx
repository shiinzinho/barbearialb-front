import React from "react";
import styles from "./Footer.module.css"

const FooterServico = () => {
    return(
    <footer className={styles.footer}>
        <p>
           <span> Cadastro de Serviços</span> @<a target="_blank" href="https://www.sp.senai.br/">SENAI</a>
        </p>
        </footer>
        );
    }
export default FooterServico;