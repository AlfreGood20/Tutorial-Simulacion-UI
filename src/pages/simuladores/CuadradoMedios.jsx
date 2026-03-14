import React, { useState } from 'react'
import { ContentEmpety } from '../../components/Content'
import Table from '../../components/Table'
import './stayle.css'

export default function CuadradoMedios() {

  const [resultados, setResultado] = useState([]);
  const [semilla, setSemilla] = useState('');
  const [advertir, setAdvertir] = useState(true);
  
 
  
  const recibir = (e) => {
    e.preventDefault();

    let semilla = Number(e.target.semilla.value);
    let iteraciones = Number(e.target.iteraciones.value);

    let resultadosTemp = [];
    let xn = semilla;

    for (let i = 0; i < iteraciones; i++) {
      let x2 = xn * xn;
      let x2str = x2.toString().padStart(8, '0');
      let cuatroDigitos = x2str.substring(2, 6); 
      let xn1 = cuatroDigitos;
      let ri = Number('0.' + cuatroDigitos);

      resultadosTemp.push({
        n: i,
        x: xn1,
        x2: x2str,
        ceros: x2str,
        xn1: xn1,
        ri: ri
      });

      xn = cuatroDigitos;
    }

    setResultado(resultadosTemp);
  };

  return (
    <ContentEmpety>

      <form className='flex flex-col' onSubmit={recibir}>
        <label className='mt-2 font-bold'>Semilla:</label>
        <input name='semilla' type='number' onChange={e => {setSemilla(e.target.value); setAdvertir(e.target.value <= 999);}} className='border border-gray-300 rounded-md focus:border-2 focus:border-blue-300 focus:outline-none'></input>
        {advertir&& <p className='text-sm font-bold text-red-600'>La semilla tiene que ser mayor o igual a 4 digitos</p> }

        <label className='mt-2 font-bold'>n (iteraciones):</label>
        <input name='iteraciones' className='border border-gray-300 rounded-md focus:border-2 focus:border-blue-300 focus:outline-none' type='number'></input>

        <div className='flex flex-row gap-3 w-full'>
          <button type='submit' title='Generar datos' disabled={semilla.length < 3} className={`flex-1 mt-2 rounded-lg py-2 font-bold bg-blue-300 ${semilla.length >= 4 ? ' hover:bg-blue-400 cursor-pointer':''}`}>Calcular</button>
          <button title='Limpiar datos y tabla' onClick={() => {setResultado([]); setAdvertir(true)}} type='reset' className='cursor-pointer hover:text-white md:w-50 mt-2 border border-gray-300 rounded-md bg-neutral-400 flex justify-center items-center hover:'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </button>
        </div>

      </form>

      <div className='flex justify-center items-center mt-10'>
        <Table
          head={
            <tr>
              <th className='table-head'>n</th>
              <th className='table-head'>x</th>
              <th className='table-head'>x × x = x²</th>
              <th className='table-head'>Ceros a la izquierda</th>
              <th className='table-head'>x_n+1</th>
              <th className='table-head'>ri</th>
            </tr>
          }
          body={
            <>
              {resultados.length === 0 &&
                Array.from({ length: 10 }).map((_, i) => (
                  <tr key={i}>
                    <td className='table-body text-center'>{i}</td>
                    <td className='table-body'></td>
                    <td className='table-body'></td>
                    <td className='table-body'></td>
                    <td className='table-body'></td>
                    <td className='table-body'></td>
                  </tr>
                ))
              }

              {resultados.length > 0 &&
                resultados.map((fila, i) => (
                  <tr key={i}>
                    <td className='table-body'>{fila.n}</td>
                    <td className='table-body'>{fila.x}</td>
                    <td className='table-body'>{fila.x2}</td>
                    <td className='table-body'>{fila.ceros}</td>
                    <td className='table-body'>{fila.xn1}</td>
                    <td className='table-body'>{fila.ri}</td>
                  </tr>
                ))
              }
            </>
        }
        />
      </div>

    </ContentEmpety>
  )
}