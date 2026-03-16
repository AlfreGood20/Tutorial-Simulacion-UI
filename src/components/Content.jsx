import ReactMarkdown from 'react-markdown'
import 'github-markdown-css/github-markdown-light.css'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex' 
import 'katex/dist/katex.min.css'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'


export default function Content(props) {
  return (
    <section className='markdown-body p-10 bg-white border border-gray-300 rounded-lg overflow-y-auto md:w-1000 md:h-auto shadow-lg'>
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}>
        {props.children}
      </ReactMarkdown>
    </section>
  )
}

export function ContentEmpety(props){
  return(
    <section className='bg-white border p-5 border-gray-300 rounded-lg overflow-y-auto md:w-1000 md:h-130 shadow-lg'>
      <div className='flex flex-col'>
        {props.children}
      </div>
    </section>
  )
}