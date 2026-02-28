import { useState, useEffect } from 'react';
import MainContent from '../components/MainContent'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import './layout.css'

export default function Modulo_1() {

  const [content, setContent] = useState("");
  const [leccion, setLeccion] = useState("introduccion");

  useEffect(() => {
    fetch(`/docs/modulo_1/${leccion}.md`) 
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.error("Error cargando README:", err));
  }, [leccion]);

  return (
    <>
      <MainContent>

        <Sidebar>
          <button className='btn-side' onClick={() => setLeccion("introduccion")}>
            Introduccion
          </button>

          <button className='btn-side' onClick={() => setLeccion("conceptos_basicos")}>
            Conceptos basicos
          </button>

          <button className='btn-side' onClick={() => setLeccion("metodologia")}>
            Metodologia
          </button>
          
          <button className='btn-side' onClick={() => setLeccion("etapas_proyecto")}>
            Etapas de un proyecto
          </button>

          <button className='btn-side' onClick={() => setLeccion("elementos_basicos")}>
            Elementos básicos de un simulador
          </button>
        </Sidebar>

        <Content>
          {content}
        </Content>
        
      </MainContent>
    </>
  )
}
