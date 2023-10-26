import React from 'react';
import {
    BrowserRouter, Route, Routes
} from 'react-router-dom';
import CadastroCliente from '../components/CadastroCliente';
import ListagemCliente from '../components/ListagemCliente';

const AppRouter = () => {
   return (
    <BrowserRouter>
    <Routes>
        <Route path='CadastroCliente' element={<CadastroCliente />}/>
        <Route path='ListagemCliente' element={<ListagemCliente />}/>
    </Routes>
    </BrowserRouter>
   );
}

export default AppRouter;