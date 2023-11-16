import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from "react";
import styles from "../App.module.css"
import Header from "./Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import FooterProfissional from "./FooterProfissional";
import FooterProfissionalUpdate from "./FooterProfissionalUpdate";
import Swal from "sweetalert2";



const EditarProfissional = () => {

    const [id, setId] = useState<number>()
    const [nome, setNome] = useState<string>("")
    const [celular, setCelular] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [cpf, setCpf] = useState<string>("")
    const [dataNascimento, setDataNascimento] = useState<string>("")
    const [cep, setCep] = useState<string>("")
    const [cidade, setCidade] = useState<string>("")
    const [estado, setEstado] = useState<string>("")
    const [pais, setPais] = useState<string>("")
    const [rua, setRua] = useState<string>("")
    const [numero, setNumero] = useState<string>("")
    const [bairro, setBairro] = useState<string>("")
    const [complemento, setComplemento] = useState<string>("")
    const [senha, setSenha] = useState<string>("")
    const [salario, setSalario] = useState<string>("")
    const [pesquisaCep, setPesquisaCep] = useState<string>("")


    const parametro = useParams();


    const atualizar = (e: FormEvent) => {
        e.preventDefault();

        const dados = {
            id: id,
            nome: nome,
            celular: celular,
            email: email,
            cpf: cpf,
            dataNascimento: dataNascimento,
            cep: cep,
            cidade: cidade,
            estado: estado,
            pais: pais,
            rua: rua,
            numero: numero,
            bairro: bairro,
            complemento: complemento,
            senha: senha,
            salario: salario,
            pesquisaCep: pesquisaCep

        }
        axios.put('http://127.0.0.1:8000/api/professional/update', dados, 
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "applcation/json"
            }
        }).then(function(response){
            if(response.data.status === true){
                Swal.fire({
                    title: "Concluído",
                    text: "Profissional Atualizado",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000
                  });
                window.setTimeout(() => {
                    window.location.href = "/ListagemProfissional"
                }, 1000);
            } else{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Alguma coisa está errada",
                  });
                console.log("error");
                console.log(response.data.error);
            }
        }).catch(function(error){
            console.log('Ocorreu um erro ao atualizar');
        })
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/professional/find/' + parametro.id)
                setId(response.data.data.id)
                setNome(response.data.data.nome)
                setEmail(response.data.data.email)
                setCelular(response.data.data.celular)
                setCpf(response.data.data.cpf)
                setDataNascimento(response.data.data.dataNascimento)
                setCep(response.data.data.cep)
                setCidade(response.data.data.cidade)
                setEstado(response.data.data.estado)
                setPais(response.data.data.pais)
                setRua(response.data.data.rua)
                setNumero(response.data.data.numero)
                setBairro(response.data.data.bairro)
                setComplemento(response.data.data.complemento)
                setSenha(response.data.data.senha)
                setSalario(response.data.data.salario)
            } catch (error) {
                console.log('Erro ao buscar dados da api');
            }
        }
        fetchData();
    }, []);

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "nome") {
            setNome(e.target.value)
        }
        if (e.target.name === "celular") {
            setCelular(e.target.value)
        }
        if (e.target.name === "email") {
            setEmail(e.target.value)
        }
        if (e.target.name === "cpf") {
            setCpf(e.target.value)
        }
        if (e.target.name === "dataNascimento") {
            setDataNascimento(e.target.value)
        }
        if (e.target.name === "cep") {
            setCep(e.target.value)
        }
        if (e.target.name === "cidade") {
            setCidade(e.target.value)
        }
        if (e.target.name === "estado") {
            setEstado(e.target.value)
        }
        if (e.target.name === "pais") {
            setPais(e.target.value)
        }
        if (e.target.name === "rua") {
            setRua(e.target.value)
        }
        if (e.target.name === "numero") {
            setNumero(e.target.value)
        }
        if (e.target.name === "bairro") {
            setBairro(e.target.value)
        }
        if (e.target.name === "complemento") {
            setComplemento(e.target.value)
        }
        if (e.target.name === "senha") {
            setSenha(e.target.value)
        }
        if (e.target.name === "salario") {
            setSalario(e.target.value)
        }
    }

    const findCep = (e: FormEvent) => {
        e.preventDefault()

        fetch('https://viacep.com.br/ws/'+ cep +'/json/', {method: 'GET'})
        .then(response => response.json())
        .then(data => {
            setCidade(data.localidade)
            setPesquisaCep(data.cep)
            setEstado(data.uf)
           
        })
        .catch(error => {console.log('Pesquisa Inválida')})
        }


    return (
        <div>
          <Header />
            <main className={styles.main}>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Atualizar Profissional</h5>
                            <form onSubmit={atualizar} className='row g-3'>
                                <div className='col-4'>
                                    <label htmlFor="Nome" className='form-label'>Nome</label>
                                    <input type="text" name='nome' className='form-control' required onChange={handleState} value={nome} />
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="celular" className='form-label'>Celular</label>
                                    <input type="text" name='celular' className='form-control' required onChange={handleState} value={celular} />
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="email" className='form-label'>E-mail</label>
                                    <input type="text" name='email' className='form-control' required onChange={handleState} value={email} />
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="cpf" className='form-label'>CPF</label>
                                    <input type="text" name='cpf' className='form-control' required onChange={handleState} value={cpf} />
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="dataNascimento" className='form-label'>Data de Nascimento</label>
                                    <input type="date" name='dataNascimento' className='form-control' required onChange={handleState} value={dataNascimento} />
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="cep" className='form-label'>CEP</label>
                                    <input type="text" name='cep' className='form-control' required onBlur={findCep} onChange={handleState} value={cep} />
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="cidade" className='form-label'>Cidade</label>
                                    <input type="text" name='cidade' className='form-control' required onChange={handleState} value={cidade} />
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="estado" className='form-label'>Estado</label>
                                    <input type="text" name='estado' className='form-control' required onChange={handleState} value={estado} />
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="pais" className='form-label'>País</label>
                                    <input type="text" name='pais' className='form-control' required onChange={handleState} value={pais} />
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="rua" className='form-label'>Rua</label>
                                    <input type="text" name='rua' className='form-control' required onChange={handleState} value={rua} />
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="numero" className='form-label'>Número</label>
                                    <input type="text" name='numero' className='form-control' required onChange={handleState} value={numero} />
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="bairro" className='form-label'>Bairro</label>
                                    <input type="text" name='bairro' className='form-control' required onChange={handleState} value={bairro} />
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="complemento" className='form-label'>Complemento</label>
                                    <input type="text" name='complemento' className='form-control' required onChange={handleState} value={complemento} />
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="senha" className='form-label'>Senha</label>
                                    <input type="password" name='senha' className='form-control' required onChange={handleState} value={senha} />
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="salario" className='form-label'>Salário</label>
                                    <input type="text" name='salario' className='form-control' required onChange={handleState} value={salario} />
                                </div>
                                <div className='col-12'>
                                    <button type='submit' className='btn btn-success btn-sm' >Atualizar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <FooterProfissionalUpdate />
        </div>
    );
}

export default EditarProfissional