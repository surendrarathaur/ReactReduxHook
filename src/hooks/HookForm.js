import React, { useState, useReducer, useContext } from 'react'

const HookForm = () => {
    const [valueChange, setValueChange] = useState('');
    const [valueSubmit, setValueSubmit] = useState('');

    const handleuseStateChange = (e) => {
        setValueChange(e.target.value);
    }

    const handleuseStateSubmit = (e) => {
        e.preventDefault();
        setValueSubmit(e.target.useState.value);
    }

    return (
        <div>
            <h1>Hook Form </h1>
            <form onSubmit={handleuseStateSubmit}>
                <input id='useState' type="text" onChange={handleuseStateChange} />
                <button type="submit">Submit</button>
            </form>
            <div>
                <h1>React useState</h1>
                <p>Change : {valueChange}</p>
                <p>Submit : {valueSubmit}</p>
            </div>
        </div>
    )
}

export default HookForm;