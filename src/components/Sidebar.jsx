import React from 'react'

export default function Sidebar(props) {
  return (
    <section className='bg-white border md:h-135 md:w-70 overflow-y-auto border-gray-300 rounded-lg p-3 flex flex-col'>

      <h1 className='text-center font-extrabold'>Contenido</h1>
      
      <div className='flex flex-col items-start'>
        {props.children}
      </div>

    </section>
  )
}