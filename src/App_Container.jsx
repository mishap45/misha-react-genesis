import React from 'react'
import App from './App'
import { HashRouter } from 'react-router-dom'

const App_Container = () => {
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <App />
        </HashRouter>
    )
};

export default App_Container;