

import Link from "next/link"

const fetchTodos = async()=>{
const res  = await fetch('https://jsonplaceholder.typicode.com/todos')
const data = await res.json()
return data
}

export default async function Static() {
const todos = await fetchTodos()

  return (
    <main>
        <h1>Static Generated</h1>
    
  {todos.map((todo)=>( <p key={todo.id}>{todo.title}</p>) )}
    </main>
  )
}
