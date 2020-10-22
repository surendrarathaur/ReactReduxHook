import React, { useContext, useEffect, useReducer, useState } from 'react'
import * as Reducer from '../reducers/HookReducer'
import * as ACTION from '../actions/actions'
import Context from '../utils/Context'

function Hook() {
    const [stateValue, setValue] = useState(0);
    const [useEffectValue, setUseEffectValue] = useState(null);
    const [state, dispatch] = useReducer(Reducer.HookReducer, Reducer.initialState);
    const context = useContext(Context);

    useEffect(() => {
        setTimeout(() => setUseEffectValue('Use Effect worked'), 3000)
    }, [stateValue]);

    const incremenValue = () => {
        setValue(stateValue + 1);
    }

    const decrementValue = () => {
        setValue(stateValue - 1);
    }

    const handleDisptachTrue = () => {
        console.log(state.isloader)
        dispatch(ACTION.success())
    }

    const handleDisptachFalse = () => {
        console.log(state.isloader)
        dispatch(ACTION.failure())
    }

    return (
        <div>
            <h1>Hooks</h1>
            {stateValue}
            {useEffectValue}
            <button onClick={() => incremenValue()}>Increment</button>
            <button onClick={() => decrementValue()}>Decrement</button>
            <button onClick={() => handleDisptachTrue()}>Action True</button>
            <button onClick={() => handleDisptachFalse()}>Action False</button>
            {state.isloader ? <p>True</p> : <p>False</p>}
            <button onClick={() => context.addStateGlobal()}>Increment</button>
            <button onClick={() => context.removeStateGlobal()}>Decrement</button>
            <p>Global State: {context.valueStateGlobal}</p>
            <br />
        </div>
    )
}

export default Hook;
