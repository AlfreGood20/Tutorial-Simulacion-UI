
import React from 'react'
import { Link } from 'react-router-dom'

export function ButtomNav(props) {
  return (

     <Link  className={`border-none rounded-lg px-3 py-2 hover:bg-gray-300 ${props.aditional}`} to={`${props.to}`}>
        {props.children}
    </Link>
  )
}