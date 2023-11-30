import React, {
    Component, useState, ChangeEvent, FormEvent, useEffect
} from 'react';
import Footer from './FooterServico';
import Header from './Header';
import styles from '../App.module.css'
import axios from 'axios';
import FooterServico from './FooterServico';
import Swal from 'sweetalert2';

const CadastroServico = () => {

    const [nome, setNome] = useState<string>("")
    const [descricao, setDescricao] = useState<string>("")
    const [duracao, setDuracao] = useState<string>("")
    const [preco, setPreco] = useState<string>("")
    const [nomeErro, setNomeErro] = useState<string>("")
    const [descricaoErro, setDescricaoErro] = useState<string>("")
    const [duracaoErro, setDuracaoErro] = useState<string>("")
    const [precoErro, setPrecoErro] = useState<string>("")

    const CadastrarServico = (e:FormEvent) => {
        setNomeErro("")
        setDescricaoErro("")
        setDuracaoErro("")
        setPrecoErro("")
        
        e.preventDefault();

    
    const dados = {
        nome: nome,
        descricao: descricao,
        duracao: duracao,
        preco: preco,
    }
    
    axios.post('http://127.0.0.1:8000/api/service', dados, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then(function (response) {
        if (response.data.status === false) {
            if('nome' in response.data.error){
                setNomeErro(response.data.error.nome[0])
            }
            if('descricao' in response.data.error){
                setDescricaoErro(response.data.error.descricao[0])
            }
            if('duracao' in response.data.error){
                setDuracaoErro(response.data.error.duracao[0])
            }
            if('preco' in response.data.error){
                setPrecoErro(response.data.error.preco[0])
            }
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
                text: "Serviço Cadastrado",
                icon: "success",
                showConfirmButton: false,
                timer: 2000
              });
            window.setTimeout(() => {
                window.location.href = "/ListagemServico"
            }, 1000);
        }
    }).catch(function (error) {
        console.log(error);;
    })
}

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
                            <h5 className='card-title'>Cadastrar Serviço</h5>
                            <form onSubmit={CadastrarServico} className='row g-3'>
                                <div className='col-6'>
                                    <label htmlFor="Nome" className='form-label'>Nome</label>
                                    <input type="text" name='nome' className='form-control' required onChange={handleState}/>
                                    <div className='text-danger'>{nomeErro}</div>
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="descricao" className='form-label'>Descrição</label>
                                    <input type="text" name='descricao' className='form-control' required onChange={handleState}/>
                                    <div className='text-danger'>{descricaoErro}</div>
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="duracao" className='form-label'>Duração</label>
                                    <input type="text" name='duracao' className='form-control' required onChange={handleState}/>
                                    <div className='text-danger'>{duracaoErro}</div>
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="preco" className='form-label'>Preço</label>
                                    <input type="text" name='preco' className='form-control' required  onChange={handleState}/>
                                    <div className='text-danger'>{precoErro}</div>
                                </div>
                                <div className='col-12'>
                                    <button type='submit' className='btn btn-success btn-sm' >Cadastrar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <FooterServico />
        </div>
    );
}

export default CadastroServico;