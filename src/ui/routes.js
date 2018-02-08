import React from 'react'
import { Route, Link, BrowserRouter } from 'react-router-dom'
import { App, Home } from './components'

export default () => {
    return (
        <BrowserRouter>
            <div>
                <li><Link to="/">/</Link></li>
                <li><Link to="/home">Home</Link></li>
                <Route exact path="/" component={Home}/>
                <Route path="/home" component={App} />
            </div>
        </BrowserRouter>
    )
}