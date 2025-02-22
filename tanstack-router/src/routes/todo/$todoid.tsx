import { createFileRoute } from '@tanstack/react-router'

type PageParams ={
    page: number
}

async function getToDo(id:string): Promise<{title:string}>{
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    console.log(data)
    return data.json();
}

export const Route = createFileRoute('/todo/$todoid')({
  component: ToDoItem,
  loader: ({params}) => getToDo(params.todoid),
  validateSearch: (search: Record<string, unknown>): PageParams => {
    const page = search?.page ? Number(search.page) : 1;
    return {
      page,
    };
  }
})

function ToDoItem() {
    const { todoid } =Route.useParams();
    const { page } = Route.useSearch();
    const data = Route.useLoaderData()
  return <>
  <div>{todoid}</div>
  <div>Page: {page}</div>
  <h1>{data.title}</h1>
  </>
}
