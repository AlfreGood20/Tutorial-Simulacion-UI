import React from 'react'

export function CardHome(props) {
  return (
    <div className="bg-white border border-gray-400 rounded-2xl p-5 shadow-md hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300 w-72 h-80 flex flex-col items-center">
      <h1 className="text-center font-extrabold text-sm">{props.titulo}</h1>

      <div className="w-full h-36 flex items-center justify-center mt-3">
        <img className="w-35 h-35 rounded-lg" src={props.img} alt={props.titulo} />
      </div>

      <p className="text-sm text-center mt-3 overflow-auto max-h-24 w-full">
        {props.contenido}
      </p>
    </div>
  )
}


export default function Card(props) {
  return (
    <div className={`bg-white border p-5 ${props.aditional}`}>
      {props.children}
    </div>
  )
}

