import React from 'react'

export default function Content(props) {
  return (
    <section className='bg-white border border-gray-300 rounded-lg p-3 overflow-y-auto md:h-135 md:w-260 shadow-md'>
        {props.children}
    </section>
  )
}