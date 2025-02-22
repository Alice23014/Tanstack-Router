import { Link, createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/todo/')({
  component: ToDoIndex,
})

function ToDoIndex() {
  return (
    <>
    <div className="p-2">Hello from To Do!</div>
    <Link to="/todo/$todoid" params={{ todoid: "1"}}>Item 1</Link>
    </>
  
)
}