import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from "react";
import styles from "../App.module.css"
import Header from "./Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./FooterAgenda";
import FooterAgenda from "./FooterAgenda";
import FooterAgendaUpdate from "./FooterAgendaUpdate";



const EditarAgenda = () => {

    const [id, setId] = useState<string>()
    const [profissional_id, setProfissional_id] = useState<string>()
    const [data_hora, setData_hora] = useState<string>("")


    const parametro = useParams();


    const atualizar = (e: FormEvent) => {
        e.preventDefault();

        const dados = {
            id: id,
            profissional_id: profissional_id,
            data_hora: data_hora,

        }
        axios.put('http://127.0.0.1:8000/api/schedule/update', dados, 
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "applcation/json"
            }
        }).then(function(response){
            window.location.href = "/ListagemAgenda"
        }).catch(function(error){
            console.log('Ocorreu um erro ao atualizar');
        })
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/schedule/find/' + parametro.id)
                setId(response.data.data.id)
                setProfissional_id(response.data.data.profissional_id)
                setData_hora(response.data.data.data_hora)

            } catch (error) {
                console.log('Erro ao buscar dados da api');
            }
        }
        fetchData();
    }, []);

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
                            <h5 className='card-title'>Atualizar Agenda</h5>
                            <form onSubmit={atualizar} className='row g-3'>
                                <div className='col-6'>
                                    <label htmlFor="Profissional_id" className='form-label'>ID do Profissional</label>
                                    <input type="text" name='profissional_id' className='form-control' required onChange={handleState} value={profissional_id} />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="data_hora" className='form-label'>Data e Hora</label>
                                    <input type="datetime-local" name='data_hora' className='form-control' required onChange={handleState} value={data_hora} />
                                </div>
                                <div className='col-12'>
                                    <button type='submit' className='btn btn-success btn-sm' >Atualizar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <FooterAgendaUpdate />
        </div>
    );
}

export default EditarAgenda;