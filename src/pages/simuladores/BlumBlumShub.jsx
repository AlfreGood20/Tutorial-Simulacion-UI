import React, { useState } from 'react'
import { ContentEmpety } from '../../components/Content'
import './stayle.css'
import Table from '../../components/Table';

export default function BlumBlumShub() {

    const [semilla , setSemilla] = useState('');
    const [resultado, setResultado] = useState([]);

    const recibir = (e) =>{
        e.preventDefault();

        let resultadosTemp = [];
        const semilla = Number(e.target.semilla.value);
        const modulo = Number(e.target.mod.value);
        const iteraciones = Number(e.target.n.value);

        let semillaCambiable = semilla;
        for(let i=0; i < iteraciones ; i++){

            const x_iCuadrado = Math.pow(semillaCambiable,2);
            const x_iMod = (x_iCuadrado % modulo);
            const r_i=(x_iMod/modulo).toFixed(4);

            resultadosTemp.push({
                n:i,
                xi:semillaCambiable,
                xiCuadrado: x_iCuadrado,
                xiMod:x_iMod,
                ri:r_i
            })

            semillaCambiable = x_iMod;
        }

        setResultado(resultadosTemp);
    }

    return (
        <ContentEmpety>
            <form onSubmit={recibir} className='flex flex-col'>
                <label className='label-sm'>Semilla x0:</label>
                <input type='number' name='semilla' className='input-sm'/>

                <label className='label-sm'>mod (modulo):</label>
                <input type='number' name='mod' className='input-sm'/>

                <label className='label-sm'>n (iteraciones):</label>
                <input type='number' name='n' className='input-sm'/>

                <div className='flex flex-row gap-3'>
                    <button type='submit' title='Generar datos' className={`flex-1 mt-2 rounded-lg py-2 font-bold bg-blue-300 ${semilla.length >= 4 ? ' hover:bg-blue-400 cursor-pointer':''}`}>Calcular</button>
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
                            <th className='table-head'>xi</th>
                            <th className='table-head'>xi^2</th>
                            <th className='table-head'>xi+1 = xi^2 mod n</th>
                            <th className='table-head'>ri</th>
                        </tr>
                    } 
                    body={
                        <>
                            {resultado.length === 0 &&
                                Array.from({ length: 6 }).map((_, i) => (
                                    <tr key={i}>
                                        <td className='table-body text-center'>{i}</td>
                                        <td className='table-body'></td>
                                        <td className='table-body'></td>
                                        <td className='table-body'></td>
                                        <td className='table-body'></td>
                                    </tr>
                                ))
                            }
                            {resultado.length > 0 &&
                                resultado.map((fila, i) => (
                                    <tr key={i}>
                                        <td className='table-body'>{fila.n}</td>
                                        <td className='table-body'>{fila.xi}</td>
                                        <td className='table-body'>{fila.xiCuadrado}</td>
                                        <td className='table-body'>{fila.xiMod}</td>
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
