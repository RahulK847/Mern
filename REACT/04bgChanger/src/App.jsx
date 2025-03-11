import { useState } from 'react'
import './App.css'

function ColorButton({ color, onClick }) {
  return (
    <button
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {color.charAt(0).toUpperCase() + color.slice(1)}
    </button>
  );
}

function App() {
  const [color, setColor] = useState("olive")
  
  const handleColorChange = (newColor) => {
    setColor(newColor)
  };
  
  const colors = ["red", "green", "blue", "yellow", "purple", "orange"];
  
  return (
    <>
      <div className="w-full h-screen duration-200" 
        style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 bg-white shadow-lg px-3 py-2 rounded-full'>
            {colors.map((colorOption, index) => (
              <ColorButton 
                key={index}
                color={colorOption} 
                onClick={() => handleColorChange(colorOption)} 
              />
            ))}
          </div>
        </div>
      </div>      
    </>
  )
}

export default App