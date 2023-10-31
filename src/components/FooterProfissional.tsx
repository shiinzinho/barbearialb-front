import React from "react";
import styles from "./Footer.module.css"

const FooterProfissional = () => {
    return(
    <footer className={styles.footer}>
        <p>
           <span> Cadastro de Profissionais</span> @<a target="_blank" href="https://www.sp.senai.br/">SENAI</a>
        </p>
        </footer>
        );
    }
export default FooterProfissional;