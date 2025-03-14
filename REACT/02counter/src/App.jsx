import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const getRandomIncrement = () => {
    return Math.random() < 0.5 ? -1 : 1;  
  }

  return (
    <>
      <div className="count">
        <h1>My Counter, try it</h1>
        <button onClick={() => setCount((count) => count + getRandomIncrement())}>
          count is {count}
        </button>
        <button onClick={() => setCount(count + getRandomIncrement())}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
