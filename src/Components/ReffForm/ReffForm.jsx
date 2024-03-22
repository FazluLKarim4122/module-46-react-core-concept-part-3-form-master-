import { useEffect, useRef } from "react";


const ReffForm = () => {
    const nameRef = useRef('')
    const passwordRef= useRef(null)
    const emailRef= useRef(null)
    const handleSubmit =e =>{
        e.preventDefault()
        // console.log(nameRef)
        // console.log(nameRef.current)
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }
    // jodi amra cursor set korte chai.shekhetre eta 1ta side effect tai useEffect use korte hobe,then nameRef.current.focus()
    useEffect( () => {
        // jodi amra cursor set korte chai.shekhetre eta 1ta side effect tai useEffect use korte hobe,then nameRef.current.focus()
        nameRef.current.focus()
    } , [])
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input ref={nameRef} type="text" name='name' />
                <br />
                <input ref={emailRef} defaultValue={'asdf@aaa.com'} type="email" name='email' />
                <br />
                <input ref={passwordRef} type="password" name='phone' />
                <br />
                <button>Submit here</button>
            </form>
        </div>
    );
};

export default ReffForm;

/**
 * useRef('')- kokhono input field e cursor er proyojon thake shekhetre const nameRef = useRef('') ref create kore kono field e ref={nameRef} set kore dibo. now console.log(nameRef) korle amra dekhte pabo current namer 1ta object paisi, current er moddhe input ta oi field ke bujhabe. jodi console.log(nameRef.current) dei tahole shorashori input field peye jabo.console.log(nameRef.current.value) dile man tao peye jabo
 */