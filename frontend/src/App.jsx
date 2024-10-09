import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Button } from 'react-bootstrap'
import {Slider_mascotas} from './Slider_mascotas'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Slider_mascotas/>
    </>
  )
}

export default App
