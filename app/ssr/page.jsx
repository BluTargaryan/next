

import Link from "next/link"

export const revalidate = 0

const fetchTodos = async()=>{
const res  = await fetch('https://jsonplaceholder.typicode.com/todos')
const data = await res.json()
return data
}

export default async function SSR() {
const todos = await fetchTodos()

  return (
    <main>
        <h1>Server side Generated</h1>
  

  {todos.map((todo)=>( <p key={todo.id}>{todo.title}</p>) )}
    </main>
  )
}
