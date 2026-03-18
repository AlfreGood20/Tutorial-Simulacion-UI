import { useState, useEffect } from 'react';
import MainContent from '../components/MainContent'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import './layout.css'
import CuadradoMedios from './simuladores/CuadradoMedios';
import ProductosMedios from './simuladores/ProductosMedios';
import MultiplicadorConstante from './simuladores/MultiplicadorConstante'
import Cuadratico from './simuladores/Cuadratico';
import BlumBlumShub from './simuladores/BlumBlumShub';

export default function Modulo_2() {

    const [content, setContent] = useState("");
    const [leccion, setLeccion] = useState("introduccion");
    const [mostrarSide, setSide] = useState("");
    const [ejercicio, setEjercicio] = useState("");

    const setLeccionGlobal = (leccion) => {
      setEjercicio("");
      setLeccion(leccion);
    }

    const setSimuladorGlobal = (simulador) => {
      setLeccion(""); 
      setEjercicio(simulador);
    }

    const deplegable = (side) =>{
      if(side != mostrarSide){
        return (<svg class="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/>
            </svg>)
      }

      return (<svg class="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
            </svg>)
    }

    const simuladores = {
      "cuadrados medios" : <CuadradoMedios />,
      "productos medios" : <ProductosMedios />,
      "multiplicador constante":<MultiplicadorConstante />,
      "cuadratico":<Cuadratico />,
      "blum blum y shub":<BlumBlumShub />
    }

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
          <button className='btn-side' onClick={() => {setLeccion("introduccion"); setSide(""); setEjercicio("")}}>
            Introducción
          </button>
        </div>

        <h1 className='ml-5 font-extrabold text-blue-600'>Algoritmos</h1>
        <button 
          className={`${mostrarSide == "no congruencial" ? 'ml-8 btn-side-select flex gap-3':'ml-8 btn-side flex gap-3'}`}
          onClick={() => {setSide(mostrarSide != 'no congruencial' ? "no congruencial":''); }}>
          No Congruencial {deplegable('no congruencial')}
        </button>

        {mostrarSide == "no congruencial" && mostrarSide != "" &&
          <>
            <button className='btn-side ml-15' onClick={() => setLeccionGlobal("algoritmo_cuadrados_medios")}>
              Cuadrados medios
            </button>
            <button className='btn-side ml-25' onClick={() => setSimuladorGlobal("cuadrados medios")}>
              Simulador
            </button>

            <button className='btn-side ml-15' onClick={() => setLeccionGlobal("algoritmo_productos_medios")}>
              Productos medios
            </button>
            <button className='btn-side ml-25' onClick={() => setSimuladorGlobal("productos medios")}>
              Simulador
            </button>

            <button className='btn-side ml-15' onClick={()=> setLeccionGlobal("algoritmo_multiplicador_constante")}>
              Multiplicador constante
            </button>
            <button className='btn-side ml-25' onClick={() => setSimuladorGlobal("multiplicador constante")}>
              Simulador
            </button>
          </>
        }

        <button 
          className={`${mostrarSide == "congruencial" ? 'ml-8 btn-side-select flex gap-3':'ml-8 btn-side flex gap-3'}`} 
          onClick={() => {setSide(mostrarSide != 'congruencial' ? "congruencial":'');}}>
          Congruencial {deplegable('congruencial')}
        </button>

        {mostrarSide == "congruencial" && mostrarSide != "" &&
          <>
            <h1 className='ml-12 mt-2 font-extrabold text-red-600'>No lineales</h1>
            <button className='btn-side ml-15'>Cuadratico</button>

            <button className='btn-side ml-25' onClick={() => setSimuladorGlobal("cuadratico")}>
              Simulador
            </button>

            <button className='btn-side ml-15'>Blum, Blum y Shub</button>
            <button className='btn-side ml-25' onClick={() => setSimuladorGlobal("blum blum y shub")}>
              Simulador
            </button>

            <button className='btn-side ml-15'> de Mixto</button>
            <button className='btn-side ml-25' onClick={() => setSimuladorGlobal("de mixto")}>
              Simulador
            </button>


            <h1 className='ml-12 mt-2 font-extrabold text-red-600'>Lineales</h1>
            <button className='btn-side ml-15'>Mixto</button>
            <button className='btn-side ml-25' onClick={() => setSimuladorGlobal("mixto")}>
              Simulador
            </button>

            <button className='btn-side ml-15'>Multiplicativo</button>
            <button className='btn-side ml-25' onClick={() => setSimuladorGlobal("multiplicativo")}>
              Simulador
            </button>

            <button className='btn-side ml-15'>Aditivo</button>
            <button className='btn-side ml-25' onClick={() => setSimuladorGlobal("aditivo")}>
              Simulador
            </button>
          </>
        }


      </Sidebar>

      {leccion != "" && 
        <Content>{content}</Content>
      }
      
      {ejercicio != "" && 
        simuladores[ejercicio]
      }
      

    </MainContent>
  )
}
