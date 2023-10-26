import React, {
    Component, useState, ChangeEvent, FormEvent, useEffect
} from 'react';
import Footer from './Footer';
import Header from './Header';
import styles from '../App.module.css'
import axios from 'axios';

const CadastroServico = () => {

    const [nome, setNome] = useState<string>("")
    const [descricao, setDescricao] = useState<string>("")
    const [duracao, setDuracao] = useState<string>("")
    const [preco, setPreco] = useState<string>("")

    const CadastrarServico = (e:FormEvent) => {
        e.preventDefault();
    }
    
    const dados = {
        nome: nome,
        descricao: descricao,
        duracao: duracao,
        preco: preco,
    }
    
    axios.post('http://127.0.0.1:8000', dados, {
        headers: {
            "Accept":"application/json",
            "Content-Type": "application/json"
        }
    }).then(function(response){
        window.location.href = "/listagem"
    }).catch(function(error){
        console.log(error);;
    })

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "nome"){
            setNome(e.target.value)
        }
        if(e.target.name === "descricao"){
            setDescricao(e.target.value)
        }
        if(e.target.name === "duracao"){
            setDuracao(e.target.value)
        }
        if(e.target.name === "preco"){
            setPreco(e.target.value)
        }
    }

    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Cadastrar Servico</h5>
                            <form onSubmit={CadastrarServico} className='row g-3'>
                                <div className='col-6'>
                                    <label htmlFor="Nome" className='form-label'>Nome</label>
                                    <input type="text" name='nome' className='form-control' required onChange={handleState}/>
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="email" className='form-label'>E-mail</label>
                                    <input type="text" name='email' className='form-control' required onChange={handleState}/>
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="cpf" className='form-label'>CPF</label>
                                    <input type="text" name='cpf' className='form-control' required onChange={handleState}/>
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="password" className='form-label'>Senha</label>
                                    <input type="text" name='password' className='form-control' required  onChange={handleState}/>
                                </div>
                                <div className='col-12'>
                                    <button type='submit' className='btn btn-success btn-sm' >Cadastrar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default CadastroServico;