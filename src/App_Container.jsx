import React from 'react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const App_Container = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
};

export default App_Container;