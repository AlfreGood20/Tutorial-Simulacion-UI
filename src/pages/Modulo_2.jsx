import { useState, useEffect } from 'react';
import MainContent from '../components/MainContent'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import './layout.css'
import CuadradoMedios from './simuladores/CuadradoMedios';
import ProductosMedios from './simuladores/ProductosMedios';
import MultiplicadorConstante from './simuladores/MultiplicadorConstante'

export default function Modulo_2() {

    const [content, setContent] = useState("");
    const [leccion, setLeccion] = useState("introduccion");
    const [mostrarSide, setSide] = useState("");
    const [ejercicio, setEjercicio] = useState("");

    useEffect(() => {
      fetch(`/docs/modulo_2/${leccion}.md`) 
        .then((res) => res.text())
        .then((text) => setContent(text))
        .catch((err) => console.error("Error cargando README:", err));
    }, [leccion]);
  


  return (
    <MainContent>
      <Sidebar>

        <div className='mt-10'>
          <button className='btn-side' onClick={() => {setLeccion("introduccion"); setSide(""); setEjercicio("")}}>Introducción</button>
        </div>

        <h1 className='ml-5 underline'>Clasificación</h1>
        <button className='btn-side ml-8' onClick={() => setSide("no congruencial")}>No Congruencial</button>
        {mostrarSide == "no congruencial" && mostrarSide != "" &&
          <>
            <button className='btn-side ml-15' onClick={() => {setEjercicio(""); setLeccion("algoritmo_cuadrados_medios")}}>Cuadrados medios</button>
            <button className='btn-side ml-25' onClick={() => {setLeccion(""); setEjercicio("cuadrados medios")}}>Simulador</button>

            <button className='btn-side ml-15' onClick={() => {setEjercicio(""); setLeccion("algoritmo_productos_medios")}}>Productos medios</button>
            <button className='btn-side ml-25' onClick={() => {setLeccion(""); setEjercicio("productos medios")}}>Simulador</button>

            <button className='btn-side ml-15' onClick={()=> {setEjercicio(""); setLeccion("algoritmo_multiplicador_constante")}}>Multiplicador constante</button>
            <button className='btn-side ml-25' onClick={() => {setLeccion(""); setEjercicio("multiplicador constante")}}>Simulador</button>
          </>
        }
        <button className='btn-side ml-8' onClick={() => setSide("congruencial")}>Congruencial</button>

      </Sidebar>

      {leccion != "" && <Content>{content}</Content>}
      {ejercicio == "cuadrados medios" && <CuadradoMedios/>}
      {ejercicio == "productos medios" && <ProductosMedios />}
      {ejercicio == "multiplicador constante" && <MultiplicadorConstante />}
      

    </MainContent>
  )
}
