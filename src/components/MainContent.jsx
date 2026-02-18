import React from 'react'

export default function MainContent(props) {
  return (
    <div className="mt-4 ml-4 flex flex-row gap-4 overflow-x-hidden">
        {props.children}
    </div>
  )
}
