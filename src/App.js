import React, { useState } from 'react'
import Routes from './routes'
import Context from './utils/Context'

function App() {
    
    const [stateGlobal, setStateGlobal] = useState(0);

    const incrementStateGlobal = () => {
        setStateGlobal(stateGlobal + 1)
    }

    const decrementStateGlobal = () => {
        setStateGlobal(stateGlobal - 1)
    }

    return (
        <div className='App'>
            <Context.Provider value={{ 
                valueStateGlobal: stateGlobal,
                addStateGlobal: () => incrementStateGlobal(),
                removeStateGlobal: () => decrementStateGlobal()
            }}>
                <Routes />
            </Context.Provider>
        </div>
    )
}

export default App;
