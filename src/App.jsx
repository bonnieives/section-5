import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForm from './MyForm/MyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Forms for React</h1>
      <MyForm user={{ name:"Bonnie", email:"bonnie@mail.com", bio:"I am a programmer since 2022", role:"admin"}}/>
    </>
  )
}

export default App
