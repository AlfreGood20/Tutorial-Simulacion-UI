import { useState, useEffect } from 'react';
import MainContent from '../components/MainContent'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import './layout.css'

export default function Modulo_2() {

  const [content, setContent] = useState("");
    const [leccion, setLeccion] = useState("introduccion");
  
    useEffect(() => {
      fetch(`/docs/modulo_2/${leccion}.md`) 
        .then((res) => res.text())
        .then((text) => setContent(text))
        .catch((err) => console.error("Error cargando README:", err));
    }, [leccion]);
  


  return (
    <MainContent>
      <Sidebar>

        <button className='btn-side'>Introducción</button>
        <button className='btn-side'>Algoritmo de cuadrados medios</button>
        <button className='btn-side'>Algorimo de productos medios</button>
        <button className='btn-side'>Algorimo de multiplicador constante</button> 

      </Sidebar>

      <Content>
        {content}
      </Content>
    </MainContent>
  )
}
