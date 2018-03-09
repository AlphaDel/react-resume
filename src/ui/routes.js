import React from 'react'
import { HashRouter, Switch, Route, BrowserRouter } from 'react-router-dom'
import { App, Home } from './components'
import { Pages, ShowPage, Portfolio } from './containers'

export default () => {
    return (
        <HashRouter>
            <BrowserRouter>
                <div>
                    <Route path='/' component={ App } />
                    <Route path='/' component={ Portfolio } />
                </div>
            </BrowserRouter> 
        </HashRouter>
    )
}