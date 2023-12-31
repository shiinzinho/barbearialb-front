import React from 'react';
import {
    BrowserRouter, Route, Routes
} from 'react-router-dom';

//CLIENTE
import CadastroCliente from '../components/CadastroCliente';
import ListagemCliente from '../components/ListagemCliente';
import EditarCliente from '../components/EditarCliente';
import RecuperarSenhaCliente from '../components/RecuperarSenhaCliente';

//PROFISSIONAL
import CadastroProfissional from '../components/CadastroProfissional';
import ListagemProfissional from '../components/ListagemProfissional';
import EditarProfissional from '../components/EditarProfissional';
import RecuperarSenhaProfissional from '../components/RecuperarSenhaProfissional';

//SERVIÇO
import CadastroServico from '../components/CadastroServico';
import ListagemServico from '../components/ListagemServico';
import EditarServico from '../components/EditarServico';

//AGENDA
import CadastroAgenda from '../components/CadastroAgenda';
import ListagemAgenda from '../components/ListagemAgenda';
import EditarAgenda from '../components/EditarAgenda';

const AppRouter = () => {
   return (
    <BrowserRouter>
    <Routes>
        <Route path='CadastroCliente' element={<CadastroCliente />}/>
        <Route path='ListagemCliente' element={<ListagemCliente />}/>
        <Route path='EditarCliente/:id' element={<EditarCliente />}/>
        <Route path='RecuperarSenhaCliente/:id' element={<RecuperarSenhaCliente />}/>

        <Route path='CadastroProfissional' element={<CadastroProfissional />}/>
        <Route path='ListagemProfissional' element={<ListagemProfissional />}/>
        <Route path='EditarProfissional/:id' element={<EditarProfissional />}/>
        <Route path='RecuperarSenhaProfissional/:id' element={<RecuperarSenhaProfissional />}/>

        <Route path='CadastroServico' element={<CadastroServico />}/>
        <Route path='ListagemServico' element={<ListagemServico />}/>
        <Route path='EditarServico/:id' element={<EditarServico />}/>

        <Route path='CadastroAgenda' element={<CadastroAgenda />}/>
        <Route path='ListagemAgenda' element={<ListagemAgenda />}/>
        <Route path='EditarAgenda/:id' element={<EditarAgenda />}/>
    </Routes>
    </BrowserRouter>
   );
}

export default AppRouter;