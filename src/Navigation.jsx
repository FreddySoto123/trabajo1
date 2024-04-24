import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import RickAndMortyApp from './RickAndMortyApp';
import Home from './componentes/Home';

const Navigation = () => {
  return (
<BrowserRouter>
    <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/character" element= {<RickAndMortyApp/>}/>
        <Route path="/*" element= {<p>Error 404 Recurso no encontrado </p>}/>
    </Routes>


</BrowserRouter>

  );
};

export default Navigation;