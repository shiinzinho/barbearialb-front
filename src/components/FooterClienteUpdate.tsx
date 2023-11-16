import React from "react";
import styles from "./Footer.module.css"

const FooterClienteUpdate = () => {
    return(
    <footer className={styles.footer}>
        <p>
           <span> Editar Clientes </span> @<a target="_blank" href="https://www.sp.senai.br/">SENAI</a>
        </p>
        </footer>
        );
    }
export default FooterClienteUpdate;