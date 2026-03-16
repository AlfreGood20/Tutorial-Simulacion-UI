import { useState, useEffect } from 'react';
import MainContent from '../components/MainContent'
import Sidebar from '../components/Sidebar'
import Content, { ContentEmpety } from '../components/Content'
import Iframe from '../components/Iframe'
import './layout.css'
import { ButtonLinkCustom } from '../components/Button';

export default function Modulo_1() {

  const [content, setContent] = useState("");
  const [leccion, setLeccion] = useState("introduccion");
  const [mostrarRecursos, setMostrarRecursos] = useState(false);

  const setLeccionGlobal = (leccion) => {
    if(mostrarRecursos){
      setMostrarRecursos(false);
    }
    setLeccion(leccion);
  }

  const contentRecursos = () => {
    return <ContentEmpety>
              <h1 className='mt-3 mb-5 font-extrabold text-center'>Más recursos</h1>
              <Iframe link="https://www.youtube.com/embed/VNtM86KUCjE" />

              <Iframe link="https://www.youtube.com/embed/LuTzKArjEIg"/>

              <Iframe link="https://www.youtube.com/embed/5Of2T8ryxFE" />

              <Iframe link="https://www.youtube.com/embed/MkEHVwHm55g" />
          </ContentEmpety>
  }

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
          <div className='mt-10'>
              <button className='btn-side' onClick={() => setLeccionGlobal("introduccion")}>
                Introduccion
              </button>
          </div>

          <button className='btn-side' onClick={() => setLeccionGlobal("conceptos_basicos")}>
            Conceptos basicos
          </button>

          <button className='btn-side' onClick={() => setLeccionGlobal("metodologia")}>
            Metodologia
          </button>
          
          <button className='btn-side' onClick={() => setLeccionGlobal("etapas_proyecto")}>
            Etapas de un proyecto
          </button>

          <button className='btn-side' onClick={() => setLeccionGlobal("elementos_basicos")}>
            Elementos básicos
          </button>

          <button className='btn-side' onClick={() => {setMostrarRecursos(true)}}>Más recursos</button>

          
          <div className='flex flex-col justify-center items-center w-full h-full'>
            <h1 className='mt-35 font-bold'>Siguiente tema</h1>
            <ButtonLinkCustom estilo='cursor-pointer animate animate-pulse' to="/modulo-2">
              <svg className='h-15 w-20' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </ButtonLinkCustom>
          </div>


        </Sidebar>

        {mostrarRecursos ? contentRecursos() : (<Content>{content}</Content>)}
        
      </MainContent>
    </>
  )
}
