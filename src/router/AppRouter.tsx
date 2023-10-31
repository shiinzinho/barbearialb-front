import React from 'react';
import {
    BrowserRouter, Route, Routes
} from 'react-router-dom';
import CadastroCliente from '../components/CadastroCliente';
import ListagemCliente from '../components/ListagemCliente';
import CadastroProfissional from '../components/CadastroProfissional';
import ListagemProfissional from '../components/ListagemProfissional';
import CadastroServico from '../components/CadastroServico';
import ListagemServico from '../components/ListagemServico';

const AppRouter = () => {
   return (
    <BrowserRouter>
    <Routes>
        <Route path='CadastroCliente' element={<CadastroCliente />}/>
        <Route path='ListagemCliente' element={<ListagemCliente />}/>
        <Route path='CadastroProfissional' element={<CadastroProfissional />}/>
        <Route path='ListagemProfissional' element={<ListagemProfissional />}/>
        <Route path='CadastroServico' element={<CadastroServico />}/>
        <Route path='ListagemServico' element={<ListagemServico />}/>
    </Routes>
    </BrowserRouter>
   );
}

export default AppRouter;