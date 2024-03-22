import useInputState from "../../Hooks/useInputState";


const HookForm = () => {
    // const [value, handleChange]= useInputState('jk rouling')
    const [name, handleNameChange]= useInputState('jk rouling')
    // const {email , onChange}= useInputState('dada@didi.com')
    const emailState = useInputState('dada@didi.com')
    const handleSubmit = e =>{
        e.preventDefault()
        // console.log(e.target)
        console.log('form name submit:', name)
        console.log('form email submit:', emailState.value)
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                {/* <input value={name} onChange={handleNameChange} type="text" name='name' />
                <br /> */}
                <input {...emailState} type="text" name='email' />
                <br />
                <input type="text" name='phone' />
                <br />
                <button>Submit here</button>
            </form>
        </div>
    );
};

export default HookForm;