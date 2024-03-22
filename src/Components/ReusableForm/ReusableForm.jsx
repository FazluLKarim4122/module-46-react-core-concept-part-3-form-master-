import React from 'react';

const ReusableForm = ({formTitle, handleSubmit, submitBtnText ='Submit', children}) => {
    const handleLocalSubmit = e =>{
        e.preventDefault()
        const data = {
            name : e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data)
    }
    
    return (
        <div>
            <form onSubmit={handleLocalSubmit}>
                {children}
                <h2>{formTitle}</h2>
                <input type="text" name='name' />
                <br />
                <input type="email" name='email' />
                <br />
                <input type="password" name='password' />
                <br />
                <button>{submitBtnText}</button>
            </form>
        </div>
    );
};

export default ReusableForm;
/**
 * Reusable Form Using Props-
 * jokhon call kortesi handleSubmit ke 2tar jonno kintu alada funtion pathaisi app.jsx theke. jokhon form take submit kortesi tokhon shorashori kora jay, but amra locally 1ta function handleLocalSubmit call kore preventDefault korlam,then form theke data {shorashori nite pari, state, refs diye, hook diye nite pari,} niye oi je function call korsilam tar kase pathay dilam {handleSubmit(data)}.
 * Children props-by default react diye dey. she ki kore jokhon component ta declare kortesi (root e) tar pet er vitor mane component er vitor ja declare korbo sheta she pabe
 */