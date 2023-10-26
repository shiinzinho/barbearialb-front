import React, {
    Component, useState, ChangeEvent, FormEvent, useEffect
} from 'react';
import Footer from './Footer';
import Header from './Header';
import styles from '../App.module.css'
import axios from 'axios';

const CadastroProfissional = () => {

    const [nome, setNome] = useState<string>("")
    const [celular, setCelular] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [cpf, setCpf] = useState<string>("")
    const [dataNascimento, setDataNascimento] = useState<string>("")
    const [cidade, setCidade] = useState<string>("")
    const [estado, setEstado] = useState<string>("")
    const [pais, setPais] = useState<string>("")
    const [rua, setRua] = useState<string>("")
    const [numero, setNumero] = useState<string>("")
    const [bairro, setBairro] = useState<string>("")
    const [cep, setCep] = useState<string>("")
    const [complemento, setComplemento] = useState<string>("")
    const [senha, setSenha] = useState<string>("")
    const [salario, setSalario] = useState<string>("")

    const CadastrarProfissional = (e:FormEvent) => {
        e.preventDefault();
    }
    
    const dados = {
        nome: nome,
        celular: celular,
        email: email,
        cpf: cpf,
        dataNascimento: dataNascimento,
        cidade: cidade,
        estado: estado,
        pais: pais,
        rua: rua,
        numero: numero,
        bairro: bairro,
        cep: cep,
        complemento: complemento,
        senha: senha,
        salario: salario,
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
        if(e.target.name === "celular"){
            setCelular(e.target.value)
        }
        if(e.target.name === "email"){
            setEmail(e.target.value)
        }
        if(e.target.name === "cpf"){
            setCpf(e.target.value)
        }
        if(e.target.name === "dataNascimento"){
            setDataNascimento(e.target.value)
        }cidade
        if(e.target.name === "cidade"){
            setCidade(e.target.value)
        }
        if(e.target.name === "estado"){
            setEstado(e.target.value)
        }
        if(e.target.name === "pais"){
            setPais(e.target.value)
        }
        if(e.target.name === "rua"){
            setRua(e.target.value)
        }
        if(e.target.name === "numero"){
            setNumero(e.target.value)
        }
        if(e.target.name === "bairro"){
            setBairro(e.target.value)
        }
        if(e.target.name === "cep"){
            setCep(e.target.value)
        }
        if(e.target.name === "complemento"){
            setComplemento(e.target.value)
        }
        if(e.target.name === "senha"){
            setSenha(e.target.value)
        }
        if(e.target.name === "salario"){
            setSalario(e.target.value)
        }
    }

    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Cadastrar Profissional</h5>
                            <form onSubmit={CadastrarProfissional} className='row g-3'>
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

export default CadastroProfissional;