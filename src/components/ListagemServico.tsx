import axios from 'axios';
import React, {
    Component, useState, ChangeEvent, FormEvent, useEffect
} from 'react';
import styles from "../App.module.css";
import { CadastroServicoInterface } from '../interfaces/CadastroServicoInterface';
import { Link, useNavigate } from 'react-router-dom';

const ListagemServico = () => {
    const [usuarios, setUsuarios] = useState<CadastroServicoInterface[]>([]);
    const [pesquisa, setPesquisa] = useState<string>('');
    const [error, setError] = useState("");
    const navigate = useNavigate()

    function handleDelete(id: number) {
        const confirm = window.confirm('Você tem certeza que deseja excluir?');
        if (confirm)
            axios.delete('http://127.0.0.1:8000/api/service/delete/' + id)
        .then(function(response){
            window.location.href = "/ListagemCliente"
        }).catch(function(error){
            console.log('Ocorreu um erro ao excluir');
        })
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
                    setUsuarios(response.data.data);
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
                setUsuarios(response.data.data)
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
                                        <div className='col-10'>
                                            <input type="text" name='pesquisa' className='form-control' onChange={handleState}/>
                                        </div>
                                        <div className='col-1'>
                                            <button type='submit' className='btn btn-success'>Pesquisar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Listagem de usuários</h5>
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
                                    {usuarios.map(usuario => (
                                        <tr key={usuario.id}>
                                            <td>{usuario.id}</td>
                                            <td>{usuario.nome}</td>
                                            <td>{usuario.descricao}</td>
                                            <td>{usuario.duracao}</td>
                                            <td>{usuario.preco}</td>
                                            <td>
                                                <Link to={"/EditarServico/" + usuario.id} className='btn btn-primary btn-sm'>Editar</Link>
                                                <a onClick={e => handleDelete(usuario.id)} className='btn btn-danger btn-sm'>Excluir</a>
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