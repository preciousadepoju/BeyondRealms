import { useState } from 'react'
import './App.css'
import BeyondRealmsHome from './pages/BeyondRealmsHome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BeyondRealmsHome/>
    </>
  )
}

export default App
