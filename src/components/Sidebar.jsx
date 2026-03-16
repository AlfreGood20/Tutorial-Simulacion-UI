import React from 'react'

export default function Sidebar(props) {
  return (
    <section className='bg-white border border-gray-300 rounded-lg p-2 md:w-250 h-130 overflow-y-auto flex flex-col'>
      <h1 className='text-center font-extrabold'>Contenido</h1>
      
      <div className='flex flex-col items-start'>
        {props.children}
      </div>
    </section>
  )
}