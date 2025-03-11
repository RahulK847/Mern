import { useState } from 'react'
import reactLnpmogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards'

function App() {
  const [count, setCount] = useState(0)

  const username = "John Doe"
  const btnText = "View Profile"

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Cards username="Riya" btnText="wonderlust" />
    </>
  )
}

export default App
