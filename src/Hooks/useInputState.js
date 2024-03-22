import { useState } from "react"
// create custom hook

const useInputState = (defaultValue ) =>{
    const [value, setValue] = useState(defaultValue)
    // const handleChange = e =>{
    //     setValue(e.target.value)
    // }
    // return [value, handleChange]
    const onChange = e =>{
        setValue(e.target.value)
    }
    return{
        value,
        onChange
    }
    
}

export default useInputState