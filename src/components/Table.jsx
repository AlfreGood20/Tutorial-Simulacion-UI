import React from 'react'

export default function Table({head, body}) {
  return (
    <table className='border border-gray-300'>
      <thead>{head}</thead>
      <tbody>{body}</tbody>
    </table>
  )
}
