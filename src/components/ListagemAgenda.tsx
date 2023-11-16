import axios from 'axios';
import React, {
    Component, useState, ChangeEvent, FormEvent, useEffect
} from 'react';
import styles from "../App.module.css";
import { CadastroAgendaInterface } from '../interfaces/CadastroAgendaInterface';
import { Link, useNavigate } from 'react-router-dom';

const ListagemAgenda = () => {
    const [usuarios, setUsuarios] = useState<CadastroAgendaInterface[]>([]);
    const [error, setError] = useState("");
    const navigate = useNavigate()

    function handleDelete(id: number) {
        const confirm = window.confirm('Você tem certeza que deseja excluir?');
        if (confirm)
            axios.delete('http://127.0.0.1:8000/api/schedule/delete/' + id)
        .then(function(response){
            window.location.href = "/ListagemAgenda "
        }).catch(function(error){
            console.log('Ocorreu um erro ao excluir');
        })
    }
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/schedule/all');
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
                <div className='container'>
                    <div className='col-md mb-4'>
                        <div className='card'>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Listagem de Agenda</h5>
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th>ID do Profissional</th>
                                        <th>Data e Hora</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usuarios.map(usuario => (
                                        <tr key={usuario.id}>
                                            <td>{usuario.profissional_id}</td>
                                            <td>{usuario.data_hora}</td>
                                            <td>
                                                <Link to={"/EditarAgenda/" + usuario.id} className='btn btn-primary btn-sm'>Editar</Link>
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

export default ListagemAgenda;