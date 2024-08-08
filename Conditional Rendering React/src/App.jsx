import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const [todos, setTodos] = useState([
    {
      "title": "Complet Online Class",
      "desc": "You have to complete the online class",
    },
    {
      "title": "Water",
      "desc": "You have to drink water",
    },
    {
      "title": "Web Development",
      "desc": "Complete a web development Project",
    },
  ])
  const Todo = ({todo}) => {
    return (
      <>
        <div className="todo">{todo.title}</div>
        <div className="todo">{todo.desc}</div>
      </>
    )
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* Conditional Rendering When we don't want to display anything  */}
      {/* {showbtn && <button>Set Btn True</button>
        } */}
      {showbtn ? <button>Set Btn True</button> : <button>Set Btn False</button>
      }
      {/* Displaying  the list using map */}
       {todos.map(todo=>{
          return <Todo todo={todo} />
        })}
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          count is {count}
        </button>
       
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
