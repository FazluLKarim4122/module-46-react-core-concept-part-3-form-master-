import { useState } from "react";


const StatefulForm = () => {
    // const [name, setName]=useState(null)
    // const [name, setName]=useState('')
    const [name, setName]=useState('jk rouling')
    const [email, setEmail]=useState(null)
    const [password,setPassword]=useState(null)
    const [error, setError]=useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if(password.length < 6){
            setError('Password must be six character or longer')
        }
        else{
            setError('')
        }
        console.log(email,password,name) /*jehetu state email er moddhe set kore rakhtesi tai form theke man ta peye jabo.
        jokhon input field kono change hoy sheta call kore event handler k, shekhan theke man ta state e jeye set hoy, now jokhon form ta submit hoy tokhon man gulo amra pete pari.
        */
    }
    const handleNameChange = (e)=>{
        e.preventDefault()
        setName(e.target.value)
    }
    const handleEmailChange = e =>{
        // e.preventDefault()
        // console.log(e.target.value)
        
        setEmail(e.target.value)
    }
    const handlePasswordChange = e=>{
        // e.preventDefault()
        setPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange}
                 type="text" name='name' value={name} />
                 {/* jodi initial kono man boshate chai state er moddhe shekhetre input er majhe value property set kore dite pari-ekhetre browser console e warning dekhabe null hoar jonno .. shejonne default empty string ba kono nam boshate pari*/}
                <br />
                <input onChange={handleEmailChange} //kono 1takisu type korle etate hit korbe
                type="email" name='email' />
                <br />
                <input onChange={handlePasswordChange}
                type="password" name='password' required />
                {/*recquired: password na diye form submit korte dibe na */}
                <br />
                <button>Submit here</button>
                {/* <p>{error}</p> etao kaj korse : amra error take form er niche show korlam */} 
                
                 {
                    error && <p>{error}</p>
                 }
            </form>
        </div>
    );
};

export default StatefulForm;