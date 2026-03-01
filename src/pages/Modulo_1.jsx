import { useState, useEffect } from 'react';
import MainContent from '../components/MainContent'
import Sidebar from '../components/Sidebar'
import Content, { ContentEmpety } from '../components/Content'
import './layout.css'

export default function Modulo_1() {

  const [content, setContent] = useState("");
  const [leccion, setLeccion] = useState("introduccion");
  const [mostrarRecursos, setMostrarRecursos] = useState(false);

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
          <button className='btn-side' onClick={() => {if(mostrarRecursos){setMostrarRecursos(false)}setLeccion("introduccion")}}>
            Introduccion
          </button>

          <button className='btn-side' onClick={() => {if(mostrarRecursos){setMostrarRecursos(false)} setLeccion("conceptos_basicos")}}>
            Conceptos basicos
          </button>

          <button className='btn-side' onClick={() => {if(mostrarRecursos){setMostrarRecursos(false)} setLeccion("metodologia")}}>
            Metodologia
          </button>
          
          <button className='btn-side' onClick={() => {if(mostrarRecursos){setMostrarRecursos(false)}  setLeccion("etapas_proyecto")}}>
            Etapas de un proyecto
          </button>

          <button className='btn-side' onClick={() => {if(mostrarRecursos){setMostrarRecursos(false)}  setLeccion("elementos_basicos")}}>
            Elementos básicos
          </button>

          <button className='btn-side' onClick={() => {setMostrarRecursos(true)}}>Más recursos</button>
        </Sidebar>

        {mostrarRecursos ?
         (
          <ContentEmpety>
            <h1 className='mt-3 mb-5 font-extrabold text-center'>Más recursos</h1>
            <iframe
              src="https://www.youtube.com/embed/VNtM86KUCjE"
              title="Introduccion a la simulacion part 1"
              allowFullScreen
              className="w-full h-100 rounded-lg shadow-lg border"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>

            <iframe
              src="https://www.youtube.com/embed/LuTzKArjEIg"
              title="Video 2"
              allowFullScreen
              className="w-full h-100 rounded-lg shadow-lg border mt-3"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>

            <iframe
              src="https://www.youtube.com/embed/5Of2T8ryxFE"
              title="Video 3"
              allowFullScreen
              className="w-full h-100 rounded-lg shadow-lg border mt-3"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>

            <iframe
              src="https://www.youtube.com/embed/MkEHVwHm55g"
              title="Video 4"
              allowFullScreen
              className="w-full h-100 rounded-lg shadow-lg border mt-3"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>

          </ContentEmpety>
          ) :

          (<Content>{content}</Content>)
        }
        
      </MainContent>
    </>
  )
}
