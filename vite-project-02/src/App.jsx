import { useState } from 'react'
import Card from './Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
   <Card name='abcd'/>
   <Card name='xyza'/>
    </>
  )
}

export default App

