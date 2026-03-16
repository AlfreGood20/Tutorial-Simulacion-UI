export default function MainContent(props) {
  return (
    <div className="mt-1 p-5 flex flex-row gap-3 bg-neutral-200 h-auto">
        {props.children}
    </div>
  )
}