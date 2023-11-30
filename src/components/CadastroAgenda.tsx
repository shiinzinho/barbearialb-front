import React, {
    Component, useState, ChangeEvent, FormEvent, useEffect
} from 'react';
import Header from './Header';
import styles from '../App.module.css'
import axios from 'axios';
import FooterAgenda from './FooterAgenda';
import Swal from 'sweetalert2';

const CadastroAgenda = () => {

    const [profissional_id, setProfissional_id] = useState<string>()
    const [data_hora, setData_hora] = useState<string>("")

    const CadastrarAgenda = (e:FormEvent) => {
        e.preventDefault();

    
    const dados = {
        profissional_id: profissional_id,
        data_hora: data_hora,
    }
    
    axios.post('http://127.0.0.1:8000/api/schedule/time', dados, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then(function (response) {
        if (response.data.status === false) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Horário já cadastrado",
              });
            console.log("error");
            console.log(response.data.error);
        } else {
            Swal.fire({
                title: "Concluído",
                text: "Agendamento Cadastrado",
                icon: "success",
                showConfirmButton: false,
                timer: 2000
              });
            window.setTimeout(() => {
                window.location.href = "/ListagemAgenda"
            }, 1000);
        }
    }).catch(function (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "ID do profissional não existente",
          });
        console.log("error");
    })
}

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "profissional_id"){
            setProfissional_id(e.target.value)
        }
        if(e.target.name === "data_hora"){
            setData_hora(e.target.value)
        }
    }

    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Cadastrar Agenda</h5>
                            <form onSubmit={CadastrarAgenda} className='row g-3'>
                                <div className='col-6'>
                                    <label htmlFor="profissional_id" className='form-label'>ID do Profissional</label>
                                    <input type="integer" name='profissional_id' className='form-control' required onChange={handleState}/>
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="data_hora" className='form-label'>Data e hora</label>
                                    <input type="datetime-local" name='data_hora' className='form-control' required onChange={handleState}/>
                                </div>
                                <div className='col-12'>
                                    <button type='submit' className='btn btn-success btn-sm' >Cadastrar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main >
            <FooterAgenda />
        </div>
    );
}

export default CadastroAgenda;