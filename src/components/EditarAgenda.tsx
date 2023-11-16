import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from "react";
import styles from "../App.module.css"
import Header from "./Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./FooterAgenda";
import FooterAgenda from "./FooterAgenda";



const EditarAgenda = () => {

    const [id, setId] = useState<number>()
    const [profissionalId, setProfissionalId] = useState<string>("")
    const [dataHora, setDataHora] = useState<string>("")


    const parametro = useParams();


    const atualizar = (e: FormEvent) => {
        e.preventDefault();

        const dados = {
            id: id,
            profissionalId: profissionalId,
            dataHora: dataHora,

        }
        axios.put('http://127.0.0.1:8000/api/schedule/update', dados, 
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "applcation/json"
            }
        }).then(function(response){
            window.location.href = "/ListagemServico"
        }).catch(function(error){
            console.log('Ocorreu um erro ao atualizar');
        })
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/schedule/find/' + parametro.id)
                setId(response.data.data.id)
                setProfissionalId(response.data.data.nome)
                setDataHora(response.data.data.descricao)

            } catch (error) {
                console.log('Erro ao buscar dados da api');
            }
        }
        fetchData();
    }, []);

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "nome"){
            setProfissionalId(e.target.value)
        }
        if(e.target.name === "descricao"){
            setDataHora(e.target.value)
        }
    }


    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Atualizar Serviço</h5>
                            <form onSubmit={atualizar} className='row g-3'>
                                <div className='col-6'>
                                    <label htmlFor="ProfissionalId" className='form-label'>ID do Profissional</label>
                                    <input type="text" name='profissionalId' className='form-control' required onChange={handleState} value={profissionalId} />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="DataHora" className='form-label'>Data e Hora</label>
                                    <input type="date" name='dataHora' className='form-control' required onChange={handleState} value={dataHora} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <FooterAgenda />
        </div>
    );
}

export default EditarAgenda;