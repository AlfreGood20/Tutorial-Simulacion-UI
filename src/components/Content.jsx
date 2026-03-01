import React from 'react'
import ReactMarkdown from 'react-markdown'
import 'github-markdown-css/github-markdown-light.css'
import remarkGfm from 'remark-gfm'

export default function Content(props) {
  return (
    <section className='bg-white border border-gray-300 rounded-lg p-3 overflow-y-auto md:h-135 md:w-260 shadow-md'>

        <div className='markdown-body p-5'>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {props.children}
          </ReactMarkdown>
        </div>
        
    </section>
  )
}

export function ContentEmpety(props){
  return(
    <section className='bg-white border border-gray-300 rounded-lg p-3 overflow-y-auto md:h-135 md:w-260 shadow-md'>
      <div className='flex flex-col'>
        {props.children}
      </div>
    </section>
  )
}