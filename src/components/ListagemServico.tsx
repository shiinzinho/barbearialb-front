import axios from 'axios';
import React, {
    Component, useState, ChangeEvent, FormEvent, useEffect
} from 'react';
import styles from "../App.module.css";
import { CadastroServicoInterface } from '../interfaces/CadastroServicoInterface';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ListagemServico = () => {
    const [servicos, setServicos] = useState<CadastroServicoInterface[]>([]);
    const [pesquisa, setPesquisa] = useState<string>('');
    const [error, setError] = useState("");
    const navigate = useNavigate()

    function handleDelete(id: number) {
        Swal.fire({
            title: "Você tem certeza?",
            text: "Esta ação é irreversível...",
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "Não tenho certeza...",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim, tenho certeza!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deletado!",
                text: "O dado foi deletado.",
                icon: "success",
                showConfirmButton: false,
                timer: 2000
              });
              axios.delete('http://127.0.0.1:8000/api/service/delete/' + id)
              .then(function(response){
                window.setTimeout(() => {
                    window.location.href = "/ListagemServico"
                }, 500);
            }).catch(function(error){
                console.log('Ocorreu um erro ao excluir');
            })}});
    }

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "pesquisa"){
            setPesquisa(e.target.value);
        }
    }
    const buscar = (e:FormEvent) => {
        e.preventDefault();

        async function fetchData() {
            try{
                const response = await axios.post('http://127.0.0.1:8000/api/service/name',
                {nome: pesquisa},
                {
                    headers: {
                        "Accept" : "application/json",
                        "Content-Type" : "application/json"
                    }
                }).then(function(response){
                    if(response.data.data){
                    setServicos(response.data.data);
                } else {
                    setServicos([])
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-start",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "error",
                        title: response.data.message
                    });
                }
                }).catch(function(error){
                    console.log(error);
                })
            } catch(error){
                console.log(error);
            }
        }
        fetchData();
    }
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/service/all');
                setServicos(response.data.data)
            } catch (error) {
                setError("Ocorreu um erro");
                console.log(error);
            }   
        }
        fetchData();
    }, []);
    return (
        <div>
            <main className={styles.main}>
                <div className='container mw-100 w-auto'>
                    <div className='col-md mb-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='card-title'>
                                    <h5>Pesquisar</h5>
                                    <form className='row' onSubmit={buscar}>
                                        <div className='col-11'>
                                            <input type="text" name='pesquisa' className='form-control' onChange={handleState}/>
                                        </div>
                                        <div className='col-1'>
                                        <button type='submit' className='btn btn-success'><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Listagem de Serviços</h5>
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>Descrição</th>
                                        <th>Duração</th>
                                        <th>Preço</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {servicos.map(servico => (
                                        <tr key={servico.id}>
                                            <td>{servico.id}</td>
                                            <td>{servico.nome}</td>
                                            <td>{servico.descricao}</td>
                                            <td>{servico.duracao}</td>
                                            <td>{servico.preco}</td>
                                            <td>
                                            <Link to={"/EditarServico/" + servico.id} className='btn btn-primary btn-sm m-1'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
</svg></Link>
<a onClick={e => handleDelete(servico.id)} className='btn btn-danger btn-sm m-1'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg></a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ListagemServico;