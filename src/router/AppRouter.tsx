import React from 'react';
import {
    BrowserRouter, Route, Routes
} from 'react-router-dom';
import CadastroCliente from '../components/CadastroCliente';
import ListagemCliente from '../components/ListagemCliente';
import EditarCliente from '../components/EditarCliente';


import CadastroProfissional from '../components/CadastroProfissional';
import ListagemProfissional from '../components/ListagemProfissional';
import EditarProfissional from '../components/EditarProfissional';

import CadastroServico from '../components/CadastroServico';
import ListagemServico from '../components/ListagemServico';
import EditarServico from '../components/EditarServico';

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

        <Route path='CadastroProfissional' element={<CadastroProfissional />}/>
        <Route path='ListagemProfissional' element={<ListagemProfissional />}/>
        <Route path='EditarProfissional/:id' element={<EditarProfissional />}/>

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