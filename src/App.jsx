import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StatefulForm from './Components/StatefulForm/StatefulForm'
import ReffForm from './Components/ReffForm/ReffForm'

function App() {
  /* event handler e parameter er bishoy ta ki- je submit event take trigger kortesi.sheta paoar jonno */
  const handleSubmit = (e) => {
    console.log('handle form')
    e.preventDefault() /* form use korle auto reload hoy eta bondho korte preventDefault*/
    console.log(e.target)
    console.log(e.target.name.value)
    console.log(e.target.email.value)
  }


  return (
    <>
      <div>
        <h1>Vite + React</h1>
        {/* Form theke kisu pete hole onSubmit event handler use korte hoy */}
        {/* <form onSubmit={handleSubmit}>

          <input type="text" name='name' />
          <br />
          <input type="text" name='email' />
          <br />
          <input type="text" name='phone' />
          <button>Submit here</button>
        </form> */}
        {/* <StatefulForm></StatefulForm> */}
        <ReffForm></ReffForm>
      </div>

    </>
  )
}

export default App
