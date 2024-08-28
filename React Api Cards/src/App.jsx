import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import Cards from './components/card'
import './App.css'
import './index.css'

function App() {
  const [data, setdata] = useState([])

  async function Posts() {
    let postsRequest = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    let postsData = await postsRequest.json()
    setdata(postsData)
    console.log(postsData)
  }
  useEffect(() => {
    Posts()
  }, [])

  // Revision

  return (
    <>


      <Navbar color="red" />
      <div className='flex justify-around flex-wrap'>
      {data.map((card) => {
        return (
          <>
            <Cards key={card.body} title={card.title} body={card.body} userid={card.userId} />
          </>
        )
      })}
 </div>
    </>
  )
}

export default App
