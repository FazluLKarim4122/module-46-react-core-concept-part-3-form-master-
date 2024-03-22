import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StatefulForm from './Components/StatefulForm/StatefulForm'
import ReffForm from './Components/ReffForm/ReffForm'
import HookForm from './Components/HookForm/HookForm'
import ReusableForm from './Components/ReusableForm/ReusableForm'

function App() {
  /* event handler e parameter er bishoy ta ki- je submit event take trigger kortesi.sheta paoar jonno */
  const handleSubmit = (e) => {
    console.log('handle form')
    e.preventDefault() /* form use korle auto reload hoy eta bondho korte preventDefault*/
    console.log(e.target)
    console.log(e.target.name.value)
    console.log(e.target.email.value)
  }
//   const handleSignUP = e =>{
//     e.preventDefault()
// }
  const handleSignUP = data =>{
    console.log('sign up:', data)
}
  // const handleProfileUpdate = e =>{
  //   e.preventDefault()
  // }
  const handleProfileUpdate = data =>{
    console.log('Profile update:', data)
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
        {/* <ReffForm></ReffForm> */}
        {/* <HookForm></HookForm> */}
        <ReusableForm formTitle={'Sign-up'} 
        handleSubmit={handleSignUP} 
        >
          <div>
            <h2>Sign Up</h2>
            <p>Please sign up right now</p>
          </div>
        </ReusableForm>
        <ReusableForm formTitle={'Profile Update'} 
        handleSubmit={handleProfileUpdate} submitBtnText='Update'>
          <div>
            <h2>Update Profile</h2>
            <p>Always keep your profile updated</p>
          </div>
        </ReusableForm>
      </div>

    </>
  )
}

export default App
