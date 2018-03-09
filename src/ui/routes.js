import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import { App, Home } from './components'
import { Pages, ShowPage, Portfolio } from './containers'

export default () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path='/' component={ App } />
                <Route exact path='/' component={ Portfolio } />
            </div>
        </BrowserRouter>
    )
}