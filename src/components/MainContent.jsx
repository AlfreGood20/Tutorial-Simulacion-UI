export default function MainContent(props) {
  return (
    <div className="mt-4 p-2 flex flex-row gap-3">
        {props.children}
    </div>
  )
}