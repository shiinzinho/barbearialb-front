import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from "react";
import styles from "../App.module.css"
import Header from "./Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import FooterCliente from "./FooterCliente";
import FooterRecuperarSenhaCliente from "./FooterRecuperarSenhaCliente";
import Swal from "sweetalert2";


const RecuperarSenhaCliente = () => {

    const [email, setEmail] = useState<string>("")


    const parametro = useParams();


    const RecuperarSenha = (e: FormEvent) => {
        e.preventDefault();
    

    const dados = {
        email: email,
    }
    axios.post('http://127.0.0.1:8000/api/client/restore', dados, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then(function (response) {
        if (response.data.stauts === false) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Alguma coisa está errada",
              });
            console.log("error");
            console.log(response.data.error);
        } else {
            Swal.fire({
                title: "Concluído",
                text: "Senha Redefinida",
                icon: "success",
                showConfirmButton: false,
                timer: 2000
              });
            window.setTimeout(() => {
                window.location.href = "/ListagemCliente"
            }, 1000);
        }
    }).catch(function (error) {
        console.log(error);;
    })
}
    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "email") {
            setEmail(e.target.value)
        }
    }
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/client/find/' + parametro.id)
                setEmail(response.data.data.email)
            } catch (error) {
                console.log('Erro ao buscar dados da api');
            }
        }
        fetchData();
    }, []);
    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Recuperar Senha do Cliente</h5>
                            <form onSubmit={RecuperarSenha} className='row g-3'>
                                <div className='justify-content-center'>
                                    <label htmlFor="email" className='form-label'>E-mail</label>
                                    <input type="text" name='email' className='form-control' required onChange={handleState} value={email} />
                                </div>
                                <div className='col-12'>
                                    <button type='submit' className='btn btn-dark btn-sm' >Restaurar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <FooterRecuperarSenhaCliente />
        </div>
    );
  }


export default RecuperarSenhaCliente;