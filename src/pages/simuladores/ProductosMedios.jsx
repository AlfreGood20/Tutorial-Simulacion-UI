import React, { useState } from 'react'
import { ContentEmpety } from '../../components/Content'
import Table from '../../components/Table'
import './stayle.css'

export default function ProductosMedios() {

  const [resultados, setResultado] = useState([]);
  const [semillaCero, setSemillaCero] = useState('');
  const [semillaOne, setSemillaOne] = useState('');
  const [advertirXCero, setAdvertirXCero] = useState(true);
  const [advertirXOne, setAdvertirXOne] = useState(true);



  const recibir = (e) => {
    e.preventDefault();

    const semilaXCero=Number(e.target.semillaCero.value);
    const semillaXOne =Number(e.target.semillaOne.value);
    const iteraciones =Number(e.target.iteraciones.value);

    let resultadoTemp = [];

    let xN=semillaXOne;
    let xCero=semilaXCero;
    for(let i=0; i < iteraciones ; i++){


      const multiplicado = xCero * xN;
      const cerosIzuierda= String(multiplicado).padStart(8,'0');
      const cuatroDigitos = cerosIzuierda.substring(2,6);
      const r_i = '0.'+cuatroDigitos;


      resultadoTemp.push({
        n:i,
        x0:xCero,
        xn:xN,
        xPlusOneIsqueals:cerosIzuierda,
        xPlusOne:cuatroDigitos,
        ri:r_i
      });

      xCero=xN;
      xN=cuatroDigitos;
    }

    setResultado(resultadoTemp);
  }

  return (
    <ContentEmpety>
        <form onSubmit={recibir} className='flex flex-col'>
            <label className='label-sm'>Semilla X0:</label>
            <input type='number' onChange={(e) => {setSemillaCero(e.target.value); setAdvertirXCero(e.target.value <= 999)}} className='input-sm' name='semillaCero'/>
            {advertirXCero&& <p className='text-sm font-bold text-red-600'>La semilla x0 tiene que ser mayor o igual a 4 digitos</p> }
            
            <label className='label-sm'>Semilla X1:</label>
            <input type='number' onChange={(e) => {setSemillaOne(e.target.value); setAdvertirXOne(e.target.value <= 999)}} className='input-sm' name='semillaOne'/>
            {advertirXOne&& <p className='text-sm font-bold text-red-600'>La semilla x1 tiene que ser mayoro igual a 4 digitos</p> }


            <label className='label-sm'>n (iteraciones):</label>
            <input type='number' className='input-sm' name='iteraciones'/>

            <div className='flex flex-row gap-3 w-full'>

              <button disabled={semillaCero.length <= 3 || semillaOne.length <=3 } type='submit' title='Generar datos' className={`flex-1 mt-2 rounded-lg py-2 font-bold bg-blue-300 ${semillaCero.length >= 4 && semillaOne.length >= 4 ? 'hover:bg-blue-400 cursor-pointer':''} `}>Calcular</button>

              <button title='Limpiar datos y tabla' onClick={() => {setResultado([])}} type='reset' className='cursor-pointer hover:text-white md:w-50 mt-2 border border-gray-300 rounded-md bg-neutral-400 flex justify-center items-center hover:'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
              </button>

            </div>

        </form>

        <div className='mt-10 flex flex-col justify-center items-center'>
            <Table 
              head={
                <tr>
                  <th className='table-head'>n</th>
                  <th className='table-head'>X_0</th>
                  <th className='table-head'>X_n</th>
                  <th className='table-head'>X_n +1 = X_0 * X_n</th>
                  <th className='table-head'>Xn+1</th>
                  <th className='table-head'>ri</th>
                </tr>
              }
              body={
                <>
                  {resultados.length === 0 &&
                    Array.from({ length: 6 }).map((_, i) => (
                      <tr key={i}>
                        <td className='table-body text-center'>{i}</td>
                        <td className='table-body'></td>
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
                        <td className='table-body'>{fila.x0}</td>
                        <td className='table-body'>{fila.xn}</td>
                        <td className='table-body'>{fila.xPlusOneIsqueals}</td>
                        <td className='table-body'>{fila.xPlusOne}</td>
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